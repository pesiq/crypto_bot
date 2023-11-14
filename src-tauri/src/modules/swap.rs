
use std::{fs::File, vec, time::{SystemTime, UNIX_EPOCH}};

use tauri;
use web3::{signing::{SecretKey, SecretKeyRef, Key}, types::{H160, H256, U256, TransactionParameters, Bytes}, contract::{Contract, tokens::Tokenize, Options}, transports::Http, ethabi::{Token, Address}};

#[derive(Clone, serde::Deserialize)]
pub struct SwapArgs{
    rpc: String,
    contract: String,
    abi_path: String,
    keys: Vec<String>,
}

#[derive(Clone, serde::Deserialize)]
pub struct SwapSettings{
    eth: bool, // true if from eth
    from_adr: String,
    to_adr: String,
    factory: String,
    amount: String,
}

pub async fn swap(app: tauri::AppHandle, args: SwapArgs, settings: SwapSettings){


    let path = app.path_resolver().resolve_resource(args.abi_path).unwrap();
    let file = File::open(&path).unwrap();
    let abi = web3::ethabi::Contract::load(file).unwrap();

    let transport = web3::transports::Http::new(&args.rpc).unwrap();
    let w3 = web3::Web3::new(transport);

    let contract_adress: H160 = args.contract.parse().unwrap();

    let contract = Contract::new(w3.eth().clone(), contract_adress, abi);

    // let execute: fn(SecretKeyRef, Contract<Http>, SwapSettings,);

    // if settings.eth {
    //     execute = from_eth;
    // } else {
    //     execute = from_token;
    // }

    for key in args.keys {

        let private = SecretKey::from_slice(&hexutil::read_hex(&key).unwrap()).unwrap();
        let kref = SecretKeyRef::from(&private);
        let adr = kref.address();
        //execute(kref, contract.clone(), settings.clone());

        let route = vec![settings.from_adr.clone(), settings.to_adr.clone(), settings.factory.clone()];

        let amount: U256 = U256::from_dec_str("23489273897423").unwrap();

        let tx_params = assemble_swap(
            get_min_amount(contract.clone(), amount, route.clone()), 
            route, 
            adr);

        //let tx_options;

        let swap_gas_amount = contract
        .estimate_gas("swapExactETHForTokens", 
        tx_params.clone(), 
        adr, 
        Options {
            value: Some(U256::exp10(18).checked_div(20.into()).unwrap()),
            gas: Some(500_000.into()),
            ..Default::default()
        }).await.unwrap();

        let tx_data = contract
        .abi()
        .function("swapExactETHForTokens")
        .unwrap()
        .encode_input(
            &tx_params
        ).unwrap();

        let nonce = w3.eth().transaction_count(adr, None).await.unwrap();
        let gas_price = w3.eth().gas_price().await.unwrap();

        let tx_object = TransactionParameters {
            nonce: Some(nonce),
            to: Some(contract_adress),
            value: U256::exp10(18).checked_div(20.into()).unwrap(),
            gas_price: Some(gas_price),
            gas: swap_gas_amount,
            data: Bytes(tx_data),
            ..Default::default()
        };


        let signed_tx = w3
        .accounts()
        .sign_transaction(tx_object, &private)
        .await
        .unwrap();

        let tx_hash = w3.eth().send_raw_transaction(signed_tx.raw_transaction).await.unwrap();

        println!("{}",tx_hash);
        
        //if from tokens then
        //contract.abi().function("approve", contract.address(), )
    }
    
}




fn from_eth(key:SecretKeyRef, contract: Contract<Http>, settings: SwapSettings,){
    // let amount: U256 = U256::from_dec_str("23489273897423").unwrap();
    // let tx_data = contract.clone()
    // .abi()
    // .function("swapExactETHForTokens")
    // .unwrap()
    // .encode_input(
    //     &assemble_swap(
    //         get_min_amount(contract, amount, settings.clone()), 
    //         vec![settings.from_adr, settings.to_adr, settings.factory], 
    //         key.address())
    // ).unwrap();

    //contract.abi().function("approve", contract.address(), )

}

fn from_token(key:SecretKeyRef, contract: Contract<Http>, settings: SwapSettings,){
    
}

fn calculate_amount(){

}

fn get_min_amount(contract: Contract<Http>, amount: U256, route: Vec<String>) -> Vec<u8>{
    let res = contract
    .abi()
    .function("getAmountsOut")
    .unwrap()
    .encode_input(
        &(
            amount, 
            route,
        ).into_tokens()
    )
    .unwrap();

    res
}

fn get_balance(){
    
}

fn deadline(future_millis: u128) -> u128{
    let start = SystemTime::now();
    let since_epoch = start.duration_since(UNIX_EPOCH).unwrap();
    let time_millis = since_epoch.as_millis().checked_add(future_millis).unwrap();
    time_millis
}

fn assemble_tx( ){
    //assemble tx params 

    /* 
    w
    
    */
}

fn assemble_swap(min: Vec<u8>, route: Vec<String>, adr: H160) -> Vec<Token>{
    // assemble tokens to object
    /*
    minamountout: minimal tokens received
    route: adresses of coins 
    adress: recepient of tokens
    deadline: deadline buh (string)
    
    */

    let res = (
        min, 
        route, 
        adr, 
        U256::from_dec_str(&deadline(300000).to_string()).unwrap()
    ).into_tokens();

    res
}
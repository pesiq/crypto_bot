
use std::{fs::File, vec, time::{SystemTime, UNIX_EPOCH}};

use tauri;
use web3::{signing::{SecretKey, SecretKeyRef, Key}, types::{H160, H256, U256}, contract::{Contract, tokens::Tokenize}, transports::Http, ethabi::{Token, Address}};

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
    factory: String
}

pub async fn swap(app: tauri::AppHandle, args: SwapArgs, settings: SwapSettings){


    let path = app.path_resolver().resolve_resource(args.abi_path).unwrap();
    let file = File::open(&path).unwrap();
    let abi = web3::ethabi::Contract::load(file).unwrap();

    let transport = web3::transports::Http::new(&args.rpc).unwrap();
    let w3 = web3::Web3::new(transport);

    let contract_adress: H160 = args.contract.parse().unwrap();

    let contract = Contract::new(w3.eth().clone(), contract_adress, abi);

    let execute: fn(SecretKeyRef, Contract<Http>, SwapSettings,);

    if settings.eth {
        execute = from_eth;
    } else {
        execute = from_token;
    }

    for key in args.keys {

        let private = SecretKey::from_slice(&hexutil::read_hex(&key).unwrap()).unwrap();
        let kref = SecretKeyRef::from(&private);
        execute(kref, contract.clone(), settings.clone());
    }
    
}




fn from_eth(key:SecretKeyRef, contract: Contract<Http>, settings: SwapSettings,){
    let amount: U256 = U256::from_dec_str("23489273897423").unwrap();
    let tx_data = contract.clone()
    .abi()
    .function("swapExactETHForTokens")
    .unwrap()
    .encode_input(
        &assemble_swap(
            get_min_amount(contract, amount, settings.clone()), 
            vec![settings.from_adr, settings.to_adr, settings.factory], 
            key.address())
    ).unwrap();
}

fn from_token(key:SecretKeyRef, contract: Contract<Http>, settings: SwapSettings,){
    
}

fn calculate_amount(){

}

fn get_min_amount(contract: Contract<Http>, amount: U256, settings: SwapSettings) -> Vec<u8>{
    let res = contract
    .abi()
    .function("getAmountsOut")
    .unwrap()
    .encode_input(
        &(
            amount, 
            vec![settings.from_adr, settings.to_adr, settings.factory],
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
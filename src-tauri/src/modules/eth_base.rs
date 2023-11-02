
use std::fs::File;

use tauri;
use serde_json;
use web3::types::{H160, H256};

    /*
    Need to make generic trait fr account to login to acc
    sign and approve tx
     */

    /*
    slippage 
    if high can get less tokens bo % of slippage
    if low transaction can fail
    */

    /* 
        Module struct/traits/types

        Transaction data: struct
        all methods in web3::api::Eth
            chain id = chain_id
            adress
            value
            gas = gas_price
            nonce = transaction_count

        Swap contract
            Contract adress
            Contract ABI
    
    */
    /*  
    Module functions and methods

        GetMinimalAmount
            gets minimal amount for transaction

        Estimate gas
            Estimate gas usage for assembled tx
        

        Swap function should:
            Deternite if swap fron or to ETH
                and act accordingly

            swap to token/eth should:
                create transaction

            sign stransaction

            send transaction

            ack tx finish
            

     */
#[derive(Clone, serde::Serialize)]
struct SwapPayload{
    from: String,
    to: String,
    min: i32,
    max: i32,

}

fn from_ETH(){

}

fn to_ETH(){
    
}


fn swap(){

    
    //check swap coin

    //if from ETH then call ExactETHtoCoin
    //if from coin then call ExactCointoETH

    // get tx from fucntions

    // send transaction

    //await transaction

    //get contract
}


#[tauri::command]
pub fn make_swaps(){

    let file = File::open("D:/Projects/crypto_bot/package/aerodrome_abi.json").unwrap();
    let abi = web3::ethabi::Contract::load(file).unwrap();

    let transport = web3::transports::Http::new("https://eth.llamarpc.com").unwrap();
    let w3 = web3::Web3::new(transport);
    
    let eth = w3.eth();
    //get contract
    let adress: H160 = "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43".parse().unwrap();
    let swap_contract = web3::contract::Contract::new(eth, adress, abi);

    println!("{}", swap_contract.address());
    //foreach account assemble swap and call swap

    //assemble swap
    //swap_contract: struct with contract adress and abi
    /* 
     to assemble transaction you need minimum:
        src
        dest
        amount
        slippage

    */
}
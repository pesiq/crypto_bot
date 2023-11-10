
use std::{fs::File, default, hash::BuildHasherDefault, str::FromStr};

use tauri;
use serde_json;
use web3::{types::{H160, H256}, contract::Contract ,signing::SecretKey, api::Namespace};
use hexutil;

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

fn from_eth(){

}

fn to_eth(){
    
}

struct SwapSettings{
    from: String,
    to: String,
    min_amount: f64,
    max_amount: f64,
    slippage: i32,

}

fn swap(app: tauri::AppHandle, rpc: String, settings: SwapSettings){


    
    //check swap coin

    //if from ETH then call ExactETHtoCoin
    //if from coin then call ExactCointoETH

    // get tx from fucntions

    // send transaction
    //web3::api::Eth::send_transaction(&self, tx)
        /*
        pub struct TransactionRequest {
            pub from: Address,
            pub to: Option<Address>,
            pub gas: Option<U256>,
            pub gas_price: Option<U256>,
            pub value: Option<U256>,
            pub data: Option<Bytes>,
            pub nonce: Option<U256>,
            pub condition: Option<TransactionCondition>,
            pub transaction_type: Option<U64>,
            pub access_list: Option<AccessList>,
            pub max_fee_per_gas: Option<U256>,
            pub max_priority_fee_per_gas: Option<U256>,
        }
        */

    //await transaction

    //get contract
}


#[tauri::command]
pub async fn make_swaps(app: tauri::AppHandle){

    let path = app.path_resolver().resolve_resource("ABI/base/aerodrome/aerodrome_abi.json").expect("failed to resolve resource");
    println!("{}", path.clone().into_os_string().into_string().unwrap());
    let file = File::open(&path).unwrap();
    let abi = web3::ethabi::Contract::load(file).unwrap();


    let transport = web3::transports::Http::new("https://base.llamarpc.com").unwrap();
    let w3 = web3::Web3::new(transport.clone());
    
    let eth = w3.eth();
    //get contract
    let adress: H160 = "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43".parse().unwrap();
    let swap_contract = Contract::new(eth.clone(), adress, abi);

    // let name: Address = swap_contract
    // .query("defaultFactory", (), None, web3::contract::Options::default(), None)
    // .await.unwrap();



    // println!("Router factory >> {}", name);
    //foreach account assemble swap and call swap

    //to sign transaction need to
    //need to sign into account using private key
    //web3 has implementation of account

    /*

    pub struct CallRequest {
        pub from: Option<Address>,
        pub to: Option<Address>,
        pub gas: Option<U256>,
        pub gas_price: Option<U256>,
        pub value: Option<U256>,
        pub data: Option<Bytes>,
        pub transaction_type: Option<U64>,
        pub access_list: Option<AccessList>,
        pub max_fee_per_gas: Option<U256>,
        pub max_priority_fee_per_gas: Option<U256>,
    }


    pub struct TransactionParameters {
        pub nonce: Option<U256>,
        pub to: Option<Address>,
        pub gas: U256,
        pub gas_price: Option<U256>,
        pub value: U256,
        pub data: Bytes,
        pub chain_id: Option<u64>,
        pub transaction_type: Option<U64>,
        pub access_list: Option<AccessList>,
        pub max_fee_per_gas: Option<U256>,
        pub max_priority_fee_per_gas: Option<U256>,
    }

    pub struct SignedTransaction {
        pub message_hash: H256,
        pub v: u64,
        pub r: H256,
        pub s: H256,
        pub raw_transaction: Bytes,
        pub transaction_hash: H256,
    }
     */

    //assemble tx

    let account = web3::api::Accounts::new(transport);

    let tx = web3::types::CallRequest::builder().build();

    let key = SecretKey::from_slice(&hexutil::read_hex("").unwrap()).expect("msg");
    //let key = SecretKeyRef::new(&sk);

    //sign tx
    let signed_tx = account.sign_transaction(web3::types::TransactionParameters::from(tx), &key).await.unwrap();
    
    //send tx
    let txh = eth.send_raw_transaction(signed_tx.raw_transaction).await.unwrap();

    println!("{}", txh);

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

#[tauri::command]
async fn writeContract(app: tauri::AppHandle){

    let path = app.path_resolver().resolve_resource("package/ABI/base/aerodrome/aerodrome_abi.json").expect("failed to resolve resource");
    println!("{}", path.clone().into_os_string().into_string().unwrap());
    let file = File::open(&path).unwrap();
    let abi = web3::ethabi::Contract::load(file).unwrap();


    let transport = web3::transports::Http::new("https://base.llamarpc.com").unwrap();
    let w3 = web3::Web3::new(transport.clone());
    
    let eth = w3.eth();
    //get contract
    let adress: H160 = "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43".parse().unwrap();
    let swap_contract = web3::contract::Contract::new(eth.clone(), adress, abi);

    let fun_result = swap_contract.abi().function("swapExactETHForToken").unwrap();

    //let res = swap_contract.signed_call_with_confirmations("swapExactETHForTokens", "", from, 1).await.unwrap();

}
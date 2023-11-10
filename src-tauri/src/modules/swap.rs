
use std::fs::File;

use tauri;
use web3::{signing::SecretKey, types::{H160, H256}};

pub struct SwapArgs{
    rpc: String,
    contract: String,
    abi_path: String,
    keys: Vec<String>,
}

pub struct SwapSettings{
    from: String,
    to: String,
}

pub async fn swap(app: tauri::AppHandle, args: SwapArgs, settings: SwapSettings){


    let path = app.path_resolver().resolve_resource(args.abi_path).unwrap();
    let file = File::open(&path).unwrap();
    let abi = web3::ethabi::Contract::load(file).unwrap();

    let transport = web3::transports::Http::new(&args.rpc).unwrap();
    let w3 = web3::Web3::new(transport);

    let contract_adress: H160 = args.contract.parse().unwrap();

    let contract = web3::contract::Contract::new(w3.eth().clone(), contract_adress, abi);

    let execute: fn() -> H256;

    if settings.from == "ETH" {
        execute = from_eth;
    } else {
        execute = from_token;
    }

    for key in args.keys {
        let private = SecretKey::from_slice(&hexutil::read_hex(&key).unwrap()).unwrap();

        let tx_hash = execute();
    }
    
}


fn from_eth() -> H256{

}

fn from_token() -> H256{

}

fn calc_amount(){

}

fn get_balance(){
    
}
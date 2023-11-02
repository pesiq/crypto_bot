
use tauri::Manager;
use web3;
use web3::signing::SecretKey;
use web3::types::{H160, U256};

#[tauri::command]
pub async fn check_balance(handle: tauri::AppHandle ,rpc: String, adress: String){
    //println!("Calling balance check accs");

    let transport = web3::transports::Http::new(&rpc).unwrap();
    let web3 = web3::Web3::new(transport);

    //println!("Calling accounts.");
    let mut accounts = web3.eth().accounts().await.unwrap();
    accounts.push(adress.parse().unwrap());
    //println!("Accounts: {:?}", accounts);

    //println!("Calling balance.");
    let mut balance;
    for account in accounts {
        balance = web3.eth().balance(account, None).await.unwrap();
        println!("Balance of {:?}: {}", account, balance);
        emit_balance(handle.clone(), balance, account);
    }
}

#[derive(Clone, serde::Serialize)]
struct Payload {
    account: H160,
    balance: f64
  }

fn emit_balance(app: tauri::AppHandle, wei_bal: U256, acc: H160){
    let res = wei_bal.as_u128() as f64 / 1_000_000_000_000_000_000.0;
    println!("Emitting balance");
    app.emit_all("balance", Payload {
        account: acc,
        balance: res
    }).unwrap();

}



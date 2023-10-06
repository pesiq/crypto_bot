

use web3;

static RPC: &str = "https://eth.llamarpc.com";



#[tauri::command]
pub async fn check_balance(){
    println!("Calling balance check accs");

    let transport = web3::transports::Http::new(RPC).unwrap();
    let web3 = web3::Web3::new(transport);

    println!("Calling accounts.");
    let mut accounts = web3.eth().accounts().await.unwrap();
    println!("Accounts: {:?}", accounts);
    accounts.push("0x80C67432656d59144cEFf962E8fAF8926599bCF8".parse().unwrap());

    println!("Calling balance.");
    let mut balance;
    for account in accounts {
        balance = web3.eth().balance(account, None).await.unwrap();
        println!("Balance of {:?}: {}", account, balance);
    }

}
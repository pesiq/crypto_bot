
use tauri;
use web3::signing::SecretKey;



/*
Struct created for each account used

Functions/methods required:

    Approve
    Sign
    Wait for tx finish
    Get balance

*/


pub struct AccountInfo{
    id: i32,
    private_key: SecretKey,
}

use tauri;
use web3;
use super::account;

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
        get contract
        get pool

        do swap(from, to, min/max amount, )
        
     */
#[derive(Clone, serde::Serialize)]
struct SwapPayload{
    from: String,
    to: String,
    min: i32,
    max: i32,
    
}

#[tauri::command]
fn swap(){



    //get contract
}

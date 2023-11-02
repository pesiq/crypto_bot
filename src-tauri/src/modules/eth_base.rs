
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
    Module functions and methods

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

#[tauri::command]
fn swap(){



    //get contract
}

fn estimate_gas(){
    
}
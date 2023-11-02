
use tauri;

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

    //get contract

    //check swap coin

    //if from ETH then call ExactETHtoCoin
    //if from coin then call ExactCointoETH

    // get tx from fucntions

    // send transaction

    //await transaction

    //get contract
}


#[tauri::command]
fn make_swaps(){

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
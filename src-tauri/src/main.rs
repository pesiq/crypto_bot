// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

//use tauri::{CustomMenuItem, Menu, Submenu};

mod modules;
mod utils;


fn main() {

  tauri::Builder::default()



    .invoke_handler(tauri::generate_handler![ 
      utils::commands::test_api_handle, 
      utils::commands::random_str,
      modules::common::check_balance,
      modules::common::get_gas,
      modules::eth_base::make_swaps,
      modules::common::get_adr,
      ])

    .run(tauri::generate_context!())

    .expect("error while running tauri application");

}

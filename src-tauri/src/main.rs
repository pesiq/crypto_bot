// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

//use tauri::{CustomMenuItem, Menu, Submenu};
mod commands;
mod common;
mod account;
mod eth_base;


fn main() {

  tauri::Builder::default()



    .invoke_handler(tauri::generate_handler![
      commands::goto_main, 
      commands::test_api_handle, 
      commands::random_str,
      commands::open_docs,
      commands::open_link,
      ])

    .run(tauri::generate_context!())

    .expect("error while running tauri application");

}

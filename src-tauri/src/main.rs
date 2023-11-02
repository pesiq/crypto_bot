// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

//use tauri::{CustomMenuItem, Menu, Submenu};

mod modules;
mod utils;


fn main() {

  tauri::Builder::default()



    .invoke_handler(tauri::generate_handler![
      utils::commands::goto_main, 
      utils::commands::test_api_handle, 
      utils::commands::random_str,
      utils::commands::open_docs,
      utils::commands::open_link,
      modules::common::check_balance,
      ])

    .run(tauri::generate_context!())

    .expect("error while running tauri application");

}

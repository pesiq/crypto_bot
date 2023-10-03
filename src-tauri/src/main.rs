// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, Menu, Submenu};
mod commands;


fn main() {

  tauri::Builder::default()

    .menu(Menu::new()
      .add_submenu(Submenu::new(
        "Record",
        Menu::new()
            .add_item(CustomMenuItem::new("set_directory", "Set Directory"))
            .add_item(CustomMenuItem::new("start", "Start")),
    )))

    .invoke_handler(tauri::generate_handler![
      commands::goto_main, 
      commands::test_api_handle, 
      commands::random_str,
      commands::open_docs,
      commands::open_link
      ])

    .run(tauri::generate_context!())

    .expect("error while running tauri application");

}

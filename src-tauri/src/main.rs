// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use rand::{distributions::Alphanumeric, Rng};
use tauri::{CustomMenuItem, Manager, Menu, State, Submenu};


fn main() {

  let menu = Menu::new().add_submenu(Submenu::new(
    "Record",
    Menu::new()
        .add_item(CustomMenuItem::new("set_directory", "Set Directory"))
        .add_item(CustomMenuItem::new("start", "Start")),
));

  tauri::Builder::default()
    .menu(menu)
    .invoke_handler(tauri::generate_handler![goto_main, test_api_handle, random_str])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn random_str(len: usize) -> String{
  let res: String = rand::thread_rng()
  .sample_iter(&Alphanumeric)
  .take(len)
  .map(char::from)
  .collect();

  println!("{}", res);
  format!("{}", res)
  
}


#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
}

#[tauri::command]
async fn test_api_handle(app: tauri::AppHandle){
  println!("Sent emission from rust!");
  app.emit_all("Synced", Payload { message: "I want to kill myself".into() }).unwrap();
}

#[tauri::command]
async fn goto_main(app: tauri::AppHandle){
  println!("Ordered to go to main");
  app.emit_all("order", Payload { message: "kjsjdfhhsfdhjk".into() }).unwrap();
}
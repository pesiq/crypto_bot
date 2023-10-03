// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use rand::{distributions::Alphanumeric, Rng};
use tauri::{CustomMenuItem, Manager, Menu, Submenu};


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
      goto_main, 
      test_api_handle, 
      random_str,
      open_docs,
      open_link
      ])

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

#[tauri::command]
async fn open_docs(handle: tauri::AppHandle) {
  let docs_window = tauri::WindowBuilder::new(
    &handle,
    "external", /* the unique window label */
    tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
  ).build().unwrap();
}

#[tauri::command]
async fn open_link(app: tauri::AppHandle, link: String) {
  let window = tauri::WindowBuilder::new(
    &app,
    "Link view",
    tauri::WindowUrl::External(link.parse().unwrap())
  ).build().unwrap();
}

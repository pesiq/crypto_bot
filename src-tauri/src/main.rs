// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use rand::{distributions::Alphanumeric, Rng};


fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, random_str])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}!", name)
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
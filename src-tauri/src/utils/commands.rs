
use rand::{distributions::Alphanumeric, Rng};
use tauri::*;



#[tauri::command]
pub async fn test_api_handle(app: tauri::AppHandle){
  println!("Sent emission from rust!");
  app.emit_all("Synced", Payload { message: "I want to kill myself".into() }).unwrap();
}

#[tauri::command]
pub async fn goto_main(app: tauri::AppHandle){
  println!("Ordered to go to main");
  app.emit_all("order", Payload { message: "kjsjdfhhsfdhjk".into() }).unwrap();
}

#[tauri::command]
pub async fn open_docs(handle: tauri::AppHandle) {
  let docs_window = tauri::WindowBuilder::new(
    &handle,
    "external", /* the unique window label */
    tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
  ).build().unwrap();
}

#[tauri::command]
pub async fn open_link(app: tauri::AppHandle, link: String) {
  let window = tauri::WindowBuilder::new(
    &app,
    "Link view",
    tauri::WindowUrl::External(link.parse().unwrap())
  ).build().unwrap();
}


#[tauri::command]
pub fn random_str(len: usize) -> String{
  let res: String = rand::thread_rng()
  .sample_iter(&Alphanumeric)
  .take(len)
  .map(char::from)
  .collect();

  println!("{}", res);
  format!("{}", res)
  
}


#[derive(Clone, serde::Serialize)]
pub struct Payload {
  message: String,
}


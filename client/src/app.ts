import createRoom from "./createRoom";
import Video from "./videoGUI";

window.addEventListener("DOMContentLoaded", () => {
  // create new room stufff
  let room = new createRoom("renderCanvas");
  room;

  let videogui = new Video("renderCanvas");
  videogui;

  // Create the game using the 'renderCanvas'.
  // let menu = new Menu("renderCanvas");
  // Create the scene.
  // menu.createMenu();
});

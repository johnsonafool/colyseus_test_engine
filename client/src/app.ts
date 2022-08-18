import createRoom from "./createRoom";
import Menu from "./menu";

window.addEventListener("DOMContentLoaded", () => {
  // create new room stufff
  let room = new createRoom("renderCanvas");
  room;

  // Create the game using the 'renderCanvas'.
  let menu = new Menu("renderCanvas");
  // Create the scene.
  menu.createMenu();
});

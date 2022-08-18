import videoGui from "./video_Gui";

window.addEventListener("DOMContentLoaded", () => {
  // Create the game using the 'renderCanvas'.
  let menu = new videoGui("renderCanvas");
  // Create the scene.
  menu.createScene();
});

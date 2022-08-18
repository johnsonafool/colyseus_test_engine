// this will be the logic path for create new roms route

import * as BABYLON from "babylonjs";
import * as GUI from "babylonjs-gui";
import { Client } from "colyseus.js";

const ROOM_NAME = "my_room";
const ENDPOINT = "ws://localhost:2567";

export default class createRoom {
  private _canvas: HTMLCanvasElement;
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;
  private _camera: BABYLON.ArcRotateCamera;
  private _advancedTexture: GUI.AdvancedDynamicTexture;

  private _colyseus: Client = new Client(ENDPOINT);

  private _errorMessage: GUI.TextBlock = new GUI.TextBlock("errorText");

  constructor(canvasElement: string) {
    // Create canvas and engine.
    this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
    this._engine = new BABYLON.Engine(this._canvas, true);

    console.log("hi");

    console.log("hi2");
  }
}

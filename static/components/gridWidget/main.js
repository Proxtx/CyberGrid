import { ready } from "/modules/uibuilder/main.js";

let document;
let globalDom;
let component;
let gridElem;
let nameElem;

export const handler = async (options) => {
  document = options.shadowDom;
  globalDom = document;
  component = options.component;
  gridElem = document.getElementById("grid");
  await ready(gridElem);
  nameElem = document.getElementById("name");
};

export const applyGrid = (grid, name, id) => {
  nameElem.innerText = name;
  gridElem.component.displayGrid(grid);
};


// Dropdonw Elements:

const userIdDropdonw = document.getElementById("user-dropdonw");
const userSelected = document.getElementById("user-select");


//Form Elements

const bookmarkForm = document.getElementById("bookmark-form");
const titleInput = document.getElementById("title-input");
const urlInput = document.getElementsById("url-input");
const descriptionInput = document.getElementById("description-input");

// Display Area

const bookmarksList = document.getElementById("bookmarks-list"); 



import { getUserIds } from "./storage.js";

window.onload = function () {
   const users = getUserIds();
};

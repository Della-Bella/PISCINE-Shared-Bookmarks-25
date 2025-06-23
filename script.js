import { getUserIds } from "./storage.js";

// Dropdonw Elements:
const userSelected = document.getElementById("user-select");

//Form Elements
const bookmarkForm = document.getElementById("bookmark-form");
const titleInput = document.getElementById("title-input");
const urlInput = document.getElementById("url-input");
const descriptionInput = document.getElementById("description-input");

// Display Area
const bookmarksList = document.getElementById("bookmarks-list");

   // --- Function Populate Dropdonw ---
   function populateUserDropdown() {
      // 1. Get user IDs from storage
      const userIds = getUserIds();

      // 2. Loop through each userId in the array
      userIds.forEach((userId) => {
         // 3. Create a new <option> element
         const option = document.createElement("option");// create otios names users

         // 4. Set value and text
         option.value = userId;// find user
         option.textContent = userId;// names

         // 5. Append the new option to the <select> dropdown
         userSelected.appendChild(option);
         console.log ("dropdonw-working")
      });
   }
      
// Call the function to run the code when the page loads
populateUserDropdown();

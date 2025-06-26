import { populateUserDropdown } from "./modules/dropdown.js";
import { setupEventListeners } from "./modules/listeners.js";
import { renderBookmarks } from "./modules/bookmarks.js";
import { getUserIds, getData } from "./modules/storage.js";

function initializeApp() {
   console.log("Application has been initialized.");

   populateUserDropdown();
   setupEventListeners();

   
   const allUserIds = getUserIds();
   if (allUserIds && allUserIds.length > 0) {
      const initialUserId = allUserIds[0];
      const initialBookmarks = getData(initialUserId);

      renderBookmarks(initialBookmarks); 

      console.log("App ready. Displaying bookmarks for:", initialUserId);
   } else {
      console.log("No users found in storage.");
   }
}

// Run the initialization function when the script loads
initializeApp();

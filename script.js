import { populateUserDropdown } from "./modules/dropdown.js";
import { setupEventListeners } from "./modules/listeners.js";
import { renderBookmarks } from "./modules/bookmarks.js";
import { getUserIds, getData } from "./modules/storage.js";

function initializeApp() {
   console.log("Application has been initialized.");

   // 1. Fill the dropdown menu with users.
   populateUserDropdown();

   // 2. Set up all event listeners for user interaction (like clicks and changes).
   setupEventListeners();

   // 3. Get the list of all users so we can safely select the first one.
   const allUserIds = getUserIds();

   // 4. Check if there are any users at all to prevent errors.
   if (allUserIds && allUserIds.length > 0) {
      // 5. Get the ID of the very first user in the array.
      const initialUserId = allUserIds[0];
      console.log("App ready. Displaying bookmarks for:", initialUserId);

      // 6. Fetch the bookmarks for that initial user.
      const initialBookmarks = getData(initialUserId);

      // 7. Render their bookmarks to the page. (This will show a message if they have none).
      renderBookmarks(initialBookmarks);
   } else {
      console.log("No users found in storage.");
   }
}


// Run the initialization function when the script loads
initializeApp();

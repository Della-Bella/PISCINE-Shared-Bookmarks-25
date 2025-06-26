//Issue #3 Handle User Selection Change/ Event Listeners/  function call.

import {
   userSelected,
   bookmarkForm,
   titleInput,
   urlInput,
   descriptionInput,
} from "./dom.js";
import { getData, setData } from "./storage.js";
import { renderBookmarks } from "./bookmarks.js";
 

export function setupEventListeners() {
   // LISTENER 1: For the Dropdown
   userSelected.addEventListener("change", (event) => {
      const selectedUserId = event.target.value; // gte the user iD

      console.log("--- User Changed ---");
      console.log("5=New user selected:", selectedUserId);

      const bookmarks = getData(selectedUserId); // get the usser data
      console.log("6=Fetched new bookmarks:", bookmarks);
      renderBookmarks(bookmarks); // render data brenderBookmamrk Function
   });

   
   // LISTENER 2: For the Form Submission
   //read the .values= store them in constants.
   bookmarkForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const currentUserId = userSelected.value;
      const title = titleInput.value;
      const url = urlInput.value;
      const description = descriptionInput.value;

      //CREATE THE BOOKMARK OBJECT
      const newBookmark = {
         title: title,
         url: url,
         description: description,
         createdAt: new Date().toISOString(),
      };

      //check
      console.log("Created new bookmark object:", newBookmark);

      // Check
      console.log("Form submitted for user:", currentUserId);
      console.log("Title entered:", title);
      console.log("URL entered:", url);
      console.log("Description entered:", description);

      //  3= Get old Bookmarks and + The new. Get existent, add news, set data, re-fetch
      const existingBookmarks = getData(currentUserId) || [];
      const updatedBookmarks = [...existingBookmarks, newBookmark];
      setData(currentUserId, updatedBookmarks);
      const bookmarksFromStorage = getData(currentUserId);

      //5= RENDER ALL 
      renderBookmarks(bookmarksFromStorage);

      // Clear the form fields 
      bookmarkForm.reset();

      //check
      console.log("Saved updated bookmarks for user:", currentUserId);
      console.log("New list contains", updatedBookmarks.length, "bookmarks.");
   });
} 

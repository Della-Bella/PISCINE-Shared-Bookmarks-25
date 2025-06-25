//    Issue #3 Handle User Selection Change/ Event Listeners/  function call.

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
      console.log("5. New user selected:", selectedUserId);

      const bookmarks = getData(selectedUserId); // get the usser data
      console.log("6. Fetched new bookmarks:", bookmarks);
      renderBookmarks(bookmarks); // render data brenderBookmamrk Function
   });

   
   // Start submit ____LISTENER 2: For the Form Submission
   // Start submit
   //1= First thing is to get all the information we need for submit the firm
   //Inside the submit event listener, we will read the .value property of each
   //  of these elements and store them in constants.
   bookmarkForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const currentUserId = userSelected.value;
      const title = titleInput.value;
      const url = urlInput.value;
      const description = descriptionInput.value;

      //2= CREATE THE BOOKMARK OBJECT 
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


   //  3= Get old Bookmarks and + The new

  // 1= Get the user's existing bookmarks from storage
  const existingBookmarks = getData(currentUserId) || [];// get data form user or give me an empty array [] prevents code from crashing


  // 2= Add our new bookmark to the array with the old bookmarks
  const updatedBookmarks = [...existingBookmarks, newBookmark];

  // 4= SAVE and update bookmarks ---
  setData(currentUserId, updatedBookmarks);

  //check
  console.log('Saved updated bookmarks for user:', currentUserId);
  console.log('New list contains', updatedBookmarks.length, 'bookmarks.');
});
} 

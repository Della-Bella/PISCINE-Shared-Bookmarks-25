//    Issue #3 Handle User Selection Change/ Event Listeners/  function call.

import { userSelected } from "./dom.js";
import { getData } from "./storage.js";
import { renderBookmarks } from "./bookmarks.js";

export function setupEventListeners() {
   userSelected.addEventListener("change", (event) => {
      const selectedUserId = event.target.value; // gte the user iD

      console.log("--- User Changed ---");
      console.log("5. New user selected:", selectedUserId);

      const bookmarks = getData(selectedUserId); // get the usser data
      console.log("6. Fetched new bookmarks:", bookmarks); 
      renderBookmarks(bookmarks); // render data brenderBookmamrk Function
   });
}

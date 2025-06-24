import { bookmarksList } from "./dom.js";

//Display List of Bookmarks

export function renderBookmarks(bookmarks) {
   bookmarksList.innerHTML = ""; //1- Clear user bookmarks

   // First, check if the bookmarks variable is null or an empty array.
   if (!bookmarks || bookmarks.length === 0) {
      // If there are no bookmarks, display a message.
      bookmarksList.textContent = "This user has no bookmarks yet.";
      return; // Exit the function
   }

   //2= Loop through each bookmark in the array.
   bookmarks.forEach((bookmark) => {
      const listItem = document.createElement("li"); // 1- create a new li

      const title = document.createElement("h3"); // 4. Create title and description.
      title.textContent = bookmark.title;

      const description = document.createElement("p"); // 2- create a new Description
      description.textContent = bookmark.description;

      listItem.appendChild(title); // 3- add to Title $ Description the li
      listItem.appendChild(description);

      bookmarksList.appendChild(listItem); // 4. Add the completed list item to the main bookmarks list (<ul>).
   });
}

import { bookmarksList } from "./dom.js";



//Display List of Bookmarks
// Clear old users, 2- Check if any bookmarks, 3-appen- 4- Exit
export function renderBookmarks(bookmarks) {

   bookmarksList.innerHTML = "";

   if (!bookmarks || bookmarks.length === 0) {
      const messageItem = document.createElement("li");
      messageItem.className = "no-bookmarks-message";
      messageItem.textContent = "This user has no bookmarks yet.";
      bookmarksList.appendChild(messageItem);
      return;
   }

   // 3= Sort the Bookmarks Array (Issue #6)
   //Loop, Create new list (title, Description, link and timestamp)= Append
   bookmarks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

   bookmarks.forEach((bookmark) => {
      const listItem = document.createElement("li");

      const titleLink = document.createElement("a");
      titleLink.href = bookmark.url;
      titleLink.textContent = bookmark.title;
      titleLink.target = "_blank";

      const description = document.createElement("p");
      description.textContent = bookmark.description;

      const timestamp = document.createElement("small"); //semantic HTML
      const date = new Date(bookmark.createdAt);
      timestamp.textContent = `Created on: ${date.toLocaleString()}`;

      listItem.appendChild(titleLink);
      listItem.appendChild(description);
      listItem.appendChild(timestamp);

      bookmarksList.appendChild(listItem);
   });
} 
import { bookmarksList } from "./dom.js";

//Display List of Bookmarks
export function renderBookmarks(bookmarks) {
  
   bookmarksList.innerHTML = ""; // 1= Clear any old user bookmarks from the list

   // 2=Check if there are any bookmarks to display.
   if (!bookmarks || bookmarks.length === 0) {
      const messageItem = document.createElement("li"); // Create a single list item to hold the message
      messageItem.className = "no-bookmarks-message";
      messageItem.textContent = "This user has no bookmarks yet.";
      // Append this single <li> to the <ul>.
      bookmarksList.appendChild(messageItem);
      return; // Exit if no
   }

   // 3= Sort the bookmarks array from newest to oldest (Issue #6)
   bookmarks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

   // 4= Loop through each bookmark in the NOW-SORTED array.
   bookmarks.forEach((bookmark) => {
    
      // A= Create the list item container
      const listItem = document.createElement("li");

      // B= Create the title as a clickable link (<a> tag) (Issue #7)
      const titleLink = document.createElement("a");
      titleLink.href = bookmark.url;
      titleLink.textContent = bookmark.title;
      titleLink.target = "_blank"; // Opens in new tab

      // C= Create the description
      const description = document.createElement("p");
      description.textContent = bookmark.description;

      // D= Create the timestamp (Issue #7)
      const timestamp = document.createElement("small");
      const date = new Date(bookmark.createdAt); // This uses the 'bookmark' from the loop
      timestamp.textContent = `Created on: ${date.toLocaleString()}`;

      // E. Append everything to the list item
      listItem.appendChild(titleLink);
      listItem.appendChild(description);
      listItem.appendChild(timestamp);

      // F. Append the finished list item to the main list (<ul>)
      bookmarksList.appendChild(listItem);
   });
} 
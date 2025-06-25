

import { renderBookmarks } from "./bookmarks.js";


let bookmarksList;// Declare variable used in the test

// Mock the dom.js module instead of loading the real dom.js wich would fial
jest.mock("./dom.js", () => ({
   bookmarksList: null, // will be reassigned in beforeEach
}));

// the code willl run before ever single block
beforeEach(() => {

   bookmarksList = document.createElement("ul");
   const dom = require("./dom.js");
   dom.bookmarksList = bookmarksList;
});

describe("renderBookmarks", () => {
   it("shows a message when no bookmarks are present", () => {
      renderBookmarks([]);
      expect(bookmarksList.textContent).toBe("This user has no bookmarks yet.");
   });

   it("shows a message when bookmarks is null", () => {
      renderBookmarks(null);
      expect(bookmarksList.textContent).toBe("This user has no bookmarks yet.");
   });

   it("renders bookmarks from newest to oldest", () => {
      const bookmarks = [
         {
            title: "Old",
            url: "https://old.com",
            description: "Older site",
            createdAt: "2023-01-01T00:00:00.000Z",
         },
         {
            title: "New",
            url: "https://new.com",
            description: "Newer site",
            createdAt: "2025-01-01T00:00:00.000Z",
         },
      ];

      renderBookmarks(bookmarks);

      const items = bookmarksList.querySelectorAll("li");
      expect(items.length).toBe(2);
      expect(items[0].querySelector("a").textContent).toBe("New");
   });

   it("renders title, link, description, and timestamp", () => {
      const bookmarks = [
         {
            title: "Google",
            url: "https://google.com",
            description: "Search engine",
            createdAt: "2025-06-25T10:00:00.000Z",
         },
      ];

      renderBookmarks(bookmarks);

      const item = bookmarksList.querySelector("li");
      expect(item).not.toBeNull();

      const link = item.querySelector("a");
      expect(link.href).toBe("https://google.com/");
      expect(link.textContent).toBe("Google");
      expect(link.target).toBe("_blank");

      const desc = item.querySelector("p");
      expect(desc.textContent).toBe("Search engine");

      const timestamp = item.querySelector("small");
      expect(timestamp.textContent).toMatch(/Created on:/);
   });
});

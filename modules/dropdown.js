// --- Function Populate Dropdonw ---
import { userSelected } from "./dom.js";
import { getUserIds } from "./storage.js";

export function populateUserDropdown() {
   // 1. Get user IDs from storage
   const userIds = getUserIds();
   console.log("1. Fetched User IDs:", userIds);

   // 2. Loop through each userId in the array
   userIds.forEach((userId) => {
      const option = document.createElement("option");
      option.value = userId;
      option.textContent = userId;
      userSelected.appendChild(option);
      console.log("dropdonw-working");
   });
}

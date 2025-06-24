// --- Function Populate Dropdonw ---
import { userSelected } from "./dom.js";
import { getUserIds } from "./storage.js";

export function populateUserDropdown() {
   // 1. Get user IDs from storage
   const userIds = getUserIds();
   console.log("1. Fetched User IDs:", userIds);

   // 2. Loop through each userId in the array
   userIds.forEach((userId) => {
      // 3. Create a new <option> element
      const option = document.createElement("option"); // create otios names users

      // 4. Set value and text
      option.value = userId; // find user
      option.textContent = userId; // names

      // 5. Append the new option to the <select> dropdown
      userSelected.appendChild(option);
      console.log("dropdonw-working");
   });
}



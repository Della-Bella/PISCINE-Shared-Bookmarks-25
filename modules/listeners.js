//    Issue #3 Handle User Selection Change/ Event Listeners/  function call.


import { userSelected } from './dom.js';

function setupEventListeners() {
   userSelected.addEventListener("change", (event) => {
      const selectedUserId = event.target.value;
      console.log("User changed to:", selectedUserId);
     
   });


}

export { setupEventListeners };

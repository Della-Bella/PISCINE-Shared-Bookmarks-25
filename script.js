
import { populateUserDropdown } from "./modules/dropdown.js";
import { setupEventListeners } from "./modules/listeners.js";



function initializeApp() {
   // Call the functions to start the application
   populateUserDropdown();
   setupEventListeners();
   console.log("Application has been initialized.");
}

// Run the initialization function
initializeApp();


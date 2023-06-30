
// utils/auth.js
export function isAuthenticated() {
    // Check if the user ID exists in localStorage or any other authentication logic
    const userId = localStorage.getItem("userId");
    return !!userId; // Return true if the user ID exists, false otherwise
  }

// // utils/auth.js

// export function isOwnerAuthenticated() {
//     // Check if the user ID exists in localStorage or any other authentication logic for owner
//     const userId = localStorage.getItem("userId");
//     const userType = localStorage.getItem("userType");
//     return !!userId && userType === "owner"; // Return true if the user ID exists and user type is "owner", false otherwise
//   }
  
//   export function isUserAuthenticated() {
//     // Check if the user ID exists in localStorage or any other authentication logic for user
//     const userId = localStorage.getItem("userId");
//     const userType = localStorage.getItem("userType");
//     return !!userId && userType === "user"; // Return true if the user ID exists and user type is "user", false otherwise
//   }
  
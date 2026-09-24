const settings = {
  darkMode: false,
  fontSize: 0,
  language: null
};

// Object.hasOwn() correctly sees these properties exist
console.log(Object.hasOwn(settings, "darkMode")); // true (value is false, but exists)
console.log(Object.hasOwn(settings, "fontSize")); // true (value is 0, but exists)
console.log(Object.hasOwn(settings, "theme"));    // false (property was never added)

// Using if() directly is unsafe for falsy values!
if (settings.darkMode) {
  console.log("Dark mode on"); // Does NOT print — misleading!
}

// Object.hasOwn() is the safe way
if (Object.hasOwn(settings, "darkMode")) {
  console.log("darkMode exists, value is:", settings.darkMode); // darkMode exists, value is: false
}
/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var myObj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

function findPath(myObj, str) {
  if (!str || typeof str !== "string") {
    // check if it is valid string
    return "Not a valid string";
  }
  if (myObj.constructor.name !== "Object" || !myObj) {
    // check if it is valid object
    return "Not a valid Object";
  }

  const strArray = str.split("."); // split the input string to an array
  let objMap = JSON.parse(JSON.stringify(myObj)); // create new object

  for (let item of strArray) {
    // loop through keys of array
    if (!objMap || objMap.constructor.name !== "Object") {
      // check if the key is present in the object
      return; // return if it is not present
    }
    objMap = objMap[item]; //put subnodes to the object
  }
  return objMap;
}

console.log(findPath(myObj, "a.b")); // {c: 12, j: false}
console.log(findPath(myObj, "a.b.c")); // 12
console.log(findPath(myObj, "a.b.d")); // undefined
console.log(findPath(myObj, "a.c")); // undefined
console.log(findPath(myObj, "a.b.c.d")); // undefined
console.log(findPath(myObj, "a.b.c.d.e")); // undefined
console.log(findPath(myObj, "a.b.j")); //false
console.log(findPath(myObj, "a.b.j.k")); //undefined
console.log(findPath(myObj, "a.k")); //null

// access to object keys
const obj1 = {
  name: "test",
  lastName: "test",
};

for (const keys in obj1) {
  console.log(keys); // return keys
  console.log(keys, ": ", obj1[keys]);
}

//assign other objects to target object
const user = {
  id: 1,
  name: "mahdiyar",
};

const address = {
  province: "Khorasan Razavi",
};

const security = {
  password: "********",
};

Object.assign(user, { province: address }, security);
console.log("🚀 ~ user:", user);

//create array of keys from object
const keys = Object.keys(user);

//create array of values from object
const values = Object.values(user);

//remove property from object
delete user.id;

//freeze object to prevent change properties or add to them
Object.freeze(user);
user.role = "admin";
console.log("🚀 ~ user:", user);

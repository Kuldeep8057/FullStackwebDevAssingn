const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
  }
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("Kuldeep", 25);
addUser("Atul", 25);
console.log(userMap);

updateUser("kuldeep", 31);
console.log(userMap);

deleteUser("Atul");
console.log(userMap);

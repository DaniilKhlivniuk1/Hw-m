
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
console.log(friends.join(", "));
for (let friend of friends) {
  string = string + friend;

  if (friend !== "Ajax") {
    string += ", ";
  }
}
console.log(string);


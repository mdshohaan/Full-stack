let names = ["ARif", "abdullah", "Akillah", "Balad"];
let index = -1;

setInterval(() => {
  let name = names[++index];
  // console.log(name, name.length);
}, 1000);

//for loop(when we know the range)
//while loop(when we dont know the range)

while (true) {
  let num = Math.ceil(Math.random() * 100);
  // console.log(num);
  if (num == 99) break;
}

// Dynamic object
let students = [
  (students1 = {
    name: "Arif",
    age: 24,
  }),
  (students2 = {
    name: "Alif",
    age: 241,
  }),
  (students3 = {
    name: "Akif",
    age: 240,
  }),
];
function sendEmail(email) {
  console.log("Sending Age to", email);
}
for (let i = 0; i < students.length; i++) {
  sendEmail(students[i].age);
}


var figlet = require("figlet");

figlet("Hamad Ullah Is entering to the field!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

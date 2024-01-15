const user: string = "Jeki";
if (user === "Jeki") {
  const userArr: String[] = [];
  for (let x = 0; x < user.length; x++) {
    userArr.push(user[x]);
  }
  console.log(userArr);
} else {
  console.log("Unknown user");
}

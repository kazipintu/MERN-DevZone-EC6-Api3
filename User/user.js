//console.log('connected');
const loadUser = () => {
  fetch("https://randomuser.me/api/?results=50")
  .then(response => response.json())
  .then(data => displayUser(data.results))
}

loadUser()

const displayUser = (users) => {
//console.log(users);
const DIV = document.createElement('div');
for (const user of users) {
  //console.log(user);
  DIV = `
  
  
  `
}


}
//console.log('connected');
const loadUser = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then(response => response.json())
    .then(data => displayUser(data.results))
}

loadUser()

const displayUser = (users) => {
  //console.log(users);
  const divAllUsers = document.getElementById('users')
  for (const user of users) {
    const divSingleUser = document.createElement('div');
    divSingleUser.classList.add('user')
    //console.log(user);
    divSingleUser.innerHTML = `
      <img src="${user.picture.large}" alt="user"><br> 
      <h2>Name: ${user.name.first} ${user.name.last}</h2>
      <h3>Email: ${user.email}</h3>
      <h3>Contact: ${user.phone}</h3>
      <h4>City: ${user.location.city}, Country: ${user.location.country}</h4>
      <button>Click Here</button>
  `
    //console.log(divSingleUser);
    divAllUsers.appendChild(divSingleUser)

  }


}
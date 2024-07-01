//console.log('connected');
const loadApi = () => {
  fetch("https://api.kanye.rest")
    .then(response => response.json())
    .then(data => displayApi(data))
}
loadApi()

const displayApi = (quotesKeniye) =>{
//console.log(quotesKeniye);
const UL = document.getElementById('ul');
UL.innerText = quotesKeniye.quote
}
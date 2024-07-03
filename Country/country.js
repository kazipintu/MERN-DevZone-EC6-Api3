//console.log('connected');
const loadAllCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => displayAllCountries(data))
}

loadAllCountries()

const displayAllCountries = (countries) => {
  //console.log(countries);
  const divAllCountries = document.getElementById('all-countries')
  countries.forEach(country => {
    //console.log(country);
    const divSingleCountry = document.createElement('div')
    divSingleCountry.classList.add('country')
    divSingleCountry.innerHTML = ` 
  <img src="${country.flags.png}" alt="" srcset="">
  <h3>${country.name.official}</h3>
  <h3>Capital: ${country.capital} </h3>
  <h3>Continent: ${country.region} </h3>
  <p>Independence Status: ${country.independent} </p>
  <p>UN Memebership Status: ${country.unMember}</p>
  <button onclick="loadCountryDetails('${country.name.official}')">Show Details</button>
    `
    divAllCountries.appendChild(divSingleCountry)
  });
}

const loadCountryDetails = (countryName) => {
  //console.log(countryName);
  const url = `https://restcountries.com/v3.1/name/${countryName}`
  //console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => displayCountryDetails(data[0]))
}

loadCountryDetails()

const displayCountryDetails = (details) => {
  //console.log(details);
  const divCountryDetails = document.getElementById('country-details')
  divCountryDetails.innerHTML = `
  <img src="${details.flags.png}" alt="" srcset="">
  <h3>${details.name.common}</h3>
  <h3>Capital: ${details.capital} </h3>
  <h3>Continent: ${details.region} </h3>
  <p>Independence Status: ${details.independent} </p>
  <p>UN Memebership Status: ${details.unMember}</p>

`
}
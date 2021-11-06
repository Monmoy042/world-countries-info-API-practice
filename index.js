const url = 'https://restcountries.com/v2/all';

fetch(url)
	.then((res) => res.json())
	.then((data) => displayCountries(data));

function displayCountries(countries) {
	// console.log(countries);
	const div = document.getElementById('countries');
	// for (let i = 0; i < countries.length; i++) {
	// 	const country = countries[i];

	// 	const countryDiv = document.createElement('div');
	// 	// const countryName = document.createElement('h3');
	// 	// const countryCapital = document.createElement('p');
	// 	// countryName.innerText = country.name;
	// 	// countryCapital.innerText = country.capital;
	// 	// countryDiv.appendChild(countryName);
	// 	// countryDiv.appendChild(countryCapital);
	// 	// div.appendChild(countryDiv);

	// 	countryDiv.className = 'country';
	// 	const countryInfo = `
	//         <h3 class="country-name">${country.name}</h3>
	//         <p class="capital-name">${country.capital}</p>
	//     `;
	// 	countryDiv.innerHTML = countryInfo;

	// 	// countryDiv.innerText = country.name;
	// 	div.appendChild(countryDiv);
	// 	// console.log(country.name);
	// }

	// Using forEach
	countries.forEach((country) => {
		const countryDiv = document.createElement('div');
		countryDiv.className = 'country';
		const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="capital-name">${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name}')" >Show Details</button>
        `;
		countryDiv.innerHTML = countryInfo;
		div.appendChild(countryDiv);
	});
}

const displayCountryDetail = (name) => {
	const url2 = `https://restcountries.com/v2/name/${name}`;
	fetch(url2)
		.then((res) => res.json())
		.then((data) => renderCountryInfo(data[0]));
};

const renderCountryInfo = (country) => {
	const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>${country.population}</p>
        <p>${country.area}</p>
        <img src="${country.flag}" />
    `
};

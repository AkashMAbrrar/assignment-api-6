// get search value 
const searchPhone = () => {
    const searchField = document.getElementById('search-result');
    const searchText = searchField.value;
    searchField.value = '';
    // get url data 
    const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))

}
searchPhone();
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-phone');
    // searchResult.innerHTML = '';
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img class="w-60" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">BRAND:${phone.brand}</h5>
                <p class="card-text">NAME:${phone.phone_name}</p>
                <button class="btn btn-info">SEE MORE</button>
            </div>
         </div>
             
           `;
        searchResult.appendChild(div);
    })

}
let btn = document.querySelector(".btn");
let para = document.querySelector(".para");
let author = document.querySelector(".author");

const params = {
    method: 'GET',
    headers: {
        'accept': 'application/json'
    }
};

btn.addEventListener("click",() => {
    let random = Math.floor(Math.random() * 1500);
    fetch('https://type.fit/api/quotes', params)
.then(response => response.json())
.then(json => {para.innerHTML = json[random].text;
    author.innerHTML = json[random].author}

 )
.catch(e => console.error(e));


    

})






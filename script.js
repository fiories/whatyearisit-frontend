console.log("hello gg");
fetch('http://localhost:3000/year')
	.then(response => response.json())
	.then(data => {
        console.log("front end fetch");
        console.log(data.year);
       document.querySelector("#year").textContent=data.year;
    })
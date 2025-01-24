console.log("hello gg");
fetch('https://whatyearisit-backend-one-smoky.vercel.app/year')
	.then(response => response.json())
	.then(data => {
        console.log("front end fetch");
        console.log(data.year);
       document.querySelector("#year").textContent=data.year;
    })
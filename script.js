const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey= "ef67a22f30ebc299c67fc04b2b88049d";
const search =document.querySelector(".in");
const searchBtn=document.querySelector("button");
const  img=document.querySelector(".we-img i");

async   function getdata(city){
    if(search.value===''){
        alert("Enter a City Name");
    }
    else{
    const response = await fetch(apiUrl+ city +`&appid=${apikey}`
    ).catch(error =>{
        if(error.message.includes("404")){
            alert("Enter a valid city name");
        };
    });
    const data = await response.json();
    const condition= data.weather[0].main;
    console.log(condition);

    document.querySelector(".name").textContent=data.name;
    document.querySelector(".temp").textContent=data.main.temp+"°C";
    document.querySelector(".speed").textContent=data.wind.speed;
    document.querySelector(".hum").textContent=data.main.humidity;
    document.querySelector(".cond").textContent=condition;

    img.classList.remove(img.classList.item(1));

    console.log(img.classList);
    switch(condition){
        case "Rain":
            img.classList.add("fa-cloud-showers-heavy");
            break;
        case "Clear":
            img.classList.add("fa-sun");    
            break;
        case "Clouds":
            img.classList.add("fa-cloud");
            break;
        case "Drizzle":
            img.classList.add("fa-cloud-rain");
            break;
    } 
    }
}

searchBtn.addEventListener("click",()=>{
    getdata(search.value);
    search.value="";
})

search.addEventListener("keydown",function(e){
    if(e.key==='Enter'){
        getdata(search.value);
        search.value="";  
    }
})
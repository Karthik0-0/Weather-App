const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey= "ef67a22f30ebc299c67fc04b2b88049d";
const search =document.querySelector(".in");
const searchBtn=document.querySelector("button")

async function getdata(city){
    const response = await fetch(apiUrl+ city +`&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".name").textContent=data.name;
    document.querySelector(".temp").textContent=data.main.temp+"°C";
    document.querySelector(".speed").textContent=data.wind.speed;
    document.querySelector(".hum").textContent=data.main.humidity;
}

searchBtn.addEventListener("click",()=>{
    getdata(search.value);
    search.textContent="";
})
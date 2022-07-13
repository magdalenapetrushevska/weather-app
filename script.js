    function fetchWeather() {
        const apiKey = "bc12083e70d2d22298c2df1cec7101d9";
        const city = document.getElementById("searchCity").value;
        
       
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city+"&units=metric&appid="+apiKey
          
        )
        .then((response) => {
            if(!response.ok){
                alert("No weather found");
                throw new Error("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    };
    function displayWeather(data){
        const cityElement = document.getElementById("city");
        cityElement.innerHTML = data.name;
        const tempElement = document.getElementById("temperature");
        tempElement.innerHTML = data.main.temp;
        const descriptionElement = document.getElementById("description");
        descriptionElement.innerHTML = data.weather[0].description;
        console.log(descriptionElement.innerHTML);
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        const hummidityElement = document.getElementById("humidity");
        hummidityElement.innerHTML = data.main.humidity;
        const windElement = document.getElementById("wind");
        windElement.innerHTML = data.wind.speed;
        
        document.getElementById("searchCity").value = "";
        console.log(document.getElementById("searchCity").value);
    }

  
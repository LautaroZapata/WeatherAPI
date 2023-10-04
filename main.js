const $container = document.querySelector('#container');
const $form = document.querySelector('#form');
const $searchCity = document.querySelector('#InputCity')
const $submit = document.querySelector('#submit')
const $divCity = document.querySelector('#divCity')
const $cityName = document.querySelector('#cityName')
const $temperatura = document.querySelector('#temperatura')
const $desc_data = document.querySelector('#desc-data')
const $desc_icon = document.querySelector('#desc-icon')


const URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const KEY = 'a48ac096257fc2984faedcee2c4bf278'


const cargarCiudad = async (city) => {
    const response = await fetch (URL+ city +`&appid=${KEY}`);

    const data = await response.json();

    console.log(data);

    $cityName.innerHTML = data.name
    $temperatura.innerHTML = Math.round(data.main.feels_like)+ ' °C'
    $desc_data.innerHTML = data.weather[0].main
    

    if (data.weather[0].main === 'overcast clouds' && data.weather[0].icon === '04n') {
        $desc_icon.src = 'images/Clouds.png'
        
    } else if (data.weather[0].description === 'overcast clouds' && data.weather[0].icon === '04d'){
        $desc_icon.src = 'images/ClearSkyDay.png'
    }
    else if (data.weather[0].description === 'clear sky' && data.weather[0].icon === '01d'){
        $desc_icon.src = 'images/ClearSkyDay.png'
    } else if (data.weather[0].description === 'clear sky' && data.weather[0].icon === '01n'){
        $desc_icon.src = 'images/ClearSkyNight.png'
    } else if (data.weather[0].description === 'few clouds' && data.weather[0].icon === '02n'){
        $desc_icon.src = 'images/FewCloudsN.png'
    }
    else if (data.weather[0].description === 'few clouds' && data.weather[0].icon === '02d'){
        $desc_icon.src = 'images/FewCloudsD.png'
    } else if (data.weather[0].description === 'scattered clouds' && data.weather[0].icon === '03d'){
        $desc_icon.src = 'images/ScatteredCloudsD.png'
    } else if (data.weather[0].description === 'scattered clouds' && data.weather[0].icon === '03n'){
        $desc_icon.src = 'images/ScatteredCloudsN.png'
    } else if (data.weather[0].description === 'shower rain' && data.weather[0].icon === '09d'){
        $desc_icon.src = 'images/ShowerRain.png'
    }
    else if (data.weather[0].description === 'shower rain' && data.weather[0].icon === '09n'){
        $desc_icon.src = 'images/ShowerRain.png'
    } else if (data.weather[0].description === 'rain' && data.weather[0].icon === '10d'){
        $desc_icon.src = 'images/RainD.png'
    } else if (data.weather[0].description === 'rain' && data.weather[0].icon === '10n'){
        $desc_icon.src = 'images/RainN.png'
    } else if (data.weather[0].description === 'thunderstorm' && data.weather[0].icon === '11d'){
        $desc_icon.src = 'images/ThunderStorm.png'
    } else if (data.weather[0].description === 'thunderstorm' && data.weather[0].icon === '11n'){
        $desc_icon.src = 'images/ThunderStorm.png'
    } else if (data.weather[0].description === 'snow' && data.weather[0].icon === '12d'){
        $desc_icon.src = 'images/Snow.png'
    } else if (data.weather[0].description === 'snow' && data.weather[0].icon === '12n'){
        $desc_icon.src = 'images/Snow.png'
    } else if (data.weather[0].description === 'mist' && data.weather[0].icon === '50d'){
        $desc_icon.src = 'images/Mist.png'
    } else if (data.weather[0].description === 'mist' && data.weather[0].icon === '50n'){
        $desc_icon.src = 'images/Mist.png'
    }
}

$submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if ($searchCity.value !== '') {
        cargarCiudad($searchCity.value)
    console.log($searchCity.value);
    } 
    else {
        Swal.fire({
            title: 'Error!',
            text: 'Ingresa una ciudad',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        })
    }
    
})


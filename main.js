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
    $temperatura.innerHTML = Math.round(data.main.temp)+ ' °C'
    $desc_data.innerHTML = data.weather[0].main


    $desc_icon.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    console.log($desc_icon);




    
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


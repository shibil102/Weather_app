const SearchBox = document.querySelector('.place')
const SearchButton = document.querySelector('.sub')
const city = document.querySelector('.city')
const desc = document.querySelector('.desc')
const temp = document.querySelector('.temp')
const firstHead = document.querySelector('.places')
const secondHead = document.querySelector('.condition')
const thirdHead = document.querySelector('.temperature')
const tables = document.querySelector('table')
const message = document.querySelector('.errors')

function click(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+SearchBox.value+'&appid=d8527f4d5989591cb73c6e4b594b0f01')
    .then(response => response.json())
    .then(data => {
let nameOfCity = data['name']
let TempDetails = data['main']['temp']
let DescriptionValue = data['weather'][0]['description']

let tempincelsius = (TempDetails - 273.15)
currentTemp = (Math.floor(tempincelsius))
firstHead.innerHTML = 'CITY'
secondHead.innerHTML = 'CONDITION'
thirdHead.innerHTML = 'TEMPERATURE(°C)'
city.innerHTML = nameOfCity
desc.innerHTML = DescriptionValue
temp.innerHTML = currentTemp + '°C'
tables.style.border = '1px solid #2b2e4a'
firstHead.style.border = '1px solid #2b2e4a'
secondHead.style.border = '1px solid #2b2e4a'
thirdHead.style.border = '1px solid #2b2e4a'
city.style.border = '1px solid #2b2e4a'
desc.style.border = '1px solid #2b2e4a'
temp.style.border = '1px solid #2b2e4a'
SearchBox.value = ''
    })
    .catch(err => {
let array = ['This is not valid input','Your place not found in my map LOL!!','Place not Found','Double check your Input']
const randomElement = array[Math.floor(Math.random() * array.length)]
message.innerHTML = randomElement +'<br>City not found'
setTimeout(() => {
    message.innerHTML = ''
},1500);
    })
}

SearchButton.addEventListener('click', click)
SearchButton.addEventListener('touchend', click)

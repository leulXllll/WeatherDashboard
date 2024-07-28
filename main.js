
window.addEventListener('load',()=>{
  getInfo('new york').then(data=>{
     assignValue(data)
  }).catch(err=>{
    alert(err)
  })
})

Object.defineProperty(String.prototype,'capitalize',{
    value:function(){
      return this[0].toUpperCase() + this.slice(1).toLowerCase()
    },
    enumerable:false
})

const btn = document.querySelector('button')
let city = document.querySelector('h2')
let input = document.getElementById('search')

city.style.textAlign = "center"
btn.addEventListener('click',()=>{
       
      if(input.value!==''){
        city.textContent = input.value.capitalize() 
      
      getInfo(input.value)
      .then(data=>{
         assignValue(data)
      }).catch(err=>{
        alert(err)
      })
    }else{
      alert("You need to Insert a city")
    }
  })
const getInfo = async(city)=>{
       
       let response = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f2a100688fcfa8ce09413243a717650&units=metric`)
       if(response.status!==200){
        throw new Error()
       }
       let data = await response.json()
       return data
}

function assignValue(data){
  let temp = data.main.temp 
  let cond_val_no = document.getElementById('cond_val_no')
   cond_val_no.textContent=temp + "°C";
   
  let wind = data.wind.speed
  let wind_val = document.getElementById('wind_val')
  wind_val.textContent = wind+"m/s"

  let hum = data.main.humidity
  let hum_val = document.getElementById('hum_val')
  hum_val.textContent=hum + "%" 

   let img = document.querySelector('#img')
   let cond = data.weather[0].description.capitalize()
   document.getElementById('cond_val').textContent= cond
   switch(cond.toLowerCase()){
    case 'broken clouds':
      case 'scattered clouds': 
      case 'few clouds':
             img.src='/WeatherDashboard/Images/favicon/cloud.png';
          break;
      case 'snow':
      case 'light snow':
      case 'light shower sleet':
             img.src ='/WeatherDashboard/Images/favicon/snow.png'
          break;
       case 'heavy snow': 
       case 'heavy shower snow':
       case 'sleet':
           img.src = "/WeatherDashboard/Images/favicon/heavy-snow.png"
           break;
       case 'light shower sleet':  
       case 'light rain and snow': 
       case 'rain and snow':
       case 'light shower snow':
            img.src= "/WeatherDashboard/Images/favicon/rain-snow.png" 
            break;
      case 'light rain':
            img.src = '/WeatherDashboard/Images/favicon/light-rain.png';
            break;
      case'heavy intensity rain':
            img.src = '/WeatherDashboard/Images/favicon/heavy-rain.png'
            break;      
      case'clear sky':
            img.src = '/WeatherDashboard/Images/favicon/sun.png'
            break;     
      case'haze':
            img.src = '/WeatherDashboard/Images/favicon/sun-cloud.png'
            break;
      case'overcast clouds':
            img.src = '/WeatherDashboard/Images/favicon/sun-cloud.png'
            break;              
      case 'moderate rain' :
              img.src='/WeatherDashboard/Images/favicon/light-rain.png';
              break;       
       case 'smoke':
              img.src='/WeatherDashboard/Images/favicon/dark-cloud.png';
          break;
       case 'tornado':
             img.src = '/WeatherDashboard/Images/favicon/tornado.png'
             break;         
       case 'mist':
       case 'fog':
       case 'dust':
                img.src='/WeatherDashboard/Images/favicon/fog.png';
                break;  
    }
}


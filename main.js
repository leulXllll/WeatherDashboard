
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

const btn = document.querySelector('#srch_btn')
let city = document.querySelector('h2')
let input = document.getElementById('search')

input.addEventListener('keydown',(e)=>{
      if(e.key=="Enter"){
        e.preventDefault()
        btn.click()
      }
})

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
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
          &appid=3f2a100688fcfa8ce09413243a717650&units=metric`)
       if(response.status!==200){
        throw new Error()
       }
       let data = await response.json()
       return data
}

const btn_toggle = document.getElementById('toggle_btn')
let light_theme = true
btn_toggle.addEventListener('click',()=>{

  let body = document.querySelector('body')
      body.style.backgroundImage = "url('./Images/background2.jpg')";
      let header = document.querySelector('header')
      let box_cont = document.querySelector('.box-contanier')
      let box_cont2 = document.querySelectorAll('.box-contanier2')
      let h3 = document.querySelectorAll('h3')
      let h2 = document.querySelector('h2')
      console.log("light theme is ",light_theme)
      let array = []
      array.push(header,box_cont,h2)
      if(light_theme){   
           array.forEach(element => {
            element.style.backgroundColor = "#0066b2"
         });
    for(let i=0;i<2;i++){
        box_cont2[i].style.backgroundColor = "#0066b2"
        h3[i].style.backgroundColor = "#0066b2"
      }
  
        light_theme=false;
  }else {
    alert("not gotten through")
           array.forEach(element => {
            element.style.backgroundColor = '#002D62';
         });
    for(let i=0;i<2;i++){
        box_cont2[i].style.backgroundColor = "#002D62"
        h3[i].style.backgroundColor = "#002D62"
      }
      light_theme=true
  }
})

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
   
   let path= '/WeatherDashboard/Images/icons/';

   switch(cond.toLowerCase()){
    case 'broken clouds':
      case 'scattered clouds': 
      case 'few clouds':
        path+='cloud.png';
        img.src= path;
          break;
      case 'snow':
      case 'light snow':
      case 'light shower sleet':
         path+=snow.png;
             img.src = path;
          break;
       case 'heavy snow': 
       case 'heavy shower snow':
       case 'sleet':
         path+="heavy-snow.png"
           img.src = path; 
           break;
       case 'light shower sleet':  
       case 'light rain and snow': 
       case 'rain and snow':
       case 'light shower snow':
            img.src= "/WeatherDashboard/Images/favicon/rain-snow.png" 
            break;
      case 'light rain':
      case 'light intensity drizzle':  
            path+='light-rain.png';
            img.src = path;
            break;
      case'heavy intensity rain':
            path+='heavy-rain.png'
            img.src = path; 
            break;      
      case'clear sky':
            path+='sun.png'
            img.src = path; 
            break;     
      case'haze':
      case'overcast clouds':
            path+='sun-cloud.png'
            img.src = path;
            break;              
      case 'moderate rain':
            path+='light-rain.png';
              img.src= path;
              break;       
       case 'smoke':
            path+='dark-cloud.png';
              img.src= path;
          break;
       case 'tornado':
            path+='tornado.png'
             img.src = path;
             break;         
       case 'mist':
       case 'fog':
       case 'dust':
             path+='fog.png';
              img.src = path; 
                break; 
       default:
        path+='/sun-cloud'
        img.src = path;
        break          
    }
}


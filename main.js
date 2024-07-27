// let hm_btn = document.getElementById('hm_btn')
// hm_btn.addEventListener('click',()=>{
//     let side = document.querySelector('aside')
//     if(side.style.visibility == "visible"){
//     side.style.visibility="hidden";
//     side.style.opacity= "0"
//   }else{
//     side.style.visibility="visible";
//     side.style.opacity = "1";
//   }
// })


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
         
       let temp = data.main.temp 
       let cond_val_no = document.getElementById('cond_val_no')
        cond_val_no.textContent=temp + "°C";

        let img = document.querySelector('#img')
        let cond = data.weather[0].description.capitalize()
        document.getElementById('cond_val').textContent= cond
        switch(cond.toLowerCase()){
          case 'broken clouds' :
                 img.src='/WeatherDashboard/Images/favicon/cloud.png';
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
          case'overcast clouds':
                img.src = '/WeatherDashboard/Images/favicon/sun-cloud.png'
                break;     
          case'haze':
                img.src = '/WeatherDashboard/Images/favicon/sun-cloud.png'
                break;
          case'overcast clouds':
                img.src = '/WeatherDashboard/Images/favicon/sun-cloud.png'
                break;        
          case 'few clouds' :
                img.src='/WeatherDashboard/Images/favicon/clouds.png';
                break;      
          case 'moderate rain' :
                  img.src='/WeatherDashboard/Images/favicon/light-rain.png';
                  break;           
           case 'mist' :
                    img.src='/WeatherDashboard/Images/favicon/fog.png';
                    break;  
        }
        console.log(data)
      }).catch(err=>alert(err))
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

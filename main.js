let hm_btn = document.getElementById('hm_btn')
hm_btn.addEventListener('click',()=>{
    let side = document.querySelector('aside')
    if(side.style.visibility == "visible"){
    side.style.visibility="hidden";
    side.style.opacity= "0"
  }else{
    side.style.visibility="visible";
    side.style.opacity = "1";
  }
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

btn.addEventListener('click',()=>{
       
      if(input.value!==''){
        city.textContent = input.value.capitalize() 
      }
      getInfo(input.value)
      .then(data=>{
        document.getElementById('cond_val').textContent=data.weather[0].description
        console.log(data.weather[0].description)
      }).catch(err=>alert(err))
})

const getInfo = async(city)=>{
       
       let response = await 
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f2a100688fcfa8ce09413243a717650`)
       if(response.status!==200){
        throw new Error()
       }
       let data = await response.json()
       return data
}
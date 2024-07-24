let hm_btn = document.getElementById('hm_btn')
hm_btn.addEventListener('click',()=>{
    let side = document.querySelector('aside')
    if(side.style.visibility == "visible"){
    side.style.visibility="hidden";
    side.style.height= "83vh"
  }else{
    side.style.visibility="visible";
    side.style.height = "83vh";
  }
})
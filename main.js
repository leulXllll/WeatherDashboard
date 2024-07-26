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


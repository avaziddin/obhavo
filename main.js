import axios from "axios"









  let container = document.querySelector(".container")
  let darkmode = document.querySelector(".darkmode")
  let dark_span = document.querySelector(".dark-span")
  let input  = document.querySelector("input")
  let azens  = document.querySelector(".azens")
  let sunny  = document.querySelector(".sunny")
  let days  = document.querySelector(".days")
  let hours = document.querySelector(".hours")
  let yag_yagspan  = document.querySelector(".yag-yagspan")
  let yag_yagh1  = document.querySelector(".yag-yagh1")
  let yag  = document.querySelector(".yag")
  let du_span  = document.querySelector(".du-span")
  let se_yag  = document.querySelector(".se-yag")
  let se_du  = document.querySelector(".se-du")
  let azens_span  = document.querySelector(".azens-span")
  let azens_h1  = document.querySelector(".azens-h1")
  let azens_p  = document.querySelector(".azens-p")
  let reloa = document.querySelectorAll(".reloa")

  
    
      
    
    
  
 






  darkmode.onclick = () => {
    if(darkmode.classList.contains("darkmode")) {
      darkmode.classList.add("darkmodee")
      darkmode.classList.remove("darkmode")
      container.style.background = "linear-gradient(110deg, #383838 0%, rgba(158, 158, 158, 0.00) 71.82%)"
      dark_span.style.color = "white"
      azens.style.background = "#444"
      azens.style.color = "white"
      azens_span.style.color = "white"
      azens_h1.style.color = "white"
      azens_p.style.color = "white"
      input.style.background = "#444"
      sunny.style.background = "#444"
      yag_yagh1.classList.add("yagyagyag")
      yag_yagspan.classList.add("yag-yagspannn")
      yag.style.color = "white"
      du_span.style.color = "white"
      se_yag.style.color = "white"
      se_du.style.color = "white"
      days.style.color = "white"
      days.style.background = "#444"
      hours.style.background = "#444"
      hours.style.color = "white"
      reloa.forEach(element => {
        element.classList.add("reloaa")
        
      });      
    }
    else if(darkmode.classList.contains("darkmodee")) {
      darkmode.classList.remove("darkmodee")
      darkmode.classList.add("darkmode")
      container.style.background = "linear-gradient(113deg, #FFF 0.28%, rgba(70, 97, 115, 0.00) 178.65%)"
      dark_span.style.color = "black"
      azens.style.background = " #D9D9D9"
      azens.style.color = "black"
      azens_span.style.color = "black"
      azens_h1.style.color = "black"
      azens_p.style.color = "black"
      input.style.background = " #D9D9D9"
      sunny.style.background = " #D9D9D9"
      yag_yagh1.classList.add("yagyagyag")
      yag_yagspan.classList.add("yag-yagspannn")
      yag.style.color = "black"
      du_span.style.color = "black"
      se_yag.style.color = "black"
      se_du.style.color = "black"
      days.style.color = "black"
      days.style.background = " #D9D9D9"
      hours.style.background = " #D9D9D9"
      hours.style.color = "black"
      reloa.forEach(element => {
        element.classList.remove("reloaa")
        
      });      

    }
    
    
    
  }

  function render(data) {
    let cityn = document.querySelector(".azens-span")
    cityn.innerHTML = data.location.name
    let temp = document.querySelector(".yag-yagh1")
    temp.innerHTML = data.current.temp_c  + "°С"

    let feel = document.querySelector('.yag-gradus')
    feel.innerHTML = data.current.feelslike_c + "°С"

    let wthr_img = document.querySelector(".du img")
    wthr_img.src = data.current.condition.icon
  }

  input.onkeyup = (e) => {
    
   
    if (e.keyCode == 13) {
      let val = input.value

      axios.get(import.meta.env.VITE_KEY_BASEURL + "&q=" + val) 
           .then(res => {
            console.log(res.data);
              render(res.data)
           })      
    }
  }
 

  




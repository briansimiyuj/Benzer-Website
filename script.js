const hamburger = document.querySelector('.hamburger')

const nav = document.querySelector("nav")

console.log(nav)



hamburger.addEventListener('click', () =>{
   
   hamburger.classList.toggle('active')
   
   nav.classList.toggle('open')
   
   console.log('working')

})
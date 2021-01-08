const hamburger = document.querySelector('.hamburger')

console.log(hamburger)



hamburger.addEventListener('click', () =>{

   console.log('working')

   hamburger.classList.toggle('active')

})
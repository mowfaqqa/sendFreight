const input = document.querySelector('.toggler1')
const toggleIcon = document.querySelector('.iconoff')
const toggleOnIcon = document.querySelector('.iconon')

input.addEventListener('change', () => {
   if (input.checked) {
      toggleIcon.style.display = 'none'
      toggleOnIcon.style.display = 'block'
   } else {
      toggleIcon.style.display = 'block'
      toggleOnIcon.style.display = 'none'
   }

})
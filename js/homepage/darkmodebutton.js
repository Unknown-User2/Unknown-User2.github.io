// Select the button
const darkToggle = document.querySelector('#darkToggle');

// Listen for a click on the button
darkToggle.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('darkMode');  
})
 var text = document.querySelector(".top span")
 var guess = document.querySelector("#guess")
 var button = document.querySelector("#nameButton")

 button.addEventListener("click", function(e) {
  e.preventDefault()
  text.innerText = guess.value
  guess.value = ""
 })
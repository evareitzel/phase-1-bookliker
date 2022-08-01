// document.addEventListener("DOMContentLoaded", function() {});
document.addEventListener("DOMContentLoaded", getBooks());


function getBooks(){
  fetch('http://localhost:3000/books')
  // .then((resp) => console.log(resp));
  .then(resp => resp.json())
  .then(data => console.log(data))
  console.log('Here we are!')
}
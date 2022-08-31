const titleElement = document.getElementById('main-title')
// title element

// cached element references

const btn = document.querySelector('button')
const input = document.querySelector('input')
document.querySelector('ul').addEventListener(`click`, 
handleClick)
//console.log(input)


function handleClick(evt){
 // console.log(evt.target)
}

btn.addEventListener('click', function(evt) {
  // create <li> element
  const li = document.createElement('li')
  //access the text from the input
  // store the text on the <li>
  li.textContent = input.value
// console.log(li)
  //add the <li>(with the text included) to html(in the <ul>)
document.querySelector('ul').appendChild(li)
input.value = ""
});

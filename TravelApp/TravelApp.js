document.querySelector("form").addEventListener("submit", addTravel);
const message = document.querySelector('#message')

function addTravel(event) {
  event.preventDefault();
  let inputField = document.querySelector('input')

  const travel = document.createElement('li')

  const addTravel = document.createElement("span");
  addCountry.textContent = inputField.value;
  addCountry.addEventListener("click", crossOffMovie);
  travel.appendChild(travelApp)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteCountry);
  //this will remove all the whitespace from user's input to use as an id, which could then be used as a selector
  const travelId = inputField.value.replace(/\s+/g, '');
  deleteBtn.setAttribute('id', travelId);
  country.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(country);

  inputField.value = ''
}

function deleteMovie(event) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    
    revealMessage()

    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }

    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}


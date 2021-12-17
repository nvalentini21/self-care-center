//Variables

// QuerySelectors
var receiveMessageForm = document.querySelector('.message-type');
var btnReceiveMessage = document.querySelector('.receive-button');
var buddahArticle = document.querySelector('.photo-message');
var messageForm = document.querySelector('.message-type')
var messageArticle = document.querySelector ('.pop-message');
var paragraphArticle = document.querySelector("p");
var btnAffirmationRadio = document.querySelector("#affirmation-check")
var btnMantraRadio = document.querySelector("#mantra-check")
var btnAddMessage = document.querySelector(".custom-button")
var customMessageForm = document.querySelector('.custom-message')
var btnCustomAffRadio = document.querySelector("#custom-affirmation-check")
var btnCustomManRadio = document.querySelector('#custom-mantra-check')
var btnSubmit = document.querySelector('#submit-button')
var inputField = document.querySelector('.custom-text')
var errorMessage = document.querySelector('.error-message')
//Pages

//Data Variables

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
]

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
  "Kulia i ka Nu'u",
]

var customMessages = [];

//Event Listeners

btnReceiveMessage.addEventListener('click', showMessage);
btnAddMessage.addEventListener('click', showForm);
btnSubmit.addEventListener('click', storeCustom)
btnSubmit.addEventListener('click', showCustom)


//Functions + Event Handlers
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
function displayMessage(){
  if (btnAffirmationRadio.checked === true){
    paragraphArticle.innerText = affirmations[getRandomIndex(affirmations)];
  } else if (btnMantraRadio.checked === true){
    paragraphArticle.innerText = mantras[getRandomIndex(mantras)];
  }
};

function displayCustomMessage(){
  if (btnCustomAffRadio.checked === true){
    paragraphArticle.innerText = inputField.value
  } else if (btnCustomManRadio.checked === true){
    paragraphArticle.innerText = inputField.value
  } else {
    paragraphArticle.innerText = "Don't forget to select a message type! Click 'Add Message' to retry :)"
  }
};

function showMessage(){
  event.preventDefault();
  buddahArticle.classList.add('hidden');
  messageArticle.classList.remove('hidden');
  customMessageForm.classList.add('hidden');
  displayMessage();
};

function showForm(){
  event.preventDefault();
  buddahArticle.classList.add('hidden');
  messageArticle.classList.add('hidden');
  customMessageForm.classList.remove('hidden');
};

function showCustom(){
  event.preventDefault()
  customMessageForm.classList.add('hidden');
  messageArticle.classList.remove('hidden');
  displayCustomMessage();
};

function storeCustom(){
  event.preventDefault();
  if (btnCustomAffRadio.checked === true){
      affirmations.push(inputField.value)
      console.log(affirmations.length)
  } else if (btnCustomManRadio.checked === true){
    mantras.push(inputField.value)
    console.log(mantras.length)

  }
};

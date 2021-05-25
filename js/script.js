//Have the browser initially focus on the name input
const nameInput = document.querySelector('#name');
nameInput.focus();

/*
Add in toggle capability to hide/display the 'other job role' element on the page
*/
const selectField = document.querySelector('select');
const otherJobField = document.querySelector('#other-job-role');
otherJobField.style.display = 'none';

selectField.addEventListener('change', (e) => {
  if(e.target.value === 'other') {
    otherJobField.style.display = 'block';
  }
  else {
    otherJobField.style.display = 'none';
  }
});

/*
Setting up the T-Shirt info section
*/
const designSelection = document.querySelector('#design');
const colorSelection = document.querySelector('#color');
const colorOptions = colorSelection.children;
colorSelection.disabled = true;

designSelection.addEventListener('change', e => {
  colorSelection.disabled = false;
  const eventValue = e.target.value;
  for(let i = 1; i < colorOptions.length; i++) {
    let currElement = colorOptions[i];
    let optionAttr = colorOptions[i].getAttribute('data-theme');
    if(eventValue === optionAttr) {
      currElement.hidden = false;
      currElement.setAttribute('selected', 'true');
    }
    else {
      currElement.hidden = true;
      currElement.setAttribute('selected', 'false');
    }
  }
  //Set default selection value for each (so that a leftover unavailable option isn't initially selected)
  if(eventValue === 'js puns' ) {
      document.querySelector('option[value = "cornflowerblue"]').selected = true;
  }
  if(eventValue === 'heart js') {
      document.querySelector('option[value = "tomato"]').selected = true;
  }
});

/*
Setting up the Register For Activities section
*/
const activitiesSection = document.querySelector('#activities');
const activitiesCost = document.querySelector('#activities-cost');
//totalCost of the activities
let totalCost = 0;
activitiesSection.addEventListener('change', e => {
  targetCost = +e.target.getAttribute('data-cost');
  if(e.target.checked) {
    totalCost += targetCost;
  }
  else {
    totalCost -= targetCost;
  }
  activitiesCost.innerHTML = `Total: $${totalCost}`;
});

/*
Setting up the Payment Info Section
*/
const paymentSelection = document.querySelector('#payment');
const creditCardSelection = document.querySelector('#credit-card');
const paypalSelection = document.querySelector('#paypal');
const bitcoinSelection = document.querySelector('#bitcoin');

//Hide Bitcoin and Paypal info initially
paypalSelection.hidden = true;
bitcoinSelection.hidden = true;

//set initial payment option to be credit card (by default)
paymentSelection.children[1].setAttribute('selected', true);


/*
Listener for the click event that will modify the 'payment' div
as necessary
*/
paymentSelection.addEventListener('change', e => {
  const userSelection = e.target.value;
  if(userSelection === "credit-card") {
    creditCardSelection.hidden = false;
    bitcoinSelection.hidden = true;
    paypalSelection.hidden = true;
  }
  else if(userSelection === 'paypal') {
    creditCardSelection.hidden = true;
    bitcoinSelection.hidden = true;
    paypalSelection.hidden = false;
  }
  //otherwise the selection is bitcoin
  else {
    creditCardSelection.hidden = true;
    bitcoinSelection.hidden = false;
    paypalSelection.hidden = true;
  }
});

/*
perform submission validation
*/
const formReference = document.querySelector('form');
const emailReference = document.querySelector('#email');
const activityBoxes = document.querySelectorAll('input[type = "checkbox"]');

//add event listener to validate form submission
formReference.addEventListener('submit', e => {
  if(formIsValid()) {
    //do nothing and let it submit

  }
  else {
    alert("You have errors");
    e.preventDefault();
  }
});

function formIsValid() {
  return validateName() && validateEmail() && validateActivities() && validateCreditCard();
}

//make sure the name field is not blank
function validateName() {
  return nameInput.value !== "";
}

//make sure the email is in valid format
function validateEmail() {
  const regex = /^\w+@\w+.(com|net|org)$/;
  return regex.test(emailReference.value);
}

//check to see if at least one activity is clicked
function validateActivities() {
  for(let i = 0; i < activityBoxes.length; i++) {
    if(activityBoxes[i].checked) {
      return true;
    }
  }
  return false;
}

//helper function to validate a credit number using regex
function validateCreditNum() {
  const creditNum = document.querySelector('#cc-num').value;
  const creditRegex = /\d{13,16}/;
  if(creditRegex.test(creditNum)) {

  }
}

//helper function to validate a zip code using regex
function validateZipNum() {
  const zipNum = document.querySelector('#zip').value;
  const zipRegex = /\d{5}/;
  if(zipRegex.test(zipNum)) {

  }
}

//helper function to validate a cvv number using regex
function validateCvvNum() {
  const cvvNum = document.querySelector('#cvv').value;
  const cvvRegex = /\d{3}/;
  if(cvvRegex.test(cvvNum)) {

  }
}

//validate the user credit number, zip number, and cvv number inputs
function validateCreditCard() {
  if(paymentSelection.children[1].selected) {
    return validateCreditNum() && validateZipNum() && validateCvvNum();
  }
}

const allInputs = document.querySelectorAll('input');
//add focus/blur to the checkbox elements when needed
function addFocus(element) {
  element.classList.add('focus');
}

function removeFocus(element) {
  element.classList.remove('focus');
}

//add focus and blur event actions to labels of respective input elements
allInputs.forEach((item) => {
   const label = item.parentElement;
   item.addEventListener('focus', () => {
     addFocus(label);
   });
   item.addEventListener('blur', () =>{
     removeFocus(label);
   });

 });

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
  console.log(typeof targetCost);
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
const emailReference = document.querySelector('#email')

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
  if(nameInput.value === "") {
    return false;
  }
  else if(emai)
}

function validateName(name) {
  return nameInput.value !== "";
}
function validateEmail(email) {
  const regex = /^\w+@\w+.(com|net|org)$/;
  return regex.test(email);
}

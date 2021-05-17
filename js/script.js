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

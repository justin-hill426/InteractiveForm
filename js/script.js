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
  //FIXME start on a proper list starting value
});

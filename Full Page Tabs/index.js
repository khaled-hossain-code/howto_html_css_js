function removeActive() {
  const tabLinks = document.getElementsByClassName('tablinks');

  [...tabLinks].forEach(tabLink => {
    tabLink.style.backgroundColor = "";
  })
}

function openCity(event, cityName, color) {
  // hide all tabcontent
  const tabContents = document.getElementsByClassName('tabcontent');

  [...tabContents].forEach(tabContent => {
    tabContent.style.display = "none";
  });
  // remove active class
  removeActive();

  // display tabcontent
  document.getElementById(cityName).style.display = 'block';
  // make element active
  event.currentTarget.style.backgroundColor = color;
}

function closeTab(event) {
  event.currentTarget.parentElement.style.display = 'none';
  removeActive();
}

document.getElementById('defaultOpen').click();
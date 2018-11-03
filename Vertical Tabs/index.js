function removeActive() {
  const tabLinks = document.getElementsByClassName('tablinks');

  [...tabLinks].forEach(tabLink => {
    tabLink.className = tabLink.className.replace(' active', '');
  })
}

function openCity(event, cityName) {
  // hide all tabcontent
  const tabContents = document.getElementsByClassName('tabcontent');

  [...tabContents].forEach(tabContent => {
    tabContent.style.display = "none";
  });
  // remove active class
  removeActive();

  // display tabcontent
  document.getElementById(cityName).style.display = 'inline-block';
  // make element active
  event.currentTarget.className += ' active';
}

function closeTab(event) {
  event.currentTarget.parentElement.style.display = 'none';
  removeActive();
}

document.getElementById('defaultOpen').click();
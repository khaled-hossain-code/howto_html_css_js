const acc = document.getElementsByClassName("accordion");

[...acc].forEach(section => {
  section.addEventListener("click", function() {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  })
});
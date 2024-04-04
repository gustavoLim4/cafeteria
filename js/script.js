
  let layer = document.querySelector(".layer");
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    layer.style.left = value * 2 + "px";
  });

  function scrollToSection(event) {
    event.preventDefault();
    
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth' 
    });
  }
function MenuOpenClose() {
  const submenu = document.querySelector('.submenu__ul');

  if (submenu.style.display === 'none') {
    submenu.style.display = 'block';
  } else {
    submenu.style.display = 'none';
  }
}

function ShowSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const len = slides.length;

  for (let i = 0; i < len; i++) {
    if (i === index - 1) {
      slides[i].style.display = 'block';
      dots[i].style.borderColor = '#709dca';
    } else {
      slides[i].style.display = 'none';
      dots[i].style.borderColor = '#b5bbc1';
    }
  }
}

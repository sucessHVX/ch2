const body = document.querySelector('body');

window.addEventListener('resize', () => {
  if (innerWidth < 600) {
    body.classList.add('bodyBlue');
    body.classList.remove('bodyPurple');
  } else if (innerWidth < 1200) {
    body.classList.add('bodyPurple');
    body.classList.remove('bodyBlue');
    body.classList.remove('bodyOrange');
  } else {
    body.classList.add('bodyOrange');
    body.classList.remove('bodyPurple');
  }
});

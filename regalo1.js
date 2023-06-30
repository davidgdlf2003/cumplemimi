const navItems = document.querySelectorAll('.navbar li a');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});

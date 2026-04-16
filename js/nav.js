// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Click-based dropdowns — all screen sizes
function closeAll() {
  document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
}
document.querySelectorAll('.nav-item > .has-dropdown').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const item   = this.closest('.nav-item');
    const isOpen = item.classList.contains('open');
    closeAll();
    if (!isOpen) item.classList.add('open');
  });
});
// Close on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-item')) closeAll();
});

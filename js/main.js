/* minimal, accessible interactivity */
// nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// project filter
document.querySelectorAll('.filters .chip').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filters .chip').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('#projects-grid .card').forEach(card => {
      if (filter === 'All') {
        card.style.display = '';
        return;
      }
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();
      card.style.display = tags.includes(filter.toLowerCase()) ? '' : 'none';
    });
  });
});

// modal handling
const modal = document.getElementById('modal');
const modalPanel = modal && modal.querySelector('.modal-panel');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const title = btn.dataset.title || '';
    const desc = btn.dataset.desc || '';
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modal) {
      modal.setAttribute('aria-hidden', 'false');
      if (modalPanel) modalPanel.focus();
      document.body.style.overflow = 'hidden';
    }
  });
});

if (modalClose) modalClose.addEventListener('click', () => {
  if (modal) {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});

// close modal on backdrop or Escape
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

// contact validation
function validateContact(form) {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if (!name || !email) {
    alert('Please enter name and email.');
    return false;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email.');
    return false;
  }
  return true;
}

// ============================================
// Campus Pinboard — Shared Scripts
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    function setNavOpen(isOpen) {
      navLinks.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      navToggle.textContent = isOpen ? '×' : '☰';
    }

    navToggle.addEventListener('click', () => {
      setNavOpen(!navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setNavOpen(false));
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        setNavOpen(false);
      }
    });
  }

  // ---------- Notice search & filter (notices.html) ----------
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const noticeGrid = document.getElementById('noticeGrid');
  const noResults = document.getElementById('noResults');

  if (searchInput && categoryFilter && noticeGrid) {
    const cards = Array.from(noticeGrid.querySelectorAll('.pin-card'));

    function applyFilters() {
      const query = searchInput.value.trim().toLowerCase();
      const category = categoryFilter.value;
      let visibleCount = 0;

      cards.forEach(card => {
        const text = card.dataset.text || '';
        const cardCategory = card.dataset.category || '';
        const matchesQuery = query === '' || text.includes(query);
        const matchesCategory = category === 'all' || cardCategory === category;

        if (matchesQuery && matchesCategory) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
  }

  // ---------- Free time calculator (notices.html) ----------
  const calcBtn = document.getElementById('calcBtn');
  const calcResult = document.getElementById('calcResult');

  if (calcBtn && calcResult) {
    calcBtn.addEventListener('click', () => {
      const hoursPerDay = parseFloat(document.getElementById('hoursPerDay').value) || 0;
      const daysPerWeek = parseFloat(document.getElementById('daysPerWeek').value) || 0;

      const classHours = hoursPerDay * daysPerWeek;
      const totalWeekHours = 24 * 7;
      const sleepHours = 8 * 7; // assume 8 hrs sleep/night
      const freeHours = Math.max(0, totalWeekHours - classHours - sleepHours);

      calcResult.innerHTML = `Based on ${classHours} class hours and ${sleepHours} sleep hours this week, you have roughly: <strong>${freeHours.toFixed(1)} free hours</strong>`;
    });
  }

  // ---------- Contact form validation (contact.html) ----------
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      formStatus.className = 'form-status';

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all required fields before sending.';
        formStatus.classList.add('error');
        return;
      }

      if (!emailPattern.test(email)) {
        formStatus.textContent = 'Please enter a valid email address.';
        formStatus.classList.add('error');
        return;
      }

      // No backend connected — simulate successful submission
      formStatus.textContent = `Thanks, ${name}! Your message has been received. We'll get back to you at ${email}.`;
      formStatus.classList.add('success');
      contactForm.reset();
    });
  }

});

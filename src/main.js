// Waitlist endpoint
const WAITLIST_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzcTs952DPWxDaBs7SHJm5Zr5UhgTLYWutGYGhlBez1Plmn6JD48eLRHmUVthner0tGrA/exec';

async function submitEmail(event) {
  event.preventDefault();

  const form = event.target;
  const input = form.querySelector('input[type="email"]');
  const button = form.querySelector('button');
  const email = input.value.trim();

  if (!email) return;

  try {
    button.disabled = true;
    button.textContent = 'Submitting...';

    const response = await fetch(WAITLIST_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      button.textContent = 'You\'re on the list!';
      input.value = '';
      setTimeout(() => {
        button.textContent = 'Join The Waitlist';
        button.disabled = false;
      }, 3000);
    } else {
      throw new Error('Failed to submit');
    }
  } catch (error) {
    button.textContent = 'Something went wrong';
    setTimeout(() => {
      button.textContent = 'Join The Waitlist';
      button.disabled = false;
    }, 2500);
  }
}

// Staggered entrance animations
(function initAnimations() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const elements = [
    '[data-animate="logo"]',
    '[data-animate="heading"]',
    '[data-animate="body"]',
    '[data-animate="form"]',
    '[data-animate="footnote"]',
    '[data-animate="features"]',
  ];

  elements.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (el) {
      setTimeout(() => {
        el.classList.add('is-visible');
      }, 120 + i * 100);
    }
  });
})();

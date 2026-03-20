// Supabase config
const SUPABASE_URL = 'https://nfomssavbawtdtxycmmp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_POpfJfMlNwcgKdB6Q5DtRQ_9hVNw_lv';

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

    const response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist_emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      button.textContent = "You're on the list!";
      input.value = '';
    } else if (response.status === 409) {
      button.textContent = 'Already signed up!';
    } else {
      throw new Error('Failed to submit');
    }
  } catch (error) {
    button.textContent = 'Something went wrong';
  } finally {
    setTimeout(() => {
      button.textContent = 'Join The Waitlist';
      button.disabled = false;
    }, 3000);
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

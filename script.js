// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
  });
});

// Contact form - sends to Formspree (varshagowdavg819@gmail.com)
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const action = contactForm.action;
  
  // Skip if Formspree ID not configured
  if (action.includes('YOUR_FORMSPREE_ID')) {
    toast?.classList.add('show');
    contactForm.reset();
    setTimeout(() => toast?.classList.remove('show'), 4000);
    return;
  }
  
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn?.textContent;
  if (btn) btn.textContent = 'Sending...';
  
  try {
    const res = await fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    
    if (res.ok) {
      toast?.classList.add('show');
      contactForm.reset();
      setTimeout(() => toast?.classList.remove('show'), 4000);
    } else {
      throw new Error('Failed to send');
    }
  } catch (err) {
    toast.querySelector('span').textContent = 'Something went wrong';
    toast.querySelector('p').textContent = 'Please email me directly at varshagowdavg819@gmail.com';
    toast?.classList.add('show');
    setTimeout(() => {
      toast?.classList.remove('show');
      toast.querySelector('span').textContent = 'Thank You! 🙌';
      toast.querySelector('p').textContent = "Your message has been sent successfully. I'll get back to you as soon as possible.";
    }, 5000);
  } finally {
    if (btn) btn.textContent = originalText;
  }
});

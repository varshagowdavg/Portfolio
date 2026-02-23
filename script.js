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

// Contact form - sends to varshagowdavg819@gmail.com via Formsubmit.co
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/varshagowdavg819@gmail.com';

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn?.textContent;
  if (btn) btn.textContent = 'Sending...';
  
  const payload = {
    _subject: "Portfolio: New message from Let's Connect",
    _replyto: contactForm.email.value,
    email: contactForm.email.value,
    message: contactForm.message.value
  };
  
  try {
    const res = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    const data = await res.json();
    
    if (data.success) {
      toast?.classList.add('show');
      contactForm.reset();
      setTimeout(() => toast?.classList.remove('show'), 4000);
    } else {
      throw new Error(data.message || 'Failed to send');
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

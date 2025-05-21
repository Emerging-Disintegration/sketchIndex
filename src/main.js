async function submitEmail(event) {
  event.preventDefault();
  const email = document.getElementById('email-input').value;
  const button = document.querySelector('button');
  
  try {
    button.disabled = true;
    button.textContent = 'Submitting...';
    
    const response = await fetch('https://script.google.com/macros/s/AKfycbzcTs952DPWxDaBs7SHJm5Zr5UhgTLYWutGYGhlBez1Plmn6JD48eLRHmUVthner0tGrA/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ email }),
    });
    
    if (response.ok) {
      alert('Thanks for joining the waitlist!');
      document.getElementById('email-input').value = '';
    } else {
      throw new Error('Failed to submit');
    }
  } catch (error) {
    alert('Sorry, something went wrong. Please try again.');
  } finally {
    button.disabled = false;
    button.textContent = 'Join The Waitlist →';
  }
}
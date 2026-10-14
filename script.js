const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        const isExpanded = navLinks.classList.contains('show');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });
}

function bookPlan(planName) {
    if (confirm(`Are you sure you want to select the ${planName} membership plan?`)) {
        localStorage.setItem('selectedPlan', planName);
        alert(`Success! You have selected the ${planName} plan. Please proceed to account registration to finalize your booking.`);
    }
}
function handleLogin(event) {
    event.preventDefault();
    alert("Login successful! Welcome back to DoBu Martial Arts.");
}

function handleRegister(event) {
    event.preventDefault(); 
    const plan = document.getElementById('reg-plan').value;
    alert(`Account successfully created with the ${plan} membership!`);
}

function handleReply() {
    alert("Please log in or create an account to reply to this forum post.");
}
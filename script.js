window.addEventListener('load', function() {
    alert("Welcome to Arjay's Interactive CV!");
});

const themeButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

if (themeButton) {
    themeButton.addEventListener('click', function() {
        bodyElement.classList.toggle('dark-mode');
        
        if (bodyElement.classList.contains('dark-mode')) {
            themeButton.textContent = '☀️ Light Mode';
        } else {
            themeButton.textContent = '🌙 Dark Mode';
        }
    });
}

const skillsButton = document.getElementById('toggle-skills');
const skillsList = document.getElementById('skills-list');

if (skillsButton && skillsList) {
    skillsButton.addEventListener('click', function() {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
            skillsButton.textContent = 'Hide Skills';
            skillsButton.style.backgroundColor = '#076930'; 
        } else {
            skillsList.style.display = 'none';
            skillsButton.textContent = 'Show Skills';
            skillsButton.style.backgroundColor = '#555'; 
        }
    });
}

let count = 0;
const likeBtn = document.getElementById('like-btn');
const countDisplay = document.getElementById('count-display');

if (likeBtn) {
    likeBtn.addEventListener('click', function() {
        count++; 
        countDisplay.textContent = count; 

        if (count % 10 === 0) {
            likeBtn.style.backgroundColor = '#ff4500';
            likeBtn.textContent = '🔥 SUPER LIKE!';
        }
    });
}

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedback = document.getElementById('form-feedback');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        feedback.textContent = '';
        nameInput.style.borderColor = '#ccc';
        emailInput.style.borderColor = '#ccc';

        if (nameInput.value.trim() === "") {
            alert("Please enter your name."); 
            nameInput.style.borderColor = "red";
            isValid = false;
        }

        else if (emailInput.value.trim() === "") {
            alert("Please enter your email.");
            emailInput.style.borderColor = "red";
            isValid = false;
        }

        if (isValid) {
            feedback.style.color = "green";
            feedback.textContent = "Message sent successfully! (Not really, just JS demo)";
              nameInput.value = "";
            emailInput.value = "";
        }
    });
}
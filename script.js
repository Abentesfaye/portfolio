window.onload = function () {
    if (window.innerWidth <= 600) {
        alert("This page is better designed for desktop view. Please switch to a larger screen for an optimal experience.");
    }
};
function validateForm() {
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;

var nameRegex = /^[a-zA-Z\s]+$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var phoneRegex = /^\d+$/;

// Validate Name
if (!nameRegex.test(name)) {
    alert('Please enter a valid name');
    return false;
}

// Validate Email
if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
}

// Validate Phone Number
if (!phoneRegex.test(phone)) {
    alert('Please enter a valid phone number');
    return false;
}

return true;
}


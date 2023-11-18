// Hambumber For Responsiveness
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton () {
	navList.classList.toggle('show')
}

hamburger.addEventListener('click', toggleButton)


// Form validation
const formContact = document.getElementById('contact-me');
formContact.addEventListener('submit', (e) => {
	e.preventDefault();
	// Access to the input field
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	textArea = document.getElementById('text-area')
	// Condition for the form to be submitted successfully
	if (name.value == "" || email.value == "" || textArea.value == "") {
		alert('Kindly input values on all fields')
	} else {
		alert('Form submitted successfully')
	}
})




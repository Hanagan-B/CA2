// Feedback form logic
const feedbackForm = document.getElementById('feedbackForm');
const feedbackDisplay = document.getElementById('feedbackDisplay');
const starRating = document.getElementById('starRating');
const ratingInput = document.getElementById('rating');

// Handle star selection for feedback rating
starRating.addEventListener('click', function (event) {
    if (event.target.tagName === 'SPAN') {
        const selectedValue = parseInt(event.target.getAttribute('data-value')); // Get the value of the clicked star
        ratingInput.value = selectedValue; // Set the value in the hidden input

        // Update the visual state of the stars
        document.querySelectorAll('#starRating span').forEach((star, index) => {
            star.textContent = index < selectedValue ? '★' : '☆'; // Filled or empty stars
        });
    }
});

// Handle feedback form submission
feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const rating = parseInt(ratingInput.value);
    const comments = document.getElementById('comments').value;

    if (!rating) {
        alert('Please select a rating by clicking on the stars.');
        return;
    }

    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback');

    const starsDiv = document.createElement('div');
    starsDiv.classList.add('stars');
    starsDiv.innerHTML = '★'.repeat(rating) + '☆'.repeat(5 - rating); // Fill stars dynamically

    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = comments || 'No comments provided.';

    feedbackDiv.appendChild(starsDiv);
    feedbackDiv.appendChild(commentParagraph);

    feedbackDisplay.appendChild(feedbackDiv);

    feedbackForm.reset();
    document.querySelectorAll('#starRating span').forEach((star) => (star.textContent = '☆')); // Reset stars
    ratingInput.value = ''; // Clear the hidden input value

    alert('Thank you for your feedback!');
});

// Contact form logic
const contactForm = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Display the thank you message by making it visible
        thankYouMessage.style.display = 'block';

        // Clear the form fields
        contactForm.reset();
    });
}

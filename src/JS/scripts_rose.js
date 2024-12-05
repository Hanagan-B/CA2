document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackDisplay = document.getElementById('feedbackDisplay');
    const starRating = document.getElementById('starRating');
    const ratingInput = document.getElementById('rating');
    const contactForm = document.getElementById('contactForm');

    // Check if feedback elements exist before adding events
    if (feedbackForm && feedbackDisplay && starRating && ratingInput) {
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
    }

    // Verifique se o formulário de contato existe antes de adicionar o evento
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            // Exibe a mensagem de confirmação como um alerta
            alert('Thank you for contacting us! We will get back to you soon.');

            // Limpa o formulário após o envio
            contactForm.reset();
        });
    }
});

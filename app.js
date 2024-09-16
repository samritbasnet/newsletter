document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletter-form');
    const successMessage = document.getElementById('success-message');
    const confirmedEmail = document.getElementById('confirmed-email');
    const dissmissBtn = document.getElementById('dismiss-btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        confirmedEmail.textContent = email;
        successMessage.style.display = 'block';


    })

    dissmissBtn.addEventListener('click', function () {
        successMessage.style.display = 'none';
        form.style.display = 'block';
        form.reset()
    })
})
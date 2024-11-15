document.addEventListener('DOMContentLoaded', function () {
    const cardNumber = document.getElementById('card-number');
    const cardHolder = document.getElementById('card-holder');
    const cardExpiration = document.getElementById('card-expiration');
    const cardCVV = document.getElementById('card-cvv');
    const creditCard = document.getElementById('credit-card');

    const inputNumber = document.getElementById('input-number');
    const inputHolder = document.getElementById('input-holder');
    const inputMonth = document.getElementById('input-month');
    const inputYear = document.getElementById('input-year');
    const inputCVV = document.getElementById('input-cvv');

    inputNumber.addEventListener('input', () => {
        cardNumber.textContent = formatCardNumber(inputNumber.value);
    });

    inputHolder.addEventListener('input', () => {
        cardHolder.textContent = inputHolder.value.toUpperCase() || 'FULL NAME';
    });

    inputMonth.addEventListener('change', updateExpiration);
    inputYear.addEventListener('change', updateExpiration);

    inputCVV.addEventListener('focus', () => {
        creditCard.style.transform = 'rotateY(180deg)';
    });

    inputCVV.addEventListener('blur', () => {
        creditCard.style.transform = 'rotateY(0deg)';
    });

    inputCVV.addEventListener('input', () => {
        cardCVV.textContent = inputCVV.value || '###';
    });

    function formatCardNumber(number) {
        return number.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    function updateExpiration() {
        cardExpiration.textContent = `${inputMonth.value || 'MM'}/${inputYear.value || 'YY'}`;
    }
});

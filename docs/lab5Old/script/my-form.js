const invalidColor = "#ffb3b3";
const validColor = "#99ff99";
const errorField = document.getElementById('error-message');
document.getElementById('my-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    errorField.textContent = '';

    checkValidity('full-name', /^\p{Lu}+ (\p{Lu}.){2}$/u);
    checkValidity('group-name', /^\p{Lu}{2}-\d{2}$/u);
    checkValidity('phone-number', /^\(\d{3}\)-\d{3}(-\d{2}){2}$/);
    checkValidity('id-card', /^\p{Lu}{2} №\d{6}$/u);
    checkValidity('faculty', /^\p{Lu}{4}$/u);

    if (errorField.textContent === '') {
        errorField.innerHTML = 'Форма заповнена коректно';
    }
});
const checkValidity = (fieldId, regexp) => {
    const field = document.getElementById(fieldId);
    if (regexp.test(field.value)) {
        field.style.backgroundColor = validColor;
    } else {
        field.style.backgroundColor = invalidColor;
        errorField.innerHTML += `Поле з id ${fieldId} заповнено некоректно<br>`;
    }
}
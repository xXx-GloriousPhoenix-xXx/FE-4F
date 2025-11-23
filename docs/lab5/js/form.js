const fullName = document.getElementById('full-name');
const groupName = document.getElementById('group-name');
const phoneNumber = document.getElementById('phone-number');
const idCard = document.getElementById('id-card');
const faculty = document.getElementById('faculty');

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    checkValidity('full-name', /^\p{Lu}+ (\p{Lu}.){2}$/u);
    checkValidity('group-name', /^\p{Lu}{2}-\d{2}$/u);
    checkValidity('phone-number', /^\(\d{3}\)-\d{3}(-\d{2}){2}$/);
    checkValidity('id-card', /^\p{Lu}{2} №\d{6}$/u);
    checkValidity('faculty', /^\p{Lu}{4}$/u);
});
const checkValidity = (fieldId, regexp) => {
    const field = document.getElementById(fieldId);
    const wrapper = field.parentElement;

    wrapper.classList.remove('default');
    wrapper.classList.add('modded');
    wrapper.classList.remove('is-invalid');
    wrapper.classList.remove('is-valid');

    if (regexp.test(field.value)) {
        wrapper.classList.add('is-valid')
    } else {
        wrapper.classList.add('is-invalid')
    }
}
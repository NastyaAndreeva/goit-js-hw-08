import throttle from 'lodash.throttle';
console.log('This is the third task.');

const feedbackForm = document.querySelector('.feedback-form');
const FORM_INFO = "feedback-form-state";
let formData = {};

feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormInput(event) {
    formData[event.target.name] = event.target.value;
    const currentData = JSON.parse(localStorage.getItem(FORM_INFO));
    localStorage.setItem(FORM_INFO, JSON.stringify({...currentData, ...formData}))
}

function onFeedbackFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(FORM_INFO)));
    localStorage.removeItem(FORM_INFO);
    formData = {};
}

function populateEmail() {
    const savedData = JSON.parse(localStorage.getItem(FORM_INFO));

    if (savedData?.email) {
        feedbackForm.email.value = savedData.email;
    }
}
function populateMessage() {
    const savedData = JSON.parse(localStorage.getItem(FORM_INFO));

    if (savedData?.message) {
        feedbackForm.message.value = savedData.message;
    }
}

populateEmail();
populateMessage();
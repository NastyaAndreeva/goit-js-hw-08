import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const FORM_INFO = "feedback-form-state";
let formData = {};

feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FORM_INFO, JSON.stringify(formData))
}

function onFeedbackFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(FORM_INFO)));
    localStorage.removeItem(FORM_INFO);
    formData = {};
}

function populateData() {
    const savedData = JSON.parse(localStorage.getItem(FORM_INFO));

    if (savedData?.email) {
        feedbackForm.email.value = savedData.email;
    }
    if (savedData?.message) {
        feedbackForm.message.value = savedData.message;
    }
}

populateData();
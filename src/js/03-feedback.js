import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
console.log(feedbackForm.message.value);
const FORM_INFO = "feedback-form-state";
const formData = {};

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
    localStorage.clear();
}

function populateData() {
    const savedData = JSON.parse(localStorage.getItem(FORM_INFO));
    console.log(savedData);

    if (savedData) {
        feedbackForm.email.value = savedData?.email;
        feedbackForm.message.value = savedData.message;
    }
}

populateData();
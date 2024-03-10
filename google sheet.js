const scrptURL = 'https://script.google.com/macros/s/AKfycby8KeD-s6NVk04L0gjNpUuAkvQoizMWPDPz72TPxZqzd8W0lALb0nIQtQdQxCaHNlmB/exec'

const form = document.forms['feedback-form']

form.addEventListener('submit',e => {
    e.preventDefault()
    fetch(scrptURL,{ method:'POST', body:new FormData(form)})
    .then(response =>alert("Thank you!your form is submitted successfully."))
    .then(()=>{window.location.reload();})
    .catch(error=>console.error('Error!',error.message))
})

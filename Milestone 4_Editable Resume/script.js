//Get references to the form and display area 
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // this prevents the page from reloading.
    console.log('Form Submitted');
    //Collect input values.
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var work_experience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the Resume content dynamically
    var resume_HTML = "\n        <h2><b>Editable Resume</b><h2>\n        <h3>Personal Information</h3>\n        <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Work-Experience</h3>\n        <p contenteditable=\"true\">").concat(work_experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
    //Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume_HTML;
    }
    else {
        console.error('The resume element is not found.');
    }
});

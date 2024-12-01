var _a;
var personalInformationSection = document.getElementById("personal-Information");
var togglePersonalInformation = document.getElementById("togglePersonalInformation");
// Check if both elements are correctly selected
var isPersonalInformationSectionVisible = true;
togglePersonalInformation.addEventListener("click", function () {
    if (isPersonalInformationSectionVisible) {
        personalInformationSection.style.display = "none";
        togglePersonalInformation.textContent = "Show Personal Information";
    }
    else {
        personalInformationSection.style.display = "block";
        togglePersonalInformation.textContent = "Hide Personal Information";
    }
    isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
});
var professionalSummary = document.getElementById("professionalSummary");
var toggleProfessionalSummary = document.getElementById("toggleProfessionalSummary");
toggleProfessionalSummary.addEventListener("click", function () {
    if (professionalSummary.style.display === "none") {
        professionalSummary.style.display = "block";
        toggleProfessionalSummary.textContent = "Hide Professional Summary";
    }
    else {
        professionalSummary.style.display = "none";
        toggleProfessionalSummary.textContent = "Show Professional Summary";
    }
});
var addSkills = document.getElementById("addSkills");
var skillsDetails = document.querySelector(".skillsDetails");
var skillsArray = [];
addSkills.addEventListener("click", function () {
    var newSkillLabel = document.createElement("label");
    newSkillLabel.textContent = "Add more skill";
    var newSkillInput = document.createElement("input");
    newSkillInput.type = "text";
    newSkillInput.placeholder = "Add new skill";
    newSkillInput.addEventListener("input", function (Event) {
        var input = Event.target;
        var skillIndex = Array.from(skillsDetails.children).indexOf(newSkillInput);
        if (input.value.trim() !== "") {
            skillsArray[skillIndex] = input.value.trim();
        }
        else {
            skillsArray.splice(skillIndex, 1);
        }
    });
    skillsDetails.appendChild(newSkillLabel);
    skillsDetails.appendChild(newSkillInput);
});
var skillsDetailsDiv = document.querySelector(".skillsDetails");
var toggleSkillDetails = document.getElementById("toggleSkills");
toggleSkillDetails.addEventListener("click", function () {
    if (skillsDetailsDiv.style.display === "none") {
        skillsDetailsDiv.style.display = "block";
        toggleSkillDetails.textContent = "Hide Skills Section";
    }
    else {
        skillsDetailsDiv.style.display = "none";
        toggleSkillDetails.textContent = "Show Skills Section";
    }
});
// const certificationDetailsDiv = document.querySelector(".certificationDetails") as HTMLElement
// const toggleCertificationDetails = document.getElementById("toggleCertification") as HTMLButtonElement
// toggleCertificationDetails.addEventListener("click", () => {
//   if (certificationDetailsDiv.style.display === "none"){
//     certificationDetailsDiv.style.display = "block"
//     toggleCertificationDetails.textContent = "Hide Certification Section"
//   } else {
//     certificationDetailsDiv.style.display = "none"
//     toggleCertificationDetails.textContent = "Show Certification Section"
//   }
// })
//EDUCATION ADD BUTTON DETAILS
var addEducation = document.getElementById("addEducation");
var eductionDetails = document.querySelector(".matriculation");
addEducation.addEventListener("click", function () {
    var newEducationDegreeLabel = document.createElement("label");
    newEducationDegreeLabel.textContent = "Degree";
    var newEducationDegreeInput = document.createElement("input");
    newEducationDegreeInput.type = "text";
    newEducationDegreeInput.placeholder = "Degree Name";
    var newEducationInstituteLabel = document.createElement("label");
    newEducationInstituteLabel.textContent = "School / College / University Name";
    var newEducationInstituteInput = document.createElement("input");
    newEducationInstituteInput.type = "text";
    newEducationInstituteInput.placeholder = "Degree Name";
    var newEducationStartLabel = document.createElement("label");
    newEducationStartLabel.textContent = "Start Year";
    var newEducationStartInput = document.createElement("input");
    newEducationStartInput.type = "Date";
    var newEducationEndLabel = document.createElement("label");
    newEducationEndLabel.textContent = "End Year";
    var newEducationEndInput = document.createElement("input");
    newEducationEndInput.type = "Date";
    eductionDetails.appendChild(newEducationDegreeLabel);
    eductionDetails.appendChild(newEducationDegreeInput);
    eductionDetails.appendChild(newEducationInstituteLabel);
    eductionDetails.appendChild(newEducationInstituteInput);
    eductionDetails.appendChild(newEducationStartLabel);
    eductionDetails.appendChild(newEducationStartInput);
    eductionDetails.appendChild(newEducationEndLabel);
    eductionDetails.appendChild(newEducationEndInput);
});
//Professional Experience ADD EXPERIENCE BUTTON DETAILS
var addExperience = document.getElementById("addExperience");
var experienceDetails = document.querySelector(".firstExperienceDiv");
addExperience.addEventListener("click", function () {
    var newExperienceEmployerLabel = document.createElement("label");
    newExperienceEmployerLabel.textContent = "Employer";
    var newExperienceEmployerInput = document.createElement("input");
    newExperienceEmployerInput.type = "text";
    newExperienceEmployerInput.placeholder = "Organization Name";
    var newExperienceJobTitleLabel = document.createElement("label");
    newExperienceJobTitleLabel.textContent = "Job Title";
    var newExperienceJobTitleInput = document.createElement("input");
    newExperienceJobTitleInput.type = "text";
    newExperienceJobTitleInput.placeholder = "Designation";
    var newExperienceStartDateLabel = document.createElement("label");
    newExperienceStartDateLabel.textContent = "Start Year";
    var newExperienceStartDateInput = document.createElement("input");
    newExperienceStartDateInput.type = "Date";
    var newExperienceEndDateLabel = document.createElement("label");
    newExperienceEndDateLabel.textContent = "End Year";
    var newExperienceEndDateInput = document.createElement("input");
    newExperienceEndDateInput.type = "Date";
    var jobDescriptionDetailsCreated = document.createElement("div");
    jobDescriptionDetailsCreated.className = "jobDescriptionDetails";
    jobDescriptionDetailsCreated.textContent = "job Description";
    var inputElementInJobDescription = document.createElement("input");
    inputElementInJobDescription.className = "firstJobJD";
    inputElementInJobDescription.placeholder =
        "Enter brief job description (Required)";
    var inputElementInJobDescription1 = document.createElement("input");
    inputElementInJobDescription1.className = "firstJobJD1";
    inputElementInJobDescription1.placeholder =
        "Enter brief job description (Required)";
    var inputElementInJobDescription2 = document.createElement("input");
    inputElementInJobDescription2.className = "firstJobJD2";
    inputElementInJobDescription2.placeholder =
        "Enter brief job description (Optional)";
    var inputElementInJobDescription3 = document.createElement("input");
    inputElementInJobDescription3.className = "firstJobJD3";
    inputElementInJobDescription3.placeholder =
        "Enter brief job description (Optional)";
    var inputElementInJobDescription4 = document.createElement("input");
    inputElementInJobDescription4.className = "firstJobJD4";
    inputElementInJobDescription4.placeholder =
        "Enter brief job description (Optional)";
    experienceDetails.appendChild(newExperienceEmployerLabel);
    experienceDetails.appendChild(newExperienceEmployerInput);
    experienceDetails.appendChild(newExperienceJobTitleLabel);
    experienceDetails.appendChild(newExperienceJobTitleInput);
    experienceDetails.appendChild(newExperienceStartDateLabel);
    experienceDetails.appendChild(newExperienceStartDateInput);
    experienceDetails.appendChild(newExperienceEndDateLabel);
    experienceDetails.appendChild(newExperienceEndDateInput);
    experienceDetails.appendChild(jobDescriptionDetailsCreated);
    experienceDetails.appendChild(inputElementInJobDescription);
    experienceDetails.appendChild(inputElementInJobDescription1);
    experienceDetails.appendChild(inputElementInJobDescription2);
    experienceDetails.appendChild(inputElementInJobDescription3);
    experienceDetails.appendChild(inputElementInJobDescription4);
});
var educationDetailDiv = document.querySelector(".educationDetails");
var toggleEducationDetails = document.getElementById("toggleEducationDetails");
toggleEducationDetails.addEventListener("click", function () {
    if (educationDetailDiv.style.display === "none") {
        educationDetailDiv.style.display = "block";
        toggleEducationDetails.textContent = "Hide Education Menu";
    }
    else {
        educationDetailDiv.style.display = "none";
        toggleEducationDetails.textContent = "Show Education Menu";
    }
});
var experienceDetailDiv = document.querySelector(".experienceDetails");
var toggleExperienceDetails = document.getElementById("toggleExperience");
toggleExperienceDetails.addEventListener("click", function () {
    if (experienceDetailDiv.style.display === "none") {
        experienceDetailDiv.style.display = "block";
        toggleExperienceDetails.textContent = "Hide Experience Menu";
    }
    else {
        experienceDetailDiv.style.display = "none";
        toggleExperienceDetails.textContent = "Show Experience Menu";
    }
});
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var resumeOutputDisplay = document.querySelector(".resumeOutput");
    var nameElement = document.getElementById("name");
    var highlightElement = document.getElementById("highlight");
    var addressElement = document.getElementById("address");
    var contactElement = document.getElementById("contact");
    var emailElement = document.getElementById("email");
    var cityElement = document.getElementById("city");
    var pictureElement = document.getElementById("picture");
    var professionalSummaryElement = document.getElementsByName("professionalSummary")[0];
    var skill1Element = document.querySelector(".skill1");
    var skill2Element = document.querySelector(".skill2");
    var skill3Element = document.querySelector(".skill3");
    var skill4Element = document.querySelector(".skill4");
    var matricDegreeNameElement = document.querySelector(".degreeNameMatric");
    var instituteNameMatricElement = document.querySelector(".instituteNameMatric");
    var matricDegreeStartYearElement = document.querySelector(".startYearMatric");
    var matricDegreeEndYearElement = document.querySelector(".endYearMatric");
    var firstOrganizationName = document.querySelector(".firstOrganization");
    var firstOrganizationDesignation = document.querySelector(".firstOrganizationDesignation");
    var firstOrganizationStartDate = document.querySelector(".jobStartDate1");
    var firstOrganizationEndDate = document.querySelector(".jobEndDate1");
    var firstJobJd = document.querySelector(".firstJobJD");
    var firstJobJd1 = document.querySelector(".firstJobJD1");
    var firstJobJd2 = document.querySelector(".firstJobJD2");
    var firstJobJd3 = document.querySelector(".firstJobJD3");
    var firstJobJd4 = document.querySelector(".firstJobJD4");
    //creating resume Output
    var allOutputs = nameElement &&
        highlightElement &&
        addressElement &&
        contactElement &&
        emailElement &&
        cityElement &&
        pictureElement &&
        professionalSummaryElement &&
        skill1Element &&
        skill2Element;
    if (allOutputs) {
        var name_1 = nameElement.value;
        var highlight = highlightElement.value;
        var address = addressElement.value;
        var contact = contactElement.value;
        var email = emailElement.value;
        var city = cityElement.value;
        var professionalSummary_1 = professionalSummaryElement.value;
        var skill1 = skill1Element.value;
        var skill2 = skill2Element.value;
        var skill3 = skill3Element.value;
        var skill4 = skill4Element.value;
        var matricDegreeName = matricDegreeNameElement.value;
        var instituteNameMatric = instituteNameMatricElement.value;
        var matricDegreeStartYear = matricDegreeStartYearElement.value;
        var matricDegreeEndYear = matricDegreeEndYearElement.value;
        var firstOrganization = firstOrganizationName.value;
        var firstJobDesignation = firstOrganizationDesignation.value;
        var firstJobStartDate = firstOrganizationStartDate.value;
        var firstJobEndDate = firstOrganizationEndDate.value;
        var firstJobJobDescription = firstJobJd.value;
        var firstJobJobDescription1 = firstJobJd1.value;
        var firstJobJobDescription2 = firstJobJd2.value;
        var firstJobJobDescription3 = firstJobJd3.value;
        var firstJobJobDescription4 = firstJobJd4.value;
        var profilePictureFile = (_a = pictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        var resumeOutput = "\n  <div class=\"resumeOutput1\">\n\n  \n  \n   <div class=\"mainPortion\">\n      <div class=\"leftPersonalInfo\">\n           <div class=\"profileImage\">\n              ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n           </div>\n          <div class=\"personalInfoSumm\">      \n            <p class=\"personalInfoSummName\"><strong> ").concat(name_1, "</strong></p>\n            <p class=\"highlights\"><strong></strong> ").concat(highlight, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <p><strong>Phone:</strong> ").concat(contact, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>City:</strong> ").concat(city, "</p>\n          </div>\n\n          <div class=\"keySkills\">\n              <h2><u>Key Skills</u></h2>\n              <ul>\n              <li>").concat(skill1, "</li>\n              <li>").concat(skill2, "</li>\n              <li>").concat(skill3, "</li>\n              <li>").concat(skill4, "</li>\n              ").concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n              </ul>\n          </div>\n        </div>\n<div class=\"rightProfessionalInfo\">\n      <div class=\"professionalSummaryDetailed\">\n        <p>").concat(professionalSummary_1.replace(/\n/g, "<br>"), "</p>\n      </div>\n\n\n   <div class=\"experienceDivInOutput\">\n      <div class=\"experienceHeadingInOutput\">\n       <h2>Professional Experience</h2>\n      </div>\n\n     <div class=\"experienceDetailsEnteredDiv\">\n          <div class=\"organizationNameDiv\">\n            <p>").concat(firstOrganization, "</p>\n                <div class=\"startAndEndDate\">\n                  <p>").concat(firstJobStartDate ? firstJobStartDate : "").concat(firstJobStartDate && firstJobEndDate ? "-" : "").concat(firstJobEndDate ? firstJobEndDate : "", "</p>\n                </div>\n          </div>\n          <div class=\"designationInOutput\">\n            <p>").concat(firstJobDesignation, "</p>\n          </div>\n          <h4>Job Description</h4>\n          <ul>\n          <p> <li>").concat(firstJobJobDescription, "</li></p>\n          <p> <li>").concat(firstJobJobDescription1, "</li></p>\n          <p> <li>").concat(firstJobJobDescription2, "</li></p>\n          <p> <li>").concat(firstJobJobDescription3, "</li></p>\n          <p> <li>").concat(firstJobJobDescription4, "</li></p>\n          <ul>\n      </div>\n    </div>\n\n        <div class=\"educationDivInOutput\">\n          <div class=\"experienceHeadingInOutput\">\n            <h2>Education</h2>\n          </div>\n          <div class=\"educationDetailsEnteredDiv\">\n            \n            <p><strong>").concat(matricDegreeName ? matricDegreeName : "").concat(matricDegreeName && instituteNameMatric ? "," : "").concat(instituteNameMatric ? instituteNameMatric : "").concat((matricDegreeName || instituteNameMatric) && city ? "," : "", " ").concat(city ? city : "", "</strong> </p>\n            <p>").concat(matricDegreeStartYear ? matricDegreeStartYear : "").concat(matricDegreeStartYear && matricDegreeEndYear ? " - " : "").concat(matricDegreeEndYear ? matricDegreeEndYear : "", "</p>\n\n          </div>\n        </div>\n  </div>\n</div>\n\n  \n  ");
        var resumeOutputElement_1 = document.querySelector(".resumeOutput");
        if (resumeOutputElement_1) {
            resumeOutputElement_1.innerHTML = resumeOutput;
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement_1.appendChild(buttonsContainer);
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                var newTab = window.open("", "_blank");
                if (newTab) {
                    var content = "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>Resume Output</title>\n         <link rel=\"stylesheet\" href=\"style.css\"> <!-- Include external stylesheets -->\n          \n        </head>\n        <body>\n          ".concat(resumeOutputElement_1.outerHTML, " <!-- Include only the resume output content -->\n        </body>\n        </html>\n      ");
                    // Write content to the new tab
                    newTab.document.open();
                    newTab.document.write(content);
                    newTab.document.close();
                }
                else {
                    console.error("Failed to open a new tab. Ensure pop-ups are not blocked.");
                }
            });
            buttonsContainer.appendChild(downloadButton);
        }
        else {
            console.error("Resume Output elements are missing");
        }
    }
});

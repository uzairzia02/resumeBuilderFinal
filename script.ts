const personalInformationSection = document.getElementById(
  "personal-Information"
) as HTMLElement;
const togglePersonalInformation = document.getElementById(
  "togglePersonalInformation"
) as HTMLButtonElement;

// Check if both elements are correctly selected

let isPersonalInformationSectionVisible = true;

togglePersonalInformation.addEventListener("click", () => {
  if (isPersonalInformationSectionVisible) {
    personalInformationSection.style.display = "none";
    togglePersonalInformation.textContent = "Show Personal Information";
  } else {
    personalInformationSection.style.display = "block";
    togglePersonalInformation.textContent = "Hide Personal Information";
  }
  isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
});

const professionalSummary = document.getElementById(
  "professionalSummary"
) as HTMLElement;
const toggleProfessionalSummary = document.getElementById(
  "toggleProfessionalSummary"
) as HTMLButtonElement;

toggleProfessionalSummary.addEventListener("click", () => {
  if (professionalSummary.style.display === "none") {
    professionalSummary.style.display = "block";
    toggleProfessionalSummary.textContent = "Hide Professional Summary";
  } else {
    professionalSummary.style.display = "none";
    toggleProfessionalSummary.textContent = "Show Professional Summary";
  }
});

const addSkills = document.getElementById("addSkills") as HTMLButtonElement;
const skillsDetails = document.querySelector(
  ".skillsDetails"
) as HTMLDivElement;
const skillsArray: string[] = [];

addSkills.addEventListener("click", () => {
  const newSkillLabel = document.createElement("label");
  newSkillLabel.textContent = "Add more skill";

  const newSkillInput = document.createElement("input");
  newSkillInput.type = "text";
  newSkillInput.placeholder = "Add new skill";
  newSkillInput.addEventListener("input", (Event) => {
    const input = Event.target as HTMLInputElement;
    const skillIndex = Array.from(skillsDetails.children).indexOf(
      newSkillInput
    );

    if (input.value.trim() !== "") {
      skillsArray[skillIndex] = input.value.trim();
    } else {
      skillsArray.splice(skillIndex, 1);
    }
  });

  skillsDetails.appendChild(newSkillLabel);
  skillsDetails.appendChild(newSkillInput);
});

const skillsDetailsDiv = document.querySelector(
  ".skillsDetails"
) as HTMLElement;
const toggleSkillDetails = document.getElementById(
  "toggleSkills"
) as HTMLButtonElement;

toggleSkillDetails.addEventListener("click", () => {
  if (skillsDetailsDiv.style.display === "none") {
    skillsDetailsDiv.style.display = "block";
    toggleSkillDetails.textContent = "Hide Skills Section";
  } else {
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

const addEducation = document.getElementById(
  "addEducation"
) as HTMLButtonElement;
const eductionDetails = document.querySelector(
  ".matriculation"
) as HTMLDivElement;

addEducation.addEventListener("click", () => {
  const newEducationDegreeLabel = document.createElement("label");
  newEducationDegreeLabel.textContent = "Degree";
  const newEducationDegreeInput = document.createElement("input");
  newEducationDegreeInput.type = "text";
  newEducationDegreeInput.placeholder = "Degree Name";

  const newEducationInstituteLabel = document.createElement("label");
  newEducationInstituteLabel.textContent = "School / College / University Name";
  const newEducationInstituteInput = document.createElement("input");
  newEducationInstituteInput.type = "text";
  newEducationInstituteInput.placeholder = "Degree Name";

  const newEducationStartLabel = document.createElement("label");
  newEducationStartLabel.textContent = "Start Year";
  const newEducationStartInput = document.createElement("input");
  newEducationStartInput.type = "Date";

  const newEducationEndLabel = document.createElement("label");
  newEducationEndLabel.textContent = "End Year";
  const newEducationEndInput = document.createElement("input");
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

const addExperience = document.getElementById(
  "addExperience"
) as HTMLButtonElement;
const experienceDetails = document.querySelector(
  ".firstExperienceDiv"
) as HTMLDivElement;

addExperience.addEventListener("click", () => {
  const newExperienceEmployerLabel = document.createElement("label");
  newExperienceEmployerLabel.textContent = "Employer";

  const newExperienceEmployerInput = document.createElement("input");
  newExperienceEmployerInput.type = "text";
  newExperienceEmployerInput.placeholder = "Organization Name";

  const newExperienceJobTitleLabel = document.createElement("label");
  newExperienceJobTitleLabel.textContent = "Job Title";

  const newExperienceJobTitleInput = document.createElement("input");
  newExperienceJobTitleInput.type = "text";
  newExperienceJobTitleInput.placeholder = "Designation";

  const newExperienceStartDateLabel = document.createElement("label");
  newExperienceStartDateLabel.textContent = "Start Year";

  const newExperienceStartDateInput = document.createElement("input");
  newExperienceStartDateInput.type = "Date";

  const newExperienceEndDateLabel = document.createElement("label");
  newExperienceEndDateLabel.textContent = "End Year";

  const newExperienceEndDateInput = document.createElement("input");
  newExperienceEndDateInput.type = "Date";

  const jobDescriptionDetailsCreated = document.createElement("div");
  jobDescriptionDetailsCreated.className = "jobDescriptionDetails";
  jobDescriptionDetailsCreated.textContent = "job Description";

  const inputElementInJobDescription = document.createElement("input");
  inputElementInJobDescription.className = "firstJobJD";
  inputElementInJobDescription.placeholder =
    "Enter brief job description (Required)";

  const inputElementInJobDescription1 = document.createElement("input");
  inputElementInJobDescription1.className = "firstJobJD1";
  inputElementInJobDescription1.placeholder =
    "Enter brief job description (Required)";

  const inputElementInJobDescription2 = document.createElement("input");
  inputElementInJobDescription2.className = "firstJobJD2";
  inputElementInJobDescription2.placeholder =
    "Enter brief job description (Optional)";

  const inputElementInJobDescription3 = document.createElement("input");
  inputElementInJobDescription3.className = "firstJobJD3";
  inputElementInJobDescription3.placeholder =
    "Enter brief job description (Optional)";

  const inputElementInJobDescription4 = document.createElement("input");
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

const educationDetailDiv = document.querySelector(
  ".educationDetails"
) as HTMLElement;
const toggleEducationDetails = document.getElementById(
  "toggleEducationDetails"
) as HTMLButtonElement;

toggleEducationDetails.addEventListener("click", () => {
  if (educationDetailDiv.style.display === "none") {
    educationDetailDiv.style.display = "block";
    toggleEducationDetails.textContent = "Hide Education Menu";
  } else {
    educationDetailDiv.style.display = "none";
    toggleEducationDetails.textContent = "Show Education Menu";
  }
});

const experienceDetailDiv = document.querySelector(
  ".experienceDetails"
) as HTMLElement;
const toggleExperienceDetails = document.getElementById(
  "toggleExperience"
) as HTMLButtonElement;

toggleExperienceDetails.addEventListener("click", () => {
  if (experienceDetailDiv.style.display === "none") {
    experienceDetailDiv.style.display = "block";
    toggleExperienceDetails.textContent = "Hide Experience Menu";
  } else {
    experienceDetailDiv.style.display = "none";
    toggleExperienceDetails.textContent = "Show Experience Menu";
  }
});

document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const resumeOutputDisplay = document.querySelector(
      ".resumeOutput"
    ) as HTMLElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const highlightElement = document.getElementById(
      "highlight"
    ) as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    const contactElement = document.getElementById(
      "contact"
    ) as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const cityElement = document.getElementById("city") as HTMLInputElement;
    const pictureElement = document.getElementById(
      "picture"
    ) as HTMLInputElement;
    const professionalSummaryElement = document.getElementsByName(
      "professionalSummary"
    )[0] as HTMLTextAreaElement;
    const skill1Element = document.querySelector(".skill1") as HTMLInputElement;
    const skill2Element = document.querySelector(".skill2") as HTMLInputElement;
    const skill3Element = document.querySelector(".skill3") as HTMLInputElement;
    const skill4Element = document.querySelector(".skill4") as HTMLInputElement;
    const matricDegreeNameElement = document.querySelector(
      ".degreeNameMatric"
    ) as HTMLInputElement;
    const instituteNameMatricElement = document.querySelector(
      ".instituteNameMatric"
    ) as HTMLInputElement;
    const matricDegreeStartYearElement = document.querySelector(
      ".startYearMatric"
    ) as HTMLInputElement;
    const matricDegreeEndYearElement = document.querySelector(
      ".endYearMatric"
    ) as HTMLInputElement;

    const firstOrganizationName = document.querySelector(
      ".firstOrganization"
    ) as HTMLInputElement;
    const firstOrganizationDesignation = document.querySelector(
      ".firstOrganizationDesignation"
    ) as HTMLInputElement;
    const firstOrganizationStartDate = document.querySelector(
      ".jobStartDate1"
    ) as HTMLInputElement;
    const firstOrganizationEndDate = document.querySelector(
      ".jobEndDate1"
    ) as HTMLInputElement;
    const firstJobJd = document.querySelector(
      ".firstJobJD"
    ) as HTMLInputElement;
    const firstJobJd1 = document.querySelector(
      ".firstJobJD1"
    ) as HTMLInputElement;
    const firstJobJd2 = document.querySelector(
      ".firstJobJD2"
    ) as HTMLInputElement;
    const firstJobJd3 = document.querySelector(
      ".firstJobJD3"
    ) as HTMLInputElement;
    const firstJobJd4 = document.querySelector(
      ".firstJobJD4"
    ) as HTMLInputElement;

    //creating resume Output

    const allOutputs =
      nameElement &&
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
      const name = nameElement.value;
      const highlight = highlightElement.value;
      const address = addressElement.value;
      const contact = contactElement.value;
      const email = emailElement.value;
      const city = cityElement.value;
      const professionalSummary = professionalSummaryElement.value;
      const skill1 = skill1Element.value;
      const skill2 = skill2Element.value;
      const skill3 = skill3Element.value;
      const skill4 = skill4Element.value;
      const matricDegreeName = matricDegreeNameElement.value;
      const instituteNameMatric = instituteNameMatricElement.value;
      const matricDegreeStartYear = matricDegreeStartYearElement.value;
      const matricDegreeEndYear = matricDegreeEndYearElement.value;
      const firstOrganization = firstOrganizationName.value;
      const firstJobDesignation = firstOrganizationDesignation.value;
      const firstJobStartDate = firstOrganizationStartDate.value;
      const firstJobEndDate = firstOrganizationEndDate.value;
      const firstJobJobDescription = firstJobJd.value;
      const firstJobJobDescription1 = firstJobJd1.value;
      const firstJobJobDescription2 = firstJobJd2.value;
      const firstJobJobDescription3 = firstJobJd3.value;
      const firstJobJobDescription4 = firstJobJd4.value;

      const profilePictureFile = pictureElement.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      const resumeOutput = `
  <div class="resumeOutput1">

  
  
   <div class="mainPortion">
      <div class="leftPersonalInfo">
           <div class="profileImage">
              ${
                profilePictureURL
                  ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
                  : ""
              }
           </div>
          <div class="personalInfoSumm">      
            <p class="personalInfoSummName"><strong> ${name}</strong></p>
            <p class="highlights"><strong></strong> ${highlight}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Phone:</strong> ${contact}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>City:</strong> ${city}</p>
          </div>

          <div class="keySkills">
              <h2><u>Key Skills</u></h2>
              <ul>
              <li>${skill1}</li>
              <li>${skill2}</li>
              <li>${skill3}</li>
              <li>${skill4}</li>
              ${skillsArray.map((skill) => `<li>${skill}</li>`).join("")}
              </ul>
          </div>
        </div>
<div class="rightProfessionalInfo">
      <div class="professionalSummaryDetailed">
        <p>${professionalSummary.replace(/\n/g, "<br>")}</p>
      </div>


   <div class="experienceDivInOutput">
      <div class="experienceHeadingInOutput">
       <h2>Professional Experience</h2>
      </div>

     <div class="experienceDetailsEnteredDiv">
          <div class="organizationNameDiv">
            <p>${firstOrganization}</p>
                <div class="startAndEndDate">
                  <p>${firstJobStartDate ? firstJobStartDate : ""}${
        firstJobStartDate && firstJobEndDate ? "-" : ""
      }${firstJobEndDate ? firstJobEndDate : ""}</p>
                </div>
          </div>
          <div class="designationInOutput">
            <p>${firstJobDesignation}</p>
          </div>
          <h4>Job Description</h4>
          <ul>
          <p> <li>${firstJobJobDescription}</li></p>
          <p> <li>${firstJobJobDescription1}</li></p>
          <p> <li>${firstJobJobDescription2}</li></p>
          <p> <li>${firstJobJobDescription3}</li></p>
          <p> <li>${firstJobJobDescription4}</li></p>
          <ul>
      </div>
    </div>

        <div class="educationDivInOutput">
          <div class="experienceHeadingInOutput">
            <h2>Education</h2>
          </div>
          <div class="educationDetailsEnteredDiv">
            
            <p><strong>${matricDegreeName ? matricDegreeName : ""}${
        matricDegreeName && instituteNameMatric ? "," : ""
      }${instituteNameMatric ? instituteNameMatric : ""}${
        (matricDegreeName || instituteNameMatric) && city ? "," : ""
      } ${city ? city : ""}</strong> </p>
            <p>${matricDegreeStartYear ? matricDegreeStartYear : ""}${
        matricDegreeStartYear && matricDegreeEndYear ? " - " : ""
      }${matricDegreeEndYear ? matricDegreeEndYear : ""}</p>

          </div>
        </div>
  </div>
</div>

  
  `;

      const resumeOutputElement = document.querySelector(".resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;

        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement.appendChild(buttonsContainer);

        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as PDF";
        downloadButton.addEventListener("click", () => {
          const newTab = window.open("", "_blank");
          if (newTab) {
            const content = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume Output</title>
         <link rel="stylesheet" href="style.css"> <!-- Include external stylesheets -->
          
        </head>
        <body>
          ${resumeOutputElement.outerHTML} <!-- Include only the resume output content -->
        </body>
        </html>
      `;
      
            // Write content to the new tab
            newTab.document.open();
            newTab.document.write(content);
            newTab.document.close();
          } else {
            console.error("Failed to open a new tab. Ensure pop-ups are not blocked.");
          }
  
        });
        buttonsContainer.appendChild(downloadButton);
      } else {
        console.error("Resume Output elements are missing");
      }
    }
  });

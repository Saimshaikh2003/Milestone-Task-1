var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("submit", function (event) {
      var _a;
      event.preventDefault();
      // Get reference to form elements using their ids
      var profilePictureInput = document.getElementById("profilePicture");
      var nameElement = document.getElementById("name");
      var emailElement = document.getElementById("email");
      var phoneElement = document.getElementById("Phone"); // Fixed the ID
      var educationElement = document.getElementById("education");
      var experienceElement = document.getElementById("experience");
      var skillsElement = document.getElementById("skills");
      //*** */
      var usernameElement = document.getElementById("username");
      if (
        profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        skillsElement &&
        //** */
        usernameElement
      ) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //** */
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(
          username.replace(/\s+/g, "_"),
          "_cv.html"
        );
        /// picture element
        var profilePictureFile =
          (_a = profilePictureInput.files) === null || _a === void 0
            ? void 0
            : _a[0];
        var profilePictureURL = profilePictureFile
          ? URL.createObjectURL(profilePictureFile)
          : "";
        var resumeOutput = "\n        <h2>Resume</h2>\n            "
          .concat(
            profilePictureURL
              ? '<img src="'.concat(
                  profilePictureURL,
                  '" alt="ProfilePicture" class= "profilePicture"/>'
                )
              : "",
            "\n\n             <p><strong>Name:</strong> "
          )
          .concat(name_1, "</p>\n            <p><strong>Email:</strong> ")
          .concat(email, "</p>\n            <p><strong>Phone Number:</strong> ")
          .concat(
            phone,
            "</p>\n\n            <h3>Education</h3>\n            <p>"
          )
          .concat(
            education,
            "</p>\n\n            <h3>Work Experience</h3>\n            <p>"
          )
          .concat(
            experience,
            "</p>\n\n            <h3>Skills</h3>\n            <p>"
          )
          .concat(skills, "</p>\n        ");
        //** */
        var downloadLink = document.createElement("a");
        downloadLink.href =
          "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download Your 2024 Resume";
        // resume output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
          resumeOutputElement.innerHTML = resumeOutput;
          //**
          //**
          resumeOutputElement.appendChild(downloadLink);
          resumeOutputElement.style.display = "block";
        }
      } else {
        console.error("One or more form elements are missing.");
      }
    });

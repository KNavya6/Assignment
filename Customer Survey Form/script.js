function validateForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.getElementById("male").checked ? "Male" : "";
    gender += document.getElementById("female").checked ? "Female" : "";
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    var popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    document.getElementById("popupResult").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

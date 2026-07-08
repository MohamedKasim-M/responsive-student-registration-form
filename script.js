// Select the form and table body
const studentForm = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");

// Variable to generate registration numbers
let regNo = 1;

// Listen for form submission
studentForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values from all input fields
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const state = document.getElementById("state").value.trim();
    const country = document.getElementById("country").value.trim();

    // Get the selected gender radio button
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validate all fields
    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        address === "" ||
        pincode === "" ||
        state === "" ||
        country === "" ||
        !gender
    ) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Create a new table row
    const newRow = document.createElement("tr");

    // Insert submitted data into the row
    newRow.innerHTML = `
        <td>${String(regNo).padStart(3, "0")}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender.value}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Add the row to the table body
    tableBody.appendChild(newRow);

    // Increase registration number for the next student
    regNo++;

    // Reset the form after successful submission
    studentForm.reset();
});
document.getElementById("employeeForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Get form values
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const designation = document.getElementById("designation").value;
  const url = document.getElementById("url").value;
  const gender = document.getElementById("gender").value;

  // Validate name field (only characters allowed)
  const namePattern = /^[A-Za-z ]+$/;
  const isValidName = namePattern.test(name);
  const nameErrorSpan = document.getElementById("name-error");
  nameErrorSpan.textContent = isValidName ? "" : "Invalid name";

  // Validate age field (between 18 and 60 allowed)
  const isValidAge = age >= 18 && age <= 60;
  const ageErrorSpan = document.getElementById("age-error");
  ageErrorSpan.textContent = isValidAge ? "" : "Invalid age";

  // If all inputs are valid, proceed to save the data in JSON format
  if (isValidName && isValidAge) {
    // Create a JSON object with the form data
    const employeeData = {
      id: id,
      name: name,
      age: age,
      designation: designation,
      url: url,
      gender: gender,
    };

    // Convert the JSON object to a JSON string

    const UserData = JSON.parse(localStorage.getItem("employeeData"))
    console.log("Usrdata", UserData)

    localStorage.setItem("employeeData", JSON.stringify([...UserData, employeeData]));

    window.open("show_details.html", "_self");
    // Redirect to another page to display the saved details in a tabular form

    console.log(localStorage.getItem("employeeData"))

  }

});

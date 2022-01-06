//import tools
const express = require("express");
const patients = require("./patients");
// Where our server will run
const PORT = 4001;

// Create server
const app = express();

// HTTP METHODS => GET (get data)/request for data
app.get("/hello", (request, response) => {
  console.log("I got a request!");
  console.log("The type of this request is: ", request.method);
  response.send("How is it going?");
});

// 4001/patients
app.get("/patients", (request, response) => {
  console.log("I got a request for the patient data!");
  const patientList = patients;
  response.send(patientList);
});

// dynamic route => :id is a variable
// 4001/patients/82
app.get("/patients/:id", (request, response) => {
  const id = request.params.id;
  console.log("What is id?", id);
  const specificPatient = patients.find((p) => p.id == id);

  if (specificPatient === null || specificPatient === undefined) {
    response.status(404).send("Patient not found");
  } else {
    response.send(specificPatient);
  }
});

// start server
app.listen(PORT, () => console.log("Hey im running on port 4001"));

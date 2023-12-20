// Ask the user to input their marks
let rawMarks = prompt("Enter your marks:");

function generateStudentGrade(rawMarks) {
  // Convert the rawMarks to a number
  let marks = parseFloat(rawMarks);

  // Check if the marks is a valid number
  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid marks. Please enter a number between 0 and 100.");
    return;
  }

  // Calculate the actual grade
  let grade;

switch (true) {
  case (marks > 79):
    grade = "A";
    break;
  case (marks >= 60):
    grade = "B";
    break;
  case (marks >= 50):
    grade = "C";
    break;
  case (marks >= 40):
    grade = "D";
    break;
  default:
    grade = "E";
}


  // Output the result
  console.log(`Your grade is ${grade}`);
}

// Call the function
generateStudentGrade(rawMarks);
// Ask the user to input their speed
  let rawSpeed = prompt("Enter the speed of the car in km/h:");

function speedDetector(rawSpeed) {
    // Convert the rawSpeed to a number
    let speed = parseFloat(rawSpeed);
  
    // Check if the speed is a valid number
    if (isNaN(speed) || speed < 0) {
      console.log("Invalid speed. Please enter a valid number.");
      return;
    }
  
    // Declare the speed limit and demerit points limit
    let speedLimit = 70;
    let demeritPointsLimit = 12;
  
    // Calculate demerit points
    let demeritPoints = Math.floor((speed - speedLimit) / 5);
  
    // Check if demerit points exceed the limit
    if (demeritPoints >= demeritPointsLimit) {
      console.log("License suspended. Demerit Points: " + demeritPoints);
    } else if (demeritPoints > 0) {
      console.log(`Points:  ${demeritPoints}`);
    } else {
      console.log("Ok");
    }
  }
  
  // Call the function
  speedDetector(rawSpeed);
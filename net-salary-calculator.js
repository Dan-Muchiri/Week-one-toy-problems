// Prompt user for input
const basicSalary = parseFloat(prompt("Enter monthly basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));
const pensionablePay = parseFloat(prompt(`Enter NSSF pensionable pay`))
let insuranceRelief = prompt(`Are you eligible for insurance relief? If you do, enter "YES", if you do not, enter"NO":`);
let pensionFund = prompt(`Are you eligible for allowable pension fund contribution? If you do, enter "YES", if you do not, enter"NO":`);
let ownerOccupier = prompt(`Are you eligible for allowable owner occupier interest? If you do, enter "YES", if you do not, enter"NO":`);
let disability = prompt(`Are you eligible for disability exemption? If you do, enter "YES", if you do not, enter"NO":`);

function calculateNetSalary() {
    // Check if the inputs are valid numbers
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Please enter valid numbers for basic salary, benefits.");
        return;
    }

    //convert to uppercase to help with if statements
    insuranceRelief = insuranceRelief.toUpperCase();
    pensionFund = pensionFund.toUpperCase();
    ownerOccupier = ownerOccupier.toUpperCase();
    disability = disability.toUpperCase();

    //check if the inputs are valid
    if (insuranceRelief === "YES" || insuranceRelief === "NO"){   
    }else {
        console.log(`Invalid Insurance response. Please enter either "YES" or "NO"`)
        return;
    }
    if (pensionFund === "YES" || pensionFund === "NO") {
    }else {
        console.log(`Invalid Allowable Pension fund contribution response. Please enter either "YES" or "NO"`)
        return;
    }
    if (ownerOccupier === "YES" || ownerOccupier === "NO") {
    }else{
        console.log(`Invalid allowable owner occupier interest response. Please enter either "YES" or "NO"`)
        return;
    }
    if (disability === "YES" || disability === "NO") {
    }else{
        console.log(`Invalid disability exemption response. Please enter either "YES" or "NO"`)
        return;
    }
    if ( pensionablePay < 0 || pensionablePay> 18000 || isNaN(pensionablePay)){
        console.log("Invalid input. Please enter a valid number for NSSF pensionable pay.");
        return;
    } 

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;


    //Calculate relief
    if (insuranceRelief === 'YES'){
        insuranceRelief = 5000
    }else{
        insuranceRelief = 0
    }
    if (pensionFund === "YES"){
        pensionFund = 20000
    }else{
        pensionFund = 0
    }
    if(ownerOccupier === 'YES'){
        ownerOccupier= 25000
    }else{
        ownerOccupier =0
    }
    if(disability === 'YES'){
        disability = 150000
    }else{
        disability= 0
    }
    const personalRelief =2400
    const housing = 9000
    const relief = personalRelief + insuranceRelief + pensionFund + housing + ownerOccupier + disability

    // Calculate taxable income
    let taxableIncome; 
    if (relief>=grossSalary){
        taxableIncome = 0
    }else{
        taxableIncome = grossSalary - relief
    }

    // Calculate the tax rate
    let taxrate;
    switch(true){
        case (taxableIncome > 800000):
            taxrate = 35
            break; 
        case (taxableIncome >= 500001):
            taxrate = 32.5
            break; 
        case (taxableIncome >= 32334):
            taxrate = 30
            break; 
        case (taxableIncome >= 24001):
            taxrate = 25
            break;
        default:
            taxrate =10
            break;
    }

    // Calculate payee (tax)
    const payee = taxableIncome * taxrate/ 100

    //calculate housingLevy
    const housingLevy = grossSalary *1.5/100

    //calculate NSSF
    const nssf = pensionablePay * 6/100
  
    //calculate NHIF
    let nhif;
    switch (true) {
      case (grossSalary <= 5999):
        nhif = 150;
        break;
      case (grossSalary <= 7999):
        nhif = 300;
        break;
      case (grossSalary <= 11999):
        nhif = 400;
        break;
      case (grossSalary <= 14999):
        nhif = 500;
        break;
      case (grossSalary <= 19999):
        nhif = 600;
        break;
      case (grossSalary <= 24999):
        nhif = 750;
        break;
      case (grossSalary <= 29999):
        nhif = 850;
        break;
      case (grossSalary <= 34999):
        nhif = 900;
        break;
      case (grossSalary <= 39999):
        nhif = 950;
        break;
      case (grossSalary <= 44999):
        nhif = 1000;
        break;
      case (grossSalary <= 49999):
        nhif = 1100;
        break;
      case (grossSalary <= 59999):
        nhif = 1200;
        break;
      case (grossSalary <= 69999):
        nhif = 1300;
        break;
      case (grossSalary <= 79999):
        nhif = 1400;
        break;
      case (grossSalary <= 89999):
        nhif = 1500;
        break;
      case (grossSalary <= 99999):
        nhif = 1600;
        break;
      default:
        nhif = 1700;
    }  
  
    // Calculate net salary
    const netSalary = grossSalary - payee - housingLevy -nssf -nhif
  
    // Display the results
    console.log("Gross Salary: " + grossSalary);
    console.log("taxableincome: " + taxableIncome);
    console.log("payee: " + payee);
    console.log("housing levy: " + housingLevy);
    console.log('NSSF: ' + nssf)
    console.log('NHIF: ' + nhif)
    console.log("Net Salary: " + netSalary);
  }
  

  // Call the function 
  calculateNetSalary();
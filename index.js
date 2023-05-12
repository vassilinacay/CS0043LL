console.log("Hello world! This is Main Activity.")

// Declare 3 global variables without initialization called username,password and role
let username;
let password;
let role;

// Create a login function which is able to prompt the user to provide their username, password and role
function loginFunction(){
    // Prompt the user to provide their username, password, and role
    username = prompt("Enter username: ");
    password = prompt("Enter password: ");
    role = prompt("Enter role: ");

    console.log(username);
    console.log(password);
    console.log(role);

    // Checks if the username, password, and role are not empty 
    if (username === "" || password === "" || role === ""){
        alert("Username, Password, and Role should not be empty.");
        loginFunction();
    }else{
        switch(role){
            case "admin":
                alert("Welcome back to the class portal, admin!");
                break;
            case "teacher":
                alert("Thank you for logging in, teacher!");
                break;
            case "student":
                alert("Welcome to the class portal, student!");
                break;
            default:
                alert("Role out of range.");
                loginFunction();
        }
    }
}
//Create a function which is able to receive 4 numbers as arguments calculate its average
function average(firstGrade, secondGrade, thirdGrade, fourthGrade){
    // Calculate the average of the 4 numbers
    let average = Math.round((firstGrade + secondGrade + thirdGrade + fourthGrade) / 4);
    console.log(`Average: ${firstGrade} + ${secondGrade} + ${thirdGrade} + ${fourthGrade} / 4 = ${average}`);

    // Checks the letter equivalent of average
    if (average <= 74){
        console.log(`Hello, student, your average is ${average}. The letter equivalent is F`);
    } else if (average >= 85 && average <= 89){
        console.log(`Hello, student, your average is ${average}. The letter equivalent is B`);
    } else if (average >= 90 && average <= 95){
        console.log(`Hello, student, your average is ${average}. The letter equivalent is A`);
    } else if (average > 96){
        console.log(`Hello, student, your average is ${average}. The letter equivalent is A+`);
    } else {
        console.log("Error: Invalid Input");
    }
}

// Main program

// Calling the function login
loginFunction();

// Calling the function average
let grade1 = prompt("Enter 1st Grade: ");
let grade2 = prompt("Enter 2nd Grade: ");
let grade3 = prompt("Enter 3rd Grade: ");
let grade4 = prompt("Enter 4th Grade: ");
average(grade1, grade2, grade3, grade4);
function getGeneration(age) {
    if (age >= 0 && age <= 12) {
        return "Gen Alpha";
    } 
    else if (age >= 13 && age <= 28) {
        return "Gen Z";
    } 
    else if (age >= 29 && age <= 44) {
        return "Millennials (Gen Y)";
    } 
    else if (age >= 45 && age <= 60) {
        return "Gen X";
    } 
    else if (age >= 61 && age <= 79) {
        return "Baby Boomers";
    } 
    else if (age >= 80) {
        return "Silent Generation";
    } 
    else {
        return "Invalid age";
    }
}

function showGeneration() {
    let ageInput = document.getElementById("age").value;
    let age = Number(ageInput);

    if (ageInput === "" || age < 0) {
        alert("Please enter a valid age");
        return;
    }

    let generation = getGeneration(age);
    alert("You belong to: " + generation);
}


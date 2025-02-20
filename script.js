// Random number generator
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random unit generator
function getRandomUnit() {
    const units = [
        'grams', 'kilograms', 'pounds', 'milliliters', 'liters', 'teaspoons', 
        'tablespoons', 'fluid ounces', 'cups', 'feet', 'inches', 'centimeters', 
        'meters', 'millimeters', 'kilometers'
    ];
    return units[Math.floor(Math.random() * units.length)];
}

// Conversion function
function convert(unit, value) {
    let convertedValue;
    let convertedUnit;
    
    switch(unit) {
        // Volume conversions
        case 'tablespoons':
            convertedValue = value * 3; // tbsp to tsp
            convertedUnit = 'teaspoons';
            break;
        case 'teaspoons':
            convertedValue = value / 3; // tsp to tbsp
            convertedUnit = 'tablespoons';
            break;
        case 'fluid ounces':
            convertedValue = value * 2; // fl. oz. to tbsp
            convertedUnit = 'tablespoons';
            break;
        case 'cups':
            convertedValue = value * 8; // cups to fl. oz.
            convertedUnit = 'fluid ounces';
            break;
        case 'teaspoons':
            convertedValue = value * 5; // tsp to mL
            convertedUnit = 'milliliters';
            break;
        case 'tablespoons':
            convertedValue = value * 15; // tbsp to mL
            convertedUnit = 'milliliters';
            break;
        case 'fluid ounces':
            convertedValue = value * 30; // fl. oz. to mL
            convertedUnit = 'milliliters';
            break;
        case 'cups':
            convertedValue = value * 250; // cups to mL
            convertedUnit = 'milliliters';
            break;
        case 'liters':
            convertedValue = value * 1000; // L to mL
            convertedUnit = 'milliliters';
            break;
        case 'milliliters':
            convertedValue = value; // mL is the same as cc
            convertedUnit = 'cubic centimeters';
            break;

        // Mass conversions
        case 'pounds':
            convertedValue = value * 16; // lb to ounces
            convertedUnit = 'ounces';
            break;
        case 'kilograms':
            convertedValue = value * 1000; // kg to grams
            convertedUnit = 'grams';
            break;
        case 'grams':
            convertedValue = value / 1000; // g to kg
            convertedUnit = 'kilograms';
            break;
        case 'milligrams':
            convertedValue = value / 1000; // mg to g
            convertedUnit = 'grams';
            break;
        
        // Length conversions
        case 'feet':
            convertedValue = value * 12; // ft to in
            convertedUnit = 'inches';
            break;
        case 'inches':
            convertedValue = value * 2.54; // in to cm
            convertedUnit = 'centimeters';
            break;
        case 'centimeters':
            convertedValue = value / 2.54; // cm to in
            convertedUnit = 'inches';
            break;
        case 'meters':
            convertedValue = value * 39.4; // m to in
            convertedUnit = 'inches';
            break;
        case 'millimeters':
            convertedValue = value / 1000; // mm to m
            convertedUnit = 'meters';
            break;
        case 'kilometers':
            convertedValue = value * 1000; // km to m
            convertedUnit = 'meters';
            break;
        default:
            return null;
    }
    
    return { convertedValue, convertedUnit };
}

// Start the test by generating a random question
function startTest() {
    const randomValue = getRandomNumber(1, 100);
    const randomUnit = getRandomUnit();
    const correctAnswer = convert(randomUnit, randomValue);

    // Display the question
    document.getElementById("testQuestion").innerText = `Convert ${randomValue} ${randomUnit} to ${correctAnswer.convertedUnit}:`;
    document.getElementById("testSection").style.display = 'block';

    // Store the correct answer for later comparison
    window.correctAnswer = correctAnswer;
}

// Check the user's answer and give feedback
function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("testAnswer").value);
    const feedback = document.getElementById("testFeedback");

    if (userAnswer === window.correctAnswer.convertedValue) {
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Incorrect! The correct answer is ${window.correctAnswer.convertedValue} ${window.correctAnswer.convertedUnit}.`;
        feedback.style.color = "red";
    }
}

// Toggle cheat sheet visibility
function toggleCheatSheet() {
    const cheatSheet = document.getElementById("cheatSheet");
    const toggleButton = document.getElementById("toggleCheatSheet");

    if (cheatSheet.style.display === "none" || cheatSheet.style.display === "") {
        cheatSheet.style.display = "block"; // Show cheat sheet
        toggleButton.textContent = "Hide Cheat Sheet"; // Change button text
    } else {
        cheatSheet.style.display = "none"; // Hide cheat sheet
        toggleButton.textContent = "Show Cheat Sheet"; // Revert button text
    }
}

const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

// Add an event listener to prevent increment and decrement keys
celciusEl.addEventListener("keydown", preventUpDownArrow);
fahrenheitEl.addEventListener("keydown", preventUpDownArrow);
kelvinEl.addEventListener("keydown", preventUpDownArrow);

// Add an event listener for input to perform temperature conversion
celciusEl.addEventListener("input", computeTemp);
fahrenheitEl.addEventListener("input", computeTemp);
kelvinEl.addEventListener("input", computeTemp);

function preventUpDownArrow(event) {
    // Prevent the up and down arrow keys from changing the input value
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
    }
}

function computeTemp(event) {
    const currentValue = parseFloat(event.target.value);

    if (isNaN(currentValue)) {
        // Clear other fields if the current field is empty
        switch (event.target.name) {
            case "Celcius":
                fahrenheitEl.value = "";
                kelvinEl.value = "";
                break;

            case "Fahrenheit":
                celciusEl.value = "";
                kelvinEl.value = "";
                break;

            case "Kelvin":
                celciusEl.value = "";
                fahrenheitEl.value = "";
                break;

            default:
                break;
        }
        return; // Exit early if the input is not a valid number
    }

    switch (event.target.name) {
        case "Celcius":
            fahrenheitEl.value = (currentValue * 9 / 5) + 32;
            kelvinEl.value = currentValue + 273.15;
            break;

        case "Fahrenheit":
            celciusEl.value = (currentValue - 32) * 5 / 9;
            kelvinEl.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celciusEl.value = currentValue - 273.15;
            fahrenheitEl.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }
}

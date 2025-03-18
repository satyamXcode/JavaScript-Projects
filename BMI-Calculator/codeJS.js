// Select the form and input elements
const form = document.querySelector('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const results = document.querySelector('#results');
const info = document.querySelector('#info');

// Debugging: Check if elements exist
if (!form || !heightInput || !weightInput || !results || !info) {
  console.error('One or more elements are missing in the DOM!');
} else {
  // Add event listener for form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get height and weight values
    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    // Validate inputs
    if (isNaN(height) || height <= 0) {
      results.innerHTML = `Please give a valid height`;
    } else if (isNaN(weight) || weight <= 0) {
      results.innerHTML = `Please give a valid weight`;
    } else {
      // Calculate BMI
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      results.innerHTML = `<span>${bmi}</span>`; // Display BMI

      // Determine BMI category
      if (bmi < 18.6) {
        info.innerHTML = `<span> You are under weight </span>`;
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        info.innerHTML = `<span> You are normal range </span>`;
      } else {
        info.innerHTML = `<span> You are over weight </span>`;
      }
    }
  });
}
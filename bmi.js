const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate-bmi");
const bmiValueSpan = document.getElementById("bmi-value");
const bmiStatusSpan = document.getElementById("bmi-status");

calculateBtn.addEventListener("click", () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight) {
    alert("Please enter valid height and weight values");
    return;
  }

  // Calculate BMI (converting height from cm to meters)
  const bmi = weight / ((height / 100) ** 2);
  bmiValueSpan.innerText = bmi.toFixed(1);

  // Remove any existing BMI status classes
  bmiStatusSpan.classList.remove("bmi-underweight", "bmi-normal", "bmi-overweight", "bmi-obese");

  // Determine BMI status and update the class accordingly
  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
    bmiStatusSpan.classList.add("bmi-underweight");
  } else if (bmi >= 18.5 && bmi < 25) {
    status = "Normal";
    bmiStatusSpan.classList.add("bmi-normal");
  } else if (bmi >= 25 && bmi < 30) {
    status = "Overweight";
    bmiStatusSpan.classList.add("bmi-overweight");
  } else {
    status = "Obese";
    bmiStatusSpan.classList.add("bmi-obese");
  }
  bmiStatusSpan.innerText = status;
});

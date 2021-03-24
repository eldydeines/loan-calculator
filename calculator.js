window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
    form.addEventListener
  }
});

let values = {};

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value)
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  values = {
    amount: 0,
    years: 0,
    rate: 0
  };
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment.toString());
}

function calculatePeriodicInterest(yrlyRate) {
  return ((yrlyRate / 100) / 12);
}
function calculateNumberofPayments(years) {
  return (years * 12);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  let interest = calculatePeriodicInterest(values.rate);
  let n = calculateNumberofPayments(values.years);
  let basePowered = Math.pow((1 + interest), n);

  return ((values.amount * interest * basePowered) / (basePowered - 1)).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = monthly;
}

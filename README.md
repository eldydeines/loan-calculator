# loan-calculator

We were given the HTML, CSS, and JavaScript for a loan calculator. My goal was to fill in the JavaScript to make the loan calculator functional. The calculator takes an amount to loan (the principle), a term in years, and a yearly rate. The output should be the monthly payment of the loan.

To calculate the monthly payment, use the following formula:

Monthly Payment = [P*i (1 + i)^n)] / [(1 + i)^n - 1]
Where:

P = Amount of principle
i = periodic interest rate (in our case yearly rate ÷ 12)
n = total number of payments (years × 12)

We were also provided a jasmine test file (calculator-test.js). My ultimate goal was to write tests for the calculateMonthlyPayment function. There were two suggested tests and added another.

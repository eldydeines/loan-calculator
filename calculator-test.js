
describe('checking monthly payment values returned', function () {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment(values = { amount: 500000, years: 30, rate: 3.5 })).toEqual("2245.22");
    expect(calculateMonthlyPayment(values = { amount: 1000000, years: 30, rate: 4 })).toEqual("4774.15");
    expect(calculateMonthlyPayment(values = { amount: 250000, years: 15, rate: 2.5 })).toEqual("1666.97");
  });


  it("should return a result with 2 decimal places", function () {
    expect(calculateMonthlyPayment(values = { amount: 500000, years: 30, rate: 3.5 })).toContain(".");
    expect(calculateMonthlyPayment(values = { amount: 1000000, years: 30, rate: 4 })).toContain(".");
    expect(calculateMonthlyPayment(values = { amount: 250000, years: 15, rate: 2.5 })).toContain(".");
  });
});

describe('checking periodic interest values returned', function () {
  it("should return periodic interest correctly", function () {
    expect(calculatePeriodicInterest(3)).toEqual(0.0025);
    expect(calculatePeriodicInterest(4.5)).toEqual(0.00375);
  });
})

/// etc

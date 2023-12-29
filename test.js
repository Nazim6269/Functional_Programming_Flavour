// const func = new Function("a,b", "return a + b");
// console.log(func(10, 20));

const operations = [
  {
    args: [10, 14],
    parms: ["a", "b"],
    body: `console.log(a + b)`,
  },
  {
    args: [10, 14],
    parms: ["a", "b"],
    body: `console.log(a - b)`,
  },
  {
    args: [10, 14],
    parms: ["a", "b"],
    body: `console.log(a * b)`,
  },
];

operations.forEach((operation) => {
  const func = new Function(...operation.parms, operation.body);
  func(...operation.args);
});


// what is the difference between toBe and toEqual and when is it appropriate to use either
describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculator.add(2, 50)).toBe(52);
    });
    test("Addition works", () => {
      expect(calculator.add(24,95)).toBe(119);
    });
    test("Subtraction works", () => {
      expect(calculator.subtract(999,888)).toBe(111);
    });
    test("Multiplication works", () => {
      expect(calculator.multiply(15,15)).toBe(225);
    });
    test("Division works", () => {
      expect(calculator.divide(824, 4)).toBe(206);
    });
    describe("Stretch Goals", () => {
      test("(2+2)/4 == 1", () => {
        expect(calculator.divide(calculator.add(2, 2), 4)).toBe(1);
      });
      // This one is all about the parenthesis!
      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
        expect(calculator.multiply(calculator.multiply(calculator.divide(28,4),calculator.divide(6,2)),calculator.add(calculator.subtract(30,27),calculator.subtract(3,4)))).toBe(42);
      });
    });
  });

  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */
    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
  };
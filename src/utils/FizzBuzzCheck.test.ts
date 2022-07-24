import FizzBuzz from "./FizzBuzzCheck";

test("Recieves a counter argument and returns fizz,buzz or fizzbuzz if the counter value is a multiple of 3,5 or both respectively", () => {
  expect(FizzBuzz(2)).toBe(2);
  expect(FizzBuzz(3)).toBe("Fizz");
  expect(FizzBuzz(5)).toBe("Buzz");
  expect(FizzBuzz(15)).toBe("FizzBuzz");
  expect(FizzBuzz(-3)).toBe("Fizz");
  expect(FizzBuzz(-5)).toBe("Buzz");
  expect(FizzBuzz(-15)).toBe("FizzBuzz");
});

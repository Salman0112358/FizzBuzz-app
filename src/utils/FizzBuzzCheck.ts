export default function FizzBuzz(counter: number): number | string {
  const fizzCheck = counter % 3;
  const buzzCheck = counter % 5;

  if (fizzCheck === 0 && buzzCheck === 0) {
    return "FizzBuzz";
  } else if (fizzCheck === 0) {
    return "Fizz";
  } else if (buzzCheck === 0) {
    return "Buzz";
  } else {
    return counter;
  }
}

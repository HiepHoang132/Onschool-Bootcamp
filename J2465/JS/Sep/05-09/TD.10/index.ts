function calculateFinalSpeed(
  initialSpeed: number,
  inclinations: number[]
): number {
  // Write your code here
  inclinations.forEach((inclination) => {
    initialSpeed -= inclination;
  });

  if (initialSpeed <= 0) return 0;
  else return initialSpeed;
}

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));

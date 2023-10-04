export const getRandomInt = (min: number, max: number): number => {
  min = Math.floor(min);
  max = Math.floor(max);
  const coucou = Math.floor(Math.random() * (max - min + 1)) + min;
  return coucou;
}
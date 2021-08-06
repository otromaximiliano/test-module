export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('booooooooooooooooop');
  }
  return a + b;
};

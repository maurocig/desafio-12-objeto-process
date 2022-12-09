function createRandomNumbers(qty) {
  const numbers = [];
  for (let i = 0; i < qty; i++) {
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    numbers.push(randomNumber);
  }
  return numbers;
}

// function findDuplicates(array) {
//   const duplicatesArray = [],
//     index = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         newArray[index] = array[i];
//         index += 1;
//       }
//     }
//   }
// }

process.on('message', (msg) => {
  const result = createRandomNumbers(+msg);
  process.send(result);
});

console.log(binrayGap(13144192));
console.log(binrayGap(9));
console.log(binrayGap(15));
console.log(binrayGap(20));
console.log(binrayGap(529));

function binrayGap(number) {
  const binaryArray = decimalToBinary(number);
  let maxBinaryGap = 0;
  let tempMax = 0;
  let countingStarted = false;
  for (let i = 0; i < binaryArray.length; i++) {
    if (countingStarted) {
      if (binaryArray[i] === 0) tempMax++;
      else {
        if (tempMax > maxBinaryGap) {
          maxBinaryGap = tempMax;
        }
        tempMax = 0;
      }
    } else if (binaryArray[i] === 1) countingStarted = true;
  }

  return maxBinaryGap;
}


function decimalToBinary(number) {
  if (number === 0) return [0];
  else if (number === 1) return [1];
  else {
    let resultArray = [];
    while (number > 0){      
      resultArray.push(number % 2);
      number = Math.floor(number / 2);
    }

    return resultArray.reverse();
  }
}
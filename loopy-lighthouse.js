let number = 100;
while (number <= 200) { 
  if (number % 3 === 0 && number % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (number % 3 === 0) {
    console.log("Loopy");
  } else if (number % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(number);
  }
  number = number + 1;
}

console.log(number);

const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  };
};

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
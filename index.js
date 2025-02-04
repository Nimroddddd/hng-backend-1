import express from "express";
import axios from "axios";

const app = express();
const port = 3000 ;

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;
  checkSum(number)
  if (!Number.isInteger(Number(number))) {
    return res.status(400).json({
      "number": "alphabet",
      "error": true
    })
  }
  const parsedNumber = parseInt(number);
  const digitSum = checkSum(number);
  const divisorSum = checkPerfect(parsedNumber)
  const isArmstrong = checkArmstrong(number);
  const funFact = await getFunFact(number);

  return res.status(200).json({
    "number": parsedNumber,
    "is_prime": checkPrime(parsedNumber),
    "is_perfect": divisorSum === parsedNumber,
    "properties": [...(isArmstrong ? ["armstrong"] : []), parsedNumber % 2 === 0 ? "even" : "odd"],
    "digit_sum": digitSum,
    "fun_fact": funFact || ""
  });
})



// Function to check for prime number

function checkPrime(x) {
  if (x < 2) return false;
  if (x === 2 || x === 3) return true;
  if (x % 2 === 0 || x % 3 === 0) return false;
  for (let i = 5; i * i <= x; i += 6) { // using 6k +- 1 mathematical expression
    if (x % i == 0 || x % (i + 2) == 0) return false;
  }
  return true;
}

// Function to check for perfect number

function checkPerfect(x) {
  if (x < 1) return false;
  let sum = 0;
  for (let i = 1; i <= x/2; i++) {
    if (x % i == 0) sum += i;
  }
  return sum;
}

//Function to check digit Sum

function checkSum(x) {
  const baseDigits = x.split("");
  let sum = 0;
  for (let number of baseDigits) {
    if (number != "-") sum += parseInt(number);
  }
  return sum;
}


//Function to check for armstrong number

function checkArmstrong(x) {
  const baseNumbers = parseInt(x).toString().split("") //removes unnecessary zeroes
  const baseLength = baseNumbers.length
  let sum = 0;
  for (let i = 0; i < baseLength; i++) {
    const parsed = parseInt(baseNumbers[i]);
    sum += parsed ** baseLength;
  }
  if (sum === parseInt(x)) {
    return true;
  } else {
    return false;
  }
}


//Function to get fun fact from numbersapi

async function getFunFact(x) {
  try {
    const { data: fact } = await axios.get(`http://numbersapi.com/${x}/math`);
    return fact;
  } catch(err) {
    console.log(err.message);
  }
}


//set express to listen on port 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
})
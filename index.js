// Code your solution here!

function printString(string) {
  console.log(string[string.length - 1]);
  if (string.length > 1) {
    let substring = string.substring(0, string.length - 1);
    printString(substring);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 0) {
    return reverseString(string.substring(1)) + string[0]
  } else {
    return "";
  }
}
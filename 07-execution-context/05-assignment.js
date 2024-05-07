const message = "I can do it";
function sum(a, b) {
  const result = a + b;
  return result;
}

function mul(a, b) {
  const result = a * b;
  return result;
}

function cale(a, b) {
  const result = sum(a, b) + mul(a, b);
  return result;
}

function getResult(a, b) {
  return cale(a, b);
}

getResult(5, 7);

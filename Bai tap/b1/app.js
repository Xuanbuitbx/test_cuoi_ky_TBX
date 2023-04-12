function sumPrime()
{
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);

  var sum = 0;
  for (var i = number1; i <= number2; i++)
  {
    if (prime(i)) {
      sum += i;
    }
  }

  document.getElementById("result").innerHTML = "Total number of primes " + number1 + " -> " + number2 + " is : " + sum;}

function prime(n)
{
  if (n <= 1)
  { return false;}

  for (var i = 2; i <= Math.sqrt(n); i++)
  { if (n % i == 0) {
      return false;
    }
  }
  return true;
}

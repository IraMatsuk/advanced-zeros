// function returns object which stores 
// all the prime factors of number. 
// object.key - prime factor
// obect.value - amount of the prime factor
function primaryFactor(number) {
  var obj = {};

  for (let i = 2; number != 1; i++) {
		if (number % i == 0) {
			var count = 0;
			while (number % i == 0) {
				number = number / i;
				count++;
			}

      obj[i] = count;
		}
  }
  
  return obj;
}

// The function returns largest power of base that divides !number  
function findPower(number, base)
{
	var count = 0;
	var r = base;
	while (r <= number) {

		// Find the number of times each prime factor occurs in N! 
		// after keeping track of their frequency of occurrence in base itself. 
		count += parseInt(number / r); // the function parseInt returns an integer

		// prime factor occurs X number of times in base, it must occur K*X times in N!  
		r = r * base;
	}
	return count;
}

module.exports = function getZerosCount(number, base) {
  var primary = primaryFactor(base);
  var result = number;

	// calculating minimum power of all the prime factors of base 
	Object.keys(primary).forEach((key,index) => {
    result = parseInt(Math.min(result, findPower(number, key) / primary[key]));
  })

	return result;
}
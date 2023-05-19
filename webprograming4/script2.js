is_string = function(input) {
   if (Object.prototype.toString.call(input) === '[object String]')
	return true;
   else
	return false;
	};

console.log(is_string('HappDay'));
console.log(is_string([1, 2, 4, 0]));

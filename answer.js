function reverse(string){
  return string.split(' ').reverse().join(' ');
}

reverse = s => s.split(' ').reverse().join(' ')

function reverse(string){
  // validate input
  if (typeof(string) !== 'string') throw new Error('reverse: parameter is not a string!');
  // just use the dumb way out since it's jabbascripps
  return string.split(' ').reverse().join(' ');
}

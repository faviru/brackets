module.exports = function check(str, bracketsConfig) {

  const openBrackets = [],
    bracketsPairs = {};

  bracketsConfig.forEach(el => {
    openBrackets.push(el[0]);
    bracketsPairs[el[1]] = el[0];
  });

  const stack = [];
  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (openBrackets.includes(el)) {
      if (bracketsPairs[el] !== el ||
        (bracketsPairs[el] === el && (stack.length === 0 || stack[stack.length - 1] !== el))) {
        stack.push(el);
      } else {
        stack.pop()
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (stack[stack.length - 1] === bracketsPairs[el]) {
        stack.pop()
      } else {
        return false
      }
    }
  };
  return stack.length === 0;
}

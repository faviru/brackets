module.exports = function check(str, bracketsConfig) {

  const openBrackets = [],
    bracketsPairs = {};

  bracketsConfig.map(el => {
    openBrackets.push(el[0]);
    bracketsPairs[el[1]] = el[0];
  });

  let stack = [];
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (openBrackets.includes(el)) {
      if (bracketsPairs[el] !== el) {
        stack.push(el);
      } else {
        if (stack.length === 0) {
          stack.push(el);
        } else if (stack[stack.length - 1] !== el) {
          stack.push(el);
        } else {
          stack.pop()
        }
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      const lastElement = stack[stack.length - 1];
      if (lastElement === bracketsPairs[el]) {
        stack.pop()
      } else {
        return false
      }
    }
  };
  return stack.length === 0;
}

const linearSearch = (array, steps, key, colorSteps) => {
  //   let found = false;
  for (let i = 0; i < array.length; i++) {
    let colorKey = new Array(array.length).fill(0);
    colorKey[i] = 1;
    colorSteps.push(colorKey.slice());
    steps.push(array.slice());
    if (array[i] === key) {
      colorKey[i] = 2;
      colorSteps.push(colorKey);
      steps.push(array.slice());
      debugger;
      return;
    }
  }
  let colorKey = new Array(array.length).fill(3);
  colorSteps.push(colorKey.slice());
  steps.push(array.slice());
  //   swal("Oops!", "Something went wrong on the page!", "error");
  return;
};

export default linearSearch;

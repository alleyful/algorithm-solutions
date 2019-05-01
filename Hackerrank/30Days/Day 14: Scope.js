let input = "3\n1 2 5";
const difference = () => {
  const result = input.split('\n')[1].split(' ').reduce(
    (target, el) => {
      let { min, max } = target;

      target["min"] = el > min ? el : min;
      target["max"] = el < max ? el : max;

      return target;
    },
    { min: -999, max: 999 }
  );

  console.log(Math.abs(result["max"] - result["min"]));
};

difference();

let func = (what) => {
  let that = what; //12
  what += 14; //26
  let you = what++; //27
  this.then = what; //26
  console.log(--what + that-- + that / this.then - 12); //25 + 12 + (11/26)
  you += "hello"; //27 + "hello"
  return 0; //0
};

func(12);

let falseTruths = () => {
  var True = false;
  var False = true;
  var trues = 0;
  if ((False || 1) == (False || 0)) {
    trues = true + True + False + false + true;
  }
  console.log((trues + False && 0 + true) || (0 + False && 1));
  return !(!(True && 1) == !!!(false || 0));
};

console.log(falseTruths());

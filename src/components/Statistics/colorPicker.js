const array = ["tomato", "#8FBC8F", "#EEE8AA", "#DDA0DD", "#87CEFA"];

function colorPicker() {
  let color;
  color = Math.floor(Math.random() * array.length);
  return array[color];
}

export default colorPicker;

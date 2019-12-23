function showRadio(arg_id) {
  var display = 'flex';
  var clr = 'blue';
  if (this.document.getElementById(arg_id).style.display == 'flex') {
    display = 'none';
    clr = 'black';
  }
  this.document.getElementById(arg_id).style.display = display;
  this.document.getElementById(arg_id+'btn').style.color = clr;
}

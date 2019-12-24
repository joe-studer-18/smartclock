var openRadio = 0;

function showOptions() {
  var display = 'none';
  console.log('found it');
  if (this.document.getElementById('dropdown-content-div').style.display == 'none') {
    display = 'block';
  }
  this.document.getElementById('dropdown-content-div').style.display = display;
}

function _setOpen(arg_id) {
  if (openRadio == 0) {
    openRadio = arg_id;
  }
}

function showRadio(arg_id) {
  if (openRadio == arg_id) {
    // Closes Radio if same button is pressed
    openRadio = 0;
    this.document.getElementById(arg_id).style.display = 'none';
    this.document.getElementById(arg_id+'btn').style.color = 'black';
  } else {
    if (openRadio != 0) {
      this.document.getElementById(openRadio).style.display = 'none';
      this.document.getElementById(openRadio+'btn').style.color = 'black';    
      openRadio = 0;
    }
    _setOpen(arg_id);
    this.document.getElementById(arg_id).style.display = 'flex';
    this.document.getElementById(arg_id+'btn').style.color = 'blue';  }
}

var openRadio = 0;

function showOptions() {
  var display = 'none';
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
  display = 'block';
  if (openRadio == arg_id) {
    // Closes Radio if same button is pressed
    openRadio = 0;
    display = 'none';
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
    this.document.getElementById(arg_id+'btn').style.color = 'blue';  
  }
  this.document.getElementById('radioSizeButton').style.display = display;
  this.document.getElementById('radioResetButton').style.display = display;
}

function resetRadio() {
  if (openRadio != 0) {
    var currentRadio = this.document.getElementById(openRadio);
    currentRadio.src = currentRadio.src;
  }
}

function sizeRadio() {
  var size = '25vh';
  var displayCharacter = "^";
  var radios = this.document.getElementsByClassName('radio');
  if (radios[0].style.height != '87vh') {
    size = '87vh';
    displayCharacter = "v";
  }
  for(i = 0; i < radios.length; i++) {
      radios[i].style.height = size;
  }
  this.document.getElementById('radioSizeButton').innerHTML = displayCharacter;
}

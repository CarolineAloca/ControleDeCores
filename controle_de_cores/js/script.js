var atual = '/images/cores/cor01.png';
var seguinte1 = '/images/cores/cor02.png';
var seguinte2 = '/images/cores/cor03.png';
var seguinte3 = '/images/cores/cor04.png';
var seguinte4 = '/images/cores/cor05.png';
var seguinte5 = '/images/cores/cor06.png';
var seguinte6 = '/images/cores/cor07.png';
var seguinte7 = '/images/cores/cor08.png';
var seguinte8 = '/images/cores/cor09.png';
var seguinte9 = '/images/cores/cor10.png';
var seguinte10 = '/images/cores/cor11.png';
var seguinte11 = '/images/cores/cor12.png';
var seguinte12 = '/images/cores/cor13.png';
var seguinte13 = '/images/cores/cor14.png';

function trocar() {
  document.getElementById('background').src = atual;
  let aux = atual;
  atual = seguinte1;
  seguinte1 = seguinte2;
  seguinte2 = seguinte3;
  seguinte3 = seguinte4;
  seguinte4 = seguinte5;
  seguinte5 = seguinte6;
  seguinte6 = seguinte7;
  seguinte7 = seguinte8;
  seguinte8 = seguinte9;
  seguinte9 = seguinte10;
  seguinte10 = seguinte11;
  seguinte11 = seguinte12;
  seguinte12 = seguinte13;
  seguinte13 = atual;
}

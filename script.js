const print = document.getElementById('print');
const K1 = document.getElementById('K1');
const K2 = document.getElementById('K2');
const K3 = document.getElementById('K3');
const K4 = document.getElementById('K4');
const K5 = document.getElementById('K5');
const K6 = document.getElementById('K6');
const K7 = document.getElementById('K7');
const K8 = document.getElementById('K8');
const K9 = document.getElementById('K9');
const K0 = document.getElementById('K0');
const Kplus = document.getElementById('Kplus');
const Kmin = document.getElementById('Kmin');
const Kkali = document.getElementById('Kkali');
const Kbagi = document.getElementById('Kbagi');
const Khasil = document.getElementById('Khasil');
const KC = document.getElementById('KC');

var preprint = '';

K1.addEventListener("click", function() {
	preprint += K1.value;
	print.innerHTML = preprint;
});
K2.addEventListener("click", function() {
	preprint += K2.value;
	print.innerHTML = preprint;
});
K3.addEventListener("click", function() {
	preprint += K3.value;
	print.innerHTML = preprint;
});
K4.addEventListener("click", function() {
	preprint += K4.value;
	print.innerHTML = preprint;
});
K5.addEventListener("click", function() {
	preprint += K5.value;
	print.innerHTML = preprint;
});
K6.addEventListener("click", function() {
	preprint += K6.value;
	print.innerHTML = preprint;
});
K7.addEventListener("click", function() {
	preprint += K7.value;
	print.innerHTML = preprint;
});
K8.addEventListener("click", function() {
	preprint += K8.value;
	print.innerHTML = preprint;
});
K9.addEventListener("click", function() {
	preprint += K9.value;
	print.innerHTML = preprint;
});
K0.addEventListener("click", function() {
	preprint += K0.value;
	print.innerHTML = preprint;
});
Kplus.addEventListener("click", function() {
	preprint += Kplus.value;
	print.innerHTML = preprint;
});
Kmin.addEventListener("click", function() {
	preprint += Kmin.value;
	print.innerHTML = preprint;
});
Kkali.addEventListener("click", function() {
	preprint += Kkali.value;
	print.innerHTML = preprint;
});
Kbagi.addEventListener("click", function() {
	preprint += Kbagi.value;
	print.innerHTML = preprint;
});
Khasil.addEventListener("click", function() {
	var alat = [];
	var iAlat = [];
	var angka = [];
	for (var j = 0; j < preprint.length; j++) {
		var cek = preprint.charAt(j);
		if (cek == '+' || cek == '-' || cek == '/' || cek == 'x') {
			alat.push(cek);
			iAlat.push(j);
		}
	}
	var temp = '';
	var a = 0;
	for (var i = 0; i < alat.length; i++) {
		temp = parseInt(preprint.substring(a, parseInt(iAlat[i])));
		angka.push(temp);
		a = parseInt(iAlat[i])+1;
	}
	angka.push(parseInt(preprint.substring(a, preprint.length)))
	
	var hasil = angka[0];
	if (angka.length > 1) {
		for (var k = 1; k <= angka.length; k++) {
			if (alat[k-1] == '+') {
				hasil += angka[k];
			}else if (alat[k-1] == '-') {
				hasil -= angka[k];
			}else if (alat[k-1] == '/') {
				hasil /= angka[k];
			}else if (alat[k-1] == 'x') {
				hasil *= angka[k];
			}
		}	
	}

	print.innerHTML = preprint +' = '+ hasil;
});
KC.addEventListener("click", function() {
	preprint = '';
	print.innerHTML = '0';
});
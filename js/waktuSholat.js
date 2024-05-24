function waktuSholat() {
  			var today = new Date();
  			var h = today.getHours();
  			var m = today.getMinutes();
  			var s = today.getSeconds();
  			h = checkTime(h);
  			m = checkTime(m);
  			s = checkTime(s);
  			
  			var date = today.getDate();
  			var month = today.getMonth();
  			var montharr =["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  			month=montharr[month];
  			var year = today.getFullYear();
	  
	  		var day = today.getDay();
	  		var dayarr =["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
	  		day=dayarr[day];
  			
  			document.getElementById('jam').innerHTML = h + ":" + m + ":" + s;
  			document.getElementById('hari').innerHTML = day+",";
  			document.getElementById('tgl').innerHTML = date+" "+month+" "+year;
  			
  			
  			// MANUAL SETTINGS --------------------------------------------------------
  			prayTimes.setMethod('MWL'); // perhitungan
  			var Ptimes = prayTimes.getTimes(today, [-3.3, 104.8], 7); 
  			// ------------------------------------------------------------------------
  			// -6.2, 106.8 jakarta (longitude, Latitude, Time Zone)
	
  			document.getElementById('subuh').innerHTML =   Ptimes.fajr;
  			document.getElementById('terbit').innerHTML =  Ptimes.sunrise;
  			document.getElementById('zuhur').innerHTML =   Ptimes.dhuhr;
  			document.getElementById('ashar').innerHTML =   Ptimes.asr;
  			document.getElementById('maghrib').innerHTML = Ptimes.maghrib;
  			document.getElementById('isya').innerHTML =    Ptimes.isha;
  			
			// Azan
  			
  			var waktu = h + ":" + m;

  			if (waktu == Ptimes.fajr) {
  				$('#ModalAzan').modal('show');

				setTimeout(function() {
    				$('#ModalAzan').modal('hide');
				}, 60000);
			}
  			
  			if (waktu == Ptimes.dhuhr) {
  				$('#ModalAzan').modal('show');

				setTimeout(function() {
    				$('#ModalAzan').modal('hide');
				}, 60000);
			}
  			
			if (waktu == Ptimes.asr) {
  				$('#ModalAzan').modal('show');

				setTimeout(function() {
    				$('#ModalAzan').modal('hide');
				}, 60000);
			}
			
			if (waktu == Ptimes.maghrib) {
  				$('#ModalAzan').modal('show');

				setTimeout(function() {
    				$('#ModalAzan').modal('hide');
				}, 60000);
			}
			
			if (waktu == Ptimes.isha) {
  				$('#ModalAzan').modal('show');

				setTimeout(function() {
    				$('#ModalAzan').modal('hide');
				}, 60000);
			}
			
			// colors
			
			var akhirwaktu = "23:59";
			
			if (waktu  >= Ptimes.fajr && waktu < Ptimes.sunrise) {
  				document.getElementById('csubuh').style.backgroundColor = "red";
			} else {
  				document.getElementById('csubuh').style.backgroundColor = "white";
			}
			
			if (waktu  >= Ptimes.sunrise && waktu < Ptimes.dhuhr) {
  				document.getElementById('cterbit').style.backgroundColor = "red";
			} else {
  				document.getElementById('cterbit').style.backgroundColor = "white";
			}
			
			if (waktu  >= Ptimes.dhuhr && waktu < Ptimes.asr) {
  				document.getElementById('czuhur').style.backgroundColor = "red";
			} else {
  				document.getElementById('czuhur').style.backgroundColor = "white";
			}
			
			if (waktu  >= Ptimes.asr && waktu < Ptimes.maghrib) {
  				document.getElementById('cashar').style.backgroundColor = "red";
			} else {
  				document.getElementById('cashar').style.backgroundColor = "white";
			}
			
			if (waktu  >= Ptimes.maghrib && waktu < Ptimes.isha) {
  				document.getElementById('cmaghrib').style.backgroundColor = "red";
			} else {
  				document.getElementById('cmaghrib').style.backgroundColor = "white";
			}
			if (waktu  >= Ptimes.isha && waktu < akhirwaktu) {
  				document.getElementById('cisya').style.backgroundColor = "red";
			} else {
  				document.getElementById('cisya').style.backgroundColor = "white";
			}
  			
  			var t = setTimeout(waktuSholat, 1000);
		}
		function checkTime(i) {
  			if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  			return i;
		}

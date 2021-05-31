const chk = document.getElementById('chk');
var r = document.querySelector(':root');

chk.addEventListener('change', function() {
	if (this.checked){
	document.body.classList.toggle('dark');
	r.style.setProperty('--darkMode', '#292C35');
	r.style.setProperty('--cardBackground', '#fff');
	}else{
		document.body.classList.toggle('dark');
		r.style.setProperty('--darkMode', '#fff');
		r.style.setProperty('--cardBackground', '#000');
	}
});
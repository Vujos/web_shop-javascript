function oglasi() {    
    if (localStorage.kolicinaO) {
        localStorage.kolicinaO = Number(localStorage.kolicinaO)+1;
    } else {
        localStorage.kolicinaO = 1;
    }
} 

function dodajOglas() {
	var slika = document.getElementById("slika").files[0].name;
    var naziv = document.getElementById("naziv").value;
	var kolicina = document.getElementById("kolicina").value;
	var kvalitet = document.getElementById("kvalitet").value;
    var dostava = document.getElementById("dostava").value;
	var kategorija = document.getElementById("kategorija").value;
	var adresaOglasa = document.getElementById("adresaOglasa").value;
	var brojOglasa = document.getElementById("brojOglasa").value;
	var cena = document.getElementById("cena").value;
	var opis = document.getElementById("opis").value;
		
	if ((naziv && kolicina && kvalitet && dostava && kategorija && adresaOglasa && brojOglasa && cena && opis).length > 0){
		oglas = {"slika":"../oglasi/" + slika,
		"naziv": naziv,
		"kolicina": kolicina,
		"kvalitet": kvalitet,
		"dostava": dostava,
		"kategorija": kategorija,
		"adresaOglasa": adresaOglasa,
		"brojOglasa": brojOglasa,
		"cena": cena,
		"opis": opis
		}
        oglasi();
		localStorage.setItem("oglas" + localStorage.kolicinaO, JSON.stringify(oglas));
	}
    else {
        alert("Sva polja moraju biti popunjena!");
    }
}

function loadOglas() {
	storedOglas = JSON.parse(localStorage.getItem("oglas"))

	var storedSlika = storedSlika["slika"];
    var storedNaziv = storedOglas["naziv"];
    var storedKolicina = storedOglas["kolicina"];
    var storedKvalitet = storedOglas["kvalitet"];
    var storedDostava = storedOglas["dostava"];
    var storedKategorija = storedOglas["kategorija"];
    var storedBroj = storedOglas["brojOglasa"];
    var storedAdresa = storedOglas["adresaOglasa"];
    var storedCena = storedOglas["cena"];
    var storedOpis = storedOglas["opis"];

	document.getElementById("slika").src = storedSlika
    document.getElementById("naziv").value = storedNaziv
	document.getElementById("kolicina").value = storedKolicina
	document.getElementById("kvalitet").value = storedKvalitet
    document.getElementById("dostava").value = storedDostava
	document.getElementById("kategorija").value = storedKategorija
	document.getElementById("brojOglasa").value = storedBroj
	document.getElementById("adresaOglasa").value = storedAdresa
	document.getElementById("cena").value = storedCena
	document.getElementById("opis").value = storedOpis
}

function divOglasi() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.toLowerCase().includes("oglas")) {
            storedOglas = localStorage.getItem(localStorage.key(i));

            var oglasi = JSON.parse(storedOglas);
            var storedNaziv = oglasi["naziv"];
            var storedCena = oglasi["cena"];
            var storedKvalitet = oglasi["kvalitet"];
            var storedSlika = oglasi["slika"];
            var storedKategorija = oglasi["kategorija"];
            var ogl = document.createElement('div');
            ogl.classList.add('ogl');

            var naziv = document.createElement('div');
            naziv.appendChild(document.createTextNode(storedNaziv));
            naziv.classList.add('naziv');

            var kvalitet = document.createElement('div');
            kvalitet.appendChild(document.createTextNode(storedKvalitet));
            kvalitet.classList.add('kvalitet');

            var cena = document.createElement('div');
            cena.appendChild(document.createTextNode(storedCena + ' EUR'));
            cena.classList.add('cena');

            var slika = document.createElement('div');
            var img = document.createElement('img');
            img.setAttribute('src', storedSlika);
            img.classList.add('storedSlika');
            slika.appendChild(img);

            ogl.appendChild(slika);
            ogl.appendChild(naziv);
            ogl.appendChild(kvalitet);
            ogl.appendChild(cena);
            document.getElementById('oglasi').appendChild(ogl)
        } 
    }
}

function divCat() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.toLowerCase().includes("oglas")) {
            storedOglas = localStorage.getItem(localStorage.key(i));
            var oglasi = JSON.parse(storedOglas);
            var storedNaziv = oglasi["naziv"];
            var storedCena = oglasi["cena"];
            var storedKvalitet = oglasi["kvalitet"];
            var storedSlika = oglasi["slika"];
            var storedKategorija = oglasi["kategorija"];
            var ogl = document.createElement('div');
            ogl.classList.add('ogl');

            var naziv = document.createElement('div');
            naziv.appendChild(document.createTextNode(storedNaziv));
            naziv.classList.add('naziv');

            var kvalitet = document.createElement('div');
            kvalitet.appendChild(document.createTextNode(storedKvalitet));
            kvalitet.classList.add('kvalitet');

            var cena = document.createElement('div');
            cena.appendChild(document.createTextNode(storedCena + ' EUR'));
            cena.classList.add('cena');

            var slika = document.createElement('div');
            var img = document.createElement('img');
            img.setAttribute('src', storedSlika);
            img.classList.add('storedSlika');
            slika.appendChild(img);

            ogl.appendChild(slika);
            ogl.appendChild(naziv);
            ogl.appendChild(kvalitet);
            ogl.appendChild(cena);
            var storedCat = localStorage.getItem("kategorija");
            if(storedCat == "telefoni") {  
                if (storedKategorija == "telefoni"){
                    var tOgl = document.createElement('div');
                    tOgl.classList.add('tOgl');
                    tOgl.appendChild(slika);
                    tOgl.appendChild(naziv);
                    tOgl.appendChild(kvalitet);
                    tOgl.appendChild(cena);
                    document.getElementById('tOglasi').appendChild(tOgl)
                }             
            }
            if(storedCat == "racunarska") {
                if (storedKategorija == "racunarska"){
                    var rOgl = document.createElement('div');
                    rOgl.classList.add('rOgl');
                    rOgl.appendChild(slika);
                    rOgl.appendChild(naziv);
                    rOgl.appendChild(kvalitet);
                    rOgl.appendChild(cena);
                    document.getElementById('rOglasi').appendChild(rOgl)
                }
            }
            if(storedCat == "sportska") {
                if (storedKategorija == "sportska"){
                    var spOgl = document.createElement('div');
                    spOgl.classList.add('spOgl');
                    spOgl.appendChild(slika);
                    spOgl.appendChild(naziv);
                    spOgl.appendChild(kvalitet);
                    spOgl.appendChild(cena);
                    document.getElementById('spOglasi').appendChild(spOgl)
                }
            }
            if(storedCat == "satovi") {    
                if (storedKategorija == "satovi"){
                    var sOgl = document.createElement('div');
                    sOgl.classList.add('sOgl');
                    sOgl.appendChild(slika);
                    sOgl.appendChild(naziv);
                    sOgl.appendChild(kvalitet);
                    sOgl.appendChild(cena);
                    document.getElementById('sOglasi').appendChild(sOgl)
                }
            }
            if(storedCat == "ostalo") {    
                if (storedKategorija == "ostalo"){

                    var oOgl = document.createElement('div');
                    oOgl.classList.add('oOgl');
                    oOgl.appendChild(slika);
                    oOgl.appendChild(naziv);
                    oOgl.appendChild(kvalitet);
                    oOgl.appendChild(cena);
                    document.getElementById('oOglasi').appendChild(oOgl)
                }
            }
        } 
    }
}

function catCheck() {
    var cat = event.target.id;
    localStorage.setItem("kategorija", (cat));
}

function srch(e) {
    if (e.keyCode == 13){
        searchByTitle();
    }
}

function srchp(e) {
    if (e.keyCode == 13){
        searchByTitle();
        oglasR();
    }
}

function searchByTitle() {
    var pretraga = document.getElementById('search').value;
    if (pretraga == "") {
            alert("Niste nista uneli!");
    }
    else {
        ind = 0;
        var uPretraga = pretraga.toLowerCase();
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.toLowerCase().includes("oglas")) {
                storedOglas = localStorage.getItem(localStorage.key(i));
                var oglasi = JSON.parse(storedOglas);
                var storedNaziv = oglasi["naziv"];
                if (storedNaziv.toLowerCase().includes(uPretraga)) {
                    var storedNaziv = oglasi["naziv"];
                    var storedCena = oglasi["cena"];
                    var storedKvalitet = oglasi["kvalitet"];
                    var storedSlika = oglasi["slika"];
                    var pOgl = document.createElement('div');

                    var naziv = document.createElement('div');
                    naziv.appendChild(document.createTextNode(storedNaziv));
                    naziv.classList.add('naziv');

                    var kvalitet = document.createElement('div');
                    kvalitet.appendChild(document.createTextNode(storedKvalitet));
                    kvalitet.classList.add('kvalitet');

                    var cena = document.createElement('div');
                    cena.appendChild(document.createTextNode(storedCena + ' EUR'));
                    cena.classList.add('cena');

                    var slika = document.createElement('div');
                    var img = document.createElement('img');
                    img.setAttribute('src', storedSlika);
                    img.classList.add('storedSlika');
                    slika.appendChild(img);

                    pOgl.classList.add('pOgl');
                    pOgl.appendChild(slika);
                    pOgl.appendChild(naziv);
                    pOgl.appendChild(kvalitet);
                    pOgl.appendChild(cena);
                    var storedCat = localStorage.getItem("kategorija");
                    var storedKategorija = oglasi["kategorija"];
                    if(storedCat == "telefoni") {  
                        document.getElementById("tOglasi").style.display = "none";             
                    }
                    if(storedCat == "racunarska") {  
                        document.getElementById("rOglasi").style.display = "none";         
                    }
                    if(storedCat == "sportska") {  
                        document.getElementById("spOglasi").style.display = "none";         
                    }
                    if(storedCat == "satovi") {
                        document.getElementById("sOglasi").style.display = "none";     
                    }
                    if(storedCat == "ostalo") {  
                        document.getElementById("oOglasi").style.display = "none";          
                    } 
                    document.getElementById('pOglasi').appendChild(pOgl);
                    document.getElementById("pOglasi").style.visibility = "visibility";
                    ind = 1;
                }
            }
        }
        if (ind == 0) {
                    alert("Nista nije pronadjeno!");
                }
    }
}

function oglasR() {
    document.getElementById("oglasi").style.display = "none"; 
}
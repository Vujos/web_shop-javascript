function brojK() {    
    if (localStorage.korisnici) {
        localStorage.korisnici = Number(localStorage.korisnici)+1;
    } else {
        localStorage.korisnici = 1;
    }
} 

function dodajKorisnika() {
var unosKorisnicko = document.getElementById("korisnicko");
    var korisnicko = document.getElementById("korisnicko").value;
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var email = document.getElementById("email").value;
    var adresa = document.getElementById("adresa").value;
    var broj = document.getElementById("broj").value;
    var datum = document.getElementById("datum").value;
    var pol = document.getElementById("pol").value;
	var lozinka = document.getElementById("lozinka").value;
	var potvrdi = document.getElementById("potvrdi").value;
	var avatar = document.getElementById("avatar").files[0].name;

	var ind=0;
	if ((korisnicko && ime && prezime && email && adresa && broj && datum && pol && lozinka).length > 0 && lozinka == potvrdi){
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.toLowerCase().includes("korisnik")) {
            storedKorisnik = localStorage.getItem(localStorage.key(i));
            var korisnici = JSON.parse(storedKorisnik);

            var storedKorisnicko = korisnici["korisnicko"];

            var unosKorisnicko = document.getElementById("korisnicko");
            if(unosKorisnicko.value == storedKorisnicko) {               
                ind=1;
                localStorage.setItem("ulogovan", (storedKorisnicko));
            }
        }
    }
    if (ind != 1) {
            korisnik = {"avatar":"../profilna/" + avatar,
	        "ime": ime,
	        "prezime": prezime,
	        "email": email,
	        "adresa": adresa,
	        "broj": broj,
	        "datum": datum,
	        "pol": pol,
	        "lozinka": lozinka,
	        "potvrdi": potvrdi,
	        "korisnicko": korisnicko
	        }
            brojK();
			localStorage.setItem("korisnik" + localStorage.korisnici, JSON.stringify(korisnik));
			alert("Uspesno ste se registrovali");
        } 
        else {
            alert('To korisnicko ime je vec zauzeto!');
        }
	}
	else {
		alert("Sva polja moraju biti popunjena, i lozinke se moraju poklopiti!");
	}
}
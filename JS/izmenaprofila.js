function sacuvajIzmene() {
    var avatar = document.getElementById("avatar").files[0].name;
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var email = document.getElementById("email").value;
    var adresa = document.getElementById("adresa").value;
    var broj = document.getElementById("broj").value;
    var datum = document.getElementById("datum").value;
    var pol = document.getElementById("pol").value;
    var lozinka = document.getElementById("lozinka").value;
    var potvrdi = document.getElementById("potvrdi").value;
    var korisnicko = localStorage.getItem("ulogovan");
    
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.toLowerCase().includes("korisnik")) {
            storedKorisnik = localStorage.getItem(localStorage.key(i));
            var korisnici = JSON.parse(storedKorisnik); 
            var storedKorisnicko = korisnici["korisnicko"];

            if(storedKorisnicko == korisnicko){
                if ((ime && prezime && email && adresa && broj && datum && pol && lozinka).length > 0 && lozinka == potvrdi){
                    ulogovan = {"avatar": "../profilna/" + avatar,
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
                    localStorage.setItem("" + key, JSON.stringify(ulogovan));
                    alert("Profil je uspesno izmenjen!");
                }
                else {
                    alert("Sva polja moraju biti popunjena i lozinke se moraju poklopiti!");
                }
            }
        }
    }
}

function loadProfil() {    
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.toLowerCase().includes("korisnik")) {
            storedKorisnik = localStorage.getItem(localStorage.key(i));
            var korisnici = JSON.parse(storedKorisnik); 

            var storedKorisnicko = korisnici["korisnicko"];
            var ulogovanKorisnicko = localStorage.getItem("ulogovan");

            if(storedKorisnicko == ulogovanKorisnicko) {
                var storedKorisnik = JSON.parse(storedKorisnik);

                var storedAvatar = storedKorisnik["avatar"];
                var storedIme = storedKorisnik["ime"];
                var storedPrezime = storedKorisnik["prezime"];
                var storedEmail = storedKorisnik["email"];
                var storedKorisnicko = storedKorisnik["korisnicko"];
                var storedAdresa = storedKorisnik["adresa"];
                var storedBroj = storedKorisnik["broj"];
                var storedDatum = storedKorisnik["datum"];
                var storedPol = storedKorisnik["pol"];

                document.getElementById("avatar").src = storedAvatar
                document.getElementById("ime").value = storedIme
                document.getElementById("prezime").value = storedPrezime
                document.getElementById("email").value = storedEmail
                document.getElementById("korisnicko").value = storedKorisnicko
                document.getElementById("adresa").value = storedAdresa
                document.getElementById("broj").value = storedBroj
                document.getElementById("datum").value = storedDatum
                document.getElementById("pol").value = storedPol
            }
        }
    }
}
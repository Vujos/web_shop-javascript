function loginCheck() {
    var ind=0;
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.toLowerCase().includes("korisnik")) {
            storedKorisnik = localStorage.getItem(localStorage.key(i));
            var korisnici = JSON.parse(storedKorisnik);

            var storedKorisnicko = korisnici["korisnicko"];
            var storedLozinka = korisnici["lozinka"];
            var storedIme = korisnici["ime"];
            var storedPrezime = korisnici["prezime"];
            var storedEmail = korisnici["email"];
            var storedAdresa = korisnici["adresa"];
            var storedBroj = korisnici["broj"];
            var storedDatum = korisnici["datum"];
            var storedPol = korisnici["pol"];
 
            var unosKorisnicko = document.getElementById("username");
            var unosLozinka = document.getElementById("password");
 
            if(unosKorisnicko.value.toLowerCase() == storedKorisnicko.toLowerCase() && unosLozinka.value.toLowerCase() == storedLozinka.toLowerCase()) {               
                ind = 1;
                localStorage.setItem("ulogovan", (storedKorisnicko));
            }
        }
    }
    if (ind == 1) {
            window.location.href = "../site/index.html";
        } 
        else {
            alert('Pogresno ime ili lozinka!');
        }
}
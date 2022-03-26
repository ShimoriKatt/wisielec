var slowo, slowa = [],
    dl, odpowiedzi = [],
    bledy = 0,
    strzal, obraz;
var trafienie = false;

function start() {
    slowa = [
        "ogłoszenie",
        "zestaw",
        "zaczynać",
        "standard",
        "spotkanie",
        "człowiek",
        "przynieść",
        "wieczór",
        "gdzie",
        "prawny",
        "przyszłość",
        "drzwi",
        "prawie",
        "artykuł",
        "poprzez",
        "służyć",
        "indywidualny",
        "możliwy",
        "zagrożenie",
        "produkcja",
        "daleko",
        "zdarzenie",
        "palec",
        "kierunek",
    ];
    slowo = slowa[Math.floor(Math.random() * slowa.length)];
    dl = slowo.length;
    for (var i = 0; i < dl; i++) {
        odpowiedzi[i] = "_";
    }
    document.getElementById("haslo").innerHTML = odpowiedzi.join(" ");
}

function sprawdz() {
    trafienie = false;
    strzal = document.getElementById("znak").value;
    for (var j = 0; j < slowo.length; j++) {
        if (slowo[j] == strzal && odpowiedzi[j] == "_") {
            odpowiedzi[j] = strzal;
            dl--;
            trafienie = true;
        }
        document.getElementById("haslo").innerHTML = odpowiedzi.join(" ");
    }
    document.getElementById("znak").value = "";

    if (trafienie == false && bledy < 11) {
        bledy++;
        obraz = "s" + bledy + ".png"
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '">';
    }
    if (dl == 0 && bledy < 11) {
        document.getElementById("wynik").innerHTML = "Wygrana";
        document.getElementById("wynik").style.backgroundColor = "darkgreen";
    }
    if (bledy == 11) {
        document.getElementById("wynik").innerHTML = "przegrana";
        document.getElementById("wynik").style.backgroundColor = "crimson";
    }
}
// JavaScript-ohjelmointi II (taulukot, objektit)


// Tehtävä 2.1
const tunnit = [{ ma: 5 }, { ti: 8 }, { ke: 7 }, { to: 6 }, { pe: 5 }, { la: 3 }, { su: 2 }];


// Tehtävä 2.2
// a)
const keskiarvo = (tunnit) => {
    let summa = 0;
    tunnit.forEach(paiva => summa += Object.values(paiva)[0]);
    return summa / tunnit.length;
};

//console.log(keskiarvo(tunnit));

// b)
const keskiarvo2 = (tunnit) => {
    return tunnit.reduce((prev, curr) => prev + Object.values(curr)[0], 0) / tunnit.length;
};

//console.log(keskiarvo2(tunnit));


// Tehtävä 2.3
//a) 
const minmax = (tunnit) => {
    // let min = Object.values(tunnit[0])[0];
    //let max = Object.values(tunnit[0])[0];
    let min = tunnit[0].ma;
    let max = tunnit[0].ma;
    tunnit.forEach(paiva => {
        let paivanTunnit = Object.values(paiva)[0];
        if (paivanTunnit < min) {
            min = paivanTunnit;
        }
        else if (paivanTunnit > max) {
            max = paivanTunnit;
        }
    });
    return [min, max];
};

// console.log("minimi: " + minmax(tunnit)[0], " maksimi: " + minmax(tunnit)[1]);

// b)
const minmax2 = (tunnit) => {
    let min = tunnit.reduce((prev, curr) => {
        let arvo = Object.values(curr)[0];
        if (arvo < prev) {
            return arvo;
        } else {
            return prev;
        }
    }, tunnit[0].ma);
    let max = tunnit.reduce((prev, curr) => {
        let arvo = Object.values(curr)[0];
        if (arvo > prev) {
            return arvo;
        } else {
            return prev;
        }
    }, tunnit[0].ma);
    return [min, max];
};

//console.log("minimi: " + minmax2(tunnit)[0], " maksimi: " + minmax2(tunnit)[1]);


// Tehtävä 2.4
// indeksi 0 vastaa tammikuuta, indeksi 1 helmikuuta jne.
const palkkatulot = Array(12).fill(3600);
const korotetut = (tulot) => {
    let korotetutTulot = [];
    tulot.forEach(tulo => korotetutTulot.push(1.5 * tulo));
    return korotetutTulot;
};

// console.log(korotetut(palkkatulot));


// Tehtävä 2.5
class Bruttopalkka {
    constructor(palkka, veroProsentti) {
        this.palkka = palkka;
        this.veroProsentti = veroProsentti;
    }
}

// indeksi 0 vastaa tammikuuta, indeksi 1 helmikuuta jne.
const bruttopalkat = [new Bruttopalkka(4000, 32.1),
new Bruttopalkka(4000, 32.1),
new Bruttopalkka(4000, 32.1),
new Bruttopalkka(4000, 32.1),
new Bruttopalkka(4800, 35.1),
new Bruttopalkka(4800, 35.1),
new Bruttopalkka(4800, 35.1),
new Bruttopalkka(4800, 35.1),
new Bruttopalkka(5200, 36.4),
new Bruttopalkka(5200, 36.4),
new Bruttopalkka(5200, 36.4),
new Bruttopalkka(5200, 36.4)];

const nettotulot = (bruttotulot) => {
    let netto = [];
    bruttotulot.forEach(kk => netto.push(kk.palkka * (100 - kk.veroProsentti) / 100));
    return netto;
};

//console.log(nettotulot(bruttopalkat));


// Tehtävä 2.6
const luvut = [1, 4, 100, 2, 5, 4];
luvut.sort()
// vai haettiinko tätä...
//luvut.sort((a, b) => a - b);
//console.log(luvut)


// Tehtävä 2.7
const merkkijonot = ["1", "4", "100", "2", "5", "4"];
merkkijonot.sort()
//console.log(merkkijonot)


// Tehtävä 2.8
/*
Sort-funktio järjestää taulukon alkiot parametrina annettavan compare-funktion palautusarvon
mukaan. Jos compare-funktiota ei anneta, niin alkiot (muunnetaan merkkijonoiksi ja) järjestetään
merkkijonoina käyttäen Unicode-järjestystä.
*/


// Tehtävä 2.9
const taulukko = [{ "ma": 44 }, { "pe": 100 }, { "ke": 21 }, { "ti": 66 }, { "la": 22 }];

const jarjArvot = taulukko.slice().sort((a, b) => Object.values(a)[0] - Object.values(b)[0]);

//console.log(jarjArvot);


// Tehtävä 2.10
const jarjPaivat = taulukko.slice().sort((a, b) => {
    const paivat = ["ma", "ti", "ke", "to", "pe", "la", "su"];
    return paivat.indexOf(Object.keys(a)[0]) - paivat.indexOf(Object.keys(b)[0]);
});

//console.log(jarjPaivat);


// Tehtävä 2.11
const parilliset = taulukko.filter(paiva => Object.values(paiva)[0] % 2 === 0);

//console.log(parilliset);


// Tehtävä 2.12
const toinenKirjainE = taulukko.filter(paiva => Object.keys(paiva)[0][1] === 'e');

//console.log(toinenKirjainE);


// Tehtävä 2.13
const objekti = { "ma": 44, "pe": 100, "ke": 21, "ti": 66, "la": 22 };
const objektiListana = (obj) => {
    avaimet = Object.keys(obj);
    arvot = Object.values(obj);
    let lista = [];
    for (let i = 0; i < avaimet.length; i++) {
        let listaObj = {};
        listaObj[avaimet[i]] = arvot[i];
        lista.push(listaObj);
    }
    return lista;
}

//console.log(objektiListana(objekti));
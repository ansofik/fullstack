// HARJOITUS 1

// Tehtävä 1.3
const vertaa = (luku) => {
    if (luku > 100) {
        return "syötit luvun, joka on suurempi kuin 100";
    }
    else if (luku < 100) {
        return "syötit luvun, joka on pienempi kuin 100";
    }
    else {
        return "luku on 100";
    }
};

/*
console.log(vertaa(101));
console.log(vertaa(99));
console.log(vertaa(100));
*/


// Tehtävä 1.4
// a)
const sekunnit = (t, m, s) => {
    return t * 3600 + m * 60 + s;
};

//console.log(sekunnit(0, 1, 1));

// b)
const euroissa = (markat) => {
    return markat / 5.94573;
};

//console.log(euroissa(6));

// c)
const markoissa = (eurot) => {
    return eurot * 5.94573;
};


// Tehtävä 1.5
const viikonpv = (nro) => {
    switch (nro) {
        case 1:
            return "maanantai";
        case 2:
            return "tiistai";
        case 3:
            return "keskiviikko";
        case 4:
            return "torstai";
        case 5:
            return "perjantai";
        case 6:
            return "lauantai";
        case 7:
            return "sunnuntai";
    }
};

// console.log(viikonpv(3))


// Tehtävä 1.6
const ikaryhma = (ika) => {
    if (ika >= 1 && ika <= 17) {
        return "olet alaikäinen";
    }
    else if (ika >= 18 && ika <= 33) {
        return "olet nuori";
    }
    else if (ika >= 34 && ika <= 50) {
        return "olet keski-ikäinen";
    }
    else {
        return "olet vanha";
    }
};

//console.log(ikaryhma(20))


// Tehtävä 1.7

const terve = (etunimi, sukunimi, ika) => {
    //return "Terve " + etunimi + " " + sukunimi + ", olet " + ika + " vuotias";
    return `Terve ${etunimi} ${sukunimi}, olet ${ika} vuotias`;
};

//console.log(terve("Maija", "Meikäläinen", 30));


// Tehtävä 1.8
const onnenpekka = (vuosi, nro) => {
    if (vuosi === 1970 && nro === 77) {
        return "Olet onnenpekka";
    }
};

//console.log(onnenpekka(1970, 77));


// Tehtävä 1.9
const lukulista = () => {
    const lista = [];
    for (let i = 7; i < 132; i++) {
        lista.push(i);
    }
    return lista;
};

// console.log(lukulista());


// Tehtävä 1.10
// a)
const summa = () => {
    let sum = 0;
    for (let i = 7; i < 132; i++) {
        sum += i;
    }
    return sum;
};

//console.log(summa());

const summa2 = () => {
    return lukulista().reduce((prev, curr) => prev + curr);
};

//console.log(summa2());

// b)
const valinSumma = (a, b) => {
    if (b <= a) {
        return;
    }
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

//console.log(valinSumma(7,131));

const valinSumma2 = (a, b) => {
    if (b <= a) {
        return;
    }
    let lista = [];
    for (i = a; i <= b; i++) {
        lista.push(i);
    }
    return lista.reduce((prev, curr) => prev + curr);
};

//console.log(valinSumma2(7,131));


// Tehtävä 1.12
const parilliset = () => {
    const par = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            par.push(i)
        }
    }
    return par;
};

//console.log(parilliset());


// Tehtävä 1.13
const parillistenSumma = () => {
    let summa = 0;
    for (let i = 0; i <= 1000; i++) {
        if (i % 2 === 0) {
            summa += i;
        }
    }
    return summa;
};

//console.log(parillistenSumma());


// Tehtävä 1.16
const painoindeksi = (paino, pituus) => {
    return paino / pituus ** 2;
}


// Tehtävä 1.17
const karkausvuosi = (vuosi) => {
    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
        return "on";
    }
    else {
        return "ei";
    }
};

//console.log(karkausvuosi(1800));


// Tehtävä 1.18
const eiYksi = (luku) => {
    if (luku !== 1) {
        return "Syöte ei ole 1";
    }
};

//console.log(eiYksi(3));

// Tehtävä 1.19
const muunnos = (asteikko, lukema) => {
    if (asteikko === 'C' || asteikko === 'c' || asteikko === 'F' || asteikko === 'f') {
        if (lukema <= 100 && lukema > -101) {
            if (asteikko === 'C' || asteikko === 'c') {
                lukema = 9/5 * lukema + 32;
            }
            else {
                lukema = 5/9 * (lukema - 32)
            }
            return lukema;
        }
        else {
            return "lukema virheellinen"
        }
    }
    else {
        return "asteikko tuntematon"
    }
}

//console.log(muunnos('C', 100))

// Tehtävä 1.20
const kulutus = (litrat, kilometrit) => {
    if (litrat > 0) {
        if (kilometrit > 0) {
            let sadalla = litrat * 100 / kilometrit;
            return sadalla;
        }
        else {
            return "virhesyöttö";
        }
    }
    else {
        return "virhesyöttö";
    }
}


// Tehtävä 1.21
const henkilo = (nimi) => {
    if (nimi === 'Pekka' || nimi === 'Liisa' || nimi === 'Jorma') {
        return `Minunkin mielestäni ${nimi} on kiva`;
    }
    else {
        return "En tunne henkilöä";
    }
}

//console.log(henkilo("Pekka"));

const henkilo2 = (nimi) => {
    switch (nimi) {
        case 'Pekka':
            return "Minunkin mielestäni Pekka on kiva";
        case 'Liisa':
            return "Minunkin mielestäni Liisa on kiva";
        case 'Liisa':
            return "Minunkin mielestäni Jorma on kiva";
    }
}

//console.log(henkilo("Pekka"));

// Tehtävä 1.22

/*
a) epätosi
b) epätosi
c) tosi
d) epätosi
e) epätosi
f) tosi
*/

// Tehtävä 1.23

const ajokerrat = () => {
    let pituus = 0.3;
    let leveys = 0.5;
    let korkeus = 0.5;
    let tilavuusYht = pituus * leveys * korkeus;
    for (let i = 1; i < 50; i++) {
        pituus *= 1.02;
        leveys *= 1.03;
        korkeus *= 1.015;
        tilavuusYht += pituus * leveys * korkeus;
    }
    return Math.ceil(2500 * tilavuusYht / 10500);
}

//console.log(ajokerrat());
// 7 kertaa
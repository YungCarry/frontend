function elso() {
  let szoveg1 = "kecske";
  let szoveg2 = "sajt";
  console.log("Elso feladat: " + szoveg1 + szoveg2);
}

function emeles() {
  let alapar = 1500;
  let emelesertek = 10;
  console.log("Emeles értéke: " + (alapar / 100) * (emelesertek + 100));
}

/*function laci(){
    for (let i = 0; i < 100; i++)
    {
        console.log("Laci")
    }
}
*/

function negyzetgyok() {
  var gyok = 16;
  console.log("A szam negyzetgyöke: " + Math.sqrt(gyok));
}

function parosszamokossz() {
  let also = 42;
  let felso = 100;
  let osszeg = 0;

  for (let i = also; i <= felso; i++) {
    if (i % 2 === 0) {
      osszeg += i;
    }
  }

  console.log("Ötödik feladat: " + osszeg);
}

function szobeliVizsga() {
  let vizsgazokSzama = 5;
  let kerdesekSzama = 8;
  let elsoKerdestKapSzekszama = 2;

  const bonuszKerdes =
    (elsoKerdestKapSzekszama + kerdesekSzama - 1) % vizsgazokSzama ||
    vizsgazokSzama;
  console.log("Hatodik feladat: " + bonuszKerdes);
}

/*function hetedik() {
    var szam = 11;
    var szamok = [];
    for(let i = 2; i < szam; i++ ) {
        if (szam % i == 0)
        {
            console.log(i)
            szamok.push(szam);
        }
        
    }
    console.log(szamok)
    let x = szamok.lastIndexOf
    if (szamok[x] = szam) {
        console.log("Nyert!");
    }
}*/

function nyolcadik() {
  var szazalek = 87;

  if (szazalek >= 0 && szazalek <= 49) {
    console.log("1");
  } else if (szazalek >= 50 && szazalek <= 62) {
    console.log("2");
  } else if (szazalek >= 63 && szazalek <= 75) {
    console.log("3");
  } else if (szazalek >= 76 && szazalek <= 88) {
    console.log("4");
  } else if (szazalek >= 89 && szazalek <= 100) {
    console.log("5");
  } else {
    console.log("Helyetel érték");
  }
}

function kilencedik() {
  for (i = 1; i <= 10; i++) {
    console.log(i);
    for (j = 1; j <= 10; j++) {
      console.log(i * j);
    }
  }
}

function tizedik() {
  let magassag = 5;
  for (let i = 1; i < magassag; i++) {
    console.log("x");
  }
}

function tizenegy() {
  let szam1 = 56;
  let szam2 = 37;
  let muvelet = "/";

  switch (muvelet) {
    case "+":
      console.log(szam1 + szam2);
      break;
    case "-":
      console.log(szam1 - szam2);
      break;
    case "*":
      console.log(szam1 * szam2);
      break;
    case "/":
      console.log(szam1 / szam2);
      break;
    default:
      console.log("Hibás érték");
  }
}

function tizenketto() {
  let jegyek = [4, 5, 2, 5, 5];
  let osszeg = 0;

  jegyek.forEach((jegy) => {
    osszeg += jegy;
  });
  console.log("Tizenketto: " + osszeg / jegyek.length);
}

function tizenharom() {
  let nap = 500;
  for (let i = 1; i <= 7; i++) {
    nap = nap + nap;
  }
  console.log(nap);
}

function tizennegy() {
  let elsoNapOra = 11;
  let elsoNapPerc = 16;

  let masodikNapOra = 8;
  let masodikNapPerc = 27;

  let idokulonbseg =
    elsoNapOra * 60 + elsoNapPerc - (masodikNapOra * 60 + masodikNapPerc);
  let idokulonbsegperc = idokulonbseg % 60;
  let idokulonbsegOra = parseInt(idokulonbseg / 60);
  console.log(
    "Az időkülöbség: " + idokulonbsegOra + " óra " + idokulonbsegperc + " perc"
  );
}

function tizenot() {
  let bulizok = 8;
  let rendorok = 3;
  let elfogottak = 0;

  for (let i = 0; i <= rendorok; i++) {
    elfogottak = i * i - i;
  }

  if (bulizok > elfogottak) {
    console.log(
      bulizok - elfogottak + " elmenekült, " + elfogottak + " embert fogak el"
    );
  } else if (elfogottak < bulizok) {
    console.log("Mindenkit elfogtak");
  } else {
    console.log("Mindenki elmenekült");
  }
  // console.log("Elfogottak: "+ elfogottak);
}

function tizenot() {
  const readline = require('node:readline');
  const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Adjon meg egy számot`, gondoltszam => {
  console.log(`Hi ${name}!`);
  rl.close();
});
}

elso();
emeles();
//laci();
negyzetgyok();
parosszamokossz();
szobeliVizsga();
//hetedik();
nyolcadik();
//kilencedik();
tizenegy();
tizenketto();
tizenharom();
tizennegy();
tizenot();

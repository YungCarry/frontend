const nevek = [];

nevek.push({ nev: "Vr pisti", kor: 12 });
nevek.push({ nev: "Jani", kor: 24 });
nevek.push({ nev: "Lajos", kor: 35 });

//console.log(nevek);

const a = () => {
  nevek.forEach((n) => {
    console.log("A kedvencem: " + n.nev);
  });
};

/*const keres = nevek.filter((n) => n.kor > 15 && n.kor < 25);
console.log(keres);*/

nevek
  .filter((n) => n.kor > 15 && n.kor < 25)
  .forEach((n) => console.log(n.nev));

const nevek2 = nevek.find((n) => n.nev === "Jani");
console.log(nevek2);

szamok = [1, 2, 3, 4, 5, 6, 7];
const paros = szamok.filter((x) => x % 2 == 0);
console.log(paros);

let hianyzok = 16 - 12;
console.log(hianyzok);

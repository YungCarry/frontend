x = "5";
y = 5;
console.log(x == y);
console.log(x === y);

let szamok = null;

if (szamok !== null) {
  console.log("true");
} else {
  console.log("false");
}

/*
let i = 5;

while( i > 4)
{
    console.log("Boros budos");
}

*/

const szamok2 = [1, 2, 3, 4, 5, 6, 7, 8];

/*szamok2.forEach((e) => {
  console.log(e);
});
*/

//szamok2.forEach((e) => console.log(e * 2));

const szuro = szamok.filter((e) => e > 3).forEach((e) => console.log(e));

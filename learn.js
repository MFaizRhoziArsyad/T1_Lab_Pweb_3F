// Laithan 5.1 = Membuat variabel dan konstanta dan menampilkan
// membuat variabel
let myNumber = 16;
let myString = "Hello"
let myBoolean = true
const phi = 3.14
// menampilkan informasi ke console
console.log(myNumber)
console.log(myString)
console.log(myBoolean)
console.log(phi)
// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber)
window.alert('Angka favorit saya adalah : ' + myNumber)
window.alert(`Angka favorit saya adalah : ${myNumber}`)

// Latihan 5.2 = Melakukan operasi sederhana dengan operator aritmatika
// Membuat 2 variabel beserta isinya dan melakukan operator aritmatika
let x = 20
let y = 4
console.log(x, y)
console.log('x + y =', x + y)
console.log('x - y =', x - y)
console.log('x * y =', x * y)
console.log('x / y =', x / y)
console.log('x % y =', x % y)
console.log('x++ =', x++)
console.log('++x =', ++x)
console.log('x-- =', x--)
console.log('--x =', --x)

// Latihan 5.3 = Melakukan operasi sederhana dengan operator perbandingan
// Membuat 2 variabel beserta isinya dan melakukan operator perbandingan
let a = 12
let b = 4
console.log(a, b)
console.log('a > b =', a > b)
console.log('a < b =', a < b)
console.log('a >= b =', a >= b)
console.log('a <= b =', a <= b)
console.log('a == b =', a == b)
console.log('a != b =', a != b)
console.log('a === b =', a === b)
console.log('a !== b =', a !== b)

// Latihan 5.4 = Melakukan operasi sederhana dengan operator logika
// Membuat 2 variabel beserta isinya dan melakukan operator logika
console.log('true && true =', true && true)
console.log('true && false =', true && false)
console.log('false && true =', false && true)
console.log('false && false =', false && false)
console.log('true || true =', true || true)
console.log('true || false =', true || false)
console.log('false || true =', false || true)
console.log('false || false =', false || false)
console.log('!true =', !true)
console.log('!false =', !false)

// Latihan 5.5 = Membuat fungsi

// Fungsi menghitung luas persegi dengan menggunakan 1 parameter
function luas_persegi(s){
    luas = s*s;
    return luas;
}
console.log(luas_persegi(8));

// Fungsi menghitung luas segitiga dengan menggunakan 2 parameter
function luas_segitiga(a,t){
   luas = 0.5 * a * t;
    return luas;
}
console.log(luas_segitiga(5,10));

// Fungsi menghitung volume balok dengan menggunakan 3 parameter
function volume_balok (p,l,t){
    luas = p * l * t;
    return luas;
}
console.log(volume_balok(12,4,2));

// Latihan 5.6 = Bermain dengan Array

// Membuat Array dengan mengisi nama-nama hewan
var hewan = ["Kucing" , "Anjing" , "Monyet" , "Burung"]; 
console.log (hewan[0]);
alert ("nama hewan index 0 adalah ="+hewan[0]);
console.log (hewan[1]);
alert ("nama hewan index 1 adalah ="+hewan[1]);
console.log (hewan[2]);
alert ("nama hewan index 2 adalah ="+hewan[2]);
console.log (hewan[3]);
alert ("nama hewan index 3 adalah ="+hewan[3]);

// Menambahkan item baru ke bagian paling akhir suatu array
hewan.push("Panda");
//  menghapus item terakhir dari sebuah array
hewan.pop();
// menghitung ukuran array
hewan.length
// menambahkan item di awal array
hewan.unshift ("Beruang" , "Lumba-lumba")
// menampilkan item pertama pada array
hewan.shift ();
// mengurutkan array
hewan.sort ();
//  membalikkan urutan dari array / bagian akhir ke depan / bagian depan ke belakang
hewan.reverse ();


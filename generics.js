function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
var sehir = deger2("Ankara");
console.log(sehir);
// deger x e number type i verince string, string type i verince number yazamiyoruz
// Ama T ile type i belirtir sonra x degeri yazarken type i belirtirsek sorun olmuyor 
// 
function deger3(x) {
    return x;
}
var sayi3 = deger3(2);
var sehir3 = deger3('Ankara');
console.log(sayi3);
console.log(sehir3);

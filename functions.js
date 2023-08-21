function topla(x, y) {
    return x + y;
} // normal js kullanimi boyleydi. Ama x ve y icin herhangi bir sey olmasini istemiyoruz. sayilarla calisacagiz sadece
// dersek asagidaki gibi yapiyoruz
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("Ankara", 2));
// console.log(topla2(2,"Ankara")) --> kabul etmiyor
console.log(topla3(4, 8));
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(topla4(3)); // normalde buna izin vermiyor ts de, 2 variable turu girmemiz gerek
// ama yukarida number i default olarak 4 diye belirttik. bu sayede kabul ediyor
// istersek asagida console icinde yeni deger de atayabiliriz. 
function topla5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(3, 45)); // y yi undefined yaptigimiz icin boyle yaptik. burada onemli olan defaultlar sonda olmali
// x 'i undefined yapamayiz
//REST PARAMETRELERI
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Yavuz", "Selim", "Zumrut"));

function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer('Yavuz');
console.log(mesaj);
// burada mesela js ye uygun bir selam fonksiyonu yazdik 
// ancak fonksiyonda isim:boolean vs gibi isim variable inin turunu belirtirsek sorun cikariyor 
// typescript ile gunumuzde 4. nesile uygun, C# gibi java gibi dillere uygun yazabiliyoruz
// arkaplanda yine javascript ile calisiyor ama javascriptin esnekliklerini kullanmiyoruz

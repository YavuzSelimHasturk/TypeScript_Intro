function topla(x,y){
    return x+y;
} // normal js kullanimi boyleydi. Ama x ve y icin herhangi bir sey olmasini istemiyoruz. sayilarla calisacagiz sadece
// dersek asagidaki gibi yapiyoruz

function topla2(x:number,y:number):number{
    return x+y;
}

let topla3 = function(x:number,y:number):number{
    return x+y;
}

console.log(topla(2,3))
console.log(topla("Ankara",2))
// console.log(topla2(2,"Ankara")) --> kabul etmiyor
console.log(topla3(4,8))

function topla4(x:number,y:number=4):number{
    return x+y;
}
console.log(topla4(3)) // normalde buna izin vermiyor ts de, 2 variable turu girmemiz gerek
                        // ama yukarida number i default olarak 4 diye belirttik. bu sayede kabul ediyor
                        // istersek asagida console icinde yeni deger de atayabiliriz. 

                        
function topla5(x:number,y?:number):number{
   if(y){
    return x+y
   }
    return x;
}
console.log(topla5(3,45))   // y yi undefined yaptigimiz icin boyle yaptik. burada onemli olan defaultlar sonda olmali
                            // x 'i undefined yapamayiz

//REST PARAMETRELERI
function davetEt(ilkDavetli:string, ...digerleri:string[]):string{
    return ilkDavetli + " " + digerleri.join(" ");
}
// ayni tipte alacagimiz parametrenin eleman sayisi velli degilse rest parametresinden yararlaniyoruz
console.log(davetEt("Yavuz","Selim","Zumrut"))
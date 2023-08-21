function selamVer(isim:string){
return "Merhaba " + isim
}

let mesaj = selamVer('Yavuz')

console.log(mesaj)

// burada mesela js ye uygun bir selam fonksiyonu yazdik 
// ancak fonksiyonda isim:boolean vs gibi isim variable inin turunu belirtirsek sorun cikariyor 


// typescript ile gunumuzde 4. nesile uygun, C# gibi java gibi dillere uygun yazabiliyoruz
// arkaplanda yine javascript ile calisiyor ama javascriptin esnekliklerini kullanmiyoruz


let sayi:number =12
sayi=10
sayi=10.4

let sehir:string = "Adana"
sehir="Ankara"
sehir="Istanbul"
// sehir=10  --> sehirin tipini yukarida string olarak belirttigimiz icin kabul etmiyor

let dogruMu:boolean =true
dogruMu=false
dogruMu=true

let sayilar:number []= [1,2,3]
// let sayilar2:number []= [1,2,3,"Ankara"]  --> kabul etmiyor. arrayi numberlardan olusacak diye belirledik cunku

let sayilar2:Array<number> =[1,2,3]  // sayilar2 nin array oldugunu ve numberdan olustugunu belirtiyoruz

let dizi:[number,string] =[2,"Ankara"] // buna tuple deniyor. arrayda once number sonra string kullancagimizi belirttik

enum Renk {Kirmizi=1,Siyah,Mavi}    // enum class mantigi ile calisiyor. Bu yuzden Renk buyuk harfle basladi
let renk:Renk= Renk.Kirmizi         // Kirmizi ya atama yapip 1 de diyebiliyoruz. Proje devaminda olasi bir ren degisiminde 
                                    // enum ile kolayca degistiriyoruz

let deger:any ="Ankara"         // gelecek olan veri tipini bilmmiyorsak kullaniriz. 
deger=2
deger=true
deger={}                                    

//void genellikle fonksiyonlarda kullanilir. Fonksiyonda bisey dondurmek istemedigimizde kullaniriz
let deger2:void = undefined

function selamVer2():void{
    console.log("Merhaba")
 //   return 5;  // void deyince return uyari verdi. Bisey dondurmeyecegiz. Sadece bi islemi yapmasini ister, bir emir verirsek void kullaniriz
}







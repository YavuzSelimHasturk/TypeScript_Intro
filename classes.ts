class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi=odaSayisi
        this._kat=kat
        this._pencereSayisi=pencereSayisi
    }
    yemekYe(){
        console.log(this._kat+ " katli evde"+ " Yemek yenildi")
    }
    
}
// erisim bildirgecleri default olarak public tir. private yazarsak sadece tanimlandigi classin icerisinden erisebiliriz
// protected da private ile ayni, ayrica inherit edilen class ta da kullanilabilir

let ev = new Ev(3,5,8)
ev.yemekYe();


// inheritence 
class Kisi{
    private _isim:string
    // getter ve setter ile encapsulation da yapabilriz
    get isim():string{
        return "Sayin : " + this._isim;
    }

    set isim(ad:string){
        this._isim=ad
    }

    kaydet(){
        console.log("Kisi kaydedildi");
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satis yapildi");
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maas odendi");
    }
}

let musteri =new Musteri()
musteri.isim="Selim"
console.log(musteri.isim)
musteri.kaydet()
musteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()


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

let ev = new Ev(3,5,8)
ev.yemekYe();


// inheritence 
class Kisi{
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
musteri.kaydet()
musteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()


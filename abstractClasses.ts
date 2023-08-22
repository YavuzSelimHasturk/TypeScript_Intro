abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{
        console.log("Kaydedildi")
    }

    abstract hesapla():void;

}

class TuketiciKredi extends KrediBase {
   
    constructor(){
            super();
    }

    hesapla(): void {
        console.log("Tuketici kredisine gore heap yapildi")
    }
}

let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.hesapla()
tuketiciKredisi.kaydet()

let kredi: KrediBase
kredi=new TuketiciKredi()
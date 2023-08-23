function deger(x: number): number {
    return x;
}

function deger2(x: string): string {
    return x;
}
let sayi = deger(10)
console.log(sayi)

let sehir = deger2("Ankara")
console.log(sehir)

// deger x e number type i verince string, string type i verince number yazamiyoruz
// Ama T ile type i belirtir sonra x degeri yazarken type i belirtirsek sorun olmuyor 
// generic deniyor buna. 

function deger3<T>(x:T):T{
    return x;
}

let sayi3 = deger3<number>(2)
let sehir3= deger3<string>('Istanbul')
console.log(sayi3)
console.log(sehir3)

// generics leri class olarak da kullanabiliyoruz

class GenericClass<T> {
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif = new GenericClass<number>()
    sinif.fonksiyon(12);
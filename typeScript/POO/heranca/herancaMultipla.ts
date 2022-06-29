interface Automovel{
    cor:string
    modelo:string
    marca:string
    ligar():boolean    
}

interface AWD{
    ativar():boolean
}

class Offroad implements Automovel, AWD{
    cor: string = "Dark Cyan"
    modelo: string = "renegate"
    marca: string = "geep"
    ligar(): boolean {
        return true
    }
    ativar(): boolean {
        return  true
    }

}

var carro:Offroad = new Offroad
console.log(carro.cor);


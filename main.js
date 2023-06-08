const botoes = document.querySelector('[data-tipo="botoes"]')
const display = document.querySelector('[data-tipo="display"]')

var numero =[]
let i = 0
let numeroCompleto

let A = 0
let B = 0
let opercao = 0
botoes.addEventListener('click',(evento)=>{
        
        if(!isNaN(evento.target.dataset.tipo) || (evento.target.dataset.tipo == "+/-") || (evento.target.dataset.tipo == "."))
        {            
            capturaNumero(evento)   
        }
        else{
            funcao(evento.target.dataset.tipo)
        }

 
})

const capturaNumero = (evento) =>{

        if(numero.length<=10 && ((!isNaN(evento.target.dataset.tipo))||(evento.target.dataset.tipo == "."))){
            numero[i] = evento.target.dataset.tipo        
            numeroCompleto = numero.toString().replace(/[,]/g,'')
            numeroCompleto = parseFloat(numeroCompleto)
            i++
        }
        
        if((evento.target.dataset.tipo == "+/-")){
            numeroCompleto = parseFloat(display.textContent)
            numeroCompleto = numeroCompleto * (-1)
            if(isNaN(numeroCompleto))
            numeroCompleto=0
        }

        display.innerHTML = numeroCompleto
        
}

const zeraNumero = () =>{
    numero = []    
    numeroCompleto = 0
    i=0
}

const zeraTudo = () =>{
    zeraNumero()
    A=0
    B=0
    display.innerHTML = 0
}




const funcao = (funcaoEx) => {

    
    if(A==0){
        A = numeroCompleto
        zeraNumero()       
    }
    else{
        B = numeroCompleto
        zeraNumero()      
    }


    if(funcaoEx==="+"){
        opercao=1
        soma()
    }

    if(funcaoEx==="-"){
        opercao=2
        subt()
    }

    if(funcaoEx==="/"){
        opercao=3
        div()
    }

    if(funcaoEx==="*"){
        opercao=4
        mult()
    }

  
    
    if(funcaoEx==="=")
       igual()


    if(funcaoEx==="CE")
    zeraTudo()   

}



const soma = () =>{

        if(A!=0 && B!=0)
        {   
            A = A + B
            display.innerHTML  = A
        }


}

const subt = () =>{
    if(A!=0 && B!=0)
    {   
        A = A - B
        display.innerHTML  = A
    }
}

const div = () =>{
    if(A!=0 && B!=0)
    {   
        A = A / B
        A = A.toFixed(3)
        A = parseFloat(A) 
        display.innerHTML  =  A
    }
}

const mult = () =>{
    if(A!=0 && B!=0)
    {   
        A = A * B
        display.innerHTML  = A
    }
}


const igual = (funcaoEx) =>{

    if(opercao == 1)
    soma()

    if(opercao == 2)
    subt()

    if(opercao == 3)
    div()

    if(opercao == 4)
    mult()
}
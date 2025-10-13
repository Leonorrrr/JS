
function ex1(){
document.writeln("Leonor Lucero")
document.writeln("1r Batx")
document.writeln("Científic-Tecnològic")
document.writeln("2025")
document.writeln("Grau d'enginyeria")
}

function ex2(){
let nom = "Leonor Lucero"
document.writeln(nom)
let curs = "1r Batx"
document.writeln(curs)
let modalitat = ("Científic-Tecnològic")
document.writeln(modalitat)
let any = "2025"
document.writeln(any)
let estudis = "Grau d'enginyeria"
document.writeln(estudis)
}

function ex3(){
    let nom = "Leonor"
    let cognom = "Lucero"
    let edat = "16"
    let peli = "Love Actually"
    let any = "2003"
    document.writeln("Hola! El meu nom és "+nom+" "+cognom+", tenc "+edat+" anys i la meva pel·lícula preferida és "+peli+", de l'any "+any+".")
}

function ex4(){
    let notes = 5+6+8+2+7
    let mitjana = notes/5
    document.writeln("La suma de las notes és "+notes+" i la seva mitjana és: "+mitjana+"")
}

function ex5(){
   let a = 2
   let b = 4
   let c = 1
   let bneg= -b
   let quadrat = Math.pow(b,2)
   let arrel = Math.sqrt(quadrat-(4*a*c));
   let num1 = bneg+arrel
   let num2 = bneg-arrel
   let denom = 2*a
   let valor1 = num1/denom
   let valor2 = num2/denom
   document.writeln(" Les soluciones són: "+valor1+" i "+valor2+"")

}

function ex6(){
    let nom = prompt("Quin és el teu nom?")
    let actor = prompt("Quin és el teu actor preferit?")
    document.writeln ("L'actor que més li agrada a na "+nom+" és en "+actor)
}

function ex7(){
let a = parseFloat(prompt("Introduce un número"))
let b = parseFloat(prompt("Introduce un número"))
let c = parseFloat(prompt("Introduce un número"))
let d = parseFloat(prompt("Introduce un número")) 
let sumanotes = a+b+c+d
let mitjana = sumanotes/4
document.writeln ("La mitjana aritmètica és de: "+resultat+"")

}

function ex8(){

    let a = parseFloat(prompt("Introduce un número"))
   let b = parseFloat(prompt("Introduce un número"))
   let c = parseFloat(prompt("Introduce un número"))
   let bneg = -b
   let quadrat = Math.pow(b,2)
   let arrel = Math.sqrt(quadrat-(4*a*c));
   let num1 = bneg+arrel
   let num2 = bneg-arrel
   let denom = 2*a
   let valor1 = num1/denom
   let valor2 = num2/denom
   document.writeln(" Les soluciones són: "+valor1+" i "+valor2+"")

}

 function ex9(){
    let valor1 = parseInt(prompt("dime un num"))
    let valor2 = parseInt(prompt("dime un num"))
    if(valor1 >= valor2){
        document.writeln("Hola, el meu nom és Leonor i el primer nombre és major o igual que el segon");
    }else{
    document.writeln("Hola, el meu primer llinatge és Lucero i el primer nombre és menor que el segon.");
    }
}

function ex10(){
 let resposta = prompt("dime un país")
    if(resposta == "França"){
	document.writeln("Europa");
}else if(resposta == 'Estats Units'){
	document.writeln("Amèrica");
}else if(resposta == "Japó"){
	document.writeln("No estàs ni contenta ni trista!!");
}else if(resposta == "Egipte"){
    document.writeln("Àfrica");
}else{
document.writeln("Mordor");
}
}


 
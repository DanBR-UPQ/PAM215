// Tipos de datos

"Hola mundo" //String

495 // Numero
-3.7

true
false // bools

//Array 
["aa", "aaa", "aaa"]


//Object
console.log({
    "username": "Daniel",
    "score": 96.4,
    "horas": 12,
})

// Var y let son para crear variables
var usuario = "Daniel"
let apellido = "Betancourt"
let x = 5
let y = 7

// Cons es para que la variable no cambie
const PI = 3.141519


console.log(usuario, " ", apellido)

document.write("Hola mundo") // Deprecado, elimina todo el html que ya existe
document.getElementById("demo").innerText = "Hola mundo 2\n" // No deprecado, puro texto
document.getElementById("demo2").innerHTML += "<h1>Título</h1>" // para poner HTML


// Funciones
function FuncionPrueba(){

    console.log("Texto 1")
    console.log("Texto 2")

}

function Suma(x, y){
    return x + y;
}

document.getElementById("demo").innerText += Suma(x,y)
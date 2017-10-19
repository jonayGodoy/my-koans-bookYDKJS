
notes from [Compiler Speak](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-speak)

```
var a = 2;
```


Cuando engine ejecuta el código que el compilador produce para el "var a = 2", que tiene que mirar en marcha la variable apara ver si se ha declarado, y este look-up está consultando Scope.Pero el tipo de look-up del motor realiza afecta el resultado de la consulta.

En nuestro caso, se dice que el Engine se iba a presentar un "LHS" look-up para la variable a. El otro tipo de consulta que se llama "RHS".

Apuesto a que se puede adivinar lo que la "L" y "R" significa. Estos términos significan "lado izquierdo" y "en el lateral derecho".

Lado ... de qué? **De una operación de asignación.**

En otras palabras, una consulta de LHS se realiza cuando aparece una variable en el lado izquierdo de una operación de asignación, y un lado derecho de consulta que se realiza cuando aparece una variable en el lado derecho de una operación de asignación.

LHS de consulta está tratando de encontrar el propio contenedor de variables, de modo que pueda asignar. De esta manera, RHS no produce realmente significa "lado derecho de una asignación", simplemente, más exactamente, significa "no lado izquierdo".
 
```
function foo(a){
    console.log(a) //2
} 

foo(2);
```

Imaginemos el intercambio anterior (que procesa este fragmento de código) como una conversación. La conversación podría ir un poco más o menos así




    Engine : Hey Scope , tengo una referencia para los RHSfoo. ¿Has oído hablar de él?

    Scope : ¿Por qué sí, tengo. Compilador lo declaró hace un segundo. Es una función. Aqui tienes.

    Engine : Muy bien, gracias! OK, estoy ejecutandofoo.

    Engine : Hey, Scope , tengo una referencia de LHSa, nunca oído hablar de él?

    Scope : ¿Por qué sí, tengo. Compilador lo declaró como un parámetro formal quefoohace poco. Aqui tienes.

    Engine : útil como siempre, Ámbito de aplicación . Gracias de nuevo. Ahora, el tiempo para asignar2aa.

    Engine : Hey, Scope , Perdone que le moleste de nuevo. Necesito una consulta de RHS paraconsole. ¿Has oído hablar de él?

    Scope : No hay problema, Engine , esto es lo que hago todo el día. Sí, tengoconsole. Está integrado. Aqui tienes.

    Engine : perfecto. Mirando hacia arribalog(..). OK, genial, es una función.

    Engine : Yo, Ámbito de aplicación . ¿Me puede ayudar con una referencia a RHSa. Creo que lo recuerdo, pero sólo quiero una doble comprobación.

    Scope : Tienes razón, Engine . El mismo tipo, no ha cambiado. Aqui tienes.

    Engine    : Cool. Pasando el valor dea, que es2, enlog(..).

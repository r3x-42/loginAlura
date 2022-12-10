

    


  
 

   var inicioDeSesionRegistrado = "alura";
   var contrasenhaRegistrada = "alura321";

   var contador = 1
   var maximoIntentos = 3

   


    while(contador <= maximoIntentos){
        var inicioDeSesionIngresado = prompt("Ingrese su usuario");
        var contrasenhaIngresada = prompt("Ingrese su contraseña");
        
        if(inicioDeSesionIngresado == inicioDeSesionRegistrado && contrasenhaIngresada == contrasenhaRegistrada) {
            alert("Bienvenido al sistema " +  inicioDeSesionIngresado);
            contador = maximoIntentos;
            
        } else if(contador == 3) {
            alert("Agotaste el numero de intentos permitido");
        }else {
            alert("inicio de sesión inválido. Favor intente de nuevo")
        }

        contador++;
    }

    

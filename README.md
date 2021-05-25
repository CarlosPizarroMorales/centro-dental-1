# Desafio Javascript arrays y objetos 'Centro Medico'

1. Se implementa directamente con los estilos de Bootstrap.
2. La idea inicial es hacer: 
   1. hacer tabla fija de 8 filas,
   2. con cada petición a través del menu dropdown: 
      1. limpia la tabla completamente,
      2. presenta los nuevos campos,
3. para lo anterior, la tabla debe tener altos de fila fijos para no 'achurrascarse' al vaciarse dando la falsa impresión de una animación fake.  
4. He encontrado dificil agregar un eventListener a un menu dropdown de Bootstrap. Finalmente he optado por usar un elemento select con un evento change, que me otorga el value de la opcion seleccionada. 

### Recordar:
1. Revisar como manejar con eventListeners un menu dropdown de BS.
2. OJO!! Una arrow function en un handler no da el this que esperaba. Entender bien la diferencia del scope al que se refieren las funciones arrow. Con function word funciona bien. This manejable facilmente. 
3. Un detalle nuevo: hoy hice un menu desplegable con un elemento select, manejado a traves del evento onchange.
   

### Revisar: 
1. index.html linea 18
2. main.js linea 126
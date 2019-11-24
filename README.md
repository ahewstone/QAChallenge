***********************
Descripción del desafío
************************
* Se debe utilizar Cucumber, TestCafe y Javascript. 
* No se debe solicitar ingresos de datos por parte de usuarios, todo debe ser automático. 
* El proyecto debe ser entregado en Github.
* Se deben automatizar la consulta de sucursales:
    - En google buscar la palabra "tottus sucursales" y del listado que aparece, presionar en el texto que dice "Tottus Nataniel" y presionar el botón Sitio web.
    - Una vez en la página de tottus, buscar la opción "Recetas"
    - Seleccionar Dificultad alta
    - Buscar corona de Rollitos de canela
    - Y validar que la receta tenga canela y azúcar rubia.

********************
Herramientas usadas
********************
* testcafe: 1.6.1
* cucumber: 5.1.0
* npm: 6.12.0
* base64-img: 1.0.4
* Visual code como editor de texto 
* Bajo entorno iOS

*********************************************
Material utilizado para construir el proyecto
*********************************************
* https://github.com/rquellh/testcafe-cucumber/
* https://devexpress.github.io/testcafe/documentation/


***************
¿Cómo ejecutar?
***************
1. Abrir la terminal y situarse en la carpeta raíz del proyecto
2. Ejecutar el comando:
    npm install
3. Correr el siguiente comando:
    node_modules/cucumber/bin/cucumber-js
    
NOTA: El proyecto está diseñado para correr en Chrome

*************************
Observaciones importantes
*************************
* Mientras se realizaba la construcción de este proyecto, se encontró un inconveniente 
técnico en la página principal de https://www.tottus.cl/tottus/ la cual contiene un error
de JS y por lo que se tuvo que añadir la excepción .run({skipJsErrors:true}) 
dentro el run() ubicado en el archivo hooks.js 
Esto no es una buena practica ya que realmente salta un error de la página, pero se 
hizo así para poder ejecutar el desafío planteado.
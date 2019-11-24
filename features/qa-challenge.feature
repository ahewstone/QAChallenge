Feature: Desafío QA Automatizador

   Desafío QA Automatizador - Falabella Financiero Digital Factory

Scenario: Verificar que la receta tenga azúcar y canela

Given He desplegado la página de Google
And Tipeé el texto "tottus sucursales" en Google
And Realicé la busqueda presionando "enter"
When Selecciono la opción de Tottus Nataniel
And Espero que aparezca la sección de "recetas"
And Hago click sobre la opción de recetas
And Selecciono la opción de Dificultad alta
And Espero a que la receta "Corona de rollitos de canela" cargue
And Selecciono la opción "CORONA DE ROLLITOS DE CANELA"
Then Verifico que la receta contenga "azúcar rubia"
And Verifico que la receta también contenga "canela"
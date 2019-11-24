const {Given, When, Then} = require('cucumber');
const {Selector} = require('testcafe')

Given('He desplegado la página de Google', async function() {
    await testController.navigateTo('https://www.google.com/');
});

Given('Tipeé el texto {string} en Google', async function(text) {
    var chromeSearchField = Selector('[name="q"]').with({boundTestRun: testController});
    await testController.typeText(chromeSearchField, text)
});

Given('Realicé la busqueda presionando {string}', async function(text) {
    await testController.pressKey(text);
});

When('Selecciono la opción de Tottus Nataniel', async function() {
    await testController.click('.BSaJxc');
});

When('Espero que aparezca la sección de {string}', async function(text) {
    try {
        var recipeIcon =  Selector('#new_tottus_nav_cliente_recetas').with({boundTestRun: testController});
        await testController.expect(recipeIcon.innerText).contains(text);  
    } catch (error){}
});

When('Hago click sobre la opción de recetas', async function(){
    await testController.click('#new_tottus_nav_cliente_recetas');
});

When('Selecciono la opción de Dificultad alta', async function(){
    const levelOption = Selector('[onclick="clickfilter(3)"]');
    await testController.click(levelOption);
});

When('Espero a que la receta {string} cargue', async function(text) {
        var recipeBox =  Selector('.card-desc').with({boundTestRun: testController});
        await testController.expect(recipeBox.exists).ok();  

});

When ('Selecciona la opción {string}',async function(text){
    const recipe = Selector('.card-desc').innerText.contains(text)
    await testController.click(recipe);
});
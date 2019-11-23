const {Selector} = require('testcafe')

fixture `Desafío QA Automatizador`

test('Verificar que la receta tenga azúcar y canela', async function(t){
    const chromeSearchField = Selector('[name="q"]')
    const chromeSearchButton = Selector('[name="btnK"]');
    const natanielCoxOption =  Selector('.BSaJxc');
    const recipeOption = Selector('#new_tottus_nav_cliente_recetas').child;
    const levelOption = Selector('[onclick="clickfilter(3)"]');

    const example = Selector('.huinchaDesk');

    await t
    .maximizeWindow()
    .navigateTo('https://www.google.com/')
    .typeText(chromeSearchField, 'tottus sucursales')
    .click(chromeSearchButton)
    .click(natanielCoxOption)
    .wait(20000)
    .click(example)


    

});
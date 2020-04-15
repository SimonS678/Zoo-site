const inputanzahl = document.querySelector('#anzahl');
const button = document.querySelector('#button');
const output = document.querySelector('#output');
const inputtier = document.querySelector('#tier')


function foodcalc(numberanimal, animal){
    var foodamount;

    if (animal == 'girafe') {
        foodamount = 40 * numberanimal
    }
    return foodamount;
}
//console.log(foodcalc(5, 'girafe'))

button.addEventListener('click', function(){
    console.log(inputtier.value, inputanzahl.value)
   output.innerHTML = foodcalc(inputanzahl.value, inputtier.value)
});
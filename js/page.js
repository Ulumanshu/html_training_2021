/* 
   funkcija skirta mygtukui Paspausk mane, perkelia raudona teksta i kaire ir i desine
   brebrethtrntrntrntrnrtntrnmnrtntnrtnrtntrnntrnr ......................................
   .....................................................................................
 */
function paslepk_raudona() {
    var element = document.getElementById("xx");
    console.log("MUSU ELEMENTAS: ", element, element.classList, element.classList.contains('hidden'));
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('shown');
    } else {
        element.classList.remove('shown');
        element.classList.add('hidden');
    }
};
// JS KINTAMIEJI #####################################################
// SIMPLE TYPES

//NUMBERS
var num_integer = 4;
var num_float = 4.56;
// String -text
var str_1 = "I am string";
// Booleans true - false
var blool_1 = false;

// Complex types

// Array sarasas
var array_var = Array(); // var array_var = [];
// Array push metodas prideda objektus i sarasa
var sar_ilgis = array_var.push("Kiwi2", "Kiwi3", '4', 14, {'vardas': 'Petras'});
console.log("Array", array_var, 'Saraso Ilgis', sar_ilgis, typeof array_var)
// Objektas - dictionary kitose kalbose
var dict_var = new Object();
var dict_var2 = {};
dict_var['type'] = 'Very Complex';
console.log("Object", dict_var, typeof dict_var);
console.log("Object2", dict_var2, typeof dict_var2);

//Special types

// null - no value ,
// NaN - Not A Number - invalid number value,
// undefined - when a variable that has not been declared or initialized.

//########################################################



var a = 200;
var str_num = '3';
let b = 'TEKSTINIS KINTAMASIS b';
const c = 19;
var d = ['a', 12, 'c'];
var e = 5;
var client_list = Array()
client_list.push("Kiwi");

var int_num = parseInt(str_num, 10)
var sum_1 = a + int_num;
var sum_2 = a + str_num;

console.log("SUMA1", sum_1);
console.log("SUMA21", sum_2);

// typeof nustatyti kintamojo tipui! Daznai prireikia.
console.log("SUMA1 TIPAS", typeof sum_1);
console.log("SUMA2 TIPAS", typeof sum_2);

// document.write('new text');

// alert('hello');

// Log if js successfully imported
console.log('JS FUNCTIONS LOADED SUCCESFULLY!', a, b, c, d, e, client_list, sar_ilgis);
/* 
   funkcija skirta mygtukui Paspausk mane, perkelia raudona teksta i kaire ir i desine
   brebrethtrntrntrntrnrtntrnmnrtntnrtnrtntrnntrnr ......................................
   .....................................................................................
 */
function paslepk_raudona(arg1, arg2) {
    console.log(arg1, arg2);
    if (!arg1 || !arg2) {
        alert('TRUKSTA ARGUMENTU!!!!');
    }
    var element = document.getElementById("xx");
    console.log("MUSU ELEMENTAS: ", element, element.classList, element.classList.contains('hidden'));
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('shown');
    } else {
        element.classList.remove('shown');
        element.classList.add('hidden');
    }

    return element;
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
// Buil in functions
let paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

let searchTerm = 'dog';
let indexOfFirst = paragraph.indexOf(searchTerm);
console.log('DOG found in ', paragraph, "at position: ", indexOfFirst);
let long_word = "Sub Sacharan Desert";

let split_string = long_word.substr(4);
console.log('Padalintas tekstas', split_string);
// ##################################################################################

// var a = 200;
// var str_num = '3';
// let b = 'TEKSTINIS KINTAMASIS b';
// const c = 19;
// var d = ['a', 12, 'c'];
// var e = 5;
// var client_list = Array()
// client_list.push("Kiwi");

// var int_num = parseInt(str_num, 10)
// var sum_1 = a + int_num;
// var sum_2 = a + str_num;

// console.log("SUMA1", sum_1);
// console.log("SUMA21", sum_2);

// // typeof nustatyti kintamojo tipui! Daznai prireikia.
// console.log("SUMA1 TIPAS", typeof sum_1);
// console.log("SUMA2 TIPAS", typeof sum_2);

// // document.write('new text');

// // alert('hello');

// Log if js successfully imported
// console.log('JS FUNCTIONS LOADED SUCCESFULLY!', a, b, c, d, e, client_list, sar_ilgis);
document.addEventListener("DOMContentLoaded", function(event){
    var rezult = paslepk_raudona('pirmas', 'antras');
    console.log('KVIETIMO REZAS', rezult);
});

let a = 10
let b = 10
let c = 5

// let res = (a + b) / c
// a + b / c
function functional_programming_function(a, b, c) {
    return division_ab(sum_ab(a, b), c)
};

function sum_ab(a, b) {
    return a + b
};

function division_ab(a, b) {
    return a / b
};

console.log(functional_programming_function(a, b, c), "MUSU FUNCINIS")

function algebra2 (a, b, c) {
    let sum1 = a + b;
    let result = sum1 / c;
    return result
}
console.log(algebra2(a, b, c), "MUSU IPRASTA FUNCIJA")

let anonymous = function(a) {return a * 2};
let arrow_f = (a) => a * 2;
console.log(anonymous(a), "Anonimine funcija");
console.log(arrow_f(a), "Arrow funcija (neturi savo this (svarbu - naudinga veliau))");


// SCOPES

const person_name = "Lydia";
function get_person_data(name_) {   
    const person_name = "Laima";
    function get_name() {
        return person_name;
    };
    console.log(person_name, 'LOCAL');
    return get_name();
};

let vardas = get_person_data(person_name);
console.log("MES GAVOME", vardas);
// https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd

// Git confict
//bla bla bkla
//asas
function confict_function(a) {
    return a * a
};
function confict_functionkarolis(a) {
    return a * a
};
function confict_functionkarolis(a) {
    return a * a
};
function confict_function(a) {
    return a * a
};
function confict_function(a) {
    return a * a
};

// Callbacks
//anonymous function, doing something
var f = function(a){
    return a * 5;
}

//function, accepting callback as argument
function go(n, func){
    return func(n);
}

//calling the function
let callback_res = go(10, f);
console.log('CALLBACK EXAMPLE: ', callback_res);



let callback_log = function callback_report(res) {
    console.log("SUMMED!", res)
    return res * 2;
};


function executing_function(data, callback_func) {
    let result = data * 10;
    let callback_res = callback_func(result);
    return result + callback_res;
};

let res3 = executing_function(13, callback_log);
console.log(res3, "RES3")

var count = (function () {
    var counter = 0;
    return function () {
        console.log(counter);
        return counter += 1;
    }
})();

//calling the closure function
count(); //1
count(); //2

//variable is not accessible outside the closure
// console.log(counter); //undefined
console.log(count); //undefined

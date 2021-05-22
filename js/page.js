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

let aa = 100;
let bb ;
let cc = 20;

function first_function (aa,bb=4,cc){
    let first_sum = aa * bb;
    let second_sum = cc;
    let all_sum = first_sum + second_sum;
    return all_sum;
}
console.log(first_function(aa,bb,cc), "Pirmoji funkcija");

//CallBack

let x;
let func;

var test = function(x){
    return x * 5;
}

// func(Y) is actually function(X)

function test2 (y, func){

    // šitoje vietoje func(y) y reikšmė iš esmės bus function(x) x reikšmė
    return func(y);
}
// skliaustuose reikšmė 10 bus function(x) x=10
var callBackFunc = test2(10,test);
console.log(callBackFunc);

///////////////////////////////////


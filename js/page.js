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
// JS KINTAMIEJI
var a = 200;
let b = 'TEKSTINIS KINTAMASIS b';
const c = 19;
var d = ['a', 12, 'c'];
var e = 5;
var client_list = Array()
client_list.push("Kiwi");
client_list.push("Kiwi2");

// document.write('new text');

// alert('hello');

// Log if js successfully imported
console.log('JS FUNCTIONS LOADED SUCCESFULLY!', a, b, c, d, e, client_list);
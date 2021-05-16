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
var sar_ilgis = client_list.push("Kiwi2", "Kiwi3", '4', 14, {'vardas': 'Petras'});
var sum_1 = a + d;

console.log("SUMA1", sum_1);





// document.write('new text');

// alert('hello');

// Log if js successfully imported
console.log('JS FUNCTIONS LOADED SUCCESFULLY!', a, b, c, d, e, client_list, sar_ilgis);
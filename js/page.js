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

// document.write('new text');

// alert('hello');

// Log if js successfully imported
console.log('JS FUNCTIONS LOADED SUCCESFULLY!');
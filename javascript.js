/**
 * Created by Артем on 21.11.13.
 */
;(function(){
// . любой один символ
var first = /./g,
    second = new RegExp('.','g');


    ///////////////////
    var emailPattern=/d/;


    function isEmail(email){
        return emailPattern.test(email);
    }
    /////////////////////

    "asd".toLowerCase();
    /d/.test();

    if(/s/.test(email)){ }

})();
/**
 * Created by Артем on 21.11.13.
 */
;(function(){
//g-global возвращает все совпадения
    //+ - 0 do infinite
    console.log("asd\nwad".match(/.+/));


    console.log("".match(/.+/)); //null
    console.log("asd".match(/.+/)); //asd
    console.log("".match(/.+/)); //null
    console.log("asd".match(/./)); //a

    console.log("".match(/.*/)); //pustaya stroka
    console.log("asd".match(/.*/)); //asd




})();
/**
 * Created by Артем on 21.11.13.
 */
;(function(){

    console.log("max asd srgii".match(/max|srgii/));
 //  | - мне нужно , что бы была строка "мах" или "srgii"
    console.log("max asd 3srgii".match(/\d(max|srgii)/g));

})();
/**
 * Created by Артем on 21.11.13.
 */
;(function(){

    console.log("q1we".match(/[wq\d]+/g));//q1w
    console.log("q1we".match(/[^wq\d]+/g));//1

   //[asd]-или а или с или d,[] воспринимается как один символ;
    //[^] _в квадратных дужках ^ означает восклицание
})();
/**
 * Created by Артем on 21.11.13.
 */
;(function(){

    console.log("\nawdw".match(/^./));//null
    console.log("\nawdw".match(/^./m));//a
    /*m-в нашей строке есть переход на новую строку,
     а значит m определяет переход на новую строку то
     есть после каждого\n будет првоерять строку
    */
    console.log("asd\nawdw".match(/^\d/));//null
    console.log("1\nasd\nawdw".match(/^\d/));//null
    console.log("\nasd\n1wdw".match(/^\d/m));//1
/*
* \d ищет все числа
* */

})();
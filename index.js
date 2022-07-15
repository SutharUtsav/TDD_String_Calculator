module.exports = class StringCalculator{
    constructor(){}

    calculate(numberString,delimiter=','){
        if(numberString == ''){
            return 0;
        }
        else if(numberString.length === 1){
            return (parseInt(numberString));
        }
        else{
            var res = numberString.split(delimiter);
            var total=0;

            for( var i=0;i<res.length;i++){
                total+= parseInt(res[i]);
            }
            return total;
        }

    }
};
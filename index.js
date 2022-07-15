module.exports = class StringCalculator{
    constructor(){}

    calculate(numberString){
        if(numberString == ''){
            return 0;
        }
        else if(numberString.length === 1){
            return (parseInt(numberString));
        }
        else{
            if(numberString.includes("\n")){
                numberString = numberString.replace(/\n/g,',')
            }
            var res = numberString.split(',');
            var total=0;

            for( var i=0;i<res.length;i++){
                total+= parseInt(res[i]);
            }
            return total;
        }

    }
};
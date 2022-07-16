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

            if(this.validateNumber(res)){
                for( var i=0;i<res.length;i++){
                    total+= parseInt(res[i]);
                }
            }
            return total;
        }
    }

    validateNumber(arr){
        var error = "Negative numbers " 
        var isValid = true;
        for( let i=0;i<arr.length;i++){
            if(arr[i]<0){
                error = error + arr[i] + " ";
                isValid=false;
            }
        }
        error = error + "not allowed!";

        if(!isValid){
            throw Error(error);
        }
        else{
            return true;
        }
    }
};
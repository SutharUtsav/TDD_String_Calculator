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

            //find delimiter
            // index of // is 0 and delimiter is between // and \n 
            if(numberString.includes("//")){
                var ind = numberString.indexOf("\n");
                var delimiter = numberString.substring(2,ind);

                if(delimiter.includes("[") && delimiter.includes("]")){
                    delimiter = delimiter.substring(1,delimiter.length-1);
                }
                numberString = numberString.substring(ind+1); 
            }
            else{
                delimiter=",";
                if(numberString.includes("\n")){
                    numberString = numberString.replace(/\n/g,',');
                }
            }

            
            var res = numberString.split(delimiter);
            
            var total=0;

            if(this.validateNumber(res)){
                for( var i=0;i<res.length;i++){
                    if(parseInt(res[i])<=1000){
                        total+= parseInt(res[i]);
                    }
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
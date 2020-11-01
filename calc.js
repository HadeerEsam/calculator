var result=" ",number,equal,operator,decimal,allowSR=true,i,counter,temp='';



function insertNum(num){
   if(equal){
        result=num;
        document.calculator.display.value=result;
        number=true;
        equal=false;
   }
   else{
       result=document.calculator.display.value+num;
       document.calculator.display.value=result;
       number=true;
   }
   if(operator){decimal=false;}
}

function insertOperator(op){
    document.calculator.display.value=result+op;
    equal=false;
    operator=true;
    allowSR=false;

}
function insertDec(){
    if(number && !decimal){
        document.calculator.display.value=result+".";
        decimal=true;
        operator=false;
    }
}
function equalTo(){
    if(result.includes('^',undefined)){
        var num1='',num2='',k=0;
        var position=result.indexOf('^');
        for(k=0;k<result.length;k++){
            if(k<position){
                num1+=result[k];
            }
            else if (k>position){
                num2=result[k];
            }
        }
        result=Math.pow(num1,num2);
        document.calculator.display.value=result;
        number=false;
        equal=true;
        allowSR=true;
        decimal=false;
    }
    else{
        result=eval(result);
        document.calculator.display.value=result;
        number=false;
        equal=true;
        allowSR=true;
        decimal=false;
    }
}
function clc(){
    
    result='';
    document.calculator.display.value=result;
    decimal=false;
    
}
function del(){
    result=document.calculator.display.value;
    result=result.substring(0,result.length - 1);
    document.calculator.display.value=result;
     
}

function math(x){
    i=1;counter=0;temp='';
    while(result[result.length-i]>=0&&result[result.length-i]<=9){
        counter++;
        i++;}

        for(j=counter;j>=1;j--){
            temp+=result[result.length - j];
            
        }
    if(x==='root'){
        result=result.substring(0,[result.length - counter])+ Math.sqrt(temp);
        //result=Math.sqrt(result);
        document.calculator.display.value=result;
    }
    else if(x==='ex'){
        result=result.substring(0,[result.length - counter])+Math.exp(temp);
        document.calculator.display.value=result;
    }
    else if(x==='pi'){
        result=document.calculator.display.value+Math.PI;
        document.calculator.display.value=result;
    }
    else if(x==='sin'){
        result=(result*Math.PI)/180;
        result=Math.sin(result);
        document.calculator.display.value=result;
    }
    else if(x==='cos'){
        result=(result*Math.PI)/180;
        result=Math.cos(result);
        document.calculator.display.value=result;
        }
    else if(x==='tan'){
        result=(result*Math.PI)/180;
        result=Math.tan(result);
        document.calculator.display.value=result;
    }
    else if(x==='abs'){
        result=Math.abs(result);
        document.calculator.display.value=result;
    }
    
    else if(x==='log'){
        result=Math.log10(result);
        document.calculator.display.value=result;
    }
    else if(x==='ln'){
        result=Math.log(result);
        document.calculator.display.value=result;
    }
    else if(x==='sq'){
        result=result.substring(0,[result.length - counter])+Math.pow(temp,2);
        document.calculator.display.value=result;
    }
    else if(x==='cube'){
        result=result.substring(0,[result.length - counter])+Math.pow(temp,3 );
        document.calculator.display.value=result;
    }
}
function changeSign(){
    if(document.calculator.display.value.substring(0,1)==="-"){
        document.calculator.display.value =document.calculator.display.value.substring(1,document.calculator.display.value.length);
        
    }
    else{
        document.calculator.display.value="-"+document.calculator.display.value;
    }
}
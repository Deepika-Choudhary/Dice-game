console.log('dice game')

function throwDice(){
    console.log('clicked');
    min=1;
    max=6;
    var x = Math.floor(Math.random() * 6 + 0 );
    
    var image=document.getElementById('throw');
    if(x==1){
        document.getElementById('text').innerHTML='We got 1';
        image.src='1.png';
    }
    else if(x==2){
        document.getElementById('text').innerHTML='We got 2';
        image.src='2.png';    
    }else if(x==3){
        document.getElementById('text').innerHTML='We got 3';
        image.src='3.png';
    }else if(x==4){
        document.getElementById('text').innerHTML='We got 4';
        image.src='4.png'; 
    }else if(x==5){
        document.getElementById('text').innerHTML='We got 5';
        image.src='5.png';
    }else{
        document.getElementById('text').innerHTML='We got 6';
        image.src='6.png';
    }
    console.log(x);

}
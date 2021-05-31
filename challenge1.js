console.log('hi');

//Challenge 1: Age in Days
function ageindays(){
var birthyear=prompt('what year where u born my friend?');
var ageindays=(2020-birthyear)*365;
var h1=document.createElement('h2');
var textanswer=document.createTextNode('Your age in days is  '+" "+ageindays);
h1.appendChild(textanswer);
document.getElementById('flexbox').appendChild(h1);
h1.setAttribute('id','resettext')
}


function reset(){
    document.getElementById('resettext').remove();

}
//Challenge 2:Cat Generator
function catgenerator(){
    var image=document.createElement('img');
    image.src="download.jfif";
    document.getElementById('flexbox-container2').appendChild(image);
    
    
}
/*//Challenge 3 Stone paper Scissors

function rpsGame(Yourchoice){
var humanchoice,botchoice;

humanchoice=Yourchoice.id;
console.log(humanchoice);
botchoice=numbertoChoice(randtorpsint());
results=decidewinner(humanchoice,botchoice);//output=[0,1] or [1,0] or [0.5,0.5]
console.log(results);
message=finalmessage(results);//output  Returns object like {message:"You Won", color:"Green"}
rpsfrontend(humanchoice,botchoice,message);
}
function randtorpsint(){
    return Math.floor(Math.random()*3);
}
function numbertoChoice(number){
    return ['stone','paper','scissors'][number];
}
function decidewinner(Yourchoice,comuterChoice){
   var rpsdatabase= 'stone':{
        'scissors':1,'paper':0,'stone':0.5
    }
    'paper':{
        'scissors':0,'paper':0.5'stone':1
    }
    'scissors':{
        'scissors':0,'paper':0.5'stone':1
    }  

    var youscore=rpsdatabase[Yourchoice][comuterChoice];
    var ComputerScore=rpsdatabase[comuterChoice][Yourchoice];
return[youscore,ComputerScore]
}
function finalmessage([youscore,ComputerScore]){
    if(youscore===0){
        return{ 'message':"You lost",'color':'red'}
    }
    else if(youscore===0.5){
        return{ 'message':"You Tied",'color':'yellow'}
    }
    else{
        return{ 'message':"You Won",'color':'yellow'}
    }

        
    
}
function rpsfrontend(humanimagechoice,botimagechoice,finalmessage){ 
  var imdatabase={'stone':document.getElementById('stone').src;
  'paper':document.getElementById('paper').src;
  'scissors':document.getElementById('scissors').src;
}
document.getElementById('stone').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();


}*/



//Challenge 4 :-change the color of all buttons
let copybuttons = document.getElementsByTagName("button");
console.log("copybuttons", copybuttons);

   
    let all_buttons = Array.from(copybuttons);
    console.log("all_buttons", all_buttons);


console.log(all_buttons);

function buttoncolorchange(buttonthingy){
    if(buttonthingy.value==='red'){
        buttonsred();
    }else if(buttonthingy.value==='green'){
        buttonsgreen();

    }else if(buttonthingy.value==='yellow'){
        buttonsyellow();
    }else if(buttonthingy.value==='resetcolors'){
        buttonsreset();

    }else if(buttonthingy.value==='random'){
        buttonsrandom();
    }

} function buttonsred(){
    for(let j=0;j<copybuttons.length;j++){
        copybuttons[j].classList.replace(copybuttons[j].className,'reset');
    }
}
function buttonsyellow(){
    for(let j=0;j<copybuttons.length;j++){
        copybuttons[j].classList.replace(copybuttons[j].className,'btnbtn-warning');
    }
}function buttonsgreen(){
    for(let j=0;j<copybuttons.length;j++){
        copybuttons[j].classList.replace(copybuttons[j].className,'btnbtn-success');
    }
}/*function buttonsreset(){
    for(let j=0;j<copybuttons.length;j++){
        copybuttons[j].classList.replace(copybuttons[j].className,all_buttons[j].className);
       
    }
    
}*/
function buttonsrandom(){
    var choices=['reset','btnbtn-danger','btnbtn-success','btnbtn-warning','clickme'];
    for(let i=0;i<copybuttons.length;i++){
    copybuttons[i].classList.replace(copybuttons[i].className,choices[Math.floor(Math.random()*5)]);
    }
}
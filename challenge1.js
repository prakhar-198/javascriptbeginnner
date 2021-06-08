
document.querySelector('#add').addEventListener("click",addtext);
document.querySelector('#remove').addEventListener("click",removetext);
document.querySelector('#clear').addEventListener("click",cleartext);

let i=1;
function addtext(){
    let task= ">"+" "+document.getElementById('myinput').value;
    localStorage.setItem(`lastname${i}`, task);
    let loc= localStorage.getItem("lastname2");
    console.log(loc);
    console.log(task);
    let check=document.createElement('h4');
    if(i<5){
    check=`#checklist${i}`;
    window.stop();
    document.querySelector(check).textContent=task;
    document.querySelector(check).style.color="white";
    document.getElementById('myinput').value=null;
    
    }else if(i=5){
        check=`#checklist${i}`;
        document.querySelector(check).textContent=task;
        document.querySelector(check).style.color="white";
        document.getElementById('myinput').value=null;
        i=0;
    }
    
     i++;
     
     
}
    function removetext(){
     for(let j=1;j<6;j++){   
    let cbox=document.getElementById(`checklist${j}`);
     let uncheck= document.getElementById(`${j}`);
     if(uncheck.checked){
         cbox.textContent=null;
         uncheck.checked=false;
     }
    }
}
function cleartext(){
    for(let j=1;j<6;j++){   
        let cbox2=document.getElementById(`checklist${j}`);
         let uncheck2= document.getElementById(`${j}`);
             cbox2.textContent=null;
             uncheck2.checked=false;
         
        }
}

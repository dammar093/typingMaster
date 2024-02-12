

const content = ["cat mat bat salt fat dog elephant monkey the quick brown fox jumps over the lazy dog is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ","industry's standard dummy text ever since the 1500s.There are many variations of passageof Lorem Ipsum available, children brain cent fan made hourse"," but the majority have suffered alteration in some form cat bat hat monkey donkey dog hen fan"];
let para = document.querySelector('.para');

let refText;
function setSentence(){
  para.textContent=content[ Math.floor(Math.random() * content.length) ];
  refText=document.querySelector('.para').textContent;
  //console.log(refText);
   setMaxLenth(refText);
   document.querySelector('.typing').value=''
}
setSentence();

function setMaxLenth(refText){
 
  let maxlength = refText.length;
   //console.log(maxlength);
  document.querySelector('.typing').setAttribute('maxlength',`${maxlength}`)
}


let matchCahr=0;

function getWord(e){
  let inputText = document.querySelector('.typing').value;
  // console.log(inputText);
  // console.log(refText);
 for(let i=0 ;i<inputText.length;i++){
    if(refText[i] !== inputText[i]){
      matchCahr ++;
    }
 }
}

function calculatePercentage(){
   let per = Math.round(matchCahr * 100/refText.length)
   document.getElementById('accuracy').textContent=per;
}

// function for timer

function handelTimer(){
  function timer(){
    let time = Number(document.getElementById('timer').textContent);
    if(time === 0){
      clearInterval(clearTimer)
      calculteSpeed();
      calculatePercentage();
    }
    else{ 
      time--;
      document.getElementById('timer').textContent=time
    }
    
  }
  let clearTimer = setInterval(timer,1000)
}

//calculate word 
function calculteSpeed(){

 let text= document.querySelector('.typing').value.trim();
 let numberOfWord=text.split(" ");
 document.getElementById('speed').
 textContent=numberOfWord.length
}



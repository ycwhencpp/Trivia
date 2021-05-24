    document.addEventListener("DOMContentLoaded",function()
            {
            //free response checker
            document.querySelector("#check").addEventListener("click",function(){

            let answerform=document.querySelector("#answer");
            if(answerform.value==="1989")
            {
                answerform.style.backgroundColor="green";
                document.querySelector("#feedback2").innerHTML="correct!";
            }
            else
            {
                answerform.style.backgroundColor="red";
                document.querySelector("#feedback2").innerHTML="Incorrect";
            }
             });
             // MCQ checker
                 //for correct answer
             document.querySelector("#correct").addEventListener("click",function(){
                document.querySelector("#correct").style.backgroundColor="green";
                document.querySelector("#feedback1").innerHTML="Correct!";
             });
               //for incorrect answer
                  let incorrect=document.querySelectorAll("#incorrect");
                  for(let i=0;incorrect.length;i++)
                  {
                      incorrect[i].addEventListener("click",function(){
                         incorrect[i].style.backgroundColor="red";
                         document.querySelector("#feedback1").innerHTML="Incorrect";
                      });
                  }
      });

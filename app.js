let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".Resetbtn");
let msgcontainer = document.querySelector(".msg-container");
let newbtn = document.querySelector(".newbtn");
let msg = document.querySelector(".msg");
let hide = document.querySelector(".hide")

let turno = true;

const resettbtn = () =>{
  turno = true;
  enabbledboxes();
  msgcontainer.classList.add("hide")
}

let winpatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("button was clicked");
        if(turno === true){
            box.innerHTML = "X"
            turno = false;
        }else{
         box.innerHTML = "O"
         turno = true;
        }
        box.disabled = true;
       
        checkWinners();
    });
});

const disabbledboxes = ()=>{
    for(let box of boxes){
     box.disabled = true;
    }
}
const enabbledboxes = ()=>{
    for(let box of boxes){
     box.disabled = false;
     box.innerText = ""
    }
}

const showWinner = (winner) =>{
    msg.innerText = `congratulation winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disabbledboxes();
    

}

let checkWinners = ()=>{
    for(pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;  
        let pos3val = boxes[pattern[2]].innerText;
        

        if( pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner" , pos1val);
                showWinner(pos1val);
                
            }
        }
    }
}

newbtn.addEventListener("click", resettbtn);
resetbtn.addEventListener("click", resettbtn);



// const checkWinners = ()=>{
//     for(let pattern of winpatterns){
        // let pos1val = boxes[pattern[0]].innerText;
        // let pos2val = boxes[pattern[1]].innerText;  
        // let pos3val = boxes[pattern[3]].innerText;
//         console.log(winpatterns);
        
//     }

// }
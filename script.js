let turn ="O";
let total_turns = 0;

const winning_arr=[[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]];

let board_arr = new Array(9).fill("E");

function checkWinner(){
    for(let [index0,index1,index2] of winning_arr){
        if(board_arr[index0]!="E" && board_arr[index0]===board_arr[index1] && board_arr[index1]===board_arr[index2]){
            return 1;
        }
    }
    return 0;
}

const mainfun = (event)=>{

                const element = event.target;
                if(board_arr[element.id]==="E")
                {
                    total_turns++;
                    if(turn==="O"){
                        element.innerHTML = "O";
                        board_arr[element.id]="O";
                        if(checkWinner()){
                            document.getElementById('winmsg').innerHTML="Winner is O";
                            board.removeEventListener('click',mainfun);
                            return; //winner aate hi function se exit
                        }
                        turn = "X";
                    }
                    else{
                        element.innerHTML = "X";
                        board_arr[element.id]="X";
                        if(checkWinner()){
                            document.getElementById('winmsg').innerHTML="Winner is X";
                            board.removeEventListener('click',mainfun);
                            return;     
                        }
                        turn = "O";
                    }
                }
                if(total_turns===9){
                    document.getElementById('winmsg').innerHTML="Match Drawn";
                }
            }

const board = document.querySelector('.board');
board.addEventListener('click',mainfun);

const restart = document.getElementById('restartbtn');
restart.addEventListener('click',()=>{
    const cell = document.querySelectorAll('.cell');// returns a nodelist

    Array.from(cell).forEach((value)=>{ // therefore we need to convert to array for iterating
        value.innerHTML=""
    })
    turn = "O";
    total_turns=0;
    board_arr=new Array(9).fill("E");
    board.addEventListener('click',mainfun);
    document.getElementById('winmsg').innerHTML="";
})

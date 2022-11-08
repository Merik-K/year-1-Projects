let turn = "X";
function tic1(){
    imgswap("img1")
}
function imgswap(a){
    if(turn == "X"){
        document.getElementById(a).src = "x-tictactoe.png"
    }
}

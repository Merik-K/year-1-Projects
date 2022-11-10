let turn = "X";
function _turn(){
    if(turn == "X"){
        turn = 'O'
    }else if(turn == 'O'){
        turn = 'X'
    }
}
function imgswap(a){
    document.getElementById(a).src = "TTT-X.png"
}
function tic1(){
    imgswap('img1')
    _turn()
}
function tic2(){
    imgswap('img2')
    _turn()
}
function tic3(){
    imgswap('img3')
    _turn()
}
function tic4(){
    imgswap('img4')
    _turn()
}
function tic5(){
    imgswap('img5')
    _turn()
}
function tic6(){
    imgswap('img6')
    _turn()
}
function tic7(){
    imgswap('img7')
    _turn()
}
function tic8(){
    imgswap('img8')
    _turn()
}
function tic9(){
    imgswap('img9')
    _turn()
}

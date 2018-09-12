console.log("connected");
var fnum = 0;
var lnum = 0;
var playTo = 5;
var totalScorePlayerOne = 0;
var totalScorePlayerTwo = 0;


var fnumdsp = document.getElementById("first");
var lnumdsp = document.getElementById("last");
var playTodsp = document.getElementById("playingTo");
var spanTotalScorePlayerOne = document.getElementById("pone-score");
var spanTotalScorePlayerTwo = document.getElementById("ptwo-score");


lnumdsp.innerHTML = lnum;
fnumdsp.innerHTML = fnum;



//First
document.getElementById("btn-pone").addEventListener("click",function(){
    if( maxValue.value === "" && lnum != playTo){
        if( fnum < playTo ){
            fnum += 1;
            fnumdsp.innerHTML = fnum;
            if( fnum === playTo ){
                fnumdsp.style.color = "green";
                document.getElementById("btn-pone").classList.add("disabled");
                document.getElementById("btn-ptwo").classList.add("disabled");
                document.getElementById("btn-reset").classList.add("btn-success");
            }
        }
    }else if( maxValue.value > playTo ){
        if( fnum < maxValue.value && lnum != maxValue.value){

            fnum += 1;
            fnumdsp.innerHTML = fnum;
            if( fnum >= maxValue.value ){
                fnumdsp.style.color = "green";
                document.getElementById("btn-pone").classList.add("disabled");
                document.getElementById("btn-ptwo").classList.add("disabled");
                document.getElementById("btn-reset").classList.add("btn-success");
            }
        }
    }
})

//second
function lastButton(){
    if( maxValue.value === "" && fnum != playTo){
        if( lnum < playTo ){
            lnum += 1;
            lnumdsp.innerHTML = lnum;
            if( lnum === playTo ){
                lnumdsp.style.color = "green";
                document.getElementById("btn-pone").classList.add("disabled");
                document.getElementById("btn-ptwo").classList.add("disabled");
                document.getElementById("btn-reset").classList.add("btn-success");
            }
        }
    }else if( maxValue.value > playTo ){
        if( lnum < maxValue.value && fnum != maxValue.value){
            lnum += 1;
            lnumdsp.innerHTML = lnum;
            if( lnum >= maxValue.value ){
                lnumdsp.style.color = "green";
                document.getElementById("btn-pone").classList.add("disabled");
                document.getElementById("btn-ptwo").classList.add("disabled");
                document.getElementById("btn-reset").classList.add("btn-success");
            }
        }
    }

}

document.getElementById("btn-reset").addEventListener("click", function(){
    if(fnumdsp.style.color == "green"){
        totalScorePlayerOne++;
        spanTotalScorePlayerOne.innerHTML = totalScorePlayerOne;
    }
    if(lnumdsp.style.color == "green"){
        totalScorePlayerTwo++;
        spanTotalScorePlayerTwo.innerHTML = totalScorePlayerTwo;
    }
    lnum = 0;
    fnum = 0;
    lnumdsp.innerHTML = lnum;
    fnumdsp.innerHTML = fnum;
    lnumdsp.style.color = "";
    fnumdsp.style.color = "";
    document.getElementById("btn-pone").classList.remove("disabled");
    document.getElementById("btn-ptwo").classList.remove("disabled");
    document.getElementById("btn-reset").classList.remove("btn-success");
    
})

document.getElementById("btn-totalScoreReset").addEventListener("click", function(){
    totalScorePlayerOne = 0;
    totalScorePlayerTwo = 0;
    spanTotalScorePlayerOne.innerHTML = totalScorePlayerOne;
    spanTotalScorePlayerTwo.innerHTML = totalScorePlayerTwo;
});
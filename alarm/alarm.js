var inputTimerByUser = document.getElementById("inputTimeByUser");
var buttonOneAlarm = document.getElementById("btn-alarm1");
var buttonTwoAlarm = document.getElementById("btn-alarm2");
var spanAlarm1 = document.getElementById("spanAlarm1");
var spanAlarm2 = document.getElementById("spanAlarm2");
var flag = true;
var alarmOneInterval;
var alarmTwoInterval;

buttonTwoAlarm.addEventListener("click", function(){
    if(spanAlarm2.innerHTML == "Set"){
        alarmTwoInterval = setInterval(function(){
        var holder1 = String(Date()).split(" ")[4];
        var holder2 = holder1.split(":")[0] + ":" + holder1.split(":")[1];
        if(inputTimerByUser.value === holder2){
            clearInterval(alarmTwoInterval);
            document.getElementById("audioplayer").play();
            document.getElementById("stopAlarm").style.display = "";
        }
        console.log("Alarm 2");
    },1000);
    spanAlarm2.innerHTML = "Cancel";
    }else if(spanAlarm2.innerHTML == "Cancel"){
        clearInterval(alarmTwoInterval);
        spanAlarm2.innerHTML = "Set"
    }

});
//Show Time Interval
var interval = setInterval(function(){
    document.getElementById("currentTime").innerHTML = String(Date()).split(" ")[4];
},1000);

//Click event on button "Alarm 1"
buttonOneAlarm.addEventListener("click", function(){
    if(spanAlarm1.innerHTML == "Set"){
        alarmOneInterval = setInterval(function(){
        var holder2 = String(Date()).split(" ")[4];
        var holder3 = holder2.split(":")[0] + ":" + holder2.split(":")[1];
        console.log(holder3)
        if(inputTimerByUser.value === holder3){
            clearInterval(alarmOneInterval);
            document.getElementById("audioplayer").play();
            document.getElementById("stopAlarm").style.display = "";
        }
        console.log("Alarm 1");
    },1000);
    spanAlarm1.innerHTML = "Cancel";
    }else if(spanAlarm1.innerHTML == "Cancel"){
        clearInterval(alarmOneInterval);
        spanAlarm1.innerHTML = "Set"
    }
});



inputTimerByUser.addEventListener("change",function(){
    document.getElementById("24h").innerHTML = inputTimerByUser.value; 
});
document.getElementById("stopAlarmTwo").addEventListener("click",function(){
    document.getElementById("stopAlarmOne").style.display = "none";
    document.getElementById("audioplayer").pause();
    document.getElementById("audioplayer").load();
});

document.getElementById("stopAlarmOne").addEventListener("click",function(){
    document.getElementById("stopAlarmOne").style.display = "none";
    document.getElementById("audioplayer").pause();
    document.getElementById("audioplayer").load();
});


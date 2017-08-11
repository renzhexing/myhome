window.onload=function(){
    getTime();
}

function getTime(){
    var date = new Date();
    var hours =formatTime(date.getHours());
    var minutes = formatTime(date.getMinutes());
    var seconds = formatTime(date.getSeconds());
    var $time = document.getElementById('time');
    $time.innerHTML=hours +"<img src='images/hm.png' style='margin:0 10px;' width='12' height='40'/>"+ minutes+"<img style='margin:0 10px;'  src='images/ms.png' width='12' height='40'/>"+ seconds;

    setTimeout("getTime()",500);

}
function formatTime(i){
    if(i<10&&i==1){
        i=  "<img src='images/0.png' width='40' height='60'/>"+"<img src='images/1.png' width='20' height='60'/>";
    }else if(i<10&&i!=1){
        i= "<img src='images/0.png' width='40' height='60'/>" + "<img src='images/"+i+".png' width='40' height='60'/>";
    }else{

        var j= i.toString().charAt(0);
        var z =i.toString().charAt(1);
        if(j<10 && z<10&&j!=1&&z!=1){
            i = "<img src='images/"+j+".png' width='40' height='60'/>" + "<img src='images/"+z+".png' width='40' height='60'/>";
        }else if(j<10 && z<10&&j==1&&z!=1){

            i = "<img src='images/1.png' width='20' height='60'/>" + "<img src='images/"+z+".png' width='40' height='60'/>";

        }else if(j<10 && z<10&&z==1&&j!=1){
            i =  "<img src='images/"+j+".png' width='40' height='60'/>"+"<img src='images/1.png' width='20' height='60'/>";

        }else if(j<10 && z<10&&(j==1&&z==1)){
            i="<img src='images/1.png' width='20' height='60'/>"+"<img src='images/1.png' width='20' height='60'/>";
        }
    }

    return i;
}

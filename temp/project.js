var i=0;
var img=[];
var time=3000;
img[0]="img/SC_1770_v1_harald2,792_blacklacquered_1218x675px_low_(1100x610).jpg";
img[1]="img/copymid-century-blue-senior-lounge-chair-by-marco-zanuso-for-arflex-1950s-1.jpg";
img[2]="img/whatever-the-weather-01-pillow-by-anna-badur-2.jpg";
function getImg(){
    document.getElementById('slide').src=img[i];
    if(i < img.length - 1)
        i++;
    else
        i=0;
    setTimeout("getImg()",time);
}
window.onload=getImg;
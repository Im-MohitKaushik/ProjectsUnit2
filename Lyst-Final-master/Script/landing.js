document.getElementById("join").addEventListener("click",function(){
    window.location.href="signIn.html";
});
document.getElementById("signInRef").addEventListener("click",function(){
    window.location.href="signIn.html";
});
document.getElementById("LYST").addEventListener("click",function(){
    window.location.href="index.html";
});
document.getElementById("WOMEN").addEventListener("click",function(){
    window.location.href="women.html";
});
document.getElementById("MEN").addEventListener("click",function(){
    window.location.href="men.html";
});
document.getElementById("Man").addEventListener("click",function(){
    window.location.href="men.html";
});
document.getElementById("Woman").addEventListener("click",function(){
    window.location.href="women.html";
});


var scr = [
    {
     head : "DISCOVER THE LYST INDEX Q4 2021",
     img : "https://cdna.lystit.com/cms/q421_homepage_index_list_2_a3fb3ad730.jpg",
    },
    {
     head : "CLEAN LINES",
     img : "https://cdna.lystit.com/cms/1f176a34_c811_4777_8314_da35674b0d53_9093296ff1.png",
    },
    {
     head : "REFINED GLAMOUR",
     img : "https://cdna.lystit.com/cms/20_under_200_CONT_07_01_22_bafe177d0f.jpeg",
    },
    {
     head : "20 UNDER 200",
     img : "https://cdna.lystit.com/cms/20_under_200_CONT_07_01_22_bafe177d0f.jpeg",
    },
    {
     head : "MODERN MINIMALISM",
     img : "https://cdna.lystit.com/cms/20_under_200_CONT_07_01_22_bafe177d0f.jpeg",
    },
]

var scr_a = [
    {
     head : "ALLSAINTS:THE NEW SPRING COLLECTION HAS LANDED",
     img : "https://cdna.lystit.com/cms/1000x1000_WW_No_Copy_670f6b70f5.png",
    },
    {
     head : "CLEAN LINES",
     img : "https://cdna.lystit.com/cms/PS_22_Affiliate_No_Logo_600x600_5857f310f9.jpg",
    },
    {
     head : "REFINED GLAMOUR",
     img : "https://cdna.lystit.com/cms/LINA_BAG_ASSET_600x600_01800ffbe1.jpg",
    },
    {
     head : "20 UNDER 200",
     img : "https://cdna.lystit.com/cms/600x600_Sale_HP_Top_Lyst_d42dfd35bd.png",
    },
]

scr.map(function(elem,index){
var div = document.createElement("div");

var head = document.createElement("h2");
head.innerText = elem.head;

var img = document.createElement("img");
img.setAttribute("src",elem.img)

div.append(head,img);
document.querySelector("#scroll_1").append(div);
});

scr_a.map(function(elem,index){
var div = document.createElement("div");

var head = document.createElement("h2");
head.innerText = elem.head;

var img = document.createElement("img");
img.setAttribute("src",elem.img)

div.append(head,img);
document.querySelector("#scroll_2").append(div);
});
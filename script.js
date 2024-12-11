document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".button-left").addEventListener("click",function (){
        document.querySelector('.img_dog').style = "display:none;";
        document.querySelector('.main_right').style = "height:404px; width: 60px;  ";
        document.querySelector('.main_left').style = "width: calc(100% - 100px); text-align: right;";
        document.querySelector('.img_cat').style = "width: 80%; ";
    });
    document.querySelector(".button-center").addEventListener("click",function (){
        document.querySelector('.img_cat').style = "display:block;";
        document.querySelector('.img_dog').style = "display:block;";
        document.querySelector('.main_left').style = "width: calc(50% - 20px);";
        document.querySelector('.main_right').style = "width: calc(50% - 20px);"
    });
    document.querySelector(".button-right").addEventListener("click",function (){
        document.querySelector('.img_cat').style = "display:none;";
        document.querySelector('.main_left').style = "height:404px; width: 60px";
        document.querySelector('.main_right').style = "width: calc(100% - 100px); text-align: left;";
        document.querySelector('.img_dog').style = "width: 80%; ";
    });
});
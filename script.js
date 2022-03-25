//navbar color change
console.log("Hello!")
const header =document.querySelector(".navbar");

window.onscroll = function(){
    let top = window.scrollY;
    // console.log(top);
    if(top >100){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');
    }
}
//text typing effect
var i = 0;
var txt = "Join us and learn from the best teachers of INDIA...";
var speed =250;
    function type(){
        document.getElementById("pratik").innerHTML+= txt.charAt(i);
        i++;
        setTimeout(type,speed);
    }
    type();
//prelodar
var loader =document.getElementById("prelodar");
window.addEventListener('load', function(){
    loader.style.display = "none";
});
AOS.init();


//review
// const post =document.querySelector(".post")
// const exit = document.querySelector(".exit")
// const widget = document.querySelector(".star-widget")
// const edit = document.querySelector(".edit")

// post.onclick = ()=>{
//     widget.style.display="none";
    // exit.style.display= "block";
//     console.log("my")
//     return false;

// }
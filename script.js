gsap.to([".icon","#list1>h1"],{
    scrollTrigger:{
        trigger:"#list1",
        // scroller:"#list1",
        scrub:1,
        markers:true,
    },
    // opacity:0
})
//-----------------responsive nav bar-------------------
var menu = document.querySelector("#hamburger");
var hm1 = document.querySelector("#hm1");
var hm3 = document.querySelector("#hm3");
var nav = document.querySelector("#nav");
var flag = true;

menu.addEventListener("click",function(){
    if(flag==true){
        nav.style.left = "0%";
        hm1.style.transform = 'rotate(45deg)';
        hm3.style.transform = 'rotate(-45deg)';
        flag=false;
    }
    else if(flag == false){
        nav.style.left = "-100%";
        hm1.style.transform = 'rotate(0deg)';
        hm3.style.transform = 'rotate(0deg)';
        flag= true;
    }
})
// ---------------hamburger------------------


// -------------------page5-anim--------------------------
var pdls1 = document.querySelector("#pdls1");
var pdls2 = document.querySelector("#pdls2");
var pdls3 = document.querySelector("#pdls3");
var pdls4 = document.querySelector("#pdls4");
var pdls5 = document.querySelector("#pdls5");
var pdls6 = document.querySelector("#pdls6");
var pdls7 = document.querySelector("#pdls7");
var pdls8 = document.querySelector("#pdls8");
var pdls9 = document.querySelector("#pdls9");

pdls1.addEventListener("mouseenter",function(){
    gsapEff_up("#ls-img1");
})
pdls1.addEventListener("mouseleave",function(){
    gsapEff_down("#ls-img1");
})
pdls2.addEventListener("mouseenter",function(){
    gsapEff_up("#ls-img2");
})
pdls2.addEventListener("mouseleave",function(){
    gsapEff_down("#ls-img2");
})
pdls3.addEventListener("mouseenter",function(){
    gsapEff_up("#ls-img3");
})
pdls3.addEventListener("mouseleave",function(){
    gsapEff_down("#ls-img3");
})
pdls4.addEventListener("mouseenter",function(){
    gsapEff_up("#ls-img4");
})
pdls4.addEventListener("mouseleave",function(){
    gsapEff_down("#ls-img4");
})
pdls5.addEventListener("mouseenter",function(){
    gsapEff_up("#ls-img5");
})
pdls5.addEventListener("mouseleave",function(){
    gsapEff_down("#ls-img5");
})
pdls6.addEventListener("mouseenter",function(){
    gsapEff_up("#ls-img6");
})
pdls6.addEventListener("mouseleave",function(){
    gsapEff_down("#ls-img6");
})
pdls7.addEventListener("mouseenter",function(){
    gsapEff_up("#ls-img7");
})
pdls7.addEventListener("mouseleave",function(){
    gsapEff_down("#ls-img7");
})
pdls8.addEventListener("mouseenter",function(){
    gsapEff_up("#ls-img8");
})
pdls8.addEventListener("mouseleave",function(){
    gsapEff_down("#ls-img8");
})
pdls9.addEventListener("mouseenter",function(){
    gsapEff_up("#ls-img9");
})
pdls9.addEventListener("mouseleave",function(){
    gsapEff_down("#ls-img9");
})
function gsapEff_up(div){
    gsap.to(`${div}`,{
        y:"-220%"
    })
}
function gsapEff_down(div){
    gsap.to(`${div}`,{
        y:"50%"
    })
}
canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed=e.keycode;
console.log(keyPressed);

if ((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=90))
{
    alphabetkey();
    document.getElementById("d1").innerHTML="You Pressed Alphabet Keys";
    console.log("alphabetkeys")
    document.getElementById("myCanvas")
}
function alphabetkey(){
    img_image="Alpkeys.png";
    add();
}

if (keyPressed >=48 && keyPressed<=57)
{
    alphabetkey();
    document.getElementById("d1").innerHTML="You Pressed Number Keys";
    console.log("numberkeys")
    document.getElementById("myCanvas")
}
function numberkey(){
    img_image="Numkeys.png";
    add();
}

if (keyPressed >=37 && keyPressed<=40)
{
    arrowkey();
    document.getElementById("d1").innerHTML="You Pressed Arrow Keys";
    console.log("arrowkeys")
    document.getElementById("myCanvas")
}
function arrowkey(){
    img_image="Arrowkeys.png";
    add();
}

if ((keyPressed >=17 && keyPressed<=18)|| (keyPressed<=27))
{
    specialkey();
    document.getElementById("d1").innerHTML="You Pressed Special Keys";
    console.log("specialkeys")
    document.getElementById("myCanvas")
}
function specialkey(){
    img_image="Spekeys.png";
    add();
}
}
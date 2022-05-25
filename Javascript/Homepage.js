function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}
window.onload= async function(){
    await sleep(5*1000)
    document.getElementById('loader').style.display="none"
    document.getElementById('nav').style.display="flex"
    document.getElementById('main').style.display="flex"
    document.getElementById('special').style.display="flex"
    document.getElementById('produ').style.display="flex"
    document.getElementById('prem').style.display="flex"
    document.getElementById('blog').style.display="flex"
    document.getElementById('footer').style.display="flex"
    document.getElementById('link').style.display="flex"
}


function call_menu(){
        document.getElementById('call_menu').style.display="flex";

    
}
function close_menu(){
        document.getElementById('call_menu').style.display="none";
}

function scroll(){
    let width = screen.width;
    if (document.body.scrollTop >50 || document.documentElement.scrollTop > 50) {
        
        document.getElementById('logo').style.color="black"
        document.getElementById('nav').style.backgroundColor="white"
        document.getElementById('top').style.display="block"
        document.getElementById('nav').style.boxShadow="0 1.2px 1px -1px gray"
        if(width > 1023){
            document.getElementById('scroll').style.position="absolute"
        }
        else{
            document.getElementById('scroll').style.position="absolute"
        }
        document.getElementById('img').style.content="url(./Asset/dark_logo.png)"
        var list = document.getElementsByClassName('lmenu')
        for (let i = 0; i < list.length; i++) {
            list[i].style.color = "black";
      }
      } else {
        document.getElementById('logo').style.color="white"
        document.getElementById('nav').style.backgroundColor="rgba(255, 255, 255, 0)"
        document.getElementById('top').style.display="none"
        document.getElementById('nav').style.boxShadow="0 0px 0px 0px gray"
        
        if(width > 1023){
            document.getElementById('scroll').style.position="absolute"
        }
        else{
            document.getElementById('scroll').style.position="absolute"
        }
        document.getElementById('img').style.content="url(./Asset/logo.png)"
        var list = document.getElementsByClassName('lmenu')
        for (let i = 0; i < list.length; i++) {
            list[i].style.color = "white";
      }
    }
}

function toggleCoffee(){
    document.getElementById('delicase-div').style.display="none"
    document.getElementById('coffe-div').style.display="flex"
    document.getElementById('cake-div').style.display="none"
    document.getElementById('active-d').style.color="gray"
    document.getElementById('active-co').style.color="black"
    document.getElementById('active-c').style.color="gray"
}

function toggleDelicasies(){
    document.getElementById('delicase-div').style.display="flex"
    document.getElementById('coffe-div').style.display="none"
    document.getElementById('cake-div').style.display="none"
    document.getElementById('active-d').style.color="black"
    document.getElementById('active-co').style.color="gray"
    document.getElementById('active-c').style.color="gray"
}

function toggleCakes(){
    document.getElementById('delicase-div').style.display="none"
    document.getElementById('coffe-div').style.display="none"
    document.getElementById('cake-div').style.display="flex"
    document.getElementById('active-d').style.color="gray"
    document.getElementById('active-co').style.color="gray"
    document.getElementById('active-c').style.color="black"
}
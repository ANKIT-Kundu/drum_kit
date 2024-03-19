var numberOfDrums = document.querySelectorAll('.drum').length;


for (var i=0 ; i<numberOfDrums; i++){

document.querySelectorAll('.drum')[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
});
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
 
        case "a":
            var top2 = new Audio("sounds/tom-2.mp3");
            top2.play();
            break;

        case "s":
            var top3 = new Audio("sounds/tom-3.mp3");
            top3.play();
            break;
        
        case "d":
            var top4 = new Audio("sounds/tom-4.mp3");
            top4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
            
         default: console.log(key);
    }
}

function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+ currentKey);
        activeButton.classList.add('pressed');

        var time_out = setTimeout(remove_animation,1500);
        function remove_animation(){
            activeButton.classList.remove("pressed");
        }
}
  


// function fun5(){
//     var crash = new Audio("./sounds/crash.mp3");
//     crash.play();
//     }
    
//     function fun6(){
//         var kick = new Audio("./sounds/kick-bass.mp3");
//         kick.play();
//     }
    
//     function fun4(){
//         var snare = new Audio("./sounds/snare.mp3");
//         snare.play();
//     }
    
//     function fun0(){
//         var tom1 = new Audio("./sounds/tom-1.mp3");
//         tom1.play()
//     }
    
//     function fun1(){
//         var tom2 = new Audio("./sounds/tom-2.mp3");
//         tom2.play();
//     }
    
//     function fun2(){
//         var tom3 = new Audio("./sounds/tom-3.mp3");
//         tom3.play();
//     }
//     function fun3(){
//         var tom4 = new Audio("./sounds/tom-4.mp3");
//         tom4.play();
//     }
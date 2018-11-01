//     Создать тамагочи, у которого должно быть минимум 6 методов,
//     минимум 6 переменных, от которых зависит его жизнь.
//     Например: создается инстанс тамагочи и дается имя питомцу,
//     он может кушать, гулять, спать, пить, умереть или сбежать и т.д.
//     За эти или иные действия отвечают переменные самого инстанса,
//     например health, happiness и так далее...﻿

'use strict';

class tamaguchi {

    constructor(name) {
        this.name = name;
        this.weight = 50;
        this.hours = 8;
    }

    weightLoss() {
        this.weight = this.weight - 2;
    };


    running (){
       let timerId = setInterval(() => {
           this.weightLoss();
           console.log(this.weight + ' kg is your weight');
        }, 3000);


       setTimeout(function() {
            clearInterval(timerId);
            console.log(doggy.name +',' + ' your weight was lowered!');

        }, 5000);
    };

    eat() {
        let timerId = setInterval(() => {
            console.log('Oh my God ' + 54 + ' kg is your weight');
        }, 6000);

        setTimeout(function() {
            clearInterval(timerId);
            console.log(doggy.name +',' + ' Stop! Your weight is too fast');
        }, 7000);
    }

// isSated = false;
    // isHealthy = false;
    // isHappiness = false;
    // isDrunk = false;
    // isFree = false;
    // isOver = false;

// greeting () {
    //     let userName = prompt('What is your name?', 'Enter your name');
    //     if (userName) {
    //         alert ('Glad to see you, ' + userName + ' ;)');
    //         document.getElementByld("dog").src = "image/happy.jpg";
    //     }
    // };

    sleep(){
        let sleeping = setInterval(() => {
            let sleepHours = prompt('How many hours did you sleep?');
            if (sleepHours) {
                alert ('Get up enough to sleep, ' + doggy.name );
            }
        }, 8000);

        setTimeout(function() {
            clearInterval(sleeping);
            console.log(doggy.name +',' + ' It\'s time to drink');
        }, 9000);
    }


    // drink(){}
    // runAway(){}
    // died(){}

}


let doggy = new tamaguchi('Bim');
doggy.running();
doggy.eat();
doggy.sleep();


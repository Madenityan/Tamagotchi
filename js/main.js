//     Создать тамагочи, у которого должно быть минимум 6 методов,
//     минимум 6 переменных, от которых зависит его жизнь.
//     Например: создается инстанс тамагочи и дается имя питомцу,
//     он может кушать, гулять, спать, пить, умереть или сбежать и т.д.
//     За эти или иные действия отвечают переменные самого инстанса,
//     например health, happiness и так далее...﻿

'use strict';

class Tamagotchi {

    constructor(name) {
        this.name = name;
        this.weight = 50;
        this.sleepy = 8;
        this.drinking = 2;
        this.joyful = 50;
    }

    weightLoss() {
        this.weight = this.weight - 2;
    };


    sayHello () {
        let userName = prompt('What is your name?', 'Enter your name');
        if (userName) {
            alert ('Glad to see you, ' + userName + ' ;)');
        }
    }


    sleep(){
        this.sleepy = prompt('how many hours did you sleep' + ',' + this.name + '?');
        if (this.sleepy < 8) {
            alert ('sleep a little bit, ' + this.name );
        } else {
            alert(this.name +',' + ' it\'s time to eat');
        }
    }


    eat() {
        this.weight = this.weight + 5;
        console.log('Oh my God ' + this.weight + ' kg is your weight');
        console.log(this.name +',' + ' Stop eating! Your weight is too fast. it\'s time to go for a walk');
    }


    run (){
       this.weightLoss();
       console.log(this.weight + ' kg is your weight');
       console.log(this.name +',' + ' your weight was lowered!');
    };


    drink(){
        this.drinking = prompt('how much water did you drink' + ',' + this.name + '?');

        if(this.drinking >= 2){
            alert('stop drinking')
        } else {
            alert('drink.....')
        }
    }

    happy () {
       this.joyful = prompt(this.name + ',' + 'how happy are you?' + '?');

        if(this.joyful > 50) {
            alert('scratch the ears')
        } else {
            alert('Strongly hug and give a tastiest')
        }
    }

    sick () {
        alert(this.name + ','  + 'catch');
        alert('amend .....');
    }

    died (){
        alert('drugs do not help....');
        alert(this.name + ','  + 'died' + ''+ ':(');
    }
}

let petName = prompt('How to call a pet??', 'Enter name');
if (petName) {
    alert ('Hi my friend ' + ' ;)');
}

let doggy = new Tamagotchi(petName);

setTimeout(() => {
    doggy.sayHello();
}, 1000);

setTimeout(() => {
    doggy.sleep();
},2000);

setTimeout(() => {
    doggy.eat();
},3000);

setTimeout(() => {
    doggy.run();
},4000);

setTimeout(() => {
    doggy.drink();
},5000);

setTimeout(() => {
    doggy.happy();
},6000);

setTimeout(() => {
    doggy.sick();
},7000);

setTimeout(() => {
    doggy.died();
},8000);






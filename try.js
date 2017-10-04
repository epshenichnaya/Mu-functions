var chihuahua = {};
var toyterrier = {};

chihuahua = {
    dog: 'Elya',
    game: function () {
        console.log('gav gav');
    },
    run: function () {
        console.log('бег');
    },
	mydog: function () {
        this.dog ='beloved';
        console.log(this.dog);
    }
}
chihuahua.mydog();
chihuahua.game();
chihuahua.run();

toyterrier = {
    dog: 'Gabby',
    sleep:  function () {
        console.log('Рррр');
    },
    eat: function () {
        console.log('ням ням');
    },
    mydog: function () {
        this.dog ='beloved';
        console.log(this.dog);
    }
}
toyterrier.mydog();
toyterrier.sleep();
toyterrier.eat();
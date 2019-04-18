/*eslint-env browser*/

//STEP 1
//function Cat() {
//    "use strict";
//}
//
//var Dog = function () {
//    "use strict";
//};

//STEP 2
//var catInst = new Cat();
//var dogInst = new Dog();

//STEP 3
//function Animal() {
//    "use strict";
//    this.create = function () {
//        return window.console.log("The Animal has been created");
//    };
//}
//
//var cuteAnimal = new Animal();
//cuteAnimal.create();

//STEP 4
//function Animal(argu) {
//    "use strict";
//    this.argu = argu;
//    this.create = function () {
//        return window.console.log("The Animal \"" + this.argu + "\" has been created.");
//    };
//    this.create();
//}
//var cuteAnimal = new Animal("PANDA");

//STEP 5
//function Animal(type, breed, color, weight, height) {
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.weight = weight;
//    this.height = height;
//    window.console.log("Learn about this animal!\n\nType: " + this.type + "\nBreed: " + this.breed + "\nColor: " + this.color + "\nWeight: " + this.weight + "\nHeight: " + this.height);
//}
//var animal = new Animal("Bear", "Giant Panda!!!", "Born pinkish white and grows into black and white!", "A cub weighs an average of 3.2 ounces and then grows up to 250lbs!", "As tall as 3 feets!");

//STEP 6 JSLINT ERROR PERSISTED EVEN AFTER RELOCATING VAR TO TOP OF FUNCTION
//var animalStepSix = new Animal();
//for (var property in animalStepSix) {
//    window.console.log(property);
//}
//
//function Animal(type, breed, color, weight, height) {
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.weight = weight;
//    this.height = height;
//}
//STEP 7
//function Animal(argu, color) {
//    "use strict";
//    this.argu = argu;
//    this.color = color;
//    this.speak = function () {
//        if (this.argu === "Dog") {
//            return "The " + this.color + " dog is barking!";
//        } else if (this.agru === "Cat") {
//            return "The " + this.color + " cat is meowing!";
//        }
//    };
//}
//var dog = new Animal("Dog", "tri-colored");
//window.alert(dog.speak());

//STEP 8
//function Animal(argu) {
//    "use strict";
//    var checkType = function () {
//        if (argu === "dog") {
//            return ("Dog");
//        } else {
//            (argu === "cat")
//        }
//        return ("Cat");
//    };
//    this.speak = function () {
//        var type = checkType();
//        window.console.log("The " + type + " has made a noise!"); 
//    };
//}
//var cat = new Animal("cat");
//cat.speak();

//STEP 9
String.prototype.findWords = function (string) {
    "use strict";
    var words = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function (w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });
    return freqMap;
};

var keyword = "lovely";
var par = "When I wake up in the morning, love. And the sunlight hurts my eyes. And something without warning, love. Bears heavy on my mind. Then I look at you. And the world's alright with me. Just one look at you. And I know it's gonna be. A lovely day. A lovely day. (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) A lovely day (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) When the day that lies ahead of me. Seems impossible to face. When someone else instead of me. Always seems to know the way. Then I look at you. And the world's alright with me. Just one look at you. And I know it's gonna be. A lovely day. A lovely day. (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) A lovely day (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) When the day that lies ahead of me. Seems impossible to face. When someone else instead of me. Always seems to know the way. Then I look at you. And the world's alright with me. Just one look at you. And I know it's gonna be. A lovely day. A lovely day. (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) A lovely day (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) A lovely day (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) A lovely day (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) A lovely day (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) (lovely day lovely day) A lovely day (lovely day lovely day)";
var freq = par.findWords(par, keyword);
Object.keys(freq).sort().forEach(function (word) {
    "use strict";
    if (word === keyword) {
        window.console.log("Bill Withers sings the word, " + word + ", " +  freq[word] + " times in his song Lovely Day!");   
    }
});
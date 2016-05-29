
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, render: render });

    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    var stylebody = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "left", wordWrap: true, wordWrapWidth: 450, boundsAlignV: "middle" };


var text;
var question;
var button;
var bar;
var group2;
var buttonA;
var buttonB;
var buttonC;
var buttonD;
var num = 0;
var result = 0;
var questions = ["Apa ibukota negara Indonesia?", "second question", "third question", "forth question"];
var titles = ["Pertanyaan 1", "title2", "title 3", "title4"];
function preload() {

    game.load.image('bg', 'assets/skies/deepblue.png');
        game.load.image('background','assets/misc/water_texture.jpg');
    game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
}

function create() {
num = 0;
//  game.add.image(0, 0, 'bg');
   
    game.stage.backgroundColor = '#182d3b';
    background = game.add.tileSprite(0, 0, 800, 600, 'background');

    bar = game.add.graphics();
    bar.beginFill(0x000000, 0.2);
    bar.drawRect(0, 100, 800, 100);

    //  The Text is positioned at 0, 100
    text = game.add.text(0, 0, "Common Knowledge", style);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
    text.setTextBounds(0, 100, 800, 100);
    
    button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick1, this, 2, 1, 0);
    
    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    
    group2 = game.add.group();
    group2.add(button);
   
    
    
   
}

function level_(){
    game.add.image(0, 0, 'bg');
    bar = game.add.graphics();
    bar.beginFill(0x000000, 0.2);
    bar.drawRect(0, 100, 800, 300);
    
    text = game.add.text(0, 0, titles[num-1], style);
    question = game.add.text(0,100, questions[num-1], stylebody);
    question.setTextBounds(0, 100, 800, 100);
    text.setTextBounds(0, 100, 800, 100);
    
     buttonA = game.add.button(40, 420, 'button', actionOnClick1, this, 2, 1, 0);
    buttonB = game.add.button(500, 420, 'button', actionOnClick2, this, 2, 1, 0);
    buttonC = game.add.button(40, 500, 'button', actionOnClick3, this, 2, 1, 0);
    buttonD = game.add.button(500, 500, 'button', actionOnClick4, this, 2, 1, 0);

}

function level_3(){
    
}

function up(){
    console.log('button up', arguments);   
}
function over(){
    console.log('button over');   
}
function out(){
    console.log('button out');   
}

function actionOnClick1 () {
    
    switch(num) {
    case 0:
        //window.location.href = "./quiz/app.js";
       game.world.remove(group2);
       num++;
       level_();
        break;
    case 1:
        game.world.remove(text);
        game.world.remove(question);  
        num++;
        level_();
        break;
    case 2:
        game.world.remove(text);
        game.world.remove(question);  
        num++;
    level_();
        break;
    default:
        break;
}

}
function actionOnClick2 () {

    switch(num) {
    case 0:
        game.world.remove(group2);
        num++;
        level_();
        break;
    case 1:
        game.world.remove(text);
        game.world.remove(question);  
        num++;
        level_();
        break;
    case 2:
        game.world.remove(text);
        game.world.remove(question);  
        num++;
    level_();
        break;
    default:
        break;
}
    
}
function actionOnClick3 () {
    switch(num) {
    case 0:
        game.world.remove(group2);
        num++;
        level_();
        break;
    case 1:
        game.world.remove(text);
        game.world.remove(question);  
        num++;
        level_();
        break;
    case 2:
        game.world.remove(text);
        game.world.remove(question);  
        num++;
    level_();
        break;
    default:
        break;
}

}
function actionOnClick4 () {
    switch(num) {
    case 0:
        game.world.remove(group2);
        num++;
        level_();
        break;
    case 1:
        game.world.remove(text);
        game.world.remove(question);  
        num++;
        level_();
        break;
    case 2:
        game.world.remove(text);
        game.world.remove(question);  
        num++;
    level_();
        break;
    default:
        break;
}

}
function render() {

    //game.debug.geom(text.textBounds);

}
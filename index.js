const Application = PIXI.Application;
const Graphics = PIXI.Graphics;
const backgroundTexture = PIXI.Texture.from("./images/background.jpg");
const backgroundSprite = new PIXI.Sprite(backgroundTexture);
const presenterTexture = PIXI.Texture.from("./images/presenter.png");
const presenterSprite = new PIXI.Sprite(presenterTexture);
const moneyTexture = PIXI.Texture.from('./images/money.png'); 

const app = new Application({
    width: 600,
    height: 800,
    transparent: false,
    antialias: true,
});

const playTextStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 40,
    fill: "white",
    stroke: "#ffffff",
});

const style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 20,
    fill: "white",
    stroke: "#ffffff",
});


const welcomeStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 20,
    fill: "white",
    stroke: "#ffffff",
    wordWrap: true,
    wordWrapWidth: 450,
    lineHeight: 30,
});

const gameNameStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 48,
    fill: "0xffffff",
    stroke: "#",
    wordWrap: true,
    wordWrapWidth: 600,
    lineHeight: 30,
    strokeThickness: 4,
    dropShadow: true,
    dropShadowDistance: 10,
    dropShadowAngle: Math.PI / 2,
    dropShadowBlur: 4,
    dropShadowColor: "#0x110873"
});

const hoverStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 20,
    fill: "yellow",
    stroke: "#ffffff",
});

app.stage.addChild(backgroundSprite);

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);
//First start
const gameNameText = new PIXI.Text("Who Wants To Win 1000$ ?", gameNameStyle);

gameNameText.pivot.set(gameNameText.width / 2, gameNameText.height / 2);
gameNameText.position.set(app.screen.width / 2, (app.screen.height / 2)-200);

app.stage.addChild(gameNameText);

const container = new PIXI.Container();

const box = new Graphics();
box.beginFill(0x110873)
.lineStyle(5, 0xFFFFFF, 1)
.drawRect(0,0,200,100)
.endFill();

container.addChild(box);

const playText = new PIXI.Text("Play!", playTextStyle);
playText.anchor.set(0.5);
playText.position.set(100,50);
container.addChild(playText);

container.pivot.set(container.width / 2, container.height / 2);
container.position.set(app.screen.width / 2, app.screen.height / 2);
container.buttonMode = true;

app.stage.addChild(container);

container.interactive = true;
container.on("pointerdown", () => {
    container.visible = false;
    welcomeBoxContainer.visible = true;
    presenterSprite.visible = true;
    nextButtonContainer.visible = true;
    gameNameText.visible = false;
});

presenterSprite.scale.set(0.4,0.4);

presenterSprite.anchor.set(0.5);
presenterSprite.position.set(250,50);

presenterSprite.position.set(200,200);

presenterSprite.pivot.set(presenterSprite.width / 2, presenterSprite.height / 2);
presenterSprite.position.set((app.screen.width / 2)+200, (app.screen.height / 2)-200);

presenterSprite.visible = false;

app.stage.addChild(presenterSprite);

const buttonColor = 0x110873;
const buttonRadius = 40;
const nextButtonContainer = new PIXI.Container();
const buttonGraphics = new PIXI.Graphics();
buttonGraphics.beginFill(buttonColor)
.lineStyle(5, 0xFFFFFF, 1)
.drawCircle(0, 0, buttonRadius)
.endFill();

nextButtonContainer.addChild(buttonGraphics);

const arrowText = new PIXI.Text(">", {fontFamily: 'Arial',fontSize: 36,fill: 'white',});
arrowText.anchor.set(0.5);
arrowText.position.set(0, 0); 
nextButtonContainer.addChild(arrowText);

nextButtonContainer.pivot.set(nextButtonContainer.width / 2, nextButtonContainer.height / 2);
nextButtonContainer.position.set((app.screen.width / 2)+40, (app.screen.height / 2)+250);

nextButtonContainer.buttonMode = true;
nextButtonContainer.visible = false;

nextButtonContainer.interactive = true;
nextButtonContainer.on("pointerdown", () => {
    welcomeBoxContainer.visible = false;
    question1BoxContainer.visible = true;
    answer1BoxContainer.visible = true;
    answer2BoxContainer.visible = true;
    answer3BoxContainer.visible = true;
    answer4BoxContainer.visible = true;
    ellipseContainer.visible = true;
    ellipseContainer2.visible = true;
    nextButtonContainer.visible = false;
});

app.stage.addChild(nextButtonContainer);

const welcomeBoxContainer = new PIXI.Container();
welcomeBoxContainer.visible = false;
const welcomeBox = new Graphics();
welcomeBox.beginFill(0x110873)
.lineStyle(5, 0xFFFFFF, 1)
.drawRect(0,0,500,220)
.endFill();

welcomeBoxContainer.addChild(welcomeBox);

const welcomeText = new PIXI.Text("Hello contestant, \"Who Wants to Be a Millionaire?\" welcome to the contest. To win the grand prize, you need to answer both questions correctly. You have 2 jokers. The \"50:50\" joker will remove the wrong two choices for you. The \"Hint\" joker will give you a little hint about the answer.Good luck!", welcomeStyle);
welcomeText.anchor.set(0.5);
welcomeText.position.set(250,110);
welcomeBoxContainer.addChild(welcomeText);

welcomeBoxContainer.position.set(200,200);

welcomeBoxContainer.pivot.set(welcomeBoxContainer.width / 2, welcomeBoxContainer.height / 2);
welcomeBoxContainer.position.set(app.screen.width / 2, (app.screen.height / 2)+50);

app.stage.addChild(welcomeBoxContainer);

const gameOverBoxContainer = new PIXI.Container();
gameOverBoxContainer.visible = false;
const gameOverBox = new PIXI.Graphics();
gameOverBox.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0,0,500,100)
    .endFill();

gameOverBoxContainer.addChild(gameOverBox);

const gameOverText = new PIXI.Text("Game Over. Do you want to play again ?", style);
gameOverText.anchor.set(0.5);
gameOverText.position.set(250,50);
gameOverBoxContainer.addChild(gameOverText);
gameOverText.interactive = true;
gameOverText.buttonMode = true;
gameOverText.on("pointerdown", () => {
    location.reload(); 
});
gameOverText.on("pointerover", () => {
    gameOverText.style = hoverStyle;
});
gameOverText.on("pointerout", () => {
    gameOverText.style = style;
});

gameOverBoxContainer.position.set(200,200);

gameOverBoxContainer.pivot.set(gameOverBoxContainer.width / 2, gameOverBoxContainer.height / 2);
gameOverBoxContainer.position.set(app.screen.width / 2, app.screen.height / 2);

app.stage.addChild(gameOverBoxContainer);

gameOverBoxContainer.visible = false;
if(gameOverBoxContainer.visible === true){
    ellipseContainer.interactive = false;
    ellipseContainer2.interactive = false;
};

const congratsBoxContainer = new PIXI.Container();
congratsBoxContainer.visible = false;
const congratsBox = new PIXI.Graphics();
congratsBox.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0, 0, 500, 100)
    .endFill();

congratsBoxContainer.addChild(congratsBox);

const congratsText = new PIXI.Text("Congratulations! You won the Big Prize!! 1000$", style);
congratsText.anchor.set(0.5);
congratsText.position.set(250, 50);
congratsBoxContainer.addChild(congratsText);

congratsBoxContainer.position.set(200, 200);

congratsBoxContainer.pivot.set(congratsBoxContainer.width / 2, congratsBoxContainer.height / 2);
congratsBoxContainer.position.set(app.screen.width / 2, app.screen.height / 2);

app.stage.addChild(congratsBoxContainer);

congratsBoxContainer.visible = false;

const question1BoxContainer = new PIXI.Container();
question1BoxContainer.visible = false;
const question1Box = new Graphics();
question1Box.beginFill(0x110873)
.lineStyle(5, 0xFFFFFF, 1)
.drawRect(0,0,500,100)
.endFill();

question1BoxContainer.addChild(question1Box);

const question1Text = new PIXI.Text("Who is American President ?\n", style);
question1Text.anchor.set(0.5);
question1Text.position.set(250,50);
question1BoxContainer.addChild(question1Text);

question1BoxContainer.position.set(200,200);

question1BoxContainer.pivot.set(question1BoxContainer.width / 2, question1BoxContainer.height / 2);
question1BoxContainer.position.set(app.screen.width / 2, app.screen.height / 2);

app.stage.addChild(question1BoxContainer);

const answer1BoxContainer = new PIXI.Container();
answer1BoxContainer.visible = false;
const answer1Box = new Graphics();
answer1Box.beginFill(0x110873)
.lineStyle(5, 0xFFFFFF, 1)
.drawRect(0,0,200,50)
.endFill();

answer1BoxContainer.addChild(answer1Box);

const answer1Text = new PIXI.Text("A-) Obama", style);
answer1Text.anchor.set(0.5);
answer1Text.position.set(100,25);
answer1BoxContainer.addChild(answer1Text);

answer1BoxContainer.position.set(200,200);

answer1BoxContainer.pivot.set(answer1BoxContainer.width / 2, answer1BoxContainer.height / 2);
answer1BoxContainer.position.set((app.screen.width / 2)-150, (app.screen.height / 2)+100);

answer1BoxContainer.buttonMode = true;

app.stage.addChild(answer1BoxContainer);

answer1BoxContainer.interactive = true;
answer1BoxContainer.on("pointerdown", () => {
      answer2BoxContainer.interactive= false;
      answer3BoxContainer.interactive= false;
      answer4BoxContainer.interactive= false;
      answer1Box.clear();
      answer1Box.beginFill(0xFF0000);
      answer1Box.lineStyle(5, 0xFFFFFF, 1);
      answer1Box.drawRect(0,0,200,50);
      answer1Box.endFill();

      answer3Box.clear();
      answer3Box.beginFill(0x00FF00);
      answer3Box.lineStyle(5, 0xFFFFFF, 1);
      answer3Box.drawRect(0,0,200,50);
      answer3Box.endFill();
    setTimeout(() => {
        gameOverBoxContainer.visible = true;
        question1BoxContainer.visible = false;
    }, 1000); 
});

const answer2BoxContainer = new PIXI.Container();
answer2BoxContainer.visible = false;
answer2BoxContainer.buttonMode = true;

const answer2Box = new PIXI.Graphics();
answer2Box.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0,0,200,50)
    .endFill();
answer2BoxContainer.addChild(answer2Box);

const answer2Text = new PIXI.Text("B-) Trump", style);
answer2Text.anchor.set(0.5);
answer2Text.position.set(100,25);
answer2BoxContainer.addChild(answer2Text);

answer2BoxContainer.pivot.set(answer2BoxContainer.width / 2, answer2BoxContainer.height / 2);
answer2BoxContainer.position.set((app.screen.width / 2) + 150, (app.screen.height / 2) + 100); 

app.stage.addChild(answer2BoxContainer);

answer2BoxContainer.interactive = true;
answer2BoxContainer.on("pointerdown", () => {
      answer1BoxContainer.interactive= false;
      answer3BoxContainer.interactive= false;
      answer4BoxContainer.interactive= false;
      answer2Box.clear();
      answer2Box.beginFill(0xFF0000);
      answer2Box.lineStyle(5, 0xFFFFFF, 1);
      answer2Box.drawRect(0,0,200,50);
      answer2Box.endFill();

      answer3Box.clear();
      answer3Box.beginFill(0x00FF00);
      answer3Box.lineStyle(5, 0xFFFFFF, 1);
      answer3Box.drawRect(0,0,200,50);
      answer3Box.endFill();
      setTimeout(() => {
        gameOverBoxContainer.visible = true;
        question1BoxContainer.visible = false;
    }, 1000); 
    if(gameOverBoxContainer.visible == true){
        ellipseContainer.interactive = false;
        ellipseContainer2.interactive = false;
    };
});


const answer3BoxContainer = new PIXI.Container();
answer3BoxContainer.visible = false;
answer3BoxContainer.buttonMode = true;

const answer3Box = new PIXI.Graphics();
answer3Box.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0,0,200,50)
    .endFill();
answer3BoxContainer.addChild(answer3Box);

const answer3Text = new PIXI.Text("C-) Biden", style);
answer3Text.anchor.set(0.5);
answer3Text.position.set(100,25);
answer3BoxContainer.addChild(answer3Text);

answer3BoxContainer.pivot.set(answer3BoxContainer.width / 2, answer3BoxContainer.height / 2);
answer3BoxContainer.position.set((app.screen.width / 2) - 150, (app.screen.height / 2) + 100 + 100); 

app.stage.addChild(answer3BoxContainer);

answer3BoxContainer.interactive = true;
answer3BoxContainer.on("pointerdown", () => {
    answer1BoxContainer.interactive= false;
    answer2BoxContainer.interactive= false;
    answer4BoxContainer.interactive= false;
    const numberOfFlashes = 3; 
    let flashCount = 0;
    
    const flashInterval = setInterval(() => {
        if (flashCount % 2 === 0) {
            answer3Box.clear();
            answer3Box.beginFill(0x00FF00); 
            answer3Box.lineStyle(5, 0xFFFFFF, 1);
            answer3Box.drawRect(0,0,200,50);
            answer1Box.endFill();
        } else {
            answer3Box.clear();
            answer3Box.beginFill(0x110873);
            answer3Box.lineStyle(5, 0xFFFFFF, 1);
            answer3Box.drawRect(0,0,200,50);
            answer3Box.endFill();
        }

        flashCount++;

        if (flashCount >= numberOfFlashes * 2) {
            clearInterval(flashInterval);
         
            answer1Box.clear();
            answer1Box.beginFill(0xFF0000);
            answer1Box.lineStyle(5, 0xFFFFFF, 1);
            answer1Box.drawRect(0,0,200,50);
            answer1Box.endFill();

            answer2Box.clear();
            answer2Box.beginFill(0xFF0000);
            answer2Box.lineStyle(5, 0xFFFFFF, 1);
            answer2Box.drawRect(0,0,200,50);
            answer2Box.endFill();

            answer4Box.clear();
            answer4Box.beginFill(0xFF0000);
            answer4Box.lineStyle(5, 0xFFFFFF, 1);
            answer4Box.drawRect(0,0,200,50);
            answer4Box.endFill();
        }
    }, 200); 
    setTimeout(() => {
        question1BoxContainer.visible = false;
        answer1BoxContainer.visible = false;
        answer2BoxContainer.visible = false;
        answer3BoxContainer.visible = false;
        answer4BoxContainer.visible = false;
    }, 2000);
    setTimeout(() => {
        question2BoxContainer.visible = true;
        answer5BoxContainer.visible = true;
        answer6BoxContainer.visible = true;
        answer7BoxContainer.visible = true;
        answer8BoxContainer.visible = true;
    }, 2000); 
    if(gameOverBoxContainer.visible == true){
        ellipseContainer.interactive = false;
        ellipseContainer2.interactive = false;
    };
});

const answer4BoxContainer = new PIXI.Container();
answer4BoxContainer.visible = false;
answer4BoxContainer.buttonMode = true;

const answer4Box = new PIXI.Graphics();
answer4Box.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0,0,200,50)
    .endFill();
answer4BoxContainer.addChild(answer4Box);

const answer4Text = new PIXI.Text("D-) Bush", style);
answer4Text.anchor.set(0.5);
answer4Text.position.set(100,25);
answer4BoxContainer.addChild(answer4Text);

answer4BoxContainer.pivot.set(answer4BoxContainer.width / 2, answer4BoxContainer.height / 2);
answer4BoxContainer.position.set((app.screen.width / 2) + 150, (app.screen.height / 2) + 100 + 100); 

app.stage.addChild(answer4BoxContainer);

answer4BoxContainer.interactive = true;
answer4BoxContainer.on("pointerdown", () => {
      answer1BoxContainer.interactive= false;
      answer2BoxContainer.interactive= false;
      answer3BoxContainer.interactive= false;
      answer4Box.clear();
      answer4Box.beginFill(0xFF0000);
      answer4Box.lineStyle(5, 0xFFFFFF, 1);
      answer4Box.drawRect(0,0,200,50);
      answer4Box.endFill();

      answer3Box.clear();
      answer3Box.beginFill(0x00FF00);
      answer3Box.lineStyle(5, 0xFFFFFF, 1);
      answer3Box.drawRect(0,0,200,50);
      answer3Box.endFill();
      setTimeout(() => {
        gameOverBoxContainer.visible = true;
        question1BoxContainer.visible = false;
    }, 1000); 
    if(gameOverBoxContainer.visible == true){
        ellipseContainer.interactive = false;
        ellipseContainer2.interactive = false;
    }
});

const question2BoxContainer = new PIXI.Container();
question2BoxContainer.visible = false;

const question2Box = new PIXI.Graphics();
question2Box.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0,0,500,100)
    .endFill();
question2BoxContainer.addChild(question2Box);

const question2Text = new PIXI.Text("Who was the first person to step on the moon?\n", style);
question2Text.anchor.set(0.5);
question2Text.position.set(250,50);
question2BoxContainer.addChild(question2Text);

question2BoxContainer.pivot.set(question2BoxContainer.width / 2, question2BoxContainer.height / 2);
question2BoxContainer.position.set(app.screen.width / 2, app.screen.height / 2);

app.stage.addChild(question2BoxContainer);

const answer5BoxContainer = new PIXI.Container();
answer5BoxContainer.visible = false;
answer5BoxContainer.buttonMode = true;

const answer5Box = new PIXI.Graphics();
answer5Box.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0,0,200,50)
    .endFill();
answer5BoxContainer.addChild(answer5Box);

const answer5Text = new PIXI.Text("A-) Neil Armstrong", style);
answer5Text.anchor.set(0.5);
answer5Text.position.set(100,25);
answer5BoxContainer.addChild(answer5Text);

answer5BoxContainer.pivot.set(answer5BoxContainer.width / 2, answer5BoxContainer.height / 2);
answer5BoxContainer.position.set((app.screen.width / 2)-150, (app.screen.height / 2)+100);

app.stage.addChild(answer5BoxContainer);

answer5BoxContainer.interactive = true;
answer5BoxContainer.on("pointerdown", () => {
    answer6BoxContainer.interactive= false;
    answer7BoxContainer.interactive= false;
    answer8BoxContainer.interactive= false;
    const numberOfFlashes = 3;
    let flashCount = 0;

    const flashInterval = setInterval(() => {
        if (flashCount % 2 === 0) {
            answer5Box.clear();
            answer5Box.beginFill(0x00FF00); 
            answer5Box.lineStyle(5, 0xFFFFFF, 1);
            answer5Box.drawRect(0,0,200,50);
            answer5Box.endFill();
        } else {
            answer5Box.clear();
            answer5Box.beginFill(0x110873); 
            answer5Box.lineStyle(5, 0xFFFFFF, 1);
            answer5Box.drawRect(0,0,200,50);
            answer5Box.endFill();
        }

        flashCount++;

        if (flashCount >= numberOfFlashes * 2) {
            clearInterval(flashInterval);

            answer6Box.clear();
            answer6Box.beginFill(0xFF0000); 
            answer6Box.lineStyle(5, 0xFFFFFF, 1);
            answer6Box.drawRect(0,0,200,50);
            answer6Box.endFill();

            answer7Box.clear();
            answer7Box.beginFill(0xFF0000);
            answer7Box.lineStyle(5, 0xFFFFFF, 1);
            answer7Box.drawRect(0,0,200,50);
            answer7Box.endFill();

            answer8Box.clear();
            answer8Box.beginFill(0xFF0000);
            answer8Box.lineStyle(5, 0xFFFFFF, 1);
            answer8Box.drawRect(0,0,200,50);
            answer8Box.endFill();
        }
    }, 200);
    setTimeout(() => {
        congratsBoxContainer.visible = true;
        question2BoxContainer.visible = false;
        answer5BoxContainer.visible = false;
        answer6BoxContainer.visible = false;
        answer7BoxContainer.visible = false;
        answer8BoxContainer.visible = false;
        ellipseContainer2.visible = false;
        ellipseContainer.visible = false;
        app.stage.addChild(moneySprite);
    }, 2000); 
    if(gameOverBoxContainer.visible == true){
        ellipseContainer.interactive = false;
        ellipseContainer2.interactive = false;
    };
});


const answer6BoxContainer = new PIXI.Container();
answer6BoxContainer.visible = false;
answer6BoxContainer.buttonMode = true;

const answer6Box = new PIXI.Graphics();
answer6Box.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0,0,200,50)
    .endFill();
answer6BoxContainer.addChild(answer6Box);

const answer6Text = new PIXI.Text("B-) Buzz Aldrin", style);
answer6Text.anchor.set(0.5);
answer6Text.position.set(100,25);
answer6BoxContainer.addChild(answer6Text);

answer6BoxContainer.pivot.set(answer6BoxContainer.width / 2, answer6BoxContainer.height / 2);
answer6BoxContainer.position.set((app.screen.width / 2) + 150, (app.screen.height / 2) + 100); 

app.stage.addChild(answer6BoxContainer);

answer6BoxContainer.interactive = true;
answer6BoxContainer.on("pointerdown", () => {
      answer5BoxContainer.interactive= false;
      answer7BoxContainer.interactive= false;
      answer8BoxContainer.interactive= false;    
      answer6Box.clear();
      answer6Box.beginFill(0xFF0000);
      answer6Box.lineStyle(5, 0xFFFFFF, 1);
      answer6Box.drawRect(0,0,200,50);
      answer6Box.endFill();

      answer5Box.clear();
      answer5Box.beginFill(0x00FF00);
      answer5Box.lineStyle(5, 0xFFFFFF, 1);
      answer5Box.drawRect(0,0,200,50);
      answer5Box.endFill();
      setTimeout(() => {
        gameOverBoxContainer.visible = true;
        question2BoxContainer.visible = false;
    }, 1000); 
    if(gameOverBoxContainer.visible  == true){
        ellipseContainer.interactive = false;
        ellipseContainer2.interactive = false;
    };
});

const answer7BoxContainer = new PIXI.Container();
answer7BoxContainer.visible = false;
answer7BoxContainer.buttonMode = true;

const answer7Box = new PIXI.Graphics();
answer7Box.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0,0,200,50)
    .endFill();
answer7BoxContainer.addChild(answer7Box);

const answer7Text = new PIXI.Text("C-) Michael Collins", style);
answer7Text.anchor.set(0.5);
answer7Text.position.set(100,25);
answer7BoxContainer.addChild(answer7Text);

answer7BoxContainer.pivot.set(answer7BoxContainer.width / 2, answer7BoxContainer.height / 2);
answer7BoxContainer.position.set((app.screen.width / 2) - 150, (app.screen.height / 2) + 100 + 100); 

app.stage.addChild(answer7BoxContainer);

answer7BoxContainer.interactive = true;
answer7BoxContainer.on("pointerdown", () => {
    answer5BoxContainer.interactive= false;
    answer6BoxContainer.interactive= false;
    answer8BoxContainer.interactive= false;   
    answer7Box.clear();
    answer7Box.beginFill(0xFF0000);
    answer7Box.lineStyle(5, 0xFFFFFF, 1);
    answer7Box.drawRect(0,0,200,50);
    answer7Box.endFill();

    answer5Box.clear();
    answer5Box.beginFill(0x00FF00);
    answer5Box.lineStyle(5, 0xFFFFFF, 1);
    answer5Box.drawRect(0,0,200,50);
    answer5Box.endFill();
    setTimeout(() => {
        gameOverBoxContainer.visible = true;
        question2BoxContainer.visible = false;
    }, 1000); 
    if(gameOverBoxContainer.visible  == true){
        ellipseContainer.interactive = false;
        ellipseContainer2.interactive = false;
    };
});

const answer8BoxContainer = new PIXI.Container();
answer8BoxContainer.visible = false;
answer8BoxContainer.buttonMode = true;

const answer8Box = new PIXI.Graphics();
answer8Box.beginFill(0x110873)
    .lineStyle(5, 0xFFFFFF, 1)
    .drawRect(0,0,200,50)
    .endFill();
answer8BoxContainer.addChild(answer8Box);

const answer8Text = new PIXI.Text("D-) John F. Kennedy", style);
answer8Text.anchor.set(0.5);
answer8Text.position.set(100,25);
answer8BoxContainer.addChild(answer8Text);

answer8BoxContainer.pivot.set(answer8BoxContainer.width / 2, answer8BoxContainer.height / 2);
answer8BoxContainer.position.set((app.screen.width / 2) + 150, (app.screen.height / 2) + 100 + 100); 

app.stage.addChild(answer8BoxContainer);

answer8BoxContainer.interactive = true;
answer8BoxContainer.on("pointerdown", () => {
    answer5BoxContainer.interactive= false;
    answer6BoxContainer.interactive= false;
    answer7BoxContainer.interactive= false;   
    answer8Box.clear();
    answer8Box.beginFill(0xFF0000);
    answer8Box.lineStyle(5, 0xFFFFFF, 1);
    answer8Box.drawRect(0,0,200,50);
    answer8Box.endFill();

    answer5Box.clear();
    answer5Box.beginFill(0x00FF00);
    answer5Box.lineStyle(5, 0xFFFFFF, 1);
    answer5Box.drawRect(0,0,200,50);
    answer5Box.endFill();
    setTimeout(() => {
        gameOverBoxContainer.visible = true;
        question2BoxContainer.visible = false;
    }, 1000); 
    if(gameOverBoxContainer.visible == true){
        ellipseContainer.interactive = false;
        ellipseContainer2.interactive = false;
    };
});

//Jokers

const ellipseContainer = new PIXI.Container();
ellipseContainer.buttonMode = true;

const ellipse = new PIXI.Graphics();
ellipse.beginFill(0x110873)
.lineStyle(4,0xFFFFFF)
.drawEllipse(0, 0, 40, 40)
.endFill();

ellipseContainer.addChild(ellipse);

const text = new PIXI.Text("50:50", {
    fontFamily: "Arial",
    fontSize: 25,
    fill: "white"
});
text.anchor.set(0.5);
text.position.set(0, 0);
ellipseContainer.addChild(text);
ellipseContainer.visible = false;

app.stage.addChild(ellipseContainer);

ellipseContainer.position.set((app.screen.width / 2)-200, (app.screen.height / 2)-150);

ellipseContainer.interactive= true;

ellipseContainer.on("pointerdown", () => {
    ellipseContainer.visible = false;
    if(question1BoxContainer.visible == true){
        answer1BoxContainer.visible = false;
        answer4BoxContainer.visible = false; 
    }
    if(question2BoxContainer.visible == true){
        answer6BoxContainer.visible = false;
        answer8BoxContainer.visible = false; 
    }
});

const ellipseContainer2 = new PIXI.Container();
ellipseContainer2.buttonMode = true;

const ellipse2 = new PIXI.Graphics();
ellipse2.beginFill(0x110873)
.lineStyle(4,0xFFFFFF)
.drawEllipse(0, 0, 40, 40)
.endFill();

ellipseContainer2.addChild(ellipse2);

const text2 = new PIXI.Text("Hint", {
    fontFamily: "Arial",
    fontSize: 25,
    fill: "white"
});
text2.anchor.set(0.5);
text2.position.set(0, 0);
ellipseContainer2.addChild(text2);
ellipseContainer2.visible = false;

app.stage.addChild(ellipseContainer2);

ellipseContainer2.position.set((app.screen.width / 2)-100, (app.screen.height / 2)-150);

ellipseContainer2.interactive= true;

ellipseContainer2.on("pointerdown", () => {
    ellipseContainer2.visible = false;
    if(question1BoxContainer.visible == true){
        question1Text.text += "Hint: He is over 80 years old";
    }
    if(question2BoxContainer.visible == true){
        question2Text.text += " Hint: He was born in August, he died in August.";
    }
});

const moneySprite = new PIXI.TilingSprite(
    moneyTexture,
    app.screen.width,
    app.screen.height
);
 
moneySprite.tileScale.set(0.5,0.5);

moneySprite.position.set(-50,0);

app.ticker.add(function() {
    moneySprite.tilePosition.y +=1
});














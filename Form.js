class Form {

    constructor() {
        this.input = createInput("Riot ID : ");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Valorant");
        title.position(150,0);

        this.input.position(150,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(130,100);
        });
        
    }
}

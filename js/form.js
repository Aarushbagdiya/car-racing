class Form{
    constructor(){
    this.input=createInput("name");
    this.button=createButton('play');
    this.greeting=createElement('h3');
    }
     hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
     }
    display(){
        var title=createElement('h2');
        title.html("car racing");
        title.position(130,0);
    
        this.input.position(130,160);
        this.button.position(250,100);
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
            player.name =this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
           
            this.greeting.html("yo bro"+name);
            this.greeting.position(130,160);


        })
    }
}



















class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton('Play')
        this.greetings = createElement('H3')
    }
    hide(){
        this.greetings.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement('H2')
        title.html("Car Racing Game")
        title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40,displayHeight-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            player.index = playerCount + 1
            player.update()
            player.updateCount(player.index)
            this.greetings.html("Hello " +  player.name)
            this.greetings.position(displayWidth/2-70,displayHeight/4)
 })
    }


}
         
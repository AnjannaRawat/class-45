class form {

    constructor(){
        this.input = createInput("").attribute("placeholder","Enter Your name")
        this.button = createButton("ENTER")
        this.message = createElement("h1")
        
    }

    setPosition(){
        this.input.position(width/2-100,height/2-100)
        this.button.position(width/2-90,height/2-20)
        this.message.position(width/2-300,height/2-100)
    }
    
    buttonPressed(){
        this.button.mousePressed(()=>{
        this.button.hide()
        this.input.hide()
    var message=`Hello! ${this.input.value()}
    </br> wait for another player to join...`
    this.message.html(message)
        })
    }
    elementStyling(){
        this.input.class("customInput")
        this.button.class("customButton")
        this.message.class("customMessage")
        
    }

    display(){
        this.setPosition()
        this.buttonPressed()
        this.elementStyling()
    }

    
}
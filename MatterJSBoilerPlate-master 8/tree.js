class trees{
    constructor(x,y,width,height){
        var options = {
            isStatic:false
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/tree.png")
        World.add(world,this.body);
    }
        display(){
           
            
            imageMode(CENTER);
            image(this.image, 900, 300, this.width, this.height);
            
          }

    }

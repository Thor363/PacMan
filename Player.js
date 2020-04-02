class Player {
    constructor(){
        this.x=width/2;
        this.y=height/2;
        this.width=20;
        this.height=20;
        this.start=0;
        this.stop=0;
        this.degree=0;
    }

    update(){
        //oppen and close the mouth
        if(this.degree<1){
            open=true;
        }else if(this.degree>80){
            open = false;
        }

        if(open===true){
            this.degree=this.degree+5;
        }else{
            this.degree=this.degree-5;
        }

        //updates the new cordinats 1=up 2=down 3=left 4=right
        if(dir===1){
            this.y=this.y-velocity;
            this.start=270+this.degree;
            this.stop=270-this.degree;
        }else if(dir===2){
            this.y=this.y+velocity;
            this.start=90+this.degree;
            this.stop=90-this.degree;
        }else if(dir===3){
            this.x=this.x-velocity;
            this.start=180+this.degree;
            this.stop=180-this.degree;
        }else if(dir===4){
            this.x=this.x+velocity;
            this.start=0+this.degree;
            this.stop=0-this.degree;
        }

        if(this.x>width){
            this.x=0;
        }else if(this.x<0){
            this.x=width;
        }else if(this.y>height){
            this.y=0;
        }else if(this.y<0){
            this.y=height;
        }

    }

    show(){
        arc(this.x, this.y, this.width, this.height, this.start, this.stop);
    }
}
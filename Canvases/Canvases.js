
  var sketch_1 = function(ian){
    var x = 200;
    var y = 100;
    var d = 100;
    
     ian.setup = function(){
      var cvs = ian.createCanvas(700, 400);
      cvs.position(0, 0);
  }
  
    ian.draw = function(){
      ian.background(220);
      ian.fill("blue");
      ian.ellipse(x,y,d);
      x = x+15;
      if(x>=ian.width){
        x=0;
      }
    }
  }
  
  
  var sketch_2 = function(ian){
    
    var x = 100;
    var y = 50;
    var d = 100;
    
     ian.setup = function(){
      var cvs = ian.createCanvas(200, 600);
       cvs.position(500, 200);
  }
  
    ian.draw = function(){
      ian.background(255,0,0);
      ian.fill("white");
      ian.ellipse(x,y,d);
      y = y+5;
      if(y>=ian.height){
        y=0;
      }
    }
  }
  
  
  var sketch_3 = function(ian){
    
    var x = 200;
    var y = 300;
    var d = 200;
    
     ian.setup = function(){
      var cvs = ian.createCanvas(600, 500);
       cvs.position(200, 600);
  }
  
    ian.draw = function(){
      ian.background(0,255,0);
      ian.fill("purple");
      ian.ellipse(x,y,d);
      x = x+6;
      if(x>=ian.width){
        x=0;
      }
    }
  }
  
  
  var ianp5_1 = new p5(sketch_1);
  
  var ianp5_2 = new p5(sketch_2);
  
  var ianp5_3 = new p5(sketch_3);
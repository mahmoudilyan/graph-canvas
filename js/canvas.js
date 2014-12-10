
// Canvas Class
var circleCanvas = function(x,y,radius,fillStyle,lineWidth,strokeStyle, motionX, motionY){
    this.list = new doublyLinked();
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fillStyle = fillStyle;
    this.lineWidth =  lineWidth;
    this.strokeStyle = strokeStyle;
    this.motionX = motionX;
    this.motionY = motionY;
}


// Functions For Canvas

/**
 * addCircleCanvas
 * 
 * return new Canvas Object
 */
function addCircleCanvas(x,y,fillStyle,radius,lineWidth,strokeStyle,motionX,motionY){
    return new circleCanvas(x,y,radius,fillStyle,lineWidth,strokeStyle,motionX,motionY);
}

/**
 * Drawing graph data structures (circles) in Canvas
 */
function drawCanvas(graph ,context){
    for( var i = 0; i < graph.length ; i++){
        var adjList = graph.vertixList[i].list.head;
        context.beginPath();
        context.arc(graph.vertixList[i].x ,graph.vertixList[i].y ,graph.vertixList[i].radius, 0, 2 * Math.PI, false);
        context.fillStyle = graph.vertixList[i].fillStyle ;
        context.fill();
        context.lineWidth = graph.vertixList[i].lineWidth;
        context.strokeStyle = graph.vertixList[i].strokeStyle;
        context.stroke();
        if(adjList !== null){
            while(adjList !== null){
                context.moveTo(graph.vertixList[i].x,graph.vertixList[i].y );
                context.lineTo(adjList.details.x,adjList.details.y);
                context.lineWidth = 1;
                context.stroke();
                adjList = adjList.next;
            }
        }
    }

}

/**
 * change Graph Data structures circle Details
 */
function changeGraph(graph, width, height, radius, min, max){
    for(var i=0; i <graph.length; i++){
        var adjList = graph.vertixList[i].list.head;
        
        // If Circle moves to right,left edge in x-axis 
        if(graph.vertixList[i].x >= width - (radius * 2) || graph.vertixList[i].x <= radius * 2){
            switchMotionX(graph.vertixList[i]);
        }
        
        // Increasing X to make animation
        increaseX(graph.vertixList[i], min, max);
        
        // If Circle moves to up, bottom edge in y-axis
        if(graph.vertixList[i].y >= height - (100) || graph.vertixList[i].y <= radius * 2){
            switchMotionY(graph.vertixList[i]);
        }
        
        // Increasing Y to make animation
        increaseY(graph.vertixList[i], min, max);
        
        // Doing same for linked list it holds
        if(adjList !== null){
            while(adjList !== null){
                if(adjList.details.x >= width - radius * 2 || adjList.details.x <= radius * 2)
                    switchMotionX(adjList.details);
                increaseX(adjList.details, min, max);
                if(adjList.details.y >= height - radius * 2 || adjList.details.y <= radius * 2)
                    switchMotionY(adjList.details);
                increaseY(adjList.details, min, max);
                adjList = adjList.next;
            }
        }// End Linked List 
    }// End Looping Through Graph
}


/**
 * Increase x property for the object or decrease it (depending on the motion)
 */
function increaseX(object, min, max){
    var randomChange = Math.random() * (min - max) + min;
        if(object.motionX == "left")
            object.x = object.x + randomChange;
        else
            object.x = object.x - randomChange;
}

/**
 * increaseY details for the object or decrease it (depending on the motion)
 */
function increaseY(object,min,max){
    var randomChange = Math.random() * (min - max) + min;
        
        if(object.motionY == "down")
            object.y = object.y + randomChange;
        else
            object.y = object.y - randomChange;
}

/**
 * change xMotion for the object
 */
function switchMotionX(object){
    if( object.motionX == "left")
        object.motionX = "right";
    else
        object.motionX = "left";
}

/**
 * switch yMotion for the object
 */
function switchMotionY(object){
    if( object.motionY == "up")
        object.motionY = "down";
    else 
        object.motionY = "up";
}



            
            
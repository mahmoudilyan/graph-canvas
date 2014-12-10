
// Graph Class
var Graph = function (){
    this.length = 0;
    this.vertixList =[];
}

// Graph addVertis method
Graph.prototype.addVertix = function(vertix){
    this.vertixList[this.length++] = vertix;
    this.addEdge(vertix,2);
    return vertix;
}

// Graph addEdge method
Graph.prototype.addEdge = function(target,edgeNumbers){
    if(this.length < 4){
        for(var i =0; i < this.length ; i++){
            target.list.add(this.vertixList[i]);
            this.vertixList[i].list.add(target);        
        }
        return;
    }
    var distances = this.distance(target),
        distance;
        console.log(distances);
    //Making undirected and unweidgted edge between two vertix
    for(var i =0; i < this.length ; i++){
        distance = Math.sqrt(Math.pow(target.x - this.vertixList[i].x, 2) + Math.pow(target.y - this.vertixList[i].y,2));
        for(var j = 0; j < edgeNumbers ; j++){
            if(distances[j] == distance){
                target.list.add(this.vertixList[i]);
                this.vertixList[i].list.add(target);
            }
        }
    }
}

// calculate distance
Graph.prototype.distance = function(target){
    var results = [],
        distance,
        finalResults = [];
    for(var i =0; i < this.length - 1; i++){
        distance = Math.sqrt(Math.pow(target.x - this.vertixList[i].x,2) + Math.pow(target.y - this.vertixList[i].y,2))
        results.push(distance);
    }
    return results.sort(function(a,b){return a-b});
}
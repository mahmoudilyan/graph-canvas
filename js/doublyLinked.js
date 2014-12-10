//Doubly Linked List Class
var doublyLinked = function(){
    this.length = 0;
    this.head  = null;
    this.tail = null;
}

// Add method
doublyLinked.prototype.add = function(object){
    var node = {
        details: object,
        next: null,
        previous: null
    }
    // If the doublyLinked empty
    if(this.length == 0){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    }
    this.length++;
}

// Remove Method
doublyLinked.prototype.remove = function(index){
    
    // First Item
    if(index > -1 && index < this.length -1){ 
        var current = this.head;
            i = 0;
        if(index === 0){
            this.head = current.next;
            
            if(this.head === null)
                this.tail = null;
            else
                this.head.prev = null;
        
        // Last Item
        }else if(index == this.lengt -1 ) { 
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        }else{
            while(i++ < index){
                current = current.next;
            }
            
            // Arranging the previous and the next for the item that will be deleted
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        
        this.length--;
        return current.details;
        
    // The index is more than the size or invalid index
    }else{
        return null;
    }
}

//SizeMethod
doublyLinked.prototype.size = function(){
    return this.length;
}
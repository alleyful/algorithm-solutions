this.insert=function(head,data){
      //complete this method

    let newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
        return this.head;
    }

    let tail = this.head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
};

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function levelOrder
    this.levelOrder = function(root) {

        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        let temp;
        const queue = [];
        const result = [];

        queue.push(root);

        while (queue.length) {

            // Deque the Queue
            temp = queue.splice(0, 1)[0]

            result.push(temp.data);

            // Enqueue the Queue
            if (temp.left) queue.push(temp.left)
            if (temp.right) queue.push(temp.right)
        }

        console.log(result.join(' '));
	}; // End of function levelOrder
}; // End of function BinarySearchTree

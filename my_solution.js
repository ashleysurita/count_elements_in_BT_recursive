class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function countTreeNodesRecursive(root) {
    if(!root) return 0    
    return 1 + countTreeNodesRecursive(root.left) + countTreeNodesRecursive(root.right)    
}

// Test Cases
console.log(countTreeNodesRecursive(null)) // 0
console.log(countTreeNodesRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(countTreeNodesRecursive(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
console.log(countTreeNodesRecursive(new TreeNode())) // 1

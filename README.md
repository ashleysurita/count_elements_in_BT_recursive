# count_elements_in_BT_recursive

### Problem:
Javascript
```
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function countTreeNodesRecursive(root) {
    // Write your code here.
    return -1
}

// Test Cases
console.log(countTreeNodesRecursive(null)) // 0
console.log(countTreeNodesRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(countTreeNodesRecursive(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
console.log(countTreeNodesRecursive(new TreeNode())) // 1
```

Python
```
class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right
        
def countTreeNodesRecursive(root: TreeNode) -> int:
    # Write your code here.
    pass

# Test Cases
print(countTreeNodesRecursive(None)) # 0
print(countTreeNodesRecursive(TreeNode(1, TreeNode(2), TreeNode(3)))) # 3
print(countTreeNodesRecursive(TreeNode(2, TreeNode(29, TreeNode(26)), TreeNode(4, None, TreeNode(2, TreeNode(9)))))) # 6
print(countTreeNodesRecursive(TreeNode())) # 1
```

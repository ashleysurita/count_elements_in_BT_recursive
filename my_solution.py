class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

def countTreeNodesRecursive(root: TreeNode) -> int:
    if not root:
        return 0
    return 1 + countTreeNodesRecursive(root.left) + countTreeNodesRecursive(root.right)

# Test Cases
print(countTreeNodesRecursive(None)) # 0
print(countTreeNodesRecursive(TreeNode(1, TreeNode(2), TreeNode(3)))) # 3
print(countTreeNodesRecursive(TreeNode(2, TreeNode(29, TreeNode(26)), TreeNode(4, None, TreeNode(2, TreeNode(9)))))) # 6
print(countTreeNodesRecursive(TreeNode())) # 1

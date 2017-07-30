require "tree_node"

# return the array containing the tree levels, from root to last level.
# def tree_by_levels(node)
#   return [] unless node
#
#   result = []
#   height = height(node)
#
#   (1..height).each { |h| result << giveLevel(node, h) }
#
#   result.flatten.select { |el| el }
# end
#
# def giveLevel(root, level)
#   return false unless root
#
#   return (level == 1 ? root.value :
#           [giveLevel(root.left, level - 1), giveLevel(root.right, level - 1)])
# end
#
# def height(root)
#   return 0 unless root
#
#   left_height = height(root.left)
#   right_height = height(root.right)
#
#   return (left_height > right_height ? left_height + 1 : right_height + 1)
# end

def tree_by_levels(node)
  stack=[]
  stack.push node if node
  stack.each do |n|
    stack.push n.left if n.left
    stack.push n.right if n.right
  end

  stack.map { |el| el.value }
end

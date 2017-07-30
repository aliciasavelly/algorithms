require "tree_node"

# return the array containing the tree levels, from root to last level.
def tree_by_levels(node)
  return [] unless node

  result = [node.value]
  height = height(node)

  (1..height).each do |h|
    result << giveLevel(node, h) unless giveLevel(node, h).is_a?(Integer)
  end

  result.flatten.select { |el| el }
end

def giveLevel(root, level)
  return false unless root

  return (level == 1 ? root.value :
          [giveLevel(root.left, level - 1), giveLevel(root.right, level - 1)])
end

def height(root)
  return 0 unless root

  left_height = height(root.left)
  right_height = height(root.right)

  return (left_height > right_height ? left_height + 1 : right_height + 1)
end

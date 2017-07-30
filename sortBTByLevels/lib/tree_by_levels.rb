require "tree_node"

# return the array containing the tree levels, from root to last level.
def tree_by_levels(node)
  return [] unless node
  result = [node.value]

  height = height(node)

  (1..height).each do |h|
    result.concat(giveLevel(node, h)) unless giveLevel(node, h).is_a?(Integer)
  end

  result.flatten.select { |el| el }
end

def giveLevel(root, level)
  return false unless root

  if level == 1
    return root.value
  elsif level > 1
    return [giveLevel(root.left, level - 1), giveLevel(root.right, level - 1)]
  end
end

def height(root)
  return 0 unless root

  left_height = height(root.left)
  right_height = height(root.right)

  if left_height > right_height
    return left_height + 1
  else
    return right_height + 1
  end
end

require 'rspec'
require 'tree_by_levels'
require 'tree_node'

describe "#tree_by_levels" do
  it "should return the correct array for balanced trees" do
    root = TreeNode.new(2)
    root.left = TreeNode.new(8)
    root.left.left = TreeNode.new(1)
    root.left.right = TreeNode.new(3)
    root.right = TreeNode.new(9)
    root.right.left = TreeNode.new(4)
    root.right.right = TreeNode.new(5)

    expect(tree_by_levels(root)).to eq([2, 8, 9, 1, 3, 4, 5])
  end

  it "should return the correct array for unbalanced trees" do
    root = TreeNode.new(1)
    root.left = TreeNode.new(8)
    root.left.right = TreeNode.new(3)
    root.right = TreeNode.new(4)
    root.right.right = TreeNode.new(5)
    root.right.right.right = TreeNode.new(7)

    expect(tree_by_levels(root)).to eq([1, 8, 4, 3, 5, 7])
  end

  it "should return the correct array for incredibly unbalanced trees" do
    root = TreeNode.new(1)
    root.left = TreeNode.new(8)
    root.left.left = TreeNode.new(3)
    root.left.left.left = TreeNode.new(4)
    root.left.left.left.left = TreeNode.new(5)
    root.left.left.left.left.left = TreeNode.new(7)

    expect(tree_by_levels(root)).to eq([1, 8, 3, 4, 5, 7])
  end

  it "should return the correct array for a short tree" do
    root = TreeNode.new(1)
    expect(tree_by_levels(root)).to eq([1])
  end

  it "should work properly with a tree of two levels" do
    root = TreeNode.new(9)
    root.left = TreeNode.new(6)
    expect(tree_by_levels(root)).to eq([9, 6])
  end
end

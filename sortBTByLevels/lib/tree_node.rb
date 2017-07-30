class TreeNode
  attr_accessor :left
  attr_accessor :right
  attr_accessor :value

  def initialize(value = nil)
    self.value = value
    self.left = nil
    self.right = nil
  end
end

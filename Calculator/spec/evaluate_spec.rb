require 'rspec'
require 'evaluate'

describe ".Calculator" do
  context "#evaluate" do
    it "should work with cases where order of operation doesn't matter" do
      expect(Calculator.new.evaluate("2 * 10 / 5 + 17")).to eq(21)
      expect(Calculator.new.evaluate("10 * 5 / 2")).to eq(25)
    end

    it "should consider order of operations" do
      expect(Calculator.new.evaluate("2 / 2 + 3 * 4 - 6")).to eq(7)
    end

    it "should work with a single number" do
      expect(Calculator.new.evaluate("127")).to eq(127)
    end

    it "should work with only one operation" do
      expect(Calculator.new.evaluate("2 + 3")).to eq(5)
    end

    it "should work with only one type of operator" do
      expect(Calculator.new.evaluate("2 - 3 - 4")).to eq(-5)
      expect(Calculator.new.evaluate("2 + 3 + 4")).to eq(9)
    end

    it "should work with complicated examples" do
      expect(Calculator.new.evaluate("2 + 3 * 4 / 3 - 6 / 3 * 3 + 8")).to eq(8)
      expect(Calculator.new.evaluate("9 + 4 + 6 + 1 + 3 + 0 + 9 + 8 + 7 + 9")).to eq(56)
      expect(Calculator.new.evaluate("9 * 4 * 6 * 1 * 3 * 0 * 9 * 8 * 7 * 9")).to eq(0)
    end
  end

  context "#multiply" do
    it "should multiply two numbers" do
      expect(Calculator.new.multiply(2, 3)).to eq(6)
    end

    it "should multiply two large numbers" do
      expect(Calculator.new.multiply(223, 32)).to eq(7136)
    end
  end

  context "#divide" do
    it "should divide two numbers" do
      expect(Calculator.new.divide(100, 4)).to eq(25)
    end
  end

  context "#add" do
    it "should add two numbers" do
      expect(Calculator.new.add(200, 32)).to eq(232)
    end
  end

  context "#subtract" do
    it "should subtract two numbers" do
      expect(Calculator.new.subtract(19, 7)).to eq(12)
    end
  end
end

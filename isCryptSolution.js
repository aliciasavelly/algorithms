function isCryptSolution(crypt, solution) {
  let solutionHash = {};
  let nums = ["", "", ""];

  for (let i = 0; i < solution.length; i++) {
    solutionHash[solution[i][0]] = solution[i][1];
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < crypt[i].length; j++) {
      nums[i] += solutionHash[crypt[i][j]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i][0] === "0" && nums[i].length > 1) {
      return false;
    }
    nums[i] = Number(nums[i]);
  }

  return nums[0] + nums[1] === nums[2];
}

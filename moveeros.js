var moveZeroes = function(nums) {
    let pos = 0; // position to place the next non-zero

    // Move non-zero elements forward
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }

    // Fill remaining positions with zeros
    for (let i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
};

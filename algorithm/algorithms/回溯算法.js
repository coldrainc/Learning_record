function combinationSum(candidates, target) {
    let result = [];

    function backtrack(target, start, path) {
        if (target === 0) {  // 如果目标数为0，说明找到了一组组合
          result.push([...path]);
          return;
        }
        if (target < 0) {  // 如果目标数小于0，说明当前组合不满足条件，直接返回
          return;
        }
        for (let i = start; i < candidates.length; i++) {
          path.push(candidates[i]);  // 将当前数字加入到组合中
          backtrack(target - candidates[i], i, path);  // 继续搜索剩余的目标数
          path.pop();  // 回溯，将当前数字从组合中移除
        }
    }

    backtrack(target, 0, []);
    return result;
  }
  
  let candidates = [2, 3, 6, 7];
  let target = 7;
  let result = combinationSum(candidates, target);
  console.log(result);
  
  candidates = [2, 3, 5];
  target = 8;
  result = combinationSum(candidates, target);
  console.log(result);

  function generateParenthesis(n) {
    const result = [];
    function backtrack(str, left, right) {
        if (left < right) return;

        if (left === n && right === n) {
            result.push(str);
            return
        }

        if (left < n) {
            backtrack(str + '(', left + 1, right);
        }

        if (right < n) {
            backtrack(str + ')', left, right + 1);
        }
    }

    backtrack('', 0, 0);

    return result;
  }
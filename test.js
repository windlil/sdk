function test(str) {
  const num = str.split('\n')[0]
  const nums = str.split('\n')[1].split(' ')

  const map = new Map()
  const result = []
  for (let i = 0; i < num; i++) {
    if (map.get(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  for (let [key, value] of map) {
    const x = fn(value)
    let count = 0
    for (let i = 0; i < num; i++) {
      if (nums[i] === key) {
        count++
      }
      if (count === x) {
        result.push(i + 1)
        break
      }
    }
  }
  function fn(value) {
    const x = Math.ceil(value / 2)
    return x
  }
  return `${map.size}
${result.sort((a, b) => a - b).join(" ")}`
}



console.log(test(`1
1`))
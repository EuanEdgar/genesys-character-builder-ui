const summation = (n) => {
  let summation = 0
  for(let x = n; x > 0; x--) {
    summation += x
  }
  return summation
}

export default summation

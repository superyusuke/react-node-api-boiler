const test = (state = {}, action) => {
  switch (action.type) {
    case true:
      return true
    default:
      return false
  }
}

export default test
const initialValue = false
export default (state = initialValue, action) => {
  switch (action.type) {
      case 'TOGGLE_COL_VIEW':
      return action.payload

      default:
      return state
  }
}
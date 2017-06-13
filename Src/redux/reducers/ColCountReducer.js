const initialValue = 0
export default (state = initialValue, action) => {
  switch (action.type) {
      case 'UPDATE_COL_COUNT':
      return Number(action.payload)

      default:
      return state
  }
}
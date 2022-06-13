const dispatchAction = (dispatch, { action }) => dispatch(action)

export const actionDispatcher = (action) => [dispatchAction, { action }]

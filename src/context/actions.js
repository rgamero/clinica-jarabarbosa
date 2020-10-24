export const actionTypes = {
  toggleMenuState: 'TOGGLE_MENU_STATE',
  visibleHeader: 'VISIBLE_HEADER'
};

export const toggleMenuState = value => ({
  type: actionTypes.toggleMenuState,
  value
});

export const visibleHeader = value => ({
  type: actionTypes.visibleHeader,
  value
});

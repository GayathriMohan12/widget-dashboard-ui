// src/store/reducers.js
const initialState = {
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.widget],
              }
            : category
        ),
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(widget => widget.id !== action.widgetId),
              }
            : category
        ),
      };
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.categoryId),
      };
    default:
      return state;
  }
};

export default reducer;

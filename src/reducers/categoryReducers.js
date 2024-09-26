// src/reducers/categoryReducer.js
const initialState = {
    categories: [],
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CATEGORY':
        return {
          ...state,
          categories: [...state.categories, action.payload.category],
        };
      case 'DELETE_CATEGORY':
        return {
          ...state,
          categories: state.categories.filter(category => category.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  
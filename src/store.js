// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const widgetSlice = createSlice({
  name: 'widgets',
  initialState: {
    categories: []
  },
  reducers: {
    addWidget: (state, action) => {
      const category = state.categories.find(category => category.id === action.payload.categoryId);
      if (category) {
        category.widgets.push(action.payload.widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(category => category.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload.category);
    },
    deleteCategory: (state, action) => {  // Changed to deleteCategory
      state.categories = state.categories.filter(category => category.id !== action.payload);
    }
  }
});

export const { addWidget, removeWidget, addCategory, deleteCategory } = widgetSlice.actions;

const store = configureStore({
  reducer: widgetSlice.reducer
});

export default store;

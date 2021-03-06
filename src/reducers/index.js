import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    libraries: LibraryReducer,
    selectLibraryId: SelectionReducer
})

// console.log(store.getState())
// { libraries: content of libraries make the state }
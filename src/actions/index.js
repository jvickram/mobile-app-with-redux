export const selectLibrary = (librarId) => {
    return {
        type: 'select_library',
        payload: librarId
    }
}
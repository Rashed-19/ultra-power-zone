const addToStorage = id => {
    
    //clear localStorage
    localStorage.removeItem('save-Exercise');
    let storage= {};

    //add exercise localStorage
    storage[id] = 1;
    localStorage.setItem('save-Exercise', JSON.stringify(storage));
}

const storageExercise = () => {
    
    let storage= {}
    const storedCart = localStorage.getItem('save-Exercise');
    if (storedCart) {
        storage= JSON.parse(storedCart);
    }
    return storage;
}
export {addToStorage, storageExercise};
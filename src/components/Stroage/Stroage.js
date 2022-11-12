const storageAdded = id => {
    
 
    localStorage.removeItem('save-Exercise');
    let storage= {};

    
    storage[id] = 1;
    localStorage.setItem('save-Exercise', JSON.stringify(storage));
}

const storageExercises = () => {
    
    let storage= {}
    const storedCart = localStorage.getItem('save-Exercise');
    if (storedCart) {
        storage= JSON.parse(storedCart);
    }
    return storage;
}
export {storageAdded, storageExercises};
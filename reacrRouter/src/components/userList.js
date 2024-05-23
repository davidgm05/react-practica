export const usersArray = [];

export const addUserToList = (user) => {
    usersArray.push(user)
    console.log(usersArray)
}

export const getUsersToList = () => {
    return usersArray
}
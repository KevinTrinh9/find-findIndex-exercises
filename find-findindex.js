function findUserByUsername(usersArray, username) {
  return usersArray.find(function(val){
    return val.username === username
  })
}

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(val){
    return val.username === username
  })
  if(foundIndex === -1) return
  return usersArray.splice(foundIndex, 1)[0]
}
function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++){
    if (array[i] === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== skipValue){
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn){
  if (array.indexOf(findFn) < 0){
    return null
  }
  return findFn
}

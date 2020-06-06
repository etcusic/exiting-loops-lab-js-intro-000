function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++){
    if (array[i] === stopValue){
      break
    }
    changeValue(array[i])
  }
  return array
}

function keepGoing(array, changeValue, skipValue){

}

function findBy(array, findFn){

}

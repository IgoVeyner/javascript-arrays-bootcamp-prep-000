var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var candy = [element,...array]
  return candy
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = [element,...array]
  return array
}
def linearSearch(arr, element):
  for i in range(len(arr)):
    if arr[i] == element:
      return {
        "position": i,
        "element": element
      }
  
  return "Element not found in array"

getElement = linearSearch([10, 20, 30, 49, 39, 89], 49)

print(getElement["position"])

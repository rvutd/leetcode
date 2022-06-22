function updateOrdersList(ordersList, orderId, state) {
  // Write methods to update data -
  let list;
  if (state === 'Processing') {
    list = ordersList.map(order => {
      if (order.id === orderId) {
        return {
          id: orderId,
          state: state
        }
      } else return order
    })
  } else {
    list = ordersList.filter(order => orderId !== order.id)
  }
  return list
}

let ordersList = [
  {
    id: 1,
    state: 'Receiving'
  },
  {
    id: 2,
    state: 'Receiving'
  },
  {
    id: 3,
    state: 'Receiving'
  }
]

let testCases = [
  {
    id: 1,
    state: 'Processing'
  },
  {
    id: 2,
    state: 'Delivered'
  },
  {
    id: 3,
    state: 'Processing'
  },
  {
    id: 4,
    state: 'Processing'
  },
  {
    id: 5,
    state: 'Receiving'
  },
]

testCases.forEach(testCase => {
  const updatedList = updateOrdersList(ordersList, testCase.id, testCase.state)
  ordersList = updatedList
})

console.log(ordersList);
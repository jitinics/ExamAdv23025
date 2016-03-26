/* global angular */
angular.module('index', []).controller('indexController', ['$scope', function ($scope) {
  $scope.bookSelected = {}
  $scope.book = {
    'B001': {
      'name': 'แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์',
      'price': 100
    },
    'B002': {
      'name': 'แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ',
      'price': 100
    },
    'B003': {
      'name': 'แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน',
      'price': 100
    },
    'B004': {
      'name': 'แฮร์รี่ พอตเตอร์กับถ้วยอัคนี',
      'price': 100
    },
    'B005': {
      'name': 'แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์',
      'price': 100
    },
    'B006': {
      'name': 'แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม',
      'price': 100
    },
    'B007': {
      'name': 'แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต',
      'price': 100
    }
  }
  $scope.bookSelect = bookSelect
  $scope.cal = cal
  $scope.remove = remove
  function bookSelect (bookId, pic) {
    if (!$scope.bookSelected[bookId]) {
      $scope.bookSelected[bookId] = $scope.book[bookId]
      $scope.bookSelected[bookId].qty = 0
      $scope.bookSelected[bookId].pic = pic
    }
    $scope.bookSelected[bookId].qty += 1
    cal()
  }
  function cal () {
    console.log($scope.bookSelected)
    var keys = Object.keys($scope.bookSelected)
    $scope.result = {}
    $scope.result.totalQty = 0
    $scope.result.totalPrice = 0
    keys.forEach(function (key) {
      $scope.result.totalPrice += $scope.bookSelected[key].price * $scope.bookSelected[key].qty
      $scope.result.totalQty += $scope.bookSelected[key].qty
    })
    var bookSelectedCoppy = JSON.parse(JSON.stringify($scope.bookSelected))
    $scope.result.discount = Math.round(calculateDiscount(bookSelectedCoppy))
    $scope.netPrice = $scope.result.totalPrice - $scope.result.discount
  }
  function calculateDiscount (bookSelected) {
    var discount = 0
    var counter = 0
    var price = 0
    var flag = true
    while (flag) {
      flag = false
      Object.keys(bookSelected).forEach(function (key) {
        if (--bookSelected[key].qty >= 0) {
          counter++
          price += bookSelected[key].price
          flag = true
        }
      })
      discount += ((counter - 1) * 0.1) * price
      counter = 0
      price = 0
    }
    return discount
  }
  function remove (bookId) {
    delete $scope.bookSelected[bookId]
    cal()
  }
}])

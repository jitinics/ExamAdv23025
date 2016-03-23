var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: false })
var nightmare2 = Nightmare({ show: false })
var nightmare3 = Nightmare({ show: false })
var nightmare4 = Nightmare({ show: false })
var nightmare5 = Nightmare({ show: false })
var url = 'http://localhost:8080/'
var radix = 10
nightmare
  .goto(url)
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB002')
  .wait(1000)
  .evaluate(function () {
    var result = document.getElementsByClassName('result')[0]
    var qty = result.getElementsByClassName('TotalQty')[0].getElementsByClassName('number')[0].innerHTML
    var price = result.getElementsByClassName('TotalPrice')[0].getElementsByClassName('number')[0].innerHTML
    var discount = result.getElementsByClassName('Discount')[0].getElementsByClassName('number')[0].innerHTML
    var net = result.getElementsByClassName('NetPrice')[0].getElementsByClassName('number')[0].innerHTML
    return [qty, price, discount, net]
  })
  .then(function (result) {
    console.log('------------------------------------------------------------------')
    console.log('Tast Case : A 2 unit || B 1 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 3) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 300) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 20) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 280) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('------------------------------------------------------------------')
  })
nightmare.end()
nightmare2
  .goto(url)
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB002')
  .wait(500)
  .click('#listB002')
  .wait(500)
  .click('#listB002')
  .wait(1000)
  .evaluate(function () {
    var result = document.getElementsByClassName('result')[0]
    var qty = result.getElementsByClassName('TotalQty')[0].getElementsByClassName('number')[0].innerHTML
    var price = result.getElementsByClassName('TotalPrice')[0].getElementsByClassName('number')[0].innerHTML
    var discount = result.getElementsByClassName('Discount')[0].getElementsByClassName('number')[0].innerHTML
    var net = result.getElementsByClassName('NetPrice')[0].getElementsByClassName('number')[0].innerHTML
    return [qty, price, discount, net]
  })
  .then(function (result) {
    console.log('------------------------------------------------------------------')
    console.log('Tast Case : A 3 unit || B 3 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 6) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + qty)
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 600) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + price)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 60) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + discount)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 540) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + net)
    }
    console.log('------------------------------------------------------------------')
  })
nightmare2.end()
nightmare3
  .goto(url)
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB002')
  .wait(500)
  .click('#listB003')
  .wait(1000)
  .evaluate(function () {
    var result = document.getElementsByClassName('result')[0]
    var qty = result.getElementsByClassName('TotalQty')[0].getElementsByClassName('number')[0].innerHTML
    var price = result.getElementsByClassName('TotalPrice')[0].getElementsByClassName('number')[0].innerHTML
    var discount = result.getElementsByClassName('Discount')[0].getElementsByClassName('number')[0].innerHTML
    var net = result.getElementsByClassName('NetPrice')[0].getElementsByClassName('number')[0].innerHTML
    return [qty, price, discount, net]
  })
  .then(function (result) {
    console.log('------------------------------------------------------------------')
    console.log('Tast Case : A 1 unit || B 1 unit || C 1 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 3) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + qty)
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 300) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + price)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 60) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + discount)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 240) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + net)
    }
    console.log('------------------------------------------------------------------')
  })
nightmare3.end()
nightmare4
  .goto(url)
  .wait(500)
  .click('#listB001')
  .wait(500)
  .type('#selectedQty0', '0')
  .wait(1000)
  .evaluate(function () {
    var result = document.getElementsByClassName('result')[0]
    var qty = result.getElementsByClassName('TotalQty')[0].getElementsByClassName('number')[0].innerHTML
    var price = result.getElementsByClassName('TotalPrice')[0].getElementsByClassName('number')[0].innerHTML
    var discount = result.getElementsByClassName('Discount')[0].getElementsByClassName('number')[0].innerHTML
    var net = result.getElementsByClassName('NetPrice')[0].getElementsByClassName('number')[0].innerHTML
    return [qty, price, discount, net]
  })
  .then(function (result) {
    console.log('------------------------------------------------------------------')
    console.log('Tast Case : A 10 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 10) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + qty)
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 1000) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + price)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 0) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + discount)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 1000) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + net)
    }
    console.log('------------------------------------------------------------------')
  })
nightmare4.end()
nightmare5
  .goto(url)
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB002')
  .wait(500)
  .click('#listB002')
  .wait(500)
  .click('#listB003')
  .wait(1000)
  .evaluate(function () {
    var result = document.getElementsByClassName('result')[0]
    var qty = result.getElementsByClassName('TotalQty')[0].getElementsByClassName('number')[0].innerHTML
    var price = result.getElementsByClassName('TotalPrice')[0].getElementsByClassName('number')[0].innerHTML
    var discount = result.getElementsByClassName('Discount')[0].getElementsByClassName('number')[0].innerHTML
    var net = result.getElementsByClassName('NetPrice')[0].getElementsByClassName('number')[0].innerHTML
    return [qty, price, discount, net]
  })
  .then(function (result) {
    console.log('------------------------------------------------------------------')
    console.log('Tast Case : A 3 unit || B 2 unit || C 1 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 6) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + qty)
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 600) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + price)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 80) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + discount)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 520) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + net)
    }
    console.log('------------------------------------------------------------------')
  })
nightmare5.end()

var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: false })
var nightmare2 = Nightmare({ show: false })
var nightmare3 = Nightmare({ show: false })
var nightmare4 = Nightmare({ show: false })
var nightmare5 = Nightmare({ show: false })
var nightmare6 = Nightmare({ show: false })
var nightmare7 = Nightmare({ show: false })
var nightmare8 = Nightmare({ show: false })
var nightmare9 = Nightmare({ show: false })
var nightmare10 = Nightmare({ show: false })
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
      console.log("fail the result must be 300 but It's" + result)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 20) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 20 but It's" + result)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 280) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 280 but It's" + result)
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
nightmare6
  .goto(url)
  .wait(500)
  .click('#listB001')
  .wait(500)
  .click('#listB002')
  .wait(500)
  .click('#listB003')
  .wait(500)
  .click('#listB004')
  .wait(500)
  .click('#listB005')
  .wait(500)
  .click('#listB006')
  .wait(500)
  .click('#listB007')
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
    console.log('Tast Case : A 1 unit || B 1 unit || C 1 unit || D 1 unit ||E 1 unit || F 1 unit ||G 1 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 7) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 700) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 420) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 280) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + parseInt(net, radix))
    }
    console.log('------------------------------------------------------------------')
  })
nightmare6.end()
nightmare7
  .goto(url)
  .wait(500)
  .click('#listB002')
  .wait(500)
  .click('#listB002')
  .wait(500)
  .click('#listB003')
  .wait(500)
  .click('#listB007')
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
    console.log('Tast Case : B 2 unit || C 1 unit || G 1 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 4) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 400) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 60) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 340) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('------------------------------------------------------------------')
  })
nightmare7.end()
nightmare8
  .goto(url)
  .wait(500)
  .click('#listB003')
  .wait(500)
  .click('#listB004')
  .wait(500)
  .click('#listB005')
  .wait(500)
  .click('#listB005')
  .wait(500)
  .click('#listB007')
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
    console.log('Tast Case : C 1 unit || D 1 unit || E 2 unit ||G 1 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 5) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 500) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 120) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 380) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('------------------------------------------------------------------')
  })
nightmare8.end()
nightmare9
  .goto(url)
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
  .wait(500)
  .click('#listB004')
  .wait(500)
  .click('#listB005')
  .wait(500)
  .click('#listB005')
  .wait(500)
  .click('#listB005')
  .wait(500)
  .click('#listB006')
  .wait(500)
  .click('#listB006')
  .wait(500)
  .click('#listB007')
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
    console.log('Tast Case : A 2 unit || B 2 unit || C 1 unit || D 1 unit ||E 3 unit || F 2 unit ||G 1 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 12) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 1200) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 540) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 660) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + result)
    }
    console.log('------------------------------------------------------------------')
  })
nightmare9.end()
nightmare10
  .goto(url)
  .wait(500)
  .click('#listB001')
  .wait(500)
  .type('#selectedQty0', '0')
  .wait(500)
  .click('#listB002')
  .wait(500)
  .type('#selectedQty1', '0')
  .wait(500)
  .click('#listB003')
  .wait(500)
  .type('#selectedQty2', '0')
  .wait(500)
  .click('#listB004')
  .wait(500)
  .type('#selectedQty3', '0')
  .wait(500)
  .click('#listB005')
  .wait(500)
  .type('#selectedQty4', '0')
  .wait(500)
  .click('#listB006')
  .wait(500)
  .type('#selectedQty5', '0')
  .wait(500)
  .click('#listB007')
  .wait(500)
  .type('#selectedQty6', '0')
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
    console.log('Tast Case : A 10 unit || B 10 unit || C 10 unit || D 10 unit ||E 10 unit || F 10 unit ||G 10 unit')
    var qty = result[0]
    var price = result[1]
    var discount = result[2]
    var net = result[3]
    console.log('quantity Check :')
    if (parseInt(qty, radix) === 70) {
      console.log('pass, quantity is', parseInt(qty, radix))
    } else {
      console.log("fail the result must be 3 but It's" + parseInt(qty, radix))
    }
    console.log('Total price Check :')
    if (parseInt(price, radix) === 7000) {
      console.log('pass, total is', parseInt(price, radix))
    } else {
      console.log("fail the result must be 3 but It's" + parseInt(price, radix))
    }
    console.log('Discount Check :')
    if (parseInt(discount, radix) === 4200) {
      console.log('pass, discount is', parseInt(discount, radix))
    } else {
      console.log("fail the result must be 3 but It's" + parseInt(discount, radix))
    }
    console.log('Netprice Check :')
    if (parseInt(net, radix) === 2800) {
      console.log('pass, net price is', parseInt(net, radix))
    } else {
      console.log("fail the result must be 3 but It's" + parseInt(net, radix))
    }
    console.log('------------------------------------------------------------------')
  })
nightmare10.end()

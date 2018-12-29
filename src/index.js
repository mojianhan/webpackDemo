// import _ from 'lodash'
import './style.css'
import printMe from './print'
import { cube } from './math.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development mode')
}

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  // element.innerHTML = _.join(['hello', 'webpack'], '')
  // element.classList.add('hello')
  element.innerHTML = [
    "hello webpack",
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  btn.innerHTML = 'click'
  btn.onclick = printMe

  var myPng = new Image()
  element.appendChild(btn)
  return element
}

// document.body.appendChild(component())
let element = component() //当print.js 改变导致页面重新渲染时，重新获取渲染元素

document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accept the updated printMe module');
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
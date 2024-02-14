import{timezone} from './constants.js'
import{pi, tau} from './constants.js'
import {calcCircleArea} from './math/functions.js'
import lodash from 'lodash'
import axios from 'axios'

console.log(timezone)
console.log(pi)
console.log(tau)
console.log(calcCircleArea(10, pi))
console.log(calcCircleArea(5, pi))

const getTodo = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response.data
  }
  
  console.log(await getTodo())

console.log(_.last([1, 2, 3]))
console.log(_.initial([1, 2, 3]))
console.log(_.head([1, 2, 3]))
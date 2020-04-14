import EventHub from '../src/index'

const eventHub = new EventHub()

console.assert(eventHub instanceof Object === true, 'eventHub 是一个对象')



// on->emit
let called = false

eventHub.on('xxx', () => {
    called = true
})

eventHub.emit('xxx')

console.assert(called, '订阅成功发布')



// on->emit 传参
let called2 = false
eventHub.on('yyy', data => {
    called2 = true
    console.assert(data === '成功传递参数')
})

eventHub.emit('yyy', '成功传递参数')

console.assert(called2, '订阅成功发布')
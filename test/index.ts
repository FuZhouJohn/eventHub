import EventHub from '../src/index'

const eventHub = new EventHub()

console.assert(eventHub instanceof Object === true, 'eventHub 是一个对象')



// on->emit
let called = false

eventHub.on('xxx', () => {
    called = true
})

eventHub.emit('xxx')

console.assert(called,'订阅成功发布')



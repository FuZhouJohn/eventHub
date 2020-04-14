import EventHub from '../src/index'

const test1 = (message) => {
    const eventHub = new EventHub()
    console.assert(eventHub instanceof Object === true)
    console.log(message)
}

const test2 = (message) => {
    const eventHub = new EventHub()

    let called = false

    eventHub.on('xxx', () => {
        called = true
    })

    eventHub.emit('xxx')
    setTimeout(() => {
        console.assert(called === true)
        console.log(message)
    }, 1000)

}

const test3 = (message) => {
    const eventHub = new EventHub()

    let called = false

    eventHub.on('xxx', data => {
        called = true
        console.assert(data === '成功传递参数')
    })

    eventHub.emit('xxx', '成功传递参数')

    setTimeout(() => {
        console.assert(called)
        console.log(message)
    }, 1000)
}


const test4 = (message) => {
    const eventHub = new EventHub()
    let called = false
    const fn1 = () => {
        called = true
    }
    eventHub.on('zzz', fn1)
    eventHub.off('zzz', fn1)
    eventHub.emit('zzz')

    setTimeout(() => {
        console.assert(called === false)
        console.log(message)
    }, 1000)
}

test1('EventHub 创建对象')
test2('订阅并发布成功')
test3('订阅并发布成功并传参')
test4('取消订阅成功')
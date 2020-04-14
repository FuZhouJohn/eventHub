/**
 * 思路：
 * 3 个 API：
 * on 订阅
 * emit 发布
 * end 取消订阅
 */


class EventHub {
    private cache = {}
    // {
    //     'a': [fn1,fn2],
    //     'b': [fn3,fn4],
    //     'c': [fn5,fn6]
    // }
    // 订阅
    on(eventName, fn) {
        // 将 fn 保存到 cache[eventName] 数组中
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName, data?) {
        // 将 cache[eventHub] 数组中的全部 fn 依次执行
        (this.cache[eventName] || []).forEach(fn => fn(data));
    }
    off(eventName, fn) {
        const index = indexOf(this.cache[eventName], fn)
        if (index === -1) return
        this.cache[eventName].splice(index, 1)
    }
}


function indexOf(array, item) {
    if(!array) return -1
    let index = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            index = i
            break;
        }
    }
    return index
}


export default EventHub
/**
 * 思路：
 * 3 个 API：
 * on 订阅
 * emit 发布
 * end 取消订阅
 */


class EventHub {
    private cache = {}
    on(eventName, fn) {
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName, data?) {
        (this.cache[eventName] || []).forEach(fn => fn(data));
    }
    off(eventName, fn) {
        const index = indexOf(this.cache[eventName], fn)
        if (index === -1) return
        this.cache[eventName].splice(index, 1)
    }
}

/**
 * 帮助函数 indexOf
 * @param array 
 * @param item 
 */
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
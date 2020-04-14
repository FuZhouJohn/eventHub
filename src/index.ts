/**
 * 思路：
 * 3 个 API：
 * on   订阅
 * emit 发布
 * end  取消订阅
 */


class EventHub {
    private cache: { [key: string]: Array<(data: unknown) => void> } = {}
    on(eventName: string, fn: (data: unknown) => void) {
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName: string, data?: unknown) {
        (this.cache[eventName] || []).forEach(fn => fn(data));
    }
    off(eventName:string, fn: (data: unknown) => void) {
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
function indexOf(array:Array<(data: unknown) => void>, item:(data: unknown) => void) {
    if (!array) return -1
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
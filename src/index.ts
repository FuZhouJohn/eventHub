/**
 * 思路：
 * 3 个 API：
 * on 订阅
 * emit 发布
 * end 取消订阅
 */


class EventHub {
    cache = {}
    // {
    //     'a': [fn1,fn2],
    //     'b': [fn3,fn4],
    //     'c': [fn5,fn6]
    // }
    // 订阅
    on(eventName,fn){
        // 将 fn 保存到 cache[eventName] 数组中
        if(!(this.cache[eventName] instanceof Array)){
            this.cache[eventName] = []
        }
        const array = this.cache[eventName]
        array.push(fn)
    }
    emit(eventName){
        // 将 cache[eventHub] 数组中的全部 fn 依次执行
        if(!(this.cache[eventName] instanceof Array)){
            this.cache[eventName] = []
        }
        const array = this.cache[eventName]
        array.forEach(fn => {
            fn()
        });
    }
}

export default EventHub
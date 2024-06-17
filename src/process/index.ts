import i18n from "i18next";
type Fn = (...args: any[]) => void;

/**
 * 防抖函数 (Debounce)
 * @param fn 需执行的回调函数
 * @param delay 计时器延时
 * @category Process
 */

export const debounce = (fn: Fn, delay: number):Fn => {
    let timer: ReturnType<typeof setTimeout>;

    return function (...args: any[]) {
        if(timer){
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

/**
 * 节流函数
 * @param fn 需执行的回调函数
 * @param limit 限制的时间间隔
 * @category Process
 */

export const throttle = (fn:Fn, limit:number) :Fn => {
    let lastCall = 0;
    return function(...args:any[]){
        const now = Date.now();
        if(now - lastCall >= limit){
            lastCall = now;
            fn(...args)
        }
    }
}
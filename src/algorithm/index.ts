type NestedObject = {
    [key: string]:any;
}

/**
 * 通过key递归获取对象中的值
 * @param obj 查询的对象
 * @param key 查询的key
 * @category Algorithm
 */

export const getValueByKey = (obj:NestedObject, key: string) : any[] => {
    let results: any[] = [];

    const recurse = (currentObj: NestedObject) => {
        for(let k in currentObj) {
            if(k === key){
                results.push(currentObj[k]);
            }
            if(typeof currentObj[k] === 'object' && currentObj[k] !== null){
                recurse(currentObj[k]);
            }
        }
    }

    recurse(obj)
    return results;
}

/**
 * 递归对每个值进行操作
 * @param obj 操作的对象
 * @param modifyFunc 执行的函数
 * @category Algorithm
 */

export const modifyValues = (obj: NestedObject, modifyFunc: (value: any) => any): void => {
    function recurse(currentObj: NestedObject) {
      for (let key in currentObj) {
        if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
          recurse(currentObj[key]);
        } else {
          currentObj[key] = modifyFunc(currentObj[key]);
        }
      }
    }
  
    recurse(obj);
}

type Curried<T> = T extends (...args: infer A) => infer R
  ? A extends [infer F, ...infer Rest]
    ? (arg: F) => Curried<(...args: Rest) => R>
    : R
  : never;

/**
 * 递归对每个值进行操作
 * @param func 执行的函数
 * @category Algorithm
 */

export const curry = <T extends (...args: any[]) => any> (func: T) : Curried<T> => {
  return function curried (...args: any[]): any {
    if(args.length >= func.length){
      func(...args)
    }else{
      return (...args1: any[]) => curried(...args, ...args1)
    }
  } as Curried<T>
}

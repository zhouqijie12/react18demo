import { v4 as uuidv4 } from "uuid";

const throttleMap = {};
/**
 * 节流函数
 * @param fn 被执行的方法
 * @param time 时间
 * @param key timer，用于多次调用
 */
export function throttle(fn, time = 50, key) {
  if (throttleMap[key]) {
    clearTimeout(throttleMap[key]);
  }
  throttleMap[key] = setTimeout(() => {
    fn();
  }, time);
}
export function cleanThrottle(key) {
  if (throttleMap[key]) {
    clearTimeout(throttleMap[key]);
  }
}

//url参数截取
export function getQueryVariable(variable, url) {
  let query = url.split("?");
  if (query.length === 1) {
    return false;
  }
  let vars = query[1].split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

/**
 * 删除对象指定属性
 * @param {*} obj // 要删除的对象
 * @param {[]} uselessKeys // 对象要删除的属性
 */
export const omit = (obj, uselessKeys) => {
  let filterObj = Object.keys(obj).reduce((arr, key) => {
    return uselessKeys.includes(key) ? { ...arr } : { ...arr, [key]: obj[key] };
  }, {});
  return filterObj;
};

export const getUuidfn = () => {
  return uuidv4();
};

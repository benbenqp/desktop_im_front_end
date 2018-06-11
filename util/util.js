import Viewer from 'viewerjs'
export default  class Utils {
  constructor () {
  }

  static checkPhone (str) {
    let pattern = /1[34578]\d{9}/
    return pattern.test(str)
  }
  static checkInteger (str) {
    let pattern = /[1-9]\d*/
    return pattern.test(str)
  }
  static checkPersonId (str) {
    let pattern = /\d{17}[\d|x]|\d{15}/
    return pattern.test(str)
  }
  static  checkEmail (str) {
    let pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
    return pattern.test(str)
  }
  static getUUID () {
    function S4 () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() +
        S4() + S4())
  }
  static  checkPrice (str) {
    let pattern = /^(\d|[1-9]\d*){1}(\.\d{1,2})?$/
    return pattern.test(str)
  }
  static  getArrUnionSet  (arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    let unionSet = new Set([...a, ...b])
    return Array.from(unionSet)
  }
  // 并集 a[1,2,3], b [1,2,5,4] 结果 a[1,2,3], b [1,2,5,4]
  static  getArrUnionSet  (arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    let unionSet = new Set([...a, ...b])
    return Array.from(unionSet)
  }
  // 差集 a[1,2,3], b [1,2,5,4]  结果 [5, 4]
  static  getArrDiffSet (arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    let differenceABSet = new Set([...b].filter(x => !a.has(x)))
    return Array.from(differenceABSet)
  }
  // 非空字符串
  static  isNotEmptyStr (str) {
    return str !== undefined && str !== null &&
        ((str + '').replace(/(^\s+)|(\s+$)/g, '')) !== ''
  }
  // 空字符串
  static  isEmptyStr (str) {
    return !this.isNotEmptyStr(str)
  }
 // 非空对象
  static  isNotEmptyObject (obj) {
    for (let t in obj) {
      return true
    }
    return false
  }
  // 空对象
  static isEmptyObject (obj) {
    return !this.isNotEmptyObject(obj)
  }
  //获取时间撮
  static getTimesTamp (time = null) {
    if (time) {
      return new Date(time).getTime()
    }
    return new Date().getTime()
  }
  // 将时间搓转换为时间格式 如 2017-11-27
  static  formatDate (dateTime,symbol = '-'){
    let time = new Date(dateTime);
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    return y + symbol + this.addZera(m) + symbol + this.addZera(d);
  }
  static  addZera (str){
    return Number(str) < 10 ?  '0' + str : str
  }
  static deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    if (obj instanceof Array) {
      let copy = [];
      for (let i = 0; i < obj.length; i++) {
        copy.push(obj[i]);
      }
      return copy;
    }
    if (obj instanceof Object) {
      let copy = {};
      for (let key in obj) { //递归
        if (obj.hasOwnProperty(key)) {
          copy[key] = this.deepClone(obj[key]);
        }
      }
      return copy;
    }
  }
  static  getMoney (str){
    if(this.isEmptyStr(str)){
      return 0
    }
    return '￥'+(str/100).toFixed(2);
  }
  static bigImg(id) {
    this.viewer = new Viewer(document.getElementById(id))
    return this.viewer;
  }
  static updateImg(){
    this.viewer.destroy();
  }

}

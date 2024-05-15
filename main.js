function findUniq(arr) {
    let keyArr = Array.from(new Set(arr))
    let firstFilter = arr.slice(0, 3).filter((x) => x == keyArr[0]).length
    let secondFilter = arr.slice(0, 3).filter((x) => x == keyArr[1]).length
    
    return firstFilter > secondFilter ? keyArr[1] : keyArr[0]
    
    /*
    let arrFirst = arr[0]
    let arrFilter = arr.filter((x) => x != arr[0])
    
    return arrFilter.length > 1 ? arr[0] : arrFilter[0]
    */
  }
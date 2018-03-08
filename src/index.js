module.exports = function longestConsecutiveLength(array) {
    let count=1;
    let max=1;
    function NoRepeat(currentValue, index, arr){
       let a= arr.indexOf(currentValue);
       let b = arr.lastIndexOf(currentValue);
        array.splice(a+1, b-a);
        if(currentValue+1===arr[index+1]){
            count++;
        }else{
            if(count>max){
                max=count;
            }
            count=1;
        }
    }
    
    if(array.length===0){
        return 0;
    }
    array.sort((a, b)=>a-b);
    //console.log(array);
    array.map(NoRepeat);
    return max;
}

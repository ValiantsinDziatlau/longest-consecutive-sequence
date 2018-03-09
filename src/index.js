module.exports = function longestConsecutiveLength(array) {
    let obj={}, count=1, max=1;
    let length=array.length;
    if(!length){
        return 0;
    }
    for(let i=0; i<length; i++){		
		if(!obj[array[i]]){      
      obj[array[i]] = true;
   }        
    }
    for(var index in obj){
        if(obj[index-0+1]){
            count++;
        } else{
            if(count>max){
                max=count;                
            }
			count=1;
        }
    }    
    return max;
    
}

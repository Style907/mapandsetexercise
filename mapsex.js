// 1. 1, 2, 3, 4
// 2. ref
// 3. 0:{array(3)=>true}, 1:{array(3)=>false}

const hasDuplicate = (arr) => {const set = new Set(arr); const newArr = Array.from(set);return arr.length > newArr.length ? true: false}

function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }
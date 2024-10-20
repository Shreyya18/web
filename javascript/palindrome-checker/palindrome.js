
const button=document.getElementById("check-btn");
const palindromeResult=document.getElementById("result");

const cleanString=(input)=>{
  const regex=/[^a-zA-Z0-9]/g;
  return input.replace(regex,'').toLowerCase();
}
const reverse=(cleanedInput)=>{
  return cleanedInput.split('').reverse().join('');
}
const checkPalindrome=()=> {
  const input=document.getElementById("text-input").value;
  
    let cleanedInput= cleanString(input);
  if(input===''){
    alert("Please input a value");
  }
  else if(cleanedInput.length===1){
    palindromeResult.innerText=`${input} is a palindrome`;
  }
  else{
    let reversedString=reverse(cleanedInput);
    if(cleanedInput===reversedString){
      palindromeResult.innerText=`${input} is a palindrome`;
    }
    else{
      palindromeResult.innerText=`${input} is not a palindrome`;
    }
  }
}
button.addEventListener('click', checkPalindrome);

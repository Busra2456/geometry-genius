function calculateParallelogramArea(){
      const base = getInputValueById('Parallelogram-base');
      // console.log('base Value',base);

      const height = getInputValueById('Parallelogram-height');
      // console.log('height Value',height);

      const area = base * height;
      console.log('area of the Parallelogram is',area);


      setInputTextById('Parallelogram-Area', area);
     
}

function getInputValueById(inputFieldId){
      const inputField =document.getElementById(inputFieldId);
      const inputValueText = inputField.value;
      const inputValue = parseFloat(inputValueText);
      // console.log(inputValue);
      return inputValue; 
}

function setInputTextById(elementId,area){
      const element = document.getElementById(elementId);
      element.innerText = area ;

}
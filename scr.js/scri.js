function calculataTriangleArea(){

//      get Triangle base value
     const trianglBaceInput = document.getElementById('Triangle-bace');
     const trianglBaceText = trianglBaceInput.value;
     const base = parseFloat(trianglBaceText)
     console.log(base);

//      get Triangle height value

const triangleHeightInput = document.getElementById('Triangle-height');
const triangleHeightText = triangleHeightInput.value;
const height = parseFloat (triangleHeightText)
console.log(height);

// calculata Triangle Area
const area = 0.5 * base * height;
console.log(area);

//  display Triangle area
const triangleAreaSpen = document.getElementById ('Triangle-area');
triangleAreaSpen.innerText = area;

}




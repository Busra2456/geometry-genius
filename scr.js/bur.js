// Rectangle area

function calculataRectangleArea(){
      // Rectangle width value
      
      const rectangleWidthInput = document.getElementById('Rectangle-width');
      const rectangleWidthText = rectangleWidthInput.value;
      const width = parseFloat (rectangleWidthText)
      console.log(width);

      // get Triangle length value

      const rectangleLengthInput = document.getElementById('Rectangle-length');
      const rectangleLengthText = rectangleLengthInput.value;
      const length = parseFloat(rectangleLengthText)
      console.log(length);

      // get Rectangle Area

      const area = width * length;
      console.log('area of the rectangle',area );

      //  display Rectangle area

      const rectangleAreaSpen = document.getElementById('Rectangle-Area');
      rectangleAreaSpen.innerText = area;


      
      }
      
 
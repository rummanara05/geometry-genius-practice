function calculateTriangleArea() {
    // get triangle base value
   const triangleBase=document.getElementById('triangle-base');
   const triangleBaseText= triangleBase.value ;
   const base= parseFloat(triangleBaseText);
   console.log(base);
   

   // get triangle height value
   const triangleHeight=document.getElementById('triangle-height');
   const triangleHeightText= triangleHeight.value ;
   const height= parseFloat(triangleHeightText);
   console.log(height);

    // area calculation
    
    const area= 0.5 * base * height ;
    console.log(area);

    // area field outcome
     
    const areaSpan=document.getElementById('area-outcome');
    areaSpan.innerText=area;

}

    // Rectangle Area Calculation

//    get rectangle width value
function calculateRectangleArea() {
    const rectangleWidth=document.getElementById('rectangle-width');
   const rectangleWidthText= rectangleWidth.value ;
   const width= parseFloat(rectangleWidthText);
   console.log(width);

//    get rectangle length value
     
const rectangleLength=document.getElementById('rectangle-length');
const rectangleLengthText= rectangleLength.value ;
const length= parseFloat(rectangleLengthText);
console.log(length);

// get Rectangle Area

const area= width * length ;
    console.log(area);

     //Rectangle area field outcome
     
     const rectangleAreaSpan=document.getElementById('rectangleArea');
     rectangleAreaSpan.innerText=area;
 
}

// parallelogram 
 function calculateParallelogramArea() {
    const base=inputField('parallelogram-base');
    console.log(base);
    const height=inputField('parallelogram-height');
    console.log(height);
    const area= base * height ;
    console.log(area);
 }

// reusable function

function inputField(inputId) {
    const inputField=document.getElementById(inputId);
   const inputFieldText= inputField.value ;
   const input= parseFloat(inputFieldText);
   return input;
}
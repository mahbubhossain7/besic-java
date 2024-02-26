//Without reduce function:

// function calculateTriangleArea(){
//     //get triangle base:
//     const baseField = document.getElementById('triangle-base');
//     const baseValueText = baseField.value;
//     const base = parseFloat(baseValueText);

//     //get triangle height:
//     const heightField = document.getElementById('triangle-height');
//     const heightValueText = heightField.value;
//     const height = parseFloat(heightValueText);

//      //calculate total area:
//     const area = 0.5 * base * height;
//     console.log(area);

//     //show triangle area result:
//     const areaSpan = document.getElementById('triangle-area').innerText = area
// }


//Without reduce function:
// function calculateRectangleArea(){
//     //get rectangle width area:
//     const rectangleWidthField = document.getElementById('rectangle-width').value;
//     const rectangleWidthValue = parseFloat(rectangleWidthField);

//     //get rectangle length:
//     const rectangleLengthField = document.getElementById('rectangle-length').value;
//     const rectangleLengthValue = parseFloat(rectangleLengthField);
    
//     //calculate rectangle:
//     const totalRectangleValue = rectangleWidthValue * rectangleLengthValue;

//     // Rectangle area result:
//     const rectangleResult = document.getElementById('rectangle-area').innerText = totalRectangleValue;
// }


//with reduce function:
function calculateTriangleArea(){
    const triangleBase = getInputValue('triangle-base');
    const triangleHeight = getInputValue('triangle-height');
    const triangleArea = .5 * triangleBase * triangleHeight;
     totalShapeArea('triangle-area' , triangleArea);
    addToCalculatingEntry('triangle' , triangleArea);
}

//with reduce function:
function calculaterectangleArea(){
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleLength = getInputValue('rectangle-length');
    const rectangleArea = rectangleWidth * rectangleLength;
     totalShapeArea('rectangle-area' , rectangleArea);
    addToCalculatingEntry('rectangle' , rectangleArea);
}


function calculateParalellogramArea(){
    const paralelloBase = getInputValue('paralellogram-base');
    const paralelloHeight = getInputValue('parallelogram-height');
    const paralellogramArea = paralelloBase * paralelloHeight;
     totalShapeArea('parallelogram-area' , paralellogramArea);
    addToCalculatingEntry('paralellogram' , paralellogramArea);
}

function calculateRhombusArea(){
    const rhombusBase = getInputValue('rhombus-base');
    const rhombusHeight = getInputValue('rhombus-height');
    const rhombusArea = rhombusBase * rhombusHeight;
     totalShapeArea('rhombus-area' , rhombusArea);
    addToCalculatingEntry('rhombus' , rhombusArea);
}
function calculatePentagonArea(){
    const pentagonSite = getInputValue('pentagon-site');
    const pentagonLength = getInputValue('pentagon-length');
    if(isNaN(pentagonSite) || isNaN(pentagonLength)){
         alert('please write correct number');
         return
    }
    const pentagonArea = 5/2 * pentagonSite * pentagonLength;  // 5/2 x s x a
    // add to calculation entry:
    totalShapeArea('pentagon-area' , pentagonArea);
    addToCalculatingEntry('pentagon' , pentagonArea);

}

function calculateEllipseArea(){
    const ellipseBase = getInputValue('ellipse-base');
    const ellipseHeight = getInputValue('ellipse-height');
     if(isNaN(ellipseBase) || isNaN(ellipseHeight)){
         alert('Please enter a valid number');
         return
     }
     const ellipseArea = 3.1614 * ellipseBase * ellipseHeight;
     const ellipseAreaValue = ellipseArea.toFixed(2);
      totalShapeArea('ellipse-area' , ellipseAreaValue);
    addToCalculatingEntry('ellipse' , ellipseArea);
}

// reusable function:reduce duplicate code:
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
     return value;
}
 //reusable set span, p, div, etc text:
 function totalShapeArea(areaId, areaValue){
     const shapeArea = document.getElementById(areaId);
     shapeArea.innerText = areaValue;
 }

//add to calculation entry:
// get the element where you want to add to the dynamic html:
// set innerHTML. it could be dynamic template string:
// append the created element as a child of the parent:
function addToCalculatingEntry(areaType, area){
     console.log(areaType + ' ' + area);
     const calculationEntry = document.getElementById('calculation-entry');

     const count = calculationEntry.childElementCount;

     const p = document.createElement('p');
     p.classList.add('my-4');
     p.innerHTML = `${count + 1} . ${areaType} ${area} cm <sup>2</sup> <button class='bg-rose-500 font-medium text-white p-2 my-2 rounded'>Convert</button>`;
     calculationEntry.appendChild(p);
}


 //Data validation:
 //1. set the proper type of the input field. (number, data, email, text, date):
 //2. check type:
 //3. NaN checker:
//  if(isNaN(ellipseBase) || isNaN(ellipseHeight)){
//     alert('Please enter a valid number');
//     return
// }


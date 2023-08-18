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
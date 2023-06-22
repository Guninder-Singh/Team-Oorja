let KnowMore= document.getElementById("know-more-1");
let Details= document.getElementById("details");
let Holder=document.getElementById("holder");
let Car_1 =document.getElementById("car-1");


function show() {
    
    Holder.style.filter="blur(10px)";
    Car_1.style.filter="blur(10px)";
    Car_1.style.filter="-webkit-filter: blur(8px)";
    Details.style.display="flex";
    

}
function hide() {
    Details.style.display="none";
}

KnowMore.addEventListener('click',show);
  

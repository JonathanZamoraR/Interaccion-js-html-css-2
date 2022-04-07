/* alert(); */

let taReview = document.getElementById('taReview');
let radiousLT = document.getElementById('radiousLT');
let inputLT = document.getElementById('inputLT');
let radiousRT = document.getElementById('radiousRT');
let inputRT = document.getElementById('inputRT');
let radiousLB = document.getElementById('radiousLB');
let inputLB = document.getElementById('inputLB');
let radiousRB = document.getElementById('radiousRB');
let inputRB = document.getElementById('inputRB');
let allRadious = document.getElementById('allRadious');

let widthBorder = document.getElementById('widthBorder');
let border1 = document.getElementById('border1');

let borderSolid = document.getElementById('borderSolid');
let borderDotted = document.getElementById('borderDotted');
let borderDashed = document.getElementById('borderDashed');
let borderDouble = document.getElementById('borderDouble');
let borderGroove = document.getElementById('borderGroove');
let borderRidge = document.getElementById('borderRidge');
let borderInset = document.getElementById('borderInset');
let borderOutset = document.getElementById('borderOutset');
let borderHidden = document.getElementById('borderHidden');
let borderNone = document.getElementById('borderNone');

let borderColor = document.getElementById('borderColor');
let alphaBorder = document.getElementById('alphaBorder');
let opacitybuttom = document.getElementById('opacitybuttom');

let borderAll = document.getElementById('borderAll');
let borderTop = document.getElementById('borderTop');
let borderRight = document.getElementById('borderRight');
let borderBottom = document.getElementById('borderBottom');
let borderLeft = document.getElementById('borderLeft');


radiousLT.oninput = function(){
    inputLT.value = radiousLT.value;

    if(allRadious.checked){
        taReview.style.borderRadius = radiousLT.value + 'px'; 
        inputLB.value = radiousLT.value;
        inputRB.value = radiousLT.value;
        inputRT.value = radiousLT.value;

        radiousLB.value = radiousLT.value;
        radiousRB.value = radiousLT.value;
        radiousRT.value = radiousLT.value;
    }
    else{
        taReview.style.borderTopLeftRadius = radiousLT.value + 'px';
    }
};

allRadious.oninput = function (e){
    if(!allRadious.checked){
        taReview.style.borderRadius = "0px 0px 0px";
        inputLT.value = 0;
        inputLB.value = 0;
        inputRB.value = 0;
        inputRT.value = 0; 

        radiousLT.value = inputLT.value;
        radiousLB.value = inputLB.value;
        radiousRB.value = inputRB.value;
        radiousRT.value = inputRT.value;
    }
};


radiousRT.oninput = function(){
    inputRT.value = radiousRT.value;

        taReview.style.borderTopRightRadius = radiousRT.value + 'px';
};

radiousLB.oninput = function(){
    inputLB.value = radiousLB.value;

        taReview.style.borderBottomLeftRadius = radiousLB.value + 'px';

};

radiousRB.oninput = function(){
    inputRB.value = radiousRB.value;

        taReview.style.borderBottomRightRadius = radiousRB.value + 'px';
};

var border

widthBorder.oninput = function(e){
    taReview.style.borderWidth = widthBorder.value + 'px';
    border = widthBorder.value;
};

border1.onclick = function(e){
    taReview.style.borderWidth = '1px';
    widthBorder.value = 1;
}



borderSolid.onclick = function(e){
    taReview.style.borderStyle = 'solid';
}
borderDotted.onclick = function(e){
    taReview.style.borderStyle = 'dotted';
}
borderDashed.onclick = function(e){
    taReview.style.borderStyle = 'dashed';
}
borderDouble.onclick = function(e){
    taReview.style.borderStyle = 'double';
}
borderGroove.onclick = function(e){
    taReview.style.borderStyle = 'groove';
}
borderRidge.onclick = function(e){
    taReview.style.borderStyle = 'ridge';
}
borderInset.onclick = function(e){
    taReview.style.borderStyle = 'inset';
}
borderOutset.onclick = function(e){
    taReview.style.borderStyle = 'outset';
}
borderHidden.onclick = function(e){
    taReview.style.borderStyle = 'hidden';
}
borderNone.onclick = function(e){
    taReview.style.borderStyle = 'none';
}


borderColor.oninput = function(e){
    taReview.style.borderColor = borderColor.value;
}
alphaBorder.oninput = function(e){
    taReview.style.opacity = alphaBorder.value/100;
}
opacitybuttom.onclick = function(e){
    taReview.style.opacity = alphaBorder.value = 1;
    alphaBorder.value = 100;
}


borderAll.onclick = function(e){
    taReview.style.borderWidth = widthBorder.value + "px";
}
borderTop.onclick = function(e){
    taReview.style.borderWidth = widthBorder.value + "px 0px 0px 0px";
 };
 borderRight.onclick = function(e){
    taReview.style.borderWidth = "0px " +widthBorder.value + "px 0px 0px";
 };
 borderBottom.onclick = function(e){
    taReview.style.borderWidth = "0px 0px " +widthBorder.value+ "px 0px";
 };
 borderLeft.onclick = function(e){
    taReview.style.borderWidth = "0px 0px 0px " +widthBorder.value+ "px";
 };
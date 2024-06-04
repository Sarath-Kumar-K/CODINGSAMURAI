// if(document.getElementById('input').value === ''){
//     const inputStyle = document.getElementById('input');
//     const outputStyle = document.getElementById('output');

//     outputStyle.style.display = 'none';
// }

const operators = ['/','*','-','+','%'];
const inputStyle = document.getElementById('input').style;
const outputStyle = document.getElementById('output').style;
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

const editingValue = (value) =>{
    if(value){
        inputStyle.fontSize = '40px';
        inputStyle.color = 'black';
        outputStyle.fontSize = '20px';
        outputStyle.color = 'gray';
        outputStyle.display = 'block';
        return;
    }else{
        inputStyle.fontSize = '20px';
        inputStyle.color = 'gray';
        outputStyle.fontSize = '40px';
        outputStyle.color = 'black';
        return;
    }
}
const clearDisplay = () =>{
    
    inputElement.value='';
    outputElement.value='';
    editingValue(true);
    outputStyle.display = 'none';
}

const deleteLast = () => {
    editingValue(true);
    let currentValue = input.value;
    inputElement.value = currentValue.slice(0,-1);
}

const appendToDisplay = (value) =>{
    editingValue(true);
    const currentValue = inputElement.value;
    if(operators.includes(value) && operators.includes(currentValue.charAt(currentValue.length-1))){
        return;
    }
    inputElement.value = currentValue +  value;

    do{
        outputElement.value = `= `;
    } while(false);

    try{
        if(!operators.includes(value) ){
            const result = eval(inputElement.value);
            outputElement.value += result;
        }
    }catch(error){
        outputElement.value = error.message;
    }
}

const calculateResult = () => {
   editingValue(false);
}
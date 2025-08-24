const form = document.querySelector('form')
//the following code will run as soon as the script is loaded and hence the variable will get empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector('#result')
    const category = document.querySelector('#category')

    //reset Ui
    result.innerHTML=""
    category.innerHTML=""

    

    if (height === "" || isNaN(height) || height < 0) {
      result.innerHTML = `${height} is not an acceptable value`;
    } else if (weight === "" || isNaN(weight) || weight < 0) {
      result.innerHTML = `${weight} is not an acceptable value`;
    } else {
        let value = weight / ((height * height) / 10000);
        result.innerHTML = value.toFixed(2)

        if(value < 18.6){
            category.innerHTML= 'Under Weight'
        } else if (value >= 18.6 && value <24.9){
          category.innerHTML = "Normal Range";
        } else {
            category.innerHTML = "Over Weight";
        }
    }
})


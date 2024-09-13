const buttonSortear=document.querySelector('button')


function inputNumero(){
   const inputMin=Math.ceil(document.querySelector('.input-min').value )
   const inputMax=Math.floor(document.querySelector('.input-max').value )

   const result= Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

   const inputResult=document.querySelector("#input-result")

   inputResult.value=result
}

buttonSortear.addEventListener("click",inputNumero)



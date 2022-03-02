const prevBtns = document.querySelectorAll('.btn-previous')
const nextBtns = document.querySelectorAll('.btn-next')
const submitBtn = document.querySelector('.btn-submit')
const progress = document.getElementById('progress')
const progressSteps = document.querySelectorAll('.progress-step')
const formSteps = document.querySelectorAll('.form-step')

let stepFormNum = 0

nextBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        stepFormNum++;
        updateFormStep();
        updateProgressBar()
    })
})

prevBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        stepFormNum--;
        updateFormStep();
        updateProgressBar()
    })
})

submitBtn.addEventListener('click',()=>{
    stepFormNum++;
    updateFormStep();
    updateProgressBar()
    // Submit data to server

    //  Wait fr data from server
    
})

function updateFormStep(){
    formSteps.forEach((formStep)=>{
        if(formStep.classList.contains('form-active'))
            formStep.classList.remove('form-active') 
    })
    formSteps[stepFormNum].classList.add('form-active')
}

function updateProgressBar(){
    progressSteps.forEach((progressStep,index)=>{
        if(index < stepFormNum+1)
            progressStep.classList.add('progress-step-active')
        else
            progressStep.classList.remove('progress-step-active')
    })

    const progressActive = document.querySelectorAll('.progress-step-active')
    progress.style.width = (((progressActive.length-1)/(progressSteps.length-1))*100) +"%"

}

function updateTextInput(val) {
    document.getElementById('rfsize').value=val; 
  }
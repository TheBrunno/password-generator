const submitButton = document.querySelector('#submit-button')

function getAllValuesOfInputs(){
  let passwordLength = document.querySelector('#password-length').value

  if(passwordLength == '' || passwordLength <= 0 || isNaN(passwordLength)){
    alert('Please enter valid values')
    document.querySelector('#password-length').value = ''
    return false
  }
  else if(passwordLength > 100000){
    alert('Please enter values ​​between 0 and 100000')
    document.querySelector('#password-length').value = ''
    return false
  }
  else{
    const checkBoxs = document.querySelectorAll('.check-boxs')
    let checkboxInfo = []

    for(checkbox of checkBoxs){ checkboxInfo.push(checkbox.checked) }

    return {
      'checkboxInfo': checkboxInfo,
      'passwordLength': passwordLength
    }
  }
}

function generatePassword(){
  let valuesOfInputs = getAllValuesOfInputs()
  if(valuesOfInputs == false){ return }
  else{
    const instructionCharacters = [uppercaseLetters, lowercaseLetters, specialCharacters, numbers]
    let allCharactersChosen = ''
    let password = ''

    for(info in valuesOfInputs['checkboxInfo']){
      if(valuesOfInputs['checkboxInfo'][info]){
        for(char of instructionCharacters[info]){ allCharactersChosen += char }
      }
    }

    for(i=0; i < valuesOfInputs['passwordLength']; i++){
      password += String(allCharactersChosen[Math.round(Math.random() * (allCharactersChosen.length-1))])
    }
    alert(password)
  }
}

submitButton.addEventListener('click', generatePassword)
document.addEventListener('keydown', function(e){
  if(e.key == 'Enter'){ generatePassword() }
}, false)

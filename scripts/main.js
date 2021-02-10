const pswenable = document.getElementById('pswenable')
const pswenableButton = document.getElementById('pswenableButton')


const revealPsw = (pswInput) => {
  return () => {
    if (pswInput.type === 'password') {
      pswInput.type = 'text'
    } else {
      pswInput.type = 'password'
    }
  }
}

pswenableButton.onclick = revealPsw(pswenable)

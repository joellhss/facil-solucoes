function search() {
  let pesquisa = document.getElementById("google-input")
  window.open (`https://www.google.com/search?q=${pesquisa.value}`)
  pesquisa.value = ""
}

$('#frm-msg').on('submit', function(){
  return false;
});

$('#google-input').on('keydown', function(event) {
  if(event.keyCode === 13) {
      let pesquisa = document.getElementById("google-input")
      window.open (`https://www.google.com/search?q=${pesquisa.value}`)
      pesquisa.value = ""
  }
});
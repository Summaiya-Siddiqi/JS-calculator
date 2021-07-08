function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
  }

  function clearresult(){
      var input = document.getElementById("displayResult");
      input.value="";
  }

  function backspace(){
    var input = document.getElementById("displayResult");
    input.value= input.value.slice(0,-1);
  }


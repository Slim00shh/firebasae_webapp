function treeProg(selectedOject) {
  var nNode=document.getElementById(selectedOject.parentElement.id).nextElementSibling;
  if(nNode == null){
  }else{
    nNode.style.display="inline-block";
  }
}

function menudiv(eleMent){
  eleMent.classList.toggle("change");
  var el=document.getElementById("dropdown");
  if(el.style.display == 'block'){
    el.style.display="none";
  }else{
    el.style.display="block";
  }
}

function fetchstring(){
  $("#")
  return ;
}

  /*Secret API */
  /* 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 */

function OpenAifetchApi(){

  console.log("Contancting openai...");
  var querie= fetchstring();
  var url="https://api.openai.com/v1/chat/completions";
  var bearer = 'Bearer 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' ;
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model":"gpt-3.5-turbo",
            "messages": [{"role": "system", "content": ""},
              {"role": "user", "content": querie}],
            "temperature": 0,
            "max_tokens": 1024
        })


    }).then(response => {
        
        return response.json()
       
    }).then(data=>{
        console.log(data)
        console.log(typeof data)
        console.log(Object.keys(data))
        console.log(data['choices'][0].text)
        
    })
        .catch(error => {
            console.log('Something bad happened ' + error)
        });

}
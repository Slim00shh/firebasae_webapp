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
  $("#type-Selector").val();
  $("#state-Selector").val();
  $("#county-Selector").val();
  $("#county-Selector").val();
  return ;
}


function OpenAifetchApi(){

  console.log("Contancting openai...");
  var querie= fetchstring();
  var url="https://api.openai.com/v1/chat/completions";
  var bearer = 'Bearer ${API KEY}';
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model":"gpt-3.5-turbo",
            "messages": [{"role": "system", 
              "content": "Given the following SQL tables, your job is to write queries given a user’s request in spanish.\n\nCREATE TABLE estados (\n  IDestados int NOT NULL,  Nombre varchar NOT NULL,\n  Descripción varchar(30) NOT NULL,\nPRIMARY KEY (IDestados)\n);\n\nCREATE TABLE lugares turisticos (\n  IDlugares_turisticos int NOT NULL,\n  Horario_cierre varchar NOT NULL,\n  Clima varchar(20) NOT NULL,\n  Precios varchar(20) NOT NULL,\n  Tipo_ambiente varchar(30) NOT NULL,\n  Valoracion_lugar varchar(30) NOT NULL,\n  Lugares_populares varchar(30) NOT NULL,\nPRIMARY KEY(IDlugares_turisticos)\n);\n\nCREATE TABLE `municipios` (\n  `IDmunicipios` int(11) NOT NULL,\n  `Nombre` varchar(30) NOT NULL,\n  `Clima` varchar(30) NOT NULL\n);"},
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
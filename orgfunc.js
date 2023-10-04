function treeProg(selectedOject) {
  //here goes the magic that makes every div appear super cool
  var nNode=document.getElementById(selectedOject.parentElement.id).nextElementSibling;
  var staeSel=document.getElementById('state-Selector');
  if(nNode == null){
    console.log("youve finished the tree");
  }else{
    nNode.style.display="inline-block";
    console.log('Appeard: '+nNode.id);
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

function stringQuerie(){
  console.log('now what');
}
var c=0;
function countWords(node) {
    if (node.nodeName === "#text") {
    var nodeTextArray = node.textContent.split(' ');
      var flag = 0;
      for(let i=0;i<nodeTextArray.length;i++){
        if(nodeTextArray[i] == ""){
          flag = 1;
          break;
        }
      }
      if(flag == 0){
        c+=nodeTextArray.length;
      }
    }
    for (const childNode of node.childNodes) {
      countWords(childNode);
    }
  }
countWords(document.body);
alert("Number of words are: "+c);
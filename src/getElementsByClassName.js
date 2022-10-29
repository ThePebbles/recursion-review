var getElementsByClassName = function(className) {
  var result = [];
  var searchNode = function(currentNode) {
    if (currentNode.classList && currentNode.classList.contains(className)) {
      result.push(currentNode);
    }
    if (currentNode.childNodes) {
      for (var i = 0; i < currentNode.childNodes.length; i++) {
        if (currentNode.childNodes[i].childNodes) {
          searchNode(currentNode.childNodes[i]);
        }
      }
    }
  };
  searchNode(document.body);
  return result;
};

var getElementsByClassName = function(className, node) {
  var result = [];
  var parent = node || document.body;
  if (parent.classList && parent.classList.contains(className)) {
    result = result.concat(parent);
  }
  if (parent.childNodes) {
    for (var i = 0; i < parent.childNodes.length; i++) {
      if (parent.childNodes[i].childNodes) {
        result = result.concat(getElementsByClassName(className, parent.childNodes[i]));
      }
    }
  }
  return result;

};

// var getElementsByClassName = function(className) {
//   var result = [];
//   var searchNode = function(currentNode) {
//     if (currentNode.classList && currentNode.classList.contains(className)) {
//       result.push(currentNode);
//     }
//     if (currentNode.childNodes) {
//       for (var i = 0; i < currentNode.childNodes.length; i++) {
//         if (currentNode.childNodes[i].childNodes) {
//           searchNode(currentNode.childNodes[i]);
//         }
//       }
//     }
//   };
//   searchNode(document.body);
//   return result;
// };

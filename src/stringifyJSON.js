var stringifyJSON = function(obj) {
  var result = '';

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    result += obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'object' || typeof obj[i] === 'string') {
        result += stringifyJSON(obj[i]);
      } else if (typeof obj[i] === 'function' || obj[i] === null || obj[i] === undefined) {
        result += 'null';
      } else {
        result += obj[i];
      }
      if (i < obj.length - 1) {
        result += ',';
      }
    }
    result += ']';
  } else if (obj && typeof obj === 'object') {
    result += '{';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      } else {
        result += stringifyJSON(key) + ':';
      }
      if (typeof obj[key] === 'object' || typeof obj[key] === 'string') {
        result += stringifyJSON(obj[key]) + ',';
      } else {
        result += obj[key] + ',';
      }
    }
    if (result.length === 1) {
      result += '}';
    } else {
      result = result.slice(0, -1);
      result += '}';
    }
  }
  return result;
};








// var stringifyJSON = function(obj) {
//   var result = '';

//   if (typeof obj === 'number' || typeof obj === 'boolean') {
//     result += obj;
//   }
//   if (typeof obj === 'string') {
//     return '"' + obj + '"';
//   }
//   if (obj === null) {
//     return 'null';
//   }

//   if (Array.isArray(obj)) {
//     result += '[';
//     for (var i = 0; i < obj.length; i++) {
//       if (typeof obj[i] === 'object' || typeof obj[i] === 'string') {
//         result += stringifyJSON(obj[i]);
//       } else if (typeof obj[i] === 'function' || obj[i] === null || obj[i] === undefined) {
//         result += 'null';
//       } else {
//         result += obj[i];
//       }
//       if (i < obj.length - 1) {
//         result += ',';
//       }
//     }
//     result += ']';
//   } else if (typeof obj === 'object') {
//     result += '{';
//     for (var key in obj) {
//       if (typeof obj[key] === 'function' || obj[key] === undefined) {
//         continue;
//       } else {
//         result += stringifyJSON(key) + ':';
//       }
//       if (typeof obj[key] === 'object' || typeof obj[key] === 'string') {
//         result += stringifyJSON(obj[key]) + ',';
//       } else {
//         result += obj[key] + ',';
//       }
//     }
//     if (result.length === 1) {
//       result += '}';
//     } else {
//       result = result.slice(0, -1);
//       result += '}';
//     }
//   }
//   return result;
// };
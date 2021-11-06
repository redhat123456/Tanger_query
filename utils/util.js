
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
 
  var xinqi = date.getDay()

  console.log(xinqi)
  var xinqi2
  switch( xinqi ){
    case 1 : 
    xinqi2 = '星期一';
    break;
    case 2 : 
    xinqi2 = '星期二';
    break;
    case 3 : 
    xinqi2 = '星期三';
    break;
    case 4 :
    xinqi2 = '星期四';
    break;
    case 5 : 
    xinqi2 = '星期五';
    break;
    case 6 : 
    xinqi2 = '星期六';
    break;
    case 0 : 
    xinqi2 = '星期天';
    default:
      break;
  }

  console.log(xinqi2)


 
  return [year, month, day].map(formatNumber).join('/') + ' ' + xinqi2;
}
 
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
 
module.exports = {
  formatTime: formatTime,
}

var startTime = new Date().getTime();
var count = 0;
setInterval(function() { // 代码执行次数越多到后面延迟会越来越严重, 指定的是“开始执行”之间的间隔，并不考虑每次任务执行本身所消耗的事件
  var i = 0;
  while(i++ < 1000) {

  }
}, 0);

function fiexed() {
  count++;
  var offset = new Date().getTime() - (startTime + count*1000);
  var nextTime = 1000 - offset;
  if (nextTime < 0) nextTime = 0;
  setTimeout(fiexed, nextTime);
  console.log(new Date().getTime() - (startTime + count * 1000));
}

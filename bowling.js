var gameScore = [[]]
for (var i=0; i<=10; i++) {
}

function calculateFrame (a, b)
  if a + b < 10 {
    var frameScore = a + b
    frameScore.push(gameScore)
  }
  else if a == 10 {
    var frameScore = 10
    frameScore.push(gameScore)

  }
  else if a + b == 10{
    var frameScore = 10
    frameScore.push(gameScore)
  }






function calcScore(total, num) {
  return total + num;
}

var totalScore = gameScore.reduce(calcScore)
return totalScore


let timer = 0
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 20) {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.playUntilDone()
    }
    if (timer == 30) {
        basic.showIcon(IconNames.Asleep)
        soundExpression.yawn.playUntilDone()
    }
    if (timer == 40) {
        soundExpression.mysterious.playUntilDone()
        music.setBuiltInSpeakerEnabled(false)
        while (true) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
basic.forever(function () {
	
})

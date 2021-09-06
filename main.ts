input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PlayerAWins += 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Aantal rondes:" + (PlayerAWins + (PlayerBWins + PlayersTie)))
    basic.showString("A wins:" + PlayerAWins)
    basic.showString("B wins:" + PlayerBWins)
    basic.showString("Ties:" + PlayersTie)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    PlayersTie += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    PlayerBWins += 1
})
let PlayersTie = 0
let PlayerBWins = 0
let PlayerAWins = 0
PlayerAWins = 0
PlayerBWins = 0
PlayersTie = 0

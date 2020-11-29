let num1 = 0
let num2 = 0
input.onButtonPressed(Button.A, function () {
    num1 = randint(1, 9)
    num2 = randint(1, 9)
    basic.showNumber(num1)
    basic.pause(200)
    basic.showString("x")
    basic.showNumber(num2)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(num1 * num2)
})

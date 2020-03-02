from turtle import *
color('red', 'yellow')
x = 0
sides = 8
while x<sides:
    forward(100)
    left(360/sides)
    x = x + 1
done()

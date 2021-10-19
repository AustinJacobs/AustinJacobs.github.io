from shape import *

circle = Circle(10)

triangle = Triangle(10, 10)

square = Square(10)

rectangle = Rectangle(10, 10)

shapes = [circle, triangle, square, rectangle]

combined_area = 0
for shape in shapes:
    combined_area += shape.get_area()

print(f'Combined area is {combined_area}')
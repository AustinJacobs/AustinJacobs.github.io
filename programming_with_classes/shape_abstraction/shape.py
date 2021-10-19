import math

class Shape:
    def get_area(self):
        return 0

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def get_area(self):
        area_of_square = self.side ** 2
        print(f"Area of square: {area_of_square}")
        print()
        return area_of_square

class Rectangle(Shape):
    def __init__(self, height, width):
        self.height = height
        self.width = width

    def get_area(self):
        area_of_rectangle =  self.height * self.width
        print(f"Area of rectangle: {area_of_rectangle}")
        print()
        return area_of_rectangle

class Triangle(Shape):
    def __init__(self, height, base):
        self.height = height
        self.base = base

    def get_area(self):
        area_of_triangle =  self.height * self.base / 2
        print(f"Area of triangle: {area_of_triangle}")
        print()
        return area_of_triangle

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def get_area(self):
        area_of_circle =  math.pi * self.radius ** 2
        print(f"Area of circle: {area_of_circle}")
        print()
        return area_of_circle

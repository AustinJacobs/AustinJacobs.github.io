from objects.blaster import Blaster

class Walker:

    def __init__(self):
        self.blaster = Blaster()

    def target(self, location):
        self.blaster.shoot(location)

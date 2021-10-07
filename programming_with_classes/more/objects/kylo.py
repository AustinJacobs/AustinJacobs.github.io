from objects.luke import Location
from objects.walkers import Walker

class Kylo:

    def __init__(self):
        self.walkers = [Walker(), Walker(), Walker(), Walker()]

    def more(self):
        print("MOAR")
        location_of_luke = Location()
        for x in self.walkers:
            x.target(location_of_luke)
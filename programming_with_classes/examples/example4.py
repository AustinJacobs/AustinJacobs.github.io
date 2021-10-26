class Jedi:
    def alignment(self):
        return 'lawful good'

class Sith:
    def alignment(self):
        return 'chaotic evil'

class Anakin(Sith, Jedi):
    def alignment(self):
        return "Anakin is " + super().alignment()

class Luke(Jedi, Sith):
    def alignment(self):
        return "Luke is " + super().alignment()

class Yoda(Jedi):
    def alignment(self):
        return "Yoda is " + super().alignment()

class JarJar(Sith):
    def alignment(self):
        return "JarJar is " + super().alignment()

anakin = Anakin()
luke = Luke()
jarjar = JarJar()
yoda = Yoda()

print(anakin.alignment())
print(luke.alignment())
print(jarjar.alignment())
print(yoda.alignment())

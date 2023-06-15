 # **Wildlife Preservation:** You're a wildlife conservationist working on a
#program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to

# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.
#  */
# /**
#  * Input=> diet: STring
#  * , lifespn,:Int
#  * output => trcking of species migration
#  * process => crete  class for species 
#  *           attributes: diet, span 
#  *            create a method: Eating, about animal
#  *            
#  *            CReate subclasses that inherrit from main class
#  *            possible method in subclass => migration Pattern
#  *            Include the unique attributes
#  *            invoke class
#  */


# 
class Species():
    def __init__(self, name, diet, life_span):
        self.name = name
        self.diet = diet
        self.life_span = life_span
    def about_animals(self):
        return f"The {self.name} is on {self.diet} diet and on average lives for {self.life_span} years "


class Prey(Species):
    def __init__(self, name, diet, life_span, current_location, predator_location):
        super().__init__(name, diet, life_span)
        self.current_location = current_location
        self.predator_location= predator_location
    def about_animals(self):
        return super().about_animals()
    def migration_patterns(self,new_location):
        if {self.predator_location} == new_location:
            return f" {self.name} migrates to {new_location}"
        else:
            return f"{self.name} migrates to {new_location}"
class Predator(Species):
    def __init__(self, name, diet, life_span):
        super().__init__(name, diet, life_span) 
    def about_animals(self):
        return super().about_animals()
one = Species(["Gazzele","antellope"], "Herbivore",20,)
animal2=Prey(["Gazzele","antellope"],"Herbivore",20,"Mara","Near")
animal3 = Predator(["Gazzele","antellope"], "Canivores", 30)
print(animal2.migration_patterns("Mara"))

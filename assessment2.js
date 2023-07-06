//**Ancestral Stories:** In many African cultures, the art of storytelling is passed
//down from generation to generation. Imagine you're creating an application that
//records these oral stories and translates them into different languages. The
//stories vary by length, moral lessons, and the age group they are intended for.
//Think about how you would model `Story`, `StoryTeller`, and `Translator`
//objects, and how inheritance might come into play if there are different types of
//stories or storytellers.

//*********** Pseudocode
//an app for African stories
//translates them into different languages
//length, moral lessons, and the age group

/**
 * Story:
 * input => storyName, narration, length, moralLesson,Language
 * 
 * StoryTeller:
 * input => 
 * 
 */
class Story{
    constructor(storyName,  length,language, moralLesson, storyNarration,ageGroup){
    this.storyName=storyName
    this.length=length
    this.moralLesson=moralLesson
    this.language=language
    this.storyNarration=storyNarration
    this.ageGroup=ageGroup
    }
    getTranslation(newLanguage){
        if (this.length ==="Kiswahili") {

            console.log(this.storyName + "is Translated to " +(newLanguage));
            
        } else if(this.language===newLanguage){
            console.log(this.storyName + " is already in the language you want. Enjoy");            
        }
        else{
            console.log("The story is called "+ this.storyName + "and it is in the language" + this.language);
        }
    }
}
class Translator extends Story{
    constructor(storyName,  length,language, moralLesson, storyNarration,ageGroup, )
}





/**
 * **African Cuisine:** You're creating a recipe app specifically for African cuisine.
The app needs to handle recipes from different African countries, each with its
unique ingredients, preparation time, cooking method, and nutritional
information. Consider creating a `Recipe` class, and think about how you might
create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
`EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
methods.
 */
/**
 * pseudocode
 * app that holds  unique ingredients, preparation time, cooking method, and nutritional
information.
input=>  ingredients:String,
      preparation time: number, 
      cooking method: String
//  ,     nutritional  information: String.
 */
class Recipe{
    constructor(ingredients, prepTime, cookingMethod, nutritionalInfo){
        this.ingredients=ingredients
        this.prepTime=prepTime
        this.cookingMethod= cookingMethod
        this.nutritionalInfo=nutritionalInfo
    }
    cusineEffect(){
        for (let i = 0; i < this.ingredients.length; i++) {
            const x = this.ingredients[i]
        if (x==="Chillies") {
            return "The Cuisine is Spicy"
            
        } else {
            
        }
    }

    }
}
class MoroccanRecipe extends Recipe{
    constructor(ingredients,prepTime,cookingMethod,nutritionalInfo, name){
    super(ingredients,prepTime,cookingMethod,nutritionalInfo)
    this.name = name
    }
    cusine()
}

/**
 * **Wildlife Preservation:** You're a wildlife conservationist working on a
program to track different species in a national park. Each species has its own
characteristics and behaviors, such as its diet, typical lifespan, migration
patterns, etc. Some species might be predators, others prey. You'll need to

create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
these classes might relate to each other through inheritance.
 */
/**
 * Input=> diet: STring
 * , lifespn,:Int
 * output => trcking of species migration
 * process => crete  class for species 
 *           attributes: diet, span 
 *            create a method: Eating, about animal
 *            
 *            CReate subclasses that inherrit from main class
 *            possible method in subclass => migration Pattern
 *            Include the unique attributes
 *            invoke class
 */

class Species{
    constructor(name,diet,lifeSpan){
        this.name = name
        this.diet = diet
        this.lifeSpan=lifeSpan
    } 
    about_animal(){
        console.log(this.name + "eats a"+ this.diet + " and on average lifes for "+ this.lifeSpan +" Years");
    }
}
class Prey extends Species{
    constructor(name,diet,lifeSpan, currentLocation, predatorLocation){
        super(name,diet,lifeSpan)
        this.predatorLocation=predatorLocation
        this.currentLocation=currentLocation
    }
    about_animal(){
        super.about_animal()    
    }
    migrationPattern(newLocation){
        if (this.predatorLocation ==="Near") {
            return (this.name +" will migrate to "+ newLocation)
            
        } else {
            return(this.name + "will remain in "+this.currentLocation )
            
        }
    }
}
class Predator extends Species{
    constructor(name,diet,lifeSpan,){
        super(name,diet,lifeSpan)
        
    }
    about_animal(){
        super.about_animal()
    }
}
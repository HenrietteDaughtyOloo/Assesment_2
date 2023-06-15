fun main(){

}
open class Species(var name:String,var diet:String, var lifeSpan:Int){
    open fun about_animal( name: String, diet: String, lifeSpan: Int){
        println(this.name + "eats a"+ this.diet + " and on average lifes for "+ this.lifeSpan +" Years");
    }
}
class Prey (name: String,diet: String,lifeSpan: Int):Species(name,diet,lifeSpan){

    override fun about_animal(name: String,diet: String,lifeSpan: Int){
        super.about_animal()
    }
    fun migrationPattern(name: String,diet: String,lifeSpan: Int,newLocation:String,predatorLocation:String ):String{
        if (predatorLocation ==="Near") {
            return "$name will migrate to $newLocation"

        } else {
            return("$name will remain in currentLocation")

        }
    }
}
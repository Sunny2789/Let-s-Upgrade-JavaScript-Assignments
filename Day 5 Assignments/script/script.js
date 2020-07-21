class User {
    constructor(name, age, email, role) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.role = role;
        this.courses = [];
    }

    logIn() {
        console.log(`${this.name} Has Logged In.`)
    }

    logOut() {
        console.log(`${this.name} Has Logged Out.`)
    }
}

class Moderator extends User {
    constructor(name, age, email, luCoins, role) {
        super(name, age, email, luCoins, role)
        
    }

    addCoins(user) {
        user.luCoins++;
        console.log("")
        console.log(`Coins Has Been Added By ${this.role} ${this.name}`);
        console.log("To The Below Account:")
        console.log(user)
        return this;
    }

    removeCoins(user) {
        user.luCoins--;
        console.log("")
        console.log(`Coins Has Been Removed By ${this.role} ${this.name}`);
        console.log("From The Below Account:")
        console.log(user)
        return this;
    }

}

class Admin extends Moderator{
    addCourse(user,course) {
        user.courses.push(course);
        console.log("");
        console.log(`${this.name} Has Been Applied For The ${this.courses} Courses`);
        console.log(`See The Iformation Of ${this.name}'s Account Below:`);
        console.log(user)
    }
    deleteCourse(user, course) {
        user.courses.pop(course);
        console.log("");
        console.log(`${this.name} Has Been Removed For The ${this.courses} Courses In Which He Has Registered At Last Time`);
        console.log(`See The Iformation Of ${this.name}'s Account Below:`);
        console.log(user)
    }
 }


user1 = new User("Parth", 12, "Sunny@gmail.com", "User")

mod = new Moderator("Sunny", 12, "mod@gmail.com", "Moderator")
mod2 = new Moderator("Arjun", 14, "arjun@gmail.com", "Moderator")
admin = new Admin("Jayesh", 12, "jayesh@gmail.com", "Admin")

mod.addCoins(user1)
mod.addCoins(user1)
mod.removeCoins(user1)

admin.addCourse(user1, "Python")
admin.addCourse(user1, "Java")
admin.deleteCourse(user1, "Python")

admin.addCoins(user1)
admin.removeCoins(user1)

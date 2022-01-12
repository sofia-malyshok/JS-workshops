class Photo {}

class User {
  static counter = 1;
  static ids = [];

  constructor(id, email, age, isVegeterian, photos) {
    if (!id) {
      this.id = User.counter++;
      this.email = "default@gmail.com";
      this.age = 18;
      this.isVegeterian = false;
      this.photos = [];
    } else {
      if (!User.ids.includes(id)) {
        this.id = id;
        this.email = email;
        this.age = age;
        this.isVegeterian = isVegeterian;
        this.photos = photos;
        User.ids.push(id);

        if (id == User.counter) {
          User.counter++;
        }
      } else {
        console.log(`User with id ${id} can not be created - you will get empty user`)
      }
    }
  }
}

class UserBuilder {
  constructor(id, email, age) {
    this.id = id;
    this.email = email;
    this.age = age;
  }

  setVegiterian(isVegeterian) {
    this.isVegeterian = isVegeterian
    return this
  }

  addPhotos(number) {
    this.photos = []
    for(let i = 0; i < number; i++){
      this.photos.push(new Photo())
    }
    return this
  }

  build() {
    return new User(
      this.id,
      this.email,
      this.age,
      this.isVegeterian,
      this.photos
    )
  }
}

//tests
const userBuilder1 = new UserBuilder(1, "aaa@gmail.com", 34).setVegiterian(true).addPhotos(3).build()
console.log(userBuilder1) //user created by builder and custom parameters
console.log("--------------------------------------------")
const userBuilder2 = new UserBuilder(1, "fff@gmail.com", 56).setVegiterian(false).addPhotos(9).build()
console.log(userBuilder2) //user tried to be created by builder with id of the first user
console.log("--------------------------------------------")
const userBuilder3 = new UserBuilder().build()
console.log(userBuilder3) // default user created by builder
console.log("--------------------------------------------")
const userBuilder4 = new UserBuilder().build()
console.log(userBuilder4) // default user created by builder
console.log("--------------------------------------------")

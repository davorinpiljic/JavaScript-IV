// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
      this.name = attrs.name
      this.age = attrs.age
      this.location = attrs.location
      this.gender = attrs.gender
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
  }
  
  class Instructor extends Person {
    constructor(attrs) {
      super(attrs)
      this.specialty = attrs.specialty
      this.favLanguage = attrs.favLanguage
      this.catchPhrase = attrs.catchPhrase
    }
    demo(subject) {
      console.log(`Today we are learning about ${subject}`)
    }
    grade(Student, subject) {
        console.log(`${Student.name} receives a perfect score on ${subject}`)
      }
  }
  
  class Student extends Instructor {
      constructor(attrs) {
      super(attrs)
      this.previousBackground = attrs.previousBackground
      this.className = attrs.className
      this.favSubjects = attrs.favSubjects
      this.listsSubjects = attrs.listsSubjects
   }
   listsSubjects() {
     this.favSubjects.forEach(function(elem) {
       console.log(elem)
     })
   }
   PRAssignment(subject) {
     console.log(`${this.name} has submitted a PR for ${subject}`)
   }
  sprintChallenge(Student, subject) {
    console.log(`${Student.name} has begun sprint challenge on ${subject}`)
    }
  }
  
  class ProjectManager extends Instructor {
    constructor(attrs) {
      super(attrs)
      this.gradClassName = attrs.gradClassName
      this.favInstructor = attrs.favInstructor
      
    }
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standby times!`)
    }
    debugsCode(Student, subject) {
      console.log(`${this.name} debugs ${Student.name}'s code on ${subject}'`)
    }
  }
  
  
  //student objects
  const bob = new Student({
    name: 'bob',
    location: 'north america',
    age: 100,
    gender: 'm',
    previousBackground: 'nothing much',
    className: 'webpt5',
    favSubjects: ['js', 'html', 'css'],
  })
  const bobtwo = new Student({
    name: 'bob two',
    location: 'south america',
    age: 50,
    gender: 'm',
    previousBackground: 'engineer',
    className: 'webpt6',
    favSubjects: ['javascript', 'html5', 'css less'],
  })
  
  console.log(bob.speak())
  console.log(bob.favLanguage)
  console.log(bob.favSubjects)
  console.log(bob.PRAssignment('js'))
  console.log(bob.sprintChallenge(bob, 'js'))
  console.log(bobtwo.speak())
  console.log(bobtwo.favLanguage)
  console.log(bobtwo.favSubjects)
  console.log(bobtwo.PRAssignment('css'))
  console.log(bobtwo.sprintChallenge(bobtwo, 'html5'))
  
  
  //instructor objects
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const ed = new Instructor({
    name: 'ed',
    location: 'chicago',
    age: 50,
    gender: 'male',
    favLanguage: 'html5',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the html5`
  });
  console.log(fred.age)
  console.log(fred.demo('js'))
  console.log(fred.grade(bob, 'js'))
  console.log(ed.age)
  console.log(ed.demo('html5'))
  console.log(ed.grade(bobtwo, 'js'))
  
  
  //project manager objects
  const bobManager = new ProjectManager({
    name: 'bob manager',
    location: 'north america',
    age: 100,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `don't forget the js`,
    gradClassName: 'cs1',
    favInstructor: 'bob instructor'
  });
  const emiManager = new ProjectManager({
    name: 'emi manager',
    location: 'central america',
    age: 100,
    gender: 'female',
    favLanguage: 'JavaScript and css with less',
    specialty: 'full stack',
    catchPhrase: `don't forget the less with your css`,
    gradClassName: 'cs1',
    favInstructor: 'ed instructor'
  });
  
  console.log(bobManager.standUp('slack chan'))
  console.log(bobManager.debugsCode(bob, 'js'))
  console.log(emiManager.standUp('random chan'))
  console.log(emiManager.debugsCode(bobtwo, 'js'))
  
  
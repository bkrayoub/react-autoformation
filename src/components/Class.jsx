import React from 'react'

export default function Class() {

    class Person {
        constructor(name,age) {
          this.name = name;
          this.age = age;
        }
      
        present() {
          return 'my name is  ' + this.name + ' im ' + this.age;
        }
      }
      
      
      class Post extends Person {
        constructor(name, age, rule) {
          super(name,age);
          this.rule = rule;
        }  
        show() {
          return this.present() + ', and im ' + this.rule
        }
      }
    
      const mycar = new Post("ahmad","28", "manager");
      document.write(mycar.show());

  return (
    <div>
      
    </div>
  )
}




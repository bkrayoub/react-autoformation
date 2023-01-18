import { render } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import React from 'react'

export default function ES6() {
  
  // class example
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
  


  // arrow function example

      //1: normal JavaScript function

      // function box(h,w) {
      //   return h + w
      // }

      //2: arrow function with return and argument

      // const box  = (h , w) => {
      //   return h + w;
      // }

      //3: arrow function without return and argument

      const box  = (h , w) => h + w;


      document.write('<br/>' + box(10,10));
  

  // variables 
      
      const item = 'cup' /*can't e changed*/
      var price = 20 /*changable*/
      var friends = ['mussa', 'ishak','reda','badr']
      let show = true /*changable*/
      
      
      if(show) {
        document.write('<br/> I bought this ' + item + ' around ' + price);
      }
      
  // map arrey method example 
  
      // const myArrey = friends.map((item) => <li>{item}</li>)

  return (
    <div>
      
    </div>
  )
}




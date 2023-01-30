import { render } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import React from 'react'

function ES6() {
  
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
        constructor(name, age, role) {
          super(name,age);
          this.role = role;
        }  
        show() {
          return this.present() + ', and im ' + this.role
        }
      }
    
      const personInfo = new Post("ahmad", "28", "manager");

      document.write(personInfo.show());
  


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
  
      // const myArrey = friends.map((friend) => <li>{friend}</li>)
      // friends.forEach(friend => {friend});




  //Destructuring


  const studentInfo = {
    name: 'ayoub boukkour',
    age: 22 ,
    gender: 'male'
  }

  const {name, age, gender} = studentInfo

//Spread Opirator

const players = ['mark', 'jack', 'sozen', 'reacherd', 'hamza', 'rick', 'zack', 'roberto', 'cristiano']

const [one, two, tree, ...others] = players 


//Ternary Operator

var bool = true
function isTrue(){
  return 'Variable returns true'
}

function isntTrue(){
  return 'Variable returns false'
}
 
bool ? isTrue() : isntTrue();




  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{gender}</li>
      </ul>

      <ul>
        <li>{one}</li>
        <li>{two}</li>
        <li>{tree}</li>
        <li>{others}</li>
      </ul>
    </div>
  )
}



export default ES6() //Modules
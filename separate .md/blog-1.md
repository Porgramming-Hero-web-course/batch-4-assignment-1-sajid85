when I first started with typescript, I found union and intersection types really very helpful for making my code safer and I am using thr right  data  types.
Union Types-->

  A union type is written as a set of possible types separated by the | sign. For example: -->
    let userId: string | number;
    userId = 'abc123';
    userId = 456; 
This is useful when a variable can hold multiple types.
Intersection Types-->

  Intersection types are used to take the multiple type and compile it into one. That means, the property of a variable is from all types combined. For example:
    interface User { name: string; }
    interface Admin { role: string; }
    let userAdmin: User & Admin = { name: 'John Doe', role: 'admin' };
  Here, userAdmin must have both name&role.
  


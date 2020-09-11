function convertTo(name){
     return function (role) {
         return {role:`${role}`, name:`${name}`};
     }
 }
 let res = convertTo('John')('admin');
 console.log(res);

function addition(){
          console.log(arguments[0]);
          console.log(arguments[1]);
          //let result = a + b;
           let result = arguments[0] + arguments[1];
           console.log(result);
       }
       addition(44,56);
   
       var length = 50; //var keyword will attach to this
      // let length = 50; //let will not attach to this keyword
       function display(){
           console.log(this.length);
       }
       display();
       
       module.exports = { API }



function generatepascal(num) 

{
   var result = [];
   if (num <= 0)
          return result;

   var prenum = [];
   prenum.push(1);
   result.push(prenum);

   for (var i = 2; i <= num; i++) {
       var curnum = [];

       curnum.push(1);
       for (var j = 0; j < prenum.length - 1; j++) {
         curnum.push(prenum[j] + prenum[j + 1]); 
       }
       curnum.push(1);

       result.push(curnum);
       prenum = curnum;
   }
   return result;
}

var display = generatepascal(5);

console.log(display);


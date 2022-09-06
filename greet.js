export default function greet(name) {

    if (!name) {
        return "please enter a name.";
        
   }
   return "Hello," + name;
}

const msg = greet('xola')
console.log(msg)
console.log(greet('Itumeleng'));
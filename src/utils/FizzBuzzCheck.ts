
export default function FizzBuzz(counter : number) : boolean{

    const fizzCheck = counter % 3
    const buzzCheck = counter % 5

    if (fizzCheck === 0 && buzzCheck === 0 ){
        return true
    } else {
        return false
    }
}
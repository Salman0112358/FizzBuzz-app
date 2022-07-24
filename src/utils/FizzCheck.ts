
export default function Fizz(counter : number) : boolean{

    const FizzCheck = counter % 3

    if ( FizzCheck === 0 ){
        return true
    } else {
        return false
    }
}
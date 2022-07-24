
export default function Buzz(counter : number) : boolean{

    const buzzCheck = counter % 5

    if ( buzzCheck === 0 ){
        return true
    } else {
        return false
    }
}
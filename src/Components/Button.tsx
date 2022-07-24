import {useState} from 'react'
let Buttoncounter = 0

export default function Button ():JSX.Element{

    
    const [currentVal, nextVal] = useState<(number|string)>('')
    const [currentArray, nextArray] = useState<(number|string)[]>([])

    const result = () => {

        Buttoncounter += 1
        console.log(Buttoncounter)
  
        if (Buttoncounter % 3 === 0 && Buttoncounter % 5 === 0){ 
            nextVal('FizzBuzz -')
            nextArray([...currentArray,currentVal])     
        } else if (Buttoncounter % 3 === 0) {
            nextVal('Fizz -')
            nextArray([...currentArray,currentVal]) 

        } else if (Buttoncounter % 5 ===0) {
            nextVal('Buzz -')
            nextArray([...currentArray,currentVal]) 
        } else {
            nextVal(`${Buttoncounter} -`)
            nextArray([...currentArray,currentVal]) 
        } 
    }

    return (
        <>
        <h3>Press the button below to play</h3>
        <button className="main-btn" onClick={result}>FizzBuzz</button>
        <p>{currentArray}</p>
        </>
    )
}
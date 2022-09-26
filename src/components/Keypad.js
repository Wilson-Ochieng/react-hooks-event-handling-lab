
// Code EyesOnMe Component Here
function Keypad (){
    const OnchangeHandler = (event) =>{
        console.log('Entering password...')
    }
    return (
        <input 
            type="password" 
            name="password" 
            id="password"
            onChange={OnchangeHandler}
         />
    )
}

export default Keypad;



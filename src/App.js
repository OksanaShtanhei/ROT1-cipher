import React, {useEffect, useState} from 'react'

const App = () => {
    const letters = 'ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz'
    const [value, setValue] = useState('')
    const [changed, setChanged] = useState([])
    const [changedValue, setChangedValue] = useState()
    const [flag, setFlag] = useState(false)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        const valueArr = value.split('')
        const res = valueArr.map(i => {
            const index = letters.indexOf(i) + 1;
            return index ? letters[index % letters.length] : i;
          })
        setChanged(res)
        setChangedValue(res)
    }, [value])

    const changeText = () => {
        if(flag === false){
            setFlag(true)
            setChangedValue(value)
        } else {
            setFlag(false)
            setChangedValue(changed)
        }
    }
    return (
        <div>
           <h1>ROT1</h1> 
           <input onChange={handleChange} value={value} />
           <button onClick={changeText}>{flag ? 'Back to ROT1' : 'Change to text'}</button>
            <p>{changedValue}</p>
        </div>
    )
}
export default App
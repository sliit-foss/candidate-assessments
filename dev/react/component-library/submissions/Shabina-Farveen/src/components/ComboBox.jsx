import { useState } from "react";

function ComboBox(props){
    const [options, setOptions] = useState(props.Options)
    const [text, setText] = useState(props.Text)
    const [value, setValue] = useState("choose")
    
    return(
        <div className="flex flex-row justify-center m-2">
            <select id="dropdown" className="px-2 w-4xl" >
                
            </select>
            <datalist className="bg-slate-500 text-red-300">
                <option value={options[0]}>{options[0]}</option>
                <option value={options[1]}>{options[1]}</option>
                <option value={options[2]}>{options[2]}</option>
            </datalist>
        </div>
    )
}

export default ComboBox;
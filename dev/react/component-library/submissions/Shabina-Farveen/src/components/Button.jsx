import { useState } from "react"

function Button(props){
    const [text, setText] = useState(props.Text);
    const [prefix, setPrefix] = useState(props.Prefix);
    const [suffix, setSuffix] = useState(props.Suffix);
    
    return(
        <button className="border-white bg-slate-600 p-2 px-4 rounded-md border-2 text-white
                hover:border-slate-600 hover:bg-white hover:text-slate-600">
            {text}</button>
    )
}

export default Button
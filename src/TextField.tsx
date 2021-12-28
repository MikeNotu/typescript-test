import React, { useRef, useState } from 'react'

interface Person{
    firstName: string;
    lastName: string;
}


interface Props{
    text:string;
    ok?: boolean;
    i?: number;
    fn?: (bob:string)=>string;
    person: Person;
}

interface TextNode{
    text:string
}

export const TextField: React.FC<Props> = ({})=>{
    const [count,setCount] = useState<TextNode>({text: 'hello'})
    const inputRef = useRef<HTMLInputElement>(null);

    // setCount()
    return (
        <div>
            <input ref={inputRef}/>
            {/* <button onClick={()=>alert(text)}>test</button> */}
        </div>
    )
}

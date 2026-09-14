import { useEffect, useState } from "react"

type ProjectCard_Props = {
    title: string,
    status: string
}


export const ProjectCard = ({ title, status } : ProjectCard_Props) => {

    const [likes, set_likes] = useState(0)
    
    useEffect(() => {
        setTimeout(() => {
            set_likes(100)
        }, 2000)
    },[])

    const handleClick = () => {
        set_likes(likes + 1)
    }

  return (
    <div>
        <h3>{title}</h3>
        <p id="test">{status}</p>

        <p>{likes}</p>

        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

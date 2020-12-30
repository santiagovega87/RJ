import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

const Category = () => {
    const {name} = useParams()

    useEffect(() => {
        console.log(name)
    }, [name])
    
    return (
        <>
            <h1>{name}</h1>
            <p>Pruebas</p>
        </>
    )
}

export default Category
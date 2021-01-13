import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {productos} from '../../Productos'

const Category = () => {
    let {name} = useParams()

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
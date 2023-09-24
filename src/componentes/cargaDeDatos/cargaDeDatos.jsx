import styles from './cargaDeDatos.module.css'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import {db} from './../../services/firebase/firebaseConfig'

function CargaDeDatos() {

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [img, setImg] = useState('')
    const [descripcion, setDescripcion] = useState('')

const crearProducto = async (event) => {
    event.preventDefault();
    console.log("linea 17")
    try{
        console.log("linea 19")
        setLoading(true) 

        const categoriaMinuscula = category.toLowerCase();


        const objetoProducto = {
        category: categoriaMinuscula, descripcion, img, name,  price, stock
    }

    const productosRef = collection (db,'products')

    const productoAgregado = await addDoc (productosRef, objetoProducto)
    console.log (productoAgregado)
} catch (error){
    console.log(error)
} finally{
    setLoading(false)
}


}

if(loading){
    return <h1>SE ESTÁ CREANDO PRODUCTO</h1>
}
  return (
    <>
    <h1>CREAR PRODUCTO</h1>
      <form onSubmit={crearProducto}  className={styles.form_cargaDeDatos}>
        
        
        <label >Categoria</label>
        <input value={category} placeholder='Camisetas / Shorts / Pantalones / Botines / Buzos' onChange={(e)=>setCategory(e.target.value)} type='text'/>

        <label >Descripcion</label>
        <input value={descripcion} placeholder='Detalles del producto' onChange={(e)=>setDescripcion(e.target.value)} type='text'/>

        <label >Imagen</label>
        <input value={img} placeholder='Link de la imagen' onChange={(e)=>setImg(e.target.value)} type='text'/>

        <label >Nombre</label>
        <input value={name} placeholder='Nombre del producto' onChange={(e)=>setName(e.target.value)} type='text'/>

        <label >Precio</label>
        <input value={price} placeholder='$' onChange={(e)=>setPrice( e.target.value)} type='text'/>

        <label >Stock</label>
        <input value={stock} placeholder='Stock restante del producto' onChange={(e)=>setStock(e.target.value)} type='number'/>


        <button>Crear Producto</button>
      </form>
    </>
  )
}

export default CargaDeDatos

import { useSelector } from 'react-redux'
import Card from '../components/Card'

function Product() {

  let {products} = useSelector(state=>state.product)



  return (
    <div className=' p-20 flex flex-wrap gap-2 justify-center'>
      {products.map((obj)=>{
        return <Card key={obj.id} product={obj} />
      })}
    </div>
  )
}

export default Product
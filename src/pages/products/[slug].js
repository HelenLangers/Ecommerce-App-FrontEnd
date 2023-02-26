import { fromImageToUrl } from 'utils/urls'
import products from '../../products.json'
const product = products.data[0]

const Product = () => {
    console.log(products)

    return (
        <div>
            <h3>{product.attributes.name}</h3>
            <img src={fromImageToUrl(product.attributes.image)}/>
            <h3>{product.attributes.name}</h3>
            <p>£{product.attributes.price}</p>

            <p>
                {product.content}
            </p>
        </div>
    )
}

export default Product
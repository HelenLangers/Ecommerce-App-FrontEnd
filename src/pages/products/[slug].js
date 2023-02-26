import Head from 'next/head'
import { fromImageToUrl } from 'utils/urls'
import products from '../../products.json'
const product = products.data[0]

const Product = () => {
    // console.log(products)

    return (
        <div>
            <Head>
                {product.attributes.meta_title &&
                    <title>{product.attributes.meta_title}</title>
                }
                {product.attributes.meta_description &&
                    <meta name="description" content={product.attributes.meta_description}/>
                }
            </Head>
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
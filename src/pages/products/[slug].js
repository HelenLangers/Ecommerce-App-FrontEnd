import Head from 'next/head'
import { fromImageToUrl } from 'utils/urls'
import { twoDecimals } from 'utils/format'
// import products from '../../products.json'
// const product = products.data[0]

const Product = ({product}) => {

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
            <p>£{twoDecimals(product.attributes.price)}</p>

            <p>
                {product.attributes.content}
            </p>
        </div>
    )
}

export async function getStaticProps({params: {slug}}){
    const product_res = await fetch(`http://localhost:1337/api/products/?slug=${slug}`)
    const found = await product_res.json()

    return {
        props: {
            product: found[0]
        }
    }
}

export async function getStaticPaths(){
    // retrieve all the possible paths
    const products_res = await fetch("http://localhost:1337/api/products")
    const products = await products_res.json()

    // return them to nextjs context
    return {
        paths: products.map(product => ({
            params: {slug: String(product.attributes.slug)}
        })),
        fallback: false // tells nextjs to show a 404 if param is not matched
    }
}

export default Product
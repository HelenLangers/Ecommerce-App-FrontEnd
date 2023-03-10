export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

/**
 * Given an image return the url
 * Works for local and deployed strapis
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
    if(!image){
        return "/vercel.svg"
    }

    if(image.data.attributes.url.indexOf("/") === 0){
        return `${API_URL}${image.data.attributes.url}`
    }

    return image.url
}
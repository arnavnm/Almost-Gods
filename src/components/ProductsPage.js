import ProductcollectionFront from "./ProductcollectionFront"

const ProductsPage = () => {

    const onClickHandler = (e) => {
        console.log(e)
    }
    return (
        <div style = {{backgroundColor: "#FC4445"}}>
          <ProductcollectionFront url1 = "https://freesociety.in/uploads/thumbnail/0d408d8dea874dab3135052892951e91.jpg" name1 = "Zero Tolerance Block Lion Sweatshirt" price1 = "5500"
          url2 = "https://cdn.shopify.com/s/files/1/0379/3964/2508/products/IMG_2230123copy_1512x.jpg?v=1620215227" name2 = "FRUIT SHOP AT THE END OF THE WORLD TEE" price2 = "6000" onClick = {onClickHandler}/>
        </div>
    )
}

export default ProductsPage

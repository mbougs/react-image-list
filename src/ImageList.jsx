const ImageList = ({ images }) => {
    // const pics = images.map((image) => {
    //     return <img src={ image.webformatURL } alt="image" />
    // })
    return ( 
        <>
        <div>
           {
            images.map((image) => {
                return <img key={ image.id } src={ image.webformatURL } alt="image" />
            })
           }
        </div>
        </>
     );
}
 
export default ImageList;
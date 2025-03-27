function Clothes({anyClothes}) {
    return(
        <div className="products">
            {anyClothes.map((element => {
                const {id, name, searchTerm, price, image} = element;
                
                return(
                    <div className="product-card" key={id}>
                         <img src={image} width="400px" height="500px"/>
                        <div className="product-info">
                        <h2>{name}</h2>
                        <h3>{searchTerm}</h3>
                        <h4>$ {price}</h4>
                       
                        </div>
                    </div>
                )
            }))}
        </div>
    )
    }
    
    export default Clothes;
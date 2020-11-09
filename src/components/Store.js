import React from 'react';
import fire from "../Fire";
function Store(){

    const [names, setNames]=React.useState([]);

    const db = fire.firestore();

    React.useEffect(()=>{

        let newItems = [];

        db.collection("fireplace-store").get().then(function(snapshot){

            snapshot.forEach(function(doc){

                const object = doc.data();

                let item ={
                    name: object.name,
                    price:object.price,
                    stock:object.stock,
                    image:object.image,
                    id:doc.id
                };

                newItems.push(item);

            });

            setNames(newItems);

        });

    },[db]);


    const productEles = names.map((product, idx)=>

        <div onClick={() => alert(product.name + "\n$ " + product.price + "\nStock: " + product.stock)} style={{border: "2px solid black", width: '500px', marginBottom: "20px", marginLeft: 'auto', marginRight: 'auto'}} key={idx}>

            <h1>{product.name}</h1>
            <h2>$ {product.price}</h2>
            <h4 className={product.stock <= 10 ? "lowStock" : "highStock"}>Stock: {product.stock}</h4>
            <img src={product.image} alt="Product" style={{height: "100px", width: "100px"}}/>
            {product.stock === 0 ? '' : <button>Add to Cart</button>}
        </div>
    );

    return(

        <div>
            <div>{productEles}</div>
        </div>
    )

}

export default Store;

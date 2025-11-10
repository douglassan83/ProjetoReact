export default function Discount2(){


    const [price, setPrice] = useState('100');

    function newPrice(){
        setPrice('75')
    }

    return(

        <div>
            <p>{price}</p>
            <button onClick={newPrice}></button>
        </div>

    )
}
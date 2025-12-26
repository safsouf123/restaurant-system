import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Dishdetail({ onAddtocart }) {
const { id } = useParams();
const [item, setItem] = useState(null);

useEffect(() => {
fetch(`http://localhost:4000/api/menu/${id}`)
.then((res) => res.json())
.then((data) => setItem(data))
.catch((err) => console.log(err));
}, [id]);

if (!item) return <p>Loading...</p>;

return (
<div>
<img src={item.image} alt={item.name} />
<h1>{item.name}</h1>
<p>{item.description}</p>
<p>{item.tag}</p>
<p>{item.meal} - {item.temperature}</p>
<p>${Number(item.price).toFixed(2)}</p>

<button onClick={() => onAddtocart(item)}>
Add to cart
</button>
</div>
);
}

export default Dishdetail;

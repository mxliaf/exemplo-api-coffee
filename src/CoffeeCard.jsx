
export default function CoffeeCard({ coffee }) {
  return (
    <div>
        <img src={coffee.image} alt="" width="150" />
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <h4>Ingredients</h4>
      <ul>
        {coffee.ingredients.map((item, index) => 
        <li key={index}>
            {item}
        </li>        
        )}
      </ul>
    </div>
  )
}
// Criar o componente card
function Card({firstName, lastName, title}) {
  return (
    <div className="card">
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      <p>{firstName} {lastName}</p>
      <p>{title}</p>
    </div>
  )
}
export default Card;
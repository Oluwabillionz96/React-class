import'./card.css'
const Card = ({img, desc, title}) => {
  return (
      <div className='card'>
          <div className='image'>
              <img src={img} alt="" />
          </div>
          <div className='texts'>
        <h3>{title}</h3> 
        <p>{desc}</p>
          </div>
    </div>
  )
}

export default Card
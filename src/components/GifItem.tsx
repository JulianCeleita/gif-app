
export const GifItem = ({ title, url, id }:{title:any, url:any, id:any}) => {

  return (
    <div className="card" >
      <img src={ url } alt={ title } />
      <p> { title } </p>
    </div>
  )
}

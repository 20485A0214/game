import './index.css'

const Items = props => {
  const {imageList} = props
  const {thumbnailUrl} = imageList
  return (
    <li className="item-list">
      <img src={thumbnailUrl} alt="thumbnail" className="list-image" />
    </li>
  )
}

export default Items

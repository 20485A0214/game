import './index.css'

const ListItem = props => {
  const {tabList, clickTabItem, isActive} = props
  const {tabId, displayText} = tabList
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="list-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default ListItem

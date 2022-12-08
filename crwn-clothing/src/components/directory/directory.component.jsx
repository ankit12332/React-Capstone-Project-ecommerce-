import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'
import React from 'react'

const directory = ({props}) => {
  return (
    <div className="categories-container">
      {props.map((category)=>(
        <CategoryItem key={category.id} props={category} />
      ))}
    </div>
  )
}

export default directory
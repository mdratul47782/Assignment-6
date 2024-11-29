import Recipes from '@/components/Recipes'
import React from 'react'

function page({ params: { categoryId } }) {
  return (
    <div>
        <Recipes categoryId={ categoryId }/>
    </div>
  )
}

export default page
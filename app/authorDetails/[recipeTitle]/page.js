import AuthorDetails from '@/components/AuthorDetails'
import React from 'react'

function authorDetails({ params: { recipeTitle } }) {
  return (
    <AuthorDetails recipeTitle={recipeTitle}/>
  )
}

export default authorDetails
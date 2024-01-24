import Image from 'next/image'
import React from 'react'
import CategoryCard from '@/components/category-card'

type Props = {
    categories:Category[] | undefined
}

const CategoryCardsLister = ({categories}: Props) => {
  return (
    <div className='grid min-[405px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
    {categories?.map((category,index) => (
      <CategoryCard key={index} category={category}/>
    ))}
    </div>
  )
}

export default CategoryCardsLister
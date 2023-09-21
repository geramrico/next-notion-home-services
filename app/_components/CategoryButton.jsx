'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CategoryButton = ({
  category,
  selectedCategories,
  handleCategoryClick,
}) => {
  return (
    <Button
     size='sm'
      key={category}
      className={cn(
        `ml-2 mb-2 md:mb-0 hover:bg-gray-500`,
        selectedCategories.includes(category) ? 'bg-teal-500' : ''
      )}
      onClick={() => handleCategoryClick(category)}
    >
      {category}
    </Button>
  )
}
export default CategoryButton

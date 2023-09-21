'use client'

import { useState } from 'react'

import ServiceCard from './ServiceCard'
import CategoryButton from './CategoryButton'

const ServicesDashboard = ({ services, categories }) => {
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((cat) => cat !== category)
      } else {
        return [...prevSelected, category]
      }
    })
  }

  // Filter services based on selected categories
  const filteredServices = services.filter(
    (service) =>
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => service.categories.includes(cat))
  )

  return (
    <>
      <h2 className="text-md pb-4">Selecciona:</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-wrap md:w-2/3 justify-start">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              selectedCategories={selectedCategories}
              handleCategoryClick={handleCategoryClick}
            />
          ))}
        </div>

        {filteredServices.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </>
  )
}
export default ServicesDashboard

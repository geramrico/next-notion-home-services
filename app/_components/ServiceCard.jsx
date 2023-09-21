'use client'

import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

import { cn } from '@/lib/utils'

import { Badge } from '@/components/ui/badge'

import { Button } from '@/components/ui/button'

function ServiceCard({ service, handleCategoryClick, selectedCategories }) {
  return (
    <Card className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row">
        <CardHeader className="flex-grow">
          <CardTitle>{service.name}</CardTitle>
          <CardDescription className="flex flex-col">
            <a
              href={`tel:${service.phone}`}
              target="_blank"
              className="hover:underline hover:text-teal-600 focus:underline focus:text-teal-600"
            >
              {service.phone}
            </a>

            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow flex-col sm:pt-6 items-center">
          <div id="badge-container" className="flex flex-wrap my-2">
            {service.categories.map((category, index) => (
              <Badge
                variant="secondary"
                key={index}
                className={
                  (cn('ml-2 mb-2 px-4 py-2'),
                  selectedCategories.includes(category) ? 'bg-teal-600 text-white' : '')
                }
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="sm:pt-6">
          <Button
            className="w-full hover:bg-teal-600 focus:bg-teal-600"
            size="sm"
          >
            <Link href={`https://api.whatsapp.com/send?phone=${service.phone}`}>
              Envía un mensaje
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
export default ServiceCard

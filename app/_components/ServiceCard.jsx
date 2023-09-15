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

import { Badge } from '@/components/ui/badge'

import { Button } from '@/components/ui/button'

function ServiceCard({ service }) {
  console.log(service)
  return (
    <Card key={service.id} className="flex flex-col h-full">
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
            <p>{service.description}</p>
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow flex-col align-middle">
          <div className="flex flex-wrap mt-2 mb-2 justify-start">
            {service.categories.map((category, index) => (
              <Badge variant="secondary" key={index} className="ml-2">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="sm:pt-6">
          <Button className="w-full hover:bg-teal-600 focus:bg-teal-600">
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

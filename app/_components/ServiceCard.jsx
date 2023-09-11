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
      <CardHeader className="flex-grow">
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>
          <a
            href={`tel:${service.phone}`}
            target="_blank"
            className="hover:underline"
          >
            {service.phone}
          </a>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap mt-2 mb-2">
          {service.categories.map((category, index) => (
            <Badge variant="secondary" key={index}>
              {category}
            </Badge>
          ))}
        </div>

        <p>{service.description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">
          <Link href={`https://api.whatsapp.com/send?phone=${service.phone}`}>
            Envía un mensaje
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
export default ServiceCard

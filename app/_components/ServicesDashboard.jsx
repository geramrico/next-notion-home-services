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

import { PhoneCallIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import ServiceCard from './ServiceCard'
import { useMemo, useState } from 'react'

const ServicesDashboard = ({ services }) => {
  const [selectedCategories, setSelectedCategories] = useState(new Set())
  const [serviceList, setServiceList] = useState(services)

  const allCategories = useMemo(() => {
    return Array.from(new Set(services.flatMap(service => service.categories)));
  }, [services]);

  console.log(allCategories)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {services.map((service) => (
        <ServiceCard service={service} />
      ))}
    </div>
  )
}
export default ServicesDashboard

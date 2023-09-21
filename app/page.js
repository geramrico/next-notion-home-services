import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from 'components/page-header'
import ServicesDashboard from './_components/ServicesDashboard'

const { Client } = require('@notionhq/client')

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export default async function Home() {
  const data = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID,
  })

  const results = data.results

  const services = results.map((item) => {
    return {
      id: item.id,
      name: item.properties.Name.title[0]?.plain_text,
      categories: item.properties.Categories.multi_select.map(
        (category) => category.name
      ),
      phone: item.properties.Phone.phone_number,
      description: item.properties.Description.rich_text[0]?.plain_text,
    }
  })

  const categories = getUniqueCategories(services)

  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Servicios Saltillo 🏡</PageHeaderHeading>
        <PageHeaderDescription>
          Servicios para el hogar recomendados por tus vecinos.
        </PageHeaderDescription>
      </PageHeader>

      <section className="block">
        <div className="overflow-hidden rounded-lg border bg-background shadow p-4">
          <ServicesDashboard services={services} categories={categories} />
        </div>
      </section>
    </div>
  )
}

function getUniqueCategories(services) {
  const categories = new Set()

  services.forEach((service) => {
    service.categories.forEach((category) => {
      categories.add(category)
    })
  })

  return [...categories]
}

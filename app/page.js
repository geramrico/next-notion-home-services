import { PageHeader,PageHeaderHeading } from '@/components/page-header'

const { Client } = require('@notionhq/client')

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export default async function Home() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID,
  })

  const services = results.map((item) => {
    return {
      name: item.properties.Name.title[0]?.plain_text,
      categories: item.properties.Categories.multi_select.map(
        (category) => category.name
      ),
      phone: item.properties.Phone.phone_number,
    }
  })

  console.log(services)
  return (
    <>
      <PageHeaderHeading>Servicios Saltillo</PageHeaderHeading>
      <span className="hidden sm:inline">
        Introducing Style, a new CLI and more.
      </span>
      <pre>{JSON.stringify(services, null, 2)}</pre>
    </>
  )
}

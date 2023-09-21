import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PageHeader,PageHeaderHeading } from '@/components/page-header'

const page = () => {
  return (
    <>
      <div className="container relative">
        <PageHeader className="pb-8">
          <PageHeaderHeading>Sobre este proyecto</PageHeaderHeading>
        </PageHeader>

        <section className="block">
          <div className="overflow-hidden rounded-lg border bg-background shadow p-4">
            <p className="text-base text-gray-700">
              Recientemente me mude y tuve que habilitar una casa "desde 0".
              Encontrar prestadores de servicios es difícil. En Google la
              información esta desactualizada, no atienden, o no son de
              confianza.
            </p>
            <p className="mt-4 text-base text-gray-700">
              Por eso cree este proyecto, dónde puedes encontrar servicios que
              han sido recomendados y curados directamente por tus vecinos.
              Espero sea de ayuda.
            </p>
            <Button className="mt-4">
              <Link href={'/'}>Ir al inicio</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
export default page

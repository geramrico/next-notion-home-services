import Link from 'next/link'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Sobre este proyecto
        </h1>
        <p className="text-base text-gray-700">
          Recientemente me mude y tuve que habilitar una casa "desde 0".
          Encontrar prestadores de servicios es difícil. En Google la
          información esta desactualizada, no atienden, o no son de confianza.
        </p>
        <p className="mt-4 text-base text-gray-700">
          Por eso cree este proyecto, dónde puedes encontrar servicios que han
          sido recomendados y curados directamente por tus vecinos. Espero sea
          de ayuda.
        </p>
        <Button className='mt-4'>
          <Link href={'/'}>
            Ir al inicio
          </Link>
        </Button>
      </div>
    </div>
  )
}
export default page

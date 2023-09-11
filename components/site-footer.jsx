import { siteConfig } from '@/app/config/site'

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Construido por{' '}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            geramrico
          </a>
          . Quieres desarrollar una app, mandame un{' '}
          <a
            href={siteConfig.links.mail}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            correo
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

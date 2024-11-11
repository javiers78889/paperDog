import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [


  {
    name: 'Carga Aerea Miami-Panama',
    id: 'tier-hobby',
    href: '#',
    plan: 'lb',
    priceMonthly: '$2.50',
    description: "El plan perfecto si deseas comprar en pequenas cantidades.",
    features: ['Sin impuesto aduanal', 'Entrega rapida', 'Cuidamos tu paquete', 'Compra de cualquier tienda'],
    featured: false,
  },
  {
    name: 'Carga Maritima',
    id: 'tier-enterprise',
    href: '#',
    plan: 'metro cubico',
    priceMonthly: '$6.50',
    description: 'Dedicado a emprendedores y empresas que desean suministrar sus tiendas.',
    features: [
      'Sin impuesto aduanal',
      'Cuidamos tu carga',
      'Trae lo que quieras',
      'Tarifa ajustable al cliente',
      'Rapido transporte',
      'Compra de cualquier tienda',
    ],
    featured: true,
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Planes = () => {
    return (
        <div id='planes' className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-purple-500 to-black">
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-white">Mira</h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-yellow-500 sm:text-6xl">
                    Nuestro Planes
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-white sm:text-xl/8">
                Contamos con Servicios de carga maritima y aerea.
            </p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-gray-900 shadow-2xl transform hover:scale-110  transition-transform duration-300' : 'bg-white/60 sm:mx-8 lg:mx-0',
                            tier.featured
                                ? ''
                                : tierIdx === 0
                                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none transform hover:scale-110  transition-transform duration-300'
                                    : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                            'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                        )}
                    >
                        <h3
                            id={tier.id}
                            className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span
                                className={classNames(
                                    tier.featured ? 'text-white' : 'text-gray-900',
                                    'text-5xl font-semibold tracking-tight',
                                )}
                            >
                                {tier.priceMonthly}
                            </span>
                            <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/{tier.plan}</span>
                        </p>
                        <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured ? 'text-gray-300' : 'text-gray-600',
                                'mt-8 space-y-3 text-sm/6 sm:mt-10',
                            )}
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        aria-hidden="true"
                                        className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                            )}
                        >
                            Lo quiero
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

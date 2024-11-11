import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const Decoracion = () => {
    return (
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                </dd>
            </div>
            <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                    Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                </dd>
            </div>
        </dl>
    )
}

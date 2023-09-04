"use client"

import ItemComponent from '@/core/ItemComponent';
import groupById from '@/functions/groupById';
import { useDataContext } from '@/store/store';
import Image from 'next/image'

export default function Home() {
  const { data, setData } = useDataContext();

  return (
    <main className="flex flex-col gap-4 h-full sm:flex-row">
      <section className='bg-white rounded-lg shadow-md w-full'>
        <h2 className='text-slate-600 font-bold p-2 text-center'>
          All Data
        </h2>
        <hr />
        <ul className='p-4'>
          {
            groupById(data).map(el => <ItemComponent key={el.id} obj={el} />)
          }
        </ul>
      </section>
      <section className='bg-white rounded-lg shadow-md w-full'>
        <h2 className='text-slate-600 font-bold p-2 text-center'>
          Selected Data
        </h2>
        <hr />
      </section>
    </main>
  )
}

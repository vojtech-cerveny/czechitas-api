import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`container mx-auto`}
    >
        <NavBar />

        <div className="container mx-auto">
          <div className='justify-center flex flex-col'>
            <h1 className="text-6xl font-bold ">Czechitas</h1>
            <article>
              Tady si muzes zkouset API dle libosti - muzes se podivat na ukazky pro lektory, pro hlasky a vyzkouset si POST na Math.
            </article>

            <h2 className='text-3xl font-bold'>Seznam endpointu</h2>
            <h3 className='text-2xl font-bold mt-6'>Hlasky</h3>
            <ul>
              <li className='mt-4'>
                <span className='font-mono bg-slate-500 text-white p-1 px-4'><span className='font-bold'>GET</span> api/czechitas/hlasky/all</span> 
                <div className='font-mono bg-green-200 p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ result: {id: number, quote: string}[]}'}</div>
              </li>
              <li className='mt-4'>
                <span className='font-mono bg-slate-500 text-white p-1 px-4'><span className='font-bold'>GET</span> api/czechitas/hlasky/random</span> 
                <div className='font-mono bg-green-200  p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ result: string }'}</div>
              </li>
              <li className='mt-4'>
                <span className='font-mono bg-slate-500 text-white p-1 px-4'><span className='font-bold'>GET</span> api/czechitas/hlasky/:id</span> 
                <div className='font-mono bg-green-200  p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ result: string }'}</div>
                <div className='font-mono bg-red-200 p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ error: string }'}</div>
              </li>
              <li className='mt-4'>
                <span className='font-mono bg-slate-500 text-white p-1 px-4'><span className='font-bold'>POST</span> api/czechitas/hlasky/create</span> 
                <div className='font-mono bg-slate-500 text-white p-1 px-4 mt-1'><span className='font-bold'>BODY</span> {"{ quote: string }"}</div> 
                <div className='font-mono bg-green-200  p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ result: string }'}</div>
                <div className='font-mono bg-red-200 p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ error: string }'}</div>
              </li>
            </ul>
            <h3 className='text-2xl font-bold mt-6'>Lektori</h3>
            <ul>
              <li className='mt-4'>
                <span className='font-mono bg-slate-500 text-white p-1 px-4'><span className='font-bold'>GET</span> api/czechitas/lektori/all</span> 
                <div className='font-mono bg-green-200 p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ result: { id: number, firstName: string, lastName: string, lectures: string[] }[] }'}</div>
              </li>
              <li className='mt-4'>
                <span className='font-mono bg-slate-500 text-white p-1 px-4'><span className='font-bold'>GET</span> api/czechitas/lektori/random</span> 
                <div className='font-mono bg-green-200  p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ result: { id: number, firstName: string, lastName: string, lectures: string[] } }'}</div>
              </li>
              <li className='mt-4'>
                <span className='font-mono bg-slate-500 text-white p-1 px-4'><span className='font-bold'>GET</span> api/czechitas/lektori/:id</span> 
                <div className='font-mono bg-green-200  p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ result: { id: number, firstName: string, lastName: string, lectures: string[] } }'}</div>
                <div className='font-mono bg-red-200 p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ error: string }'}</div>
              </li>
              <li className='mt-4'>
                <span className='font-mono bg-slate-500 text-white p-1 px-4'><span className='font-bold'>GET</span> api/czechitas/lektori/:name</span>
                <div className='font-mono bg-slate-500 text-white p-1 px-4 mt-1'><span className='font-bold'>BODY</span> {"{ quote: string }"}</div> 
                <div className='font-mono bg-green-200  p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ result: { id: number, firstName: string, lastName: string, lectures: string[] } }'}</div>
                <div className='font-mono bg-red-200 p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ error: string }'}</div>
              </li>
            </ul>

            <h3 className='text-2xl font-bold mt-6'>Math</h3>
            <ul>
              <li className='mt-4'>
                <span className='font-mono bg-slate-500 text-white p-1 px-4'><span className='font-bold'>POST</span> api/czechitas/math/add</span>
                <div className='font-mono bg-slate-500 text-white p-1 px-4 mt-1'><span className='font-bold'>BODY</span> {"{ a: number, b: number }"}</div> 
                <div className='font-mono bg-green-200  p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ result: number }'}</div>
                <div className='font-mono bg-red-200 p-1 px-4 mt-1'><span className='font-bold'>Returns</span> {'{ error: string }'}</div>
              </li>
            </ul>
          </div>
        </div>
    </main>
  )
}

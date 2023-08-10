'use client'
import {useState} from 'react'

export default function Home() {

  const [valorInput, setValorInput] = useState('')
  const [valorInput2, setValorInput2] = useState('')
  const [result, setResult] = useState('')

  const handleChangeInput = (e) =>{
setValorInput(e.target.value)
  }
  const handleChangeInput2 = (e) =>{
setValorInput2(e.target.value)
  }
  const calculo = () => {
    const parcial = (deposito * parseFloat(valorInput))/km
    const res = deposito - parcial
    const pago = res * parseFloat(valorInput2)
   
    setResult(pago.toFixed(2))
  }
  const reset = () => {
    setValorInput('')
    setValorInput2('')
    setResult('')
  }

const deposito = 50
const km = 840

  return (
    <>
      <div className="flex flex-col items-center justify-center w-[100vw] h[100vh] gap-4">
        <h1 className="text-red-500 text-center w-full bg-slate-400 rounded m-2
        ">Calculo de cuanto echar</h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="flex flex-col">
            <label htmlFor="">km restante</label>
            <input className="bg-slate-400 rounded p-4" value={valorInput} onChange={handleChangeInput}></input>
            </div>
            <div className="flex flex-col">
            <label htmlFor="">precio del carburante</label>
            <input className="bg-slate-400 rounded p-4" value={valorInput2} onChange={handleChangeInput2}></input>
          </div>
          </div>
          <div className='flex gap-2 w-full'>
          <button className="bg-green-200 rounded p-4 text-center" onClick={calculo}>
            calcular
          </button>
          <button className="bg-red-400 rounded p-4 text-center text-white" onClick={reset}>
            reset
          </button>
          </div>
          <div className="bg-slate-200 rounded p-4 text-center">
            {result}€
          </div>
        </div>
      </div>
    </>
  )
}

'use client'
import {useState} from 'react'

export default function Home() {

  const [valorInput, setValorInput] = useState('')
  const [valorInput2, setValorInput2] = useState('')
  const [valorInput3, setValorInput3] = useState(840)
  const [valorInput4, setValorInput4] = useState(50)
  const [result, setResult] = useState('')

  const handleChangeInput = (e) =>{
setValorInput(e.target.value)
  }
  const handleChangeInput2 = (e) =>{
setValorInput2(e.target.value)
  }
  const handleChangeInput3 = (e) =>{
setValorInput3(e.target.value)
  }
  const handleChangeInput4 = (e) =>{
setValorInput4(e.target.value)
  }
  const calculo = () => {
    const deposito = 50
    const km = 840
    const baseKm =  parseFloat(valorInput3)
    const baseDeposito = parseFloat(valorInput4)

    if(baseKm && baseDeposito === 0){
    const parcial = (deposito * parseFloat(valorInput))/km
    const res = deposito - parcial
    const pago = res * parseFloat(valorInput2)
    return setResult(pago.toFixed(2))
  }else{
    const parcial = (baseDeposito * parseFloat(valorInput))/baseKm
    const res = baseDeposito - parcial
    const pago = res * parseFloat(valorInput2)
    return setResult(pago.toFixed(2))
  }
   
    
  }
  const reset = () => {
    setValorInput('')
    setValorInput2('')
    setValorInput3(840)
    setValorInput4(50)
    setResult('')
  }



  return (
    <>
      <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] gap-4">
        <h1 className="text-red-500 text-center w-full p-2 bg-slate-400 rounded m-2
        ">Calculo de cuanto echar</h1>

        <div className="flex flex-col gap-3">
          <div className="text-sm text-start">
            <h2 className="text-xs underline underline-offset-4">Modo empleo:</h2>
            <p className='bg-slate-100'>Ingresa la capacidad de tu deposito y cuanto km maximo puede hacer tu coche puede hacer con un lleno, si no lo rellena por defecto será km totales 840km y deposito de 50L.</p>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col">
            <label htmlFor="" className='text-xs'>km totales</label>
            <input className="bg-indigo-300 rounded p-2" value={valorInput3} onChange={handleChangeInput3}></input>
            </div>
            <div className="flex flex-col">
            <label htmlFor="" className='text-xs'>Deposito carburante</label>
            <input className="bg-indigo-300 rounded p-2" value={valorInput4} onChange={handleChangeInput4}></input>
          </div>
          <hr />
          </div>
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

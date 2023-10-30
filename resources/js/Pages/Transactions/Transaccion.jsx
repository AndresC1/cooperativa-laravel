import React, {useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import InputForm from "@/Components/Form/InputForm.jsx";
import SelectForm from "@/Components/Form/SelectForm.jsx";
import {S} from "../../../../public/build/assets/transition-1c594fff.js";

export default function Transaccion({auth, cuentas}) {
    const [cuentaOrigen, setCuentaOrigen] = useState(null)
    const [cuentaDestino, setCuentaDestino] = useState(null)
    const [cuentasDisponibles, setCuentasDisponibles] = useState(cuentas)

    let HandleChange = (e) => {
        if(e.target.value === "") {
            return setCuentasDisponibles(cuentas)
        } else {
            let cuentaUsed = cuentas.find((cuenta) => cuenta.numero === e.target.value.numero)
            let cuentasDisponiblesNow = cuentas.filter((cuenta) => cuenta.numero !== cuentaUsed)
            setCuentasDisponibles(cuentasDisponiblesNow)
            if (e.target.name === "cuenta_origen") {
                setCuentaOrigen(cuentaUsed.value)
            }
            if (e.target.name === "cuenta_destino") {
                setCuentaDestino(cuentaUsed.value)
            }
        }
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Transaccion</h2>}
        >
            <Head title="Deposito"/>
            <div className="w-full h-auto flex justify-center items-start flex-col text-zinc-100 p-4">
                <section className="w-full h-auto rounded-md p-4 flex justify-center items-center flex-col border-[1px] border-zinc-400">
                    <h1 className="w-full text-left font-bold text-2xl">Transaccion</h1>
                    <form method={'POST'} action={'/transacciones/transferencia'} className="w-full grid grid-cols-1 gap-2 my-4">
                        <SelectForm value={cuentaOrigen} onChange={(e)=> {
                            HandleChange(e)
                        }}
                        name={"cuenta_origen"} label={"Cuenta Origen"} required={true} className={"w-full"} options={cuentasDisponibles.map((cuenta) => {
                            return {value: cuenta.numero, label: cuenta.numero}
                        })} />
                        <SelectForm value={cuentaDestino} onChange={(e) => {
                            HandleChange(e)
                        }} name={"cuenta_destino"} label={"Cuenta Destino"} required={true} className={"w-full"} options={cuentasDisponibles.map((cuenta) => {
                            return {value: cuenta.numero, label: cuenta.numero}
                        })} />
                        <InputForm name={"monto"} label={"Monto"} type={"number"} placeholder={"Monto"} required={true} className={"w-full"} />
                        <SelectForm name={"moneda"} label={"Moneda"} required={true} className={"w-full"} options={[
                            {value: "NIO", label: "Cordobas"},
                            {value: "USD", label: "Dolares"},
                        ]} />
                        <InputForm name={"descripcion"} label={"Descripcion"} type={"text"} placeholder={"Descripcion"} required={true} className={"w-full"} />
                        <button type={"submit"} className={"col-span-full hover:bg-zinc-800 h-10 px-2 rounded-md dark:bg-[#111827] dark:text-zinc-100 border-[1px] dark:border-zinc-500 bg-amber-50 text-gray-900"}>
                            <h1 className={"text-lg font-bold"}>Transferir</h1>
                        </button>
                    </form>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}

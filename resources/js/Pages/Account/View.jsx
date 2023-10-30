import React from "react";
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function AccountView({ auth, data, movimientos }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Cuenta</h2>}
        >
            <Head title="Cuenta" />

            <div className={"dark:bg-[#111827] w-full dark:text-zinc-100 p-6 py-10"}>
                <h1 className={"w-full text-left font-bold text-2xl"}>Informaci&oacute;n de la cuenta</h1>
                <div className={"w-full flex justify-between h-auto border-[1px] border-zinc-500 rounded-md my-4 p-4"}>
                <span className={"w-auto flex flex-col justify-start items-center"}>
                    <h1 className={"w-full text-left text-zinc-100 font-bold text-2xl"}>{data.nombre} - {data.moneda}</h1>
                    <h1 className={"w-full text-left text-zinc-500 font-semibold text-lg"}>{auth.user.name}</h1>
                    <h1 className={"w-full text-left text-zinc-500 font-semibold text-lg"}>{data.numero}</h1>
                </span>
                    <h1 className={"w-auto flex justify-center items-center text-zinc-100 font-semibold text-xl"}>{data.moneda == "NIO" ? "C$ " : "U$ "}{(data.saldo).toFixed(2)}</h1>
                </div>
                <h1 className={"w-full text-left font-bold text-2xl"}>Movimientos</h1>
                {
                    movimientos.length == 0 ? (
                        <div className={"w-full flex justify-center items- my-8 border-[1px] border-zinc-500 py-4 rounded-md"}>
                            <h1 className={"w-full text-center text-zinc-100 font-bold text-2xl"}>No hay movimientos registrados</h1>
                        </div>
                    ) :
                    movimientos.map((movimiento, index) => (
                        <div key={index} className={"w-full flex justify-between h-auto border-b-[1px] border-zinc-500 rounded-md my-4 p-4"}>
                        <span className={"w-auto flex flex-col justify-start items-center"}>
                            <h1 className={"w-full text-left text-zinc-100 font-bold text-xl"}>{movimiento.numero_referencia}</h1>
                            <h1 className={"w-full text-left text-zinc-500 font-semibold text-lg"}>{movimiento.descripcion}</h1>
                            <h1 className={"w-full text-left text-zinc-500 font-semibold text-lg"}>{movimiento.fecha}</h1>
                        </span>
                            <h1 className={"w-auto flex justify-center items-center text-zinc-100 font-semibold text-xl"}>{movimiento.tipo_movimiento == "deposito" ? "+ " : "- "}{movimiento.moneda == "NIO" ? "C$ " : "U$ "}{movimiento.monto}</h1>
                        </div>
                    ))
                }
            </div>
        </AuthenticatedLayout>
    );
}

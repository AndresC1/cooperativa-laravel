import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import InputForm from "@/Components/Form/InputForm.jsx";
import SelectForm from "@/Components/Form/SelectForm.jsx";

export default function Deposito({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Deposito</h2>}
        >
            <Head title="Deposito"/>
            <div className="w-full h-auto flex justify-center items-start flex-col text-zinc-100 p-4">
                <section className="w-full h-auto rounded-md p-4 flex justify-center items-center flex-col border-[1px] border-zinc-400">
                    <h1 className="w-full text-left font-bold text-2xl">Deposito</h1>
                    <form method={'POST'} action={'/transacciones/deposito'} className="w-full grid grid-cols-1 gap-2 my-4">
                        <InputForm name={"cuenta"} label={"Cuenta"} type={"text"} placeholder={"Cuenta"} required={true} className={"w-full"} />
                        <InputForm name={"monto"} label={"Monto"} type={"number"} placeholder={"Monto"} required={true} className={"w-full"} />
                        <SelectForm name={"moneda"} label={"Moneda"} required={true} className={"w-full"} options={[
                            {value: "NIO", label: "Cordobas"},
                            {value: "USD", label: "Dolares"},
                        ]} />
                        <InputForm name={"descripcion"} label={"Descripcion"} type={"text"} placeholder={"Descripcion"} required={true} className={"w-full"} />
                        <button type={"submit"} className={"col-span-full hover:bg-zinc-800 h-10 px-2 rounded-md dark:bg-[#111827] dark:text-zinc-100 border-[1px] dark:border-zinc-500 bg-amber-50 text-gray-900"}>
                            <h1 className={"text-lg font-bold"}>Depositar</h1>
                        </button>
                    </form>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}

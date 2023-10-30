import React from "react";
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import InputForm from "@/Components/Form/InputForm.jsx";
import SelectForm from "@/Components/Form/SelectForm.jsx";

export default function AccountCreate({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Registro de cuenta nueva</h2>}
        >
            <Head title="Registro de cuenta nueva" />

            <div className={"dark:bg-[#111827] w-full dark:text-zinc-100 p-6 py-10 flex flex-col gap-2"}>
                <h1 className={"w-full text-left font-bold text-2xl"}>Informaci&oacute;n de la cuenta</h1>
                <form method={"POST"} action={"/account/store"} className={"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                    <InputForm name={"nombre"} label={"Nombre"} type={"text"} placeholder={"Nombre"} required={true} className={"w-full"} />
                    <SelectForm name={"tipo_cuenta"} label={"Tipo de cuenta"} required={true} className={"w-full"} options={[
                        {value: "Ahorro", label: "Ahorro"},
                        {value: "Corriente", label: "Corriente"},
                    ]} />
                    <SelectForm name={"moneda"} label={"Moneda"} required={true} className={"w-full"} options={[
                        {value: "NIO", label: "Cordobas"},
                        {value: "USD", label: "Dolares"},
                    ]} />
                    <button type={"submit"} className={"col-span-full hover:bg-zinc-800 h-10 px-2 rounded-md dark:bg-[#111827] dark:text-zinc-100 border-[1px] dark:border-zinc-500 bg-amber-50 text-gray-900"}>
                        <h1 className={"text-lg font-bold"}>Registrar</h1>
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

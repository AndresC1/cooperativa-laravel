import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import TableComponent from "@/Components/Table/TableComponent.jsx";

export default function Cuentas({ auth, Accounts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Cuentas</h2>}
        >
            <Head title="Cuentas" />
            <main className={"w-full h-full my-10 px-8 flex justify-start items-center flex-col gap-4"}>
                <Link href={"/account/create"} className={"w-full max-w-[60rem] hover:bg-zinc-800 transition-all h-12 dark:bg-transparent dark:text-zinc-200 border-[1px] dark:border-zinc-600 bg-amber-50 rounded-md flex justify-center items-center gap-2"}>
                    <h1 className={"text-lg font-bold dark:text-zinc-100 text-gray-900"}>Agregar cuenta</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </Link>
                {
                    Accounts.length == 0 ? (
                        <div className={"w-full max-w-[60rem] h-40 dark:bg-transparent dark:text-zinc-200 border-[1px] dark:border-zinc-600 bg-amber-50 rounded-md flex justify-center items-center"}>
                            <h1 className={"text-lg font-bold dark:text-zinc-100 text-gray-900"}>No hay cuentas registradas</h1>
                        </div>
                    ) :
                    Accounts.map((account, index) => (
                        <div key={index} className={"w-full p-1 max-w-[60rem] h-40 dark:bg-transparent dark:text-zinc-200 border-[1px] dark:border-zinc-600 bg-amber-50 rounded-md flex flex-col justify-start items-start"}>
                            <section className={"w-full p-2 flex justify-start items-center rounded-t-md gap-4"}>
                                <div className={"bg-red-400/20 dark:bg-zinc-200/20 p-2 rounded-full dark:text-zinc-300 text-red-600"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                    </svg>
                                </div>
                                <span>
                                    <h1 className={"text-2xl font-bold dark:text-zinc-100 text-gray-900"}>{account.nombre}</h1>
                                    <h2 className={"text-base font-semibold text-gray-500"}>{auth.user.name}</h2>
                                </span>
                            </section>
                            <div className={"w-full flex justify-between items-center"}>
                                <section className={"w-full h-full p-2 flex justify-start items-start flex-col"}>
                                    <h1 className={"text-lg font-bold dark:text-zinc-400 text-gray-900"}>NI - {account.tipo_cuenta}</h1>
                                    <h1 className={"text-base font-semibold text-gray-500"}>{account.numero}</h1>
                                </section>
                                <Link href={"/account/view/" + account.id} className={"w-auto h-full pr-4 flex justify-center gap-2 items-center dark:text-zinc-400 text-gray-900"}>
                                    <h1 className={"text-lg font-bold"}>{account.moneda == "NIO"?"C$":"U$"}</h1>
                                    <h1 className={"text-lg font-semibold"}>{(account.saldo).toFixed(2)}</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </main>

        </AuthenticatedLayout>
    );
}

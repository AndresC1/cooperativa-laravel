import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Transacciones({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Transacciones</h2>}
        >
            <Head title="Transacciones" />

            <div className="w-full h-auto flex justify-center items-start flex-col text-zinc-100 p-4">
                <section className="w-full h-auto rounded-md p-4 flex justify-center items-center flex-col border-[1px] border-zinc-400">
                    <h1 className="w-full text-left font-bold text-2xl">Transacciones</h1>
                    <h1 className="w-full text-left font-semibold text-lg">Seleccione el tipo de transacci&oacute;n que desea realizar</h1>
                    <div className="w-full flex justify-center items-center flex-col md:flex-row gap-2 my-4">
                        <a href="/transacciones/deposito" className="w-full h-auto py-2 hover:text-zinc-200 hover:bg-zinc-800 transition-all px-2 rounded-md dark:bg-[#111827] dark:text-zinc-400 border-[1px] dark:border-zinc-500 bg-amber-50 text-gray-900 flex justify-center items-center gap-2">
                            <h1 className="text-lg font-bold">Dep&oacute;sito</h1>
                        </a>
                        <a href="/transacciones/retiro" className="w-full h-auto py-2 hover:text-zinc-200 hover:bg-zinc-800 transition-all px-2 rounded-md dark:bg-[#111827] dark:text-zinc-400 border-[1px] dark:border-zinc-500 bg-amber-50 text-gray-900 flex justify-center items-center gap-2">
                            <h1 className="text-lg font-bold">Retiro</h1>
                        </a>
                        <a href="/transacciones/transferencia" className="w-full h-auto py-2 hover:text-zinc-200 hover:bg-zinc-800 transition-all px-2 rounded-md dark:bg-[#111827] dark:text-zinc-400 border-[1px] dark:border-zinc-500 bg-amber-50 text-gray-900 flex justify-center items-center gap-2">
                            <h1 className="text-lg font-bold">Transferencia</h1>
                        </a>
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}

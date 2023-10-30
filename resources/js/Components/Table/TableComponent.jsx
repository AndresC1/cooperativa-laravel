import { useState } from 'react';
import {BoxTable} from "@/Components/Boxes/BoxTable.jsx";

export default function TableComponent({ children, cuentas }) {

    return (
        <BoxTable title={"Listado de cuentas"}>
            <table className={"w-full my-8 [&>thead>tr>th]:p-2 [&>thead>tr>th]:border-[1px] [&>thead>tr>th]:text-zinc-100 [&>thead>tr>th]:text-left [&>tbody>tr>td]:border-zinc-200 [&>tbody>tr>td]:text-zinc-100 [&>tbody>tr>td]:p-2 [&>tbody>tr>td]:border-[1px]"}>
                <thead>
                    <tr>
                        <th>N° de cuenta</th>
                        <th>Saldo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cuentas.map((cuenta, index) => (
                                <tr key={index}>
                                    <td>{cuenta.numero}</td>
                                    <td>{cuenta.saldo}</td>
                                    <td className={"flex justify-center items-center"}>
                                        <button className={"bg-[#fefefe] text-zinc-900 font-bold px-3 py-2 rounded-md"}>Ver informaci&oacute;n</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </BoxTable>
    );
}

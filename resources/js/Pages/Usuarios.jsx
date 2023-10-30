import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TableComponent from "@/Components/Table/TableComponent.jsx";
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Usuarios</h2>}
        >
            <Head title="Usuarios" />

            <TableComponent>
                <h1>children of table</h1>
            </TableComponent>
        </AuthenticatedLayout>
    );
}

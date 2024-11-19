import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { Filtrado } from "./Tabla/Cuerpo/Filtrado";
import { Normal } from "./Tabla/Cuerpo/Normal";

export const Tabla = () => {
    const { paquetes, filtro } = useContext(UserContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Cantidad de elementos por página

    // Calcula los índices para los elementos visibles
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Filtra y pagina los paquetes
    const filteredPaquetes = filtro.length > 0
        ? paquetes.filter((n) => n.email === filtro || n.tracking === filtro)
        : paquetes;

    const currentItems = filteredPaquetes.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredPaquetes.length / itemsPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4"></th>
                            <th scope="col" className="px-4 py-3">tracking</th>
                            <th scope="col" className="px-4 py-3">email</th>
                            <th scope="col" className="px-4 py-3">estado</th>
                            <th scope="col" className="px-4 py-3">plan</th>
                            <th scope="col" className="px-4 py-3">peso</th>
                            <th scope="col" className="px-4 py-3">sub-total</th>
                            <th scope="col" className="px-4 py-3">total</th>
                            <th scope="col" className="px-4 py-3">fecha registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((n) =>
                                filtro.length > 0 ? (
                                    <Filtrado key={n.id} n={n} />
                                ) : (
                                    <Normal key={n.id} n={n} />
                                )
                            )
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center py-3">No hay Datos</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <nav
                className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
                aria-label="Table navigation"
            >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {startIndex + 1}-{Math.min(endIndex, filteredPaquetes.length)}
                    </span>
                    of
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {filteredPaquetes.length}
                    </span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Previous
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => handlePageChange(page)}
                                className={`flex items-center justify-center px-3 py-2 text-sm leading-tight ${
                                    page === currentPage
                                        ? "text-primary-600 bg-primary-50 border-primary-300"
                                        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                }`}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

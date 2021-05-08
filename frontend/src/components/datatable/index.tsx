import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect } from "react";
import { useState } from "react";
import { SalePage } from "types/Sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/request";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0)

    const [page, setPage] = useState<SalePage>({
        totalPages: 0,
        totalElements: 0,
        number: 0,
        first: true,
        last: true
    })

    const changePage = (index: number) => {
        setActivePage(index);
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=10&sort=date,desc`)
            .then(response => {
                setPage(response.data)
            })
    })

    return (
        <>
            <Pagination page={page} onPageChange={changePage}/>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(x => (
                            <tr key={x.id}>
                                <td>{formatLocalDate(x.date, "dd/MM/yyyy")} </td>
                                <td>{x.seller.name}</td>
                                <td>{x.visited}</td>
                                <td>{x.deals}</td>
                                <td>{x.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable
import React from 'react'
import TableHead from '../TableHead/TableHead'
import TableBody from '../TableBody/TableBody'
import TableWithData from '../../hoc/TableWithData'
import { DataProvider } from '../../context/DataContext'
import { SortProvider } from '../../context/SortContext'
import { CheckedProvider } from '../../context/CheckedContext'


const Table = () => {
    return (
        <table class="table">
            <SortProvider>
                <CheckedProvider>
                    <DataProvider>
                        <TableHead />
                        <TableWithData>
                            {(data) => <TableBody data={data} />}
                        </TableWithData>
                    </DataProvider>
                </CheckedProvider>
            </SortProvider>
            <TableBody />
        </table>
    )
}

export default Table
import React from 'react'
import TableHead from '../TableHead/TableHead'
import TableBody from '../TableBody/TableBody'
import TableWithData from '../../hoc/TableWithData'


const Table = () => {
    return (
        <table class="table">
            <TableHead />
            <TableWithData>
                {(data) => <TableBody data={data} />}
            </TableWithData>
            <TableBody />
        </table>
    )
}

export default Table
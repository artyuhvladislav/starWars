import React, { useContext, useEffect } from 'react'
import TableBodyItem from '../TableBodyItem/TableBodyItem'
import { fetchPeople } from '../../http'
import { DataContext } from '../../context/DataContext'

const TableBody = ({ data }) => {

    return (
        <tbody class="table__body body-list">
            {data?.map(item => {

                return <TableBodyItem
                    name={item.name}
                    homeworld={item.homeworld.name}
                    birth={item.birth}
                    vehicles={item.vehicles}
                    starships={item.starships}
                    status={item.status}
                    checked={item.checked}
                />
            })}
        </tbody>
    )
}

export default TableBody
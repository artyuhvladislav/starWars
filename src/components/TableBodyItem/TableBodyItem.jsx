import React, { useState } from 'react'
import CheckBox from '../CheckBox/CheckBox'
import Action from '../Action/Action'
import Status from '../Status/Status'

const TableBodyItem = (props) => {

    const { name, birth, homeworld, vehicles, starships, status, checked } = props
    const [isActive, setIsActive] = useState(status)

    return (
        <tr className={isActive ? '' : 'td-gray'}>
            <td>
                <CheckBox checked={checked} />
            </td>
            <td>
                {name}
            </td>
            <td>
                {birth}
            </td>
            <td>
                {homeworld}
            </td>
            <td>
                {(vehicles.length === 0 && starships.length === 0) && 'unknown'}
                {vehicles.map(vehicle => <p>{vehicle.name}</p>)}
                {starships.map(starship => <p>{starship.name}</p>)}
            </td>
            <td>
                <Status status={isActive} setStatus={setIsActive} />
            </td>
            <td>
                <Action />
            </td>
        </tr>
    )
}

export default TableBodyItem
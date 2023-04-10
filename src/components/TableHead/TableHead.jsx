import React from 'react'
import TableHeadItem from '../TableHeadItem/TableHeadItem'
import CheckBox from '../CheckBox/CheckBox';
import CheckBoxAll from '../../hoc/CheckBoxAll';

const TableHead = () => {

    const tableHeadData = [
        { propName: 'name', value: 'Name' },
        { propName: 'birth', value: 'Born' },
        { propName: 'homeworld', value: 'Homeworld' },
        { propName: { vehicles: 'vehicles', starships: 'starships' }, value: 'Vehicles and Starships' },
        { propName: 'status', value: 'Status' },
    ]

    return (
        <thead class="table__head head-list">
            <tr>
                <th><CheckBoxAll /></th>
                {tableHeadData.map(({ propName, value }, idx) => <TableHeadItem name={value} id={idx} prop={propName} />)}
                <th>
                    <div class="head-list__item">
                        <h3>Actions</h3>
                    </div>
                </th>
            </tr>
        </thead>
    )
}

export default TableHead
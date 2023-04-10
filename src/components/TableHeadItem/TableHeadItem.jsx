import React from 'react'
import Sort from '../Sort/Sort'

const TableHeadItem = ({ name, id, prop }) => {
    return (
        <th>
            <div class="head-list__item" >
                <h3>{name}</h3>
                <Sort id={id} prop={prop} />
            </div >
        </th>

    )
}

export default TableHeadItem
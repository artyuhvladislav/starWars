import React from 'react'
import Search from '../Search/Search'
import ToolItem from '../ToolItem/ToolItem'
import { useFilter } from '../../context/FilteredContext'

const ToolList = () => {
    const [filterOptions] = useFilter()
    return (
        <div class="controls">
            <Search />
            <ToolItem items={filterOptions.homeWorld.allItems} typeName='homeWorld' />
            <ToolItem items={filterOptions.species.allItems} typeName='species' />
            <ToolItem items={filterOptions.status.allItems} typeName='status' />
        </div>
    )
}

export default ToolList
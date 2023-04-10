import React, { useContext } from 'react'
import { SortContext } from '../../context/SortContext'

const Sort = ({ id, prop }) => {

    const { setSortObj } = useContext(SortContext)

    const handleSortUp = () => {
        debugger
        setSortObj({ id, flag: true, prop })
    }

    const handleSortDown = () => {
        setSortObj({ id, flag: false, prop })
    }

    return (
        <div class="sort">
            <i onClick={handleSortUp} className="material-icons icon-sort icon-sort-top">play_arrow</i>
            <i onClick={handleSortDown} className="material-icons">play_arrow</i>
        </div>
    )
}

export default Sort
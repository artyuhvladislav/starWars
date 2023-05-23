import { useRef, useState } from 'react'
import { useSort } from '../../context/SortContext'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useCallback } from 'react'

const Sort = ({ id, prop, refParent }) => {
    const [iconState, setIconState] = useState({ up: '', down: '' })
    const [_, setSortObj] = useSort()
    const ref = useRef()
    const handleClick = useCallback(() => setIconState({ up: '', down: '' }), [])
    useOnClickOutside(ref, handleClick, refParent);

    const handleSortUp = () => {
        setSortObj({ id, flag: true, prop })
        setIconState({ up: 'icon-sort-active', down: '' })
    }

    const handleSortDown = () => {
        setSortObj({ id, flag: false, prop })
        setIconState({ up: '', down: 'icon-sort-active' })
    }

    return (
        <div class="sort" ref={ref}>
            <i onClick={handleSortUp} className={`material-icons icon-sort ${iconState.up}`}>play_arrow</i>
            <i onClick={handleSortDown} className={`material-icons icon-sort ${iconState.down}`}>play_arrow</i>
        </div>
    )
}

export default Sort
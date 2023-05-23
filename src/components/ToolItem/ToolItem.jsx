import React, { useCallback, useRef, useState } from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useFilter } from '../../context/FilteredContext'

const ToolItem = ({ items, typeName }) => {
    const [filterOptions, setFilterOption] = useFilter()
    const [visible, setVisible] = useState(false)
    const [activeItem, setActiveItem] = useState(typeName)
    const ref = useRef()
    const classNameListVisible = visible ? 'select__list_visible' : ''
    const classNameArrowRotated = visible ? 'select-arrow_rotated' : ''

    const handleClick = useCallback(() => setVisible(false), [])

    const handleVisibility = () => {
        setVisible(!visible)
    }

    const handleSelectItem = (name) => {
        setActiveItem(name)
        setFilterOption({
            ...filterOptions,
            [typeName]: { ...filterOptions[typeName], active: (name === typeName ? null : name) },
            filteredFieldName: typeName
        })
    }

    useOnClickOutside(ref, handleClick)

    return (
        <div class="select" id="spec" onClick={handleVisibility} ref={ref}>
            <div class="select__item select__item_active">{activeItem}</div>
            <div class={`select__list ${classNameListVisible}`}>
                {items.map((name) => <div class="select__list_item" onClick={() => handleSelectItem(name)}>{name}</div>)}
            </div>
            <div class={`select-arrow ${classNameArrowRotated}`}>
                <i class="material-icons">play_arrow</i>
            </div>
        </div>
    )
}

export default ToolItem
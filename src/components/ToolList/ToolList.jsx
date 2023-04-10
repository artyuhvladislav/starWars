import React from 'react'
import Search from '../Search/Search'
import ToolItem from '../ToolItem/ToolItem'

const ToolList = () => {
    return (
        <div class="controls">
            <Search />
            <ToolItem />
            <div class="select" id="home">
                <div class="select__item_active">one</div>
                <div class="select-arrow">
                    <i class="material-icons">play_arrow</i>
                </div>
            </div>
            <div class="select" id="status">
                <div class="select__item_active">one</div>
                <div class="select-arrow">
                    <i class="material-icons">play_arrow</i>
                </div>
            </div>
        </div>
    )
}

export default ToolList
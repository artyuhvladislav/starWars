import React from 'react'

const ToolItem = () => {
    return (
        <div class="select" id="spec">
            <div class="select__item_active">one</div>
            <div class="select__list">
                <div class="select__item">one</div>
                <div class="select__item">people</div>
                <div class="select__item">three</div>
            </div>
            <div class="select-arrow">
                <i class="material-icons">play_arrow</i>
            </div>
        </div>
    )
}

export default ToolItem
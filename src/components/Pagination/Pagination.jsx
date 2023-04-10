import React from 'react'

const Pagination = () => {
    return (
        <ul class="pagination">
            <li><a href="#" class="button"><i class="material-icons">keyboard_arrow_left</i></a></li>
            <li><a href="#" class="button button-active">1</a></li>
            <li><a href="#" class="button">2</a></li>
            <li><a href="#" class="button">3</a></li>
            <li><span>...</span></li>
            <li><a href="#" class="button">23</a></li>
            <li><a href="#" class="button">24</a></li>
            <li><a href="#" class="button">25</a></li>
            <li><a href="#" class="button"><i class="material-icons">keyboard_arrow_right</i></a></li>
        </ul>
    )
}

export default Pagination
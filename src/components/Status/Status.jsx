import React, { useState } from 'react'

const Status = ({ status, setStatus }) => {
    // const [isActive, setIsActive] = useState(status)
    const handleisActiveClick = () => {
        setStatus(!status)
    }
    return (
        <div class="body-list__item" onClick={handleisActiveClick}>
            {status ? <div>
                <i class="material-icons icon-status">check_circle</i>
            </div> : <div>
                <i class="material-icons material-symbols-outlined icon-status-gray">do_not_disturb_on</i>
            </div>}

        </div>
    )
}

export default Status
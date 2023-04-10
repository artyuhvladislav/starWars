import React, { useState } from 'react'

const CheckBox = ({ checked }) => {
    const [checkedBox, setCheckedBox] = useState(checked)
    return (
        <input type="checkbox" checked={checkedBox} onChange={() => setCheckedBox(!checkedBox)} />
    )
}

export default CheckBox
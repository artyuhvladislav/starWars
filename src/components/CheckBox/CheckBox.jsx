import { useState, useEffect } from 'react'

const CheckBox = ({ checked }) => {

    useEffect(() => {
        setCheckedBox(checked)
    }, [checked])

    const [checkedBox, setCheckedBox] = useState(checked)
    return (
        <input type="checkbox" checked={checkedBox} onChange={() => setCheckedBox(!checkedBox)} />
    )
}

export default CheckBox
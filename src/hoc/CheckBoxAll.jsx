import React, { useState, useContext } from 'react'
import CheckBox from '../components/CheckBox/CheckBox'
import { CheckedContext } from '../context/CheckedContext'
import { DataContext } from '../context/DataContext'

const CheckBoxAll = () => {
    const { data, setData } = useContext(DataContext)
    const [checked, setChecked] = useState(false)

    const handleChecked = () => {
        setChecked(!checked)
        const checkedData = data.map(item => ({ ...item, checked: checked }))
        setData(checkedData)
    }
    return (
        <input type="checkbox" checked={checked} onChange={handleChecked} />
    )
}

export default CheckBoxAll
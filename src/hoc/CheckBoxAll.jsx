import { useState } from 'react'
import CheckBox from '../components/CheckBox/CheckBox'
import { useChecked } from '../context/CheckedContext'
import { useSetData } from '../context/DataContext'

const CheckBoxAll = () => {
    // const { data, setData } = useContext(DataContext)
    const [data, setData] = useSetData()
    const [_, setCheckedData] = useChecked()
    const [checked, setChecked] = useState(false)

    const handleChecked = () => {
        console.log('first', { data })
        setChecked(!checked)
        const checkedData = [...data.map(item => ({ ...item, checked: !checked }))]
        // setCheckedData(checkedData)
        setData(checkedData)
        console.log('second', { checkedData })

    }
    return (
        <input type="checkbox" checked={checked} onChange={handleChecked} />
    )
}

export default CheckBoxAll
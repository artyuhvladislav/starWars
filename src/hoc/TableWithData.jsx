import { useContext, useEffect } from 'react'
import { fetchPeople } from '../http'
import { DataContext } from '../context/DataContext'
import { SortContext } from '../context/SortContext'
import { sortTableData } from '../utils/sortTabelData'
import { addStatus } from '../utils/addStatus'
import { addChecked } from '../utils/addChecked'

const TableWithData = ({ children }) => {
    const { data, setData } = useContext(DataContext)
    const { sortObj } = useContext(SortContext)

    useEffect(() => {
        fetchPeople(1).then(data => {
            const dataWithStatus = addStatus(data)
            const dataWithChecked = addChecked(dataWithStatus)
            setData(dataWithChecked)
        })
    }, [])

    useEffect(() => {
        const sortedData = sortTableData(sortObj, data)
        setData(sortedData)
    }, [sortObj])

    return <>{children(data)}</>
}

export default TableWithData
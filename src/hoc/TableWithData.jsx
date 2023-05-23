import { useEffect, useRef, useState } from 'react'
import { fetchPeople } from '../http'
import { useSetData } from '../context/DataContext'
import { useSort } from '../context/SortContext'
import { sortTableData } from '../utils/sortTabelData'
import { addStatus } from '../utils/addStatus'
import { addChecked } from '../utils/addChecked'
import { useSearchParam } from '../context/SearchContext'
import { addPersonType } from '../utils/addPersonType'
import { setFilterOptions } from '../utils/setFilterOptions'
import { useFilter } from '../context/FilteredContext'
import { filterTableData } from '../utils/filterTableData'
import { memoizedData } from '../utils/memoizedData'
import Loader from '../components/Loader/Loader'

const TableWithData = ({ children }) => {
    const [data, setData] = useSetData()
    const [loading, setLoading] = useState(false)
    const [sortObj] = useSort()
    const [searchParam] = useSearchParam()
    const [filterOptions, setFilterOption] = useFilter()
    const memoData = useRef()

    useEffect(() => {
        setLoading(true)
        fetchPeople(1, searchParam).then(data => {
            const dataWithStatus = addStatus(data)
            const dataWithChecked = addChecked(dataWithStatus)
            const dataWithType = addPersonType(dataWithChecked)
            setData(dataWithType)
            memoData.current = memoizedData(dataWithType, searchParam)
            const filterData = setFilterOptions(dataWithType)
            setFilterOption(filterData)
            setLoading(false)
            console.log({ memo: memoData.current })
        })
    }, [searchParam])

    useEffect(() => {
        const filteredData = filterTableData(memoData.current, filterOptions)
        setData(filteredData)
    }, [filterOptions])

    useEffect(() => {
        const sortedData = sortTableData(sortObj, data)
        setData(sortedData)
    }, [sortObj])



    return <>
        {loading && <Loader />}
        {!loading && children(data)}
    </>
}

export default TableWithData
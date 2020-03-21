import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import ToolsPannel from '../../components/toolsPanel/toolsPanel'
import {
    filterSearchValueChanged,
    filterSelectValueChanged,
    filterSwitchValueChanged,
    isVirtualizationOn,
    changeColumnsToDisplay
} from '../../actions/actionCreator'

export default function ToolsPanelContainer({ locationSearch }) {
    const dispatch = useDispatch()
    const {
        isVirtOn,
        columnsFromRedux,
        selectValue,
        searchValue,
        isMarriedChecked,
    } = useSelector(state => ({
        isVirtOn: state.virtualization.isChecked,
        columnsFromRedux: state.toolsSettings.columns,
        selectValue: state.toolsSettings.selectValue,
        searchValue: state.toolsSettings.searchValue,
        isMarriedChecked: state.toolsSettings.isMarriedChecked,
    }))
    const [searchInputValue, setSearchValue] = useState(searchValue)
    const [selectedOptions, setSelectedOptions] = useState(selectValue)
    const [columns, setColumns] = React.useState(columnsFromRedux)

    const handleColumnChange = name => event => {
        setColumns({ ...columns, [name]: event.target.checked });
        dispatch(changeColumnsToDisplay({...columns, [name]: event.target.checked}))
    };

    const dataForColumns = {
        isEmailOn: columns.isEmailOn,
        isChangeDateOn: columns.isChangeDateOn,
        isScoreOn: columns.isScoreOn,
        isMarriedOn: columns.isMarriedOn,
        isSizeOn: columns.isSizeOn,
        handleChange: handleColumnChange,
    }

    const handleSelectChange = (event) => {
        if (event === null) {
            setSelectedOptions([])
            dispatch(filterSelectValueChanged([]))
            return;
        }
        const selectedOptionsArray = event.map((option)=>option.value)
        setSelectedOptions(selectedOptionsArray)
        dispatch(filterSelectValueChanged(selectedOptionsArray))
    }

    const handleSwitchChange = (event) => {

        dispatch(filterSwitchValueChanged(event.target.checked))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(filterSearchValueChanged(searchInputValue))
        }, 400)
        return () => clearTimeout(timer)
    }, [searchInputValue, dispatch])

    useEffect(()=> {
        const values = queryString.parse(locationSearch)
        const { enum: enumSearchQuery, text } = values

        if (text) {
            setSearchValue(text)
            dispatch(filterSearchValueChanged(text))
        }

        if (enumSearchQuery) {
            setSelectedOptions(enumSearchQuery.split(','))
            dispatch(filterSelectValueChanged(enumSearchQuery.split(',')))
        }
    }, [dispatch, locationSearch])

    return (
        <ToolsPannel
            handleSearchChange={event => {setSearchValue(event.target.value)}}
            handleSelectChange={handleSelectChange}
            handleSwitchChange={handleSwitchChange}
            value = {searchInputValue}
            isVirtualizationOn={isVirtOn}
            handleIsVirtualizationCheck={(event)=> dispatch(isVirtualizationOn(event.target.checked))}
            columns={dataForColumns}
            selectValue={selectedOptions}
            isMarriedChecked={isMarriedChecked}
        />
    )
}

ToolsPanelContainer.propTypes = {
    locationSearch: PropTypes.string,
}

ToolsPanelContainer.defaultProps = {
    locationSearch: '',
}

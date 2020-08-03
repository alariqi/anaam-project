import React, { useContext } from 'react'

import { Button } from '@dhis2/ui'

import { filterButton } from '../App.module.css'
import AppContext from '../context/app-context'

const FilterButton = () => {
    const {
        selectedOrgUnits,
        programSelected,
             refetch,
    } = useContext(AppContext)

    const onClickGetComments = () => {
        console.log(selectedOrgUnits)
       // alert(programSelected)
       // alert(selectedOrgUnits)
        console.log(programSelected)
        if (!programSelected || !selectedOrgUnits.length) {
            alert(
                '1 Please select valid Program and organisation units!'
            )
            alert(true)
        } else {
            refetch({
                orgUnits: selectedOrgUnits
                    .map(item => item.split(/[\/ ]+/).pop())
                    .join(),
                dataSets: programSelected,
            })
        }
    }

    return (
        <div className={filterButton}>
            <Button
                name="Filter button"
                onClick={onClickGetComments}
                type="button"
                className={filterButton}
            >
                Get Events
            </Button>
        </div>
    )
}

export default FilterButton

import React from 'react'

import {OrgUnitTree} from './OrgUnitTree'
import {ProgramDropdown} from './ProgramDropdown'
import FilterButton from './FilterButton'

import {
    filterBoxContainer,
    filterBoxItemsContainer,
} from '../App.module.css'

const FilterBar = () => {
    return (
        <div className={filterBoxContainer}>
            <div className={filterBoxItemsContainer}>
                <OrgUnitTree />
                <ProgramDropdown />
                <FilterButton />
            </div>
        </div>
    )
}

export default FilterBar

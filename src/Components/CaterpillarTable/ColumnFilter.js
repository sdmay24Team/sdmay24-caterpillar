import React from 'react'
import "./CaterpillarTable.css"

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
        <span>
            <input
                className='ColumnFilter'
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
        </span>
    )
}

export default ColumnFilter
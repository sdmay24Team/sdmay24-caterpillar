import React from 'react'
import { catData } from './CaterpillarTable';

//Custom filter for the cage column - very stringent needs for pulling certain consts to and from
export const CageFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    
    //Filtering cage data to only include certain ones
    const cages = catData.data.listCaterpillars.items.map((item) => item.Cage).filter((value, index, current_value) => current_value.indexOf(value) === index);
    return (
        <span>
            <input
                value={filterValue || ''}
                list="cages"
                onChange={(e) => setFilter(e.target.value)}
            />
            <datalist id="cages">
                {cages.map((item, key) =>
                    <option key={key} value={item} />
                )}
            </datalist>
        </span>
    )
}

export default CageFilter
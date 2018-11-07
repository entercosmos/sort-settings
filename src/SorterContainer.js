import React from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'

const Sorter = SortableElement(({sorter, i, onRender}) => onRender({sorter, index: i}))
const SorterContainer = SortableContainer(({sorters, onRender, disabled}) => (
    <div>
        {sorters.map((sorter, index) => (
            <Sorter
                key={index}
                index={index}
                i={index}
                sorter={sorter}
                disabled={disabled}
                onRender={onRender}
            />
        ))}
    </div>
))

export default SorterContainer
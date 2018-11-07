import React from 'react'
import Select from 'react-select'

export default (props) => {

    let value = null

    if (props.isMulti && props.value) {

        value = props.value
            .map(id => {
                return props.options.find(option => {
                    return option.value === id
                })
            })
    } else {
        value = props.options.find(option => option.value === props.value)
    }

    const onChange = (option) => {

        if (props.isMulti) {
            props.onChange({
                value: option && option.length ? option.map(option => option.value) : null
            })
            return
        }

        props.onChange({
            value: option ? option.value : null
        })
    }

    let styles = {
        container: (styles) => ({
            ...styles,
            cursor: 'pointer'
        }),
        valueContainer: (styles) => ({
            ...styles,
            padding: '10px 20px;'
        }),
        singleValue: (styles) => ({
            ...styles,
            overflow: 'visible'
        }),
        control: (styles, {isFocused}) => ({
            ...styles,
            minHeight: 50,
            border: '1px solid #ccc',
            boxShadow: isFocused ? '0 0 0 1px #000' : 'none',
            borderRadius: 3,
            cursor: 'pointer',
            '&:hover': {
                borderColor: '#000'
            }
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            padding: '8px 14px',
            color: '#000'
        }),
        indicatorsContainer: (styles) => ({
            ...styles
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: '#fff',
            width: 2
        }),
        option: (styles, {isSelected}) => ({
            ...styles,
            backgroundColor: isSelected ? '#000' : null,
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#fafafa',
                color: '#000'
            },
            '&:active': {
                backgroundColor: '#f7f7f7',
                color: '#000'
            }
        })
    }

    styles = props.styles ? props.styles(styles) : styles

    return (
        <Select
            id={props.id}
            isMulti={props.isMulti}
            isClearable={props.isClearable}
            isSearchable={false}
            formatOptionLabel={props.formatOptionLabel}
            value={value}
            options={props.options}
            onChange={onChange}
            classNamePrefix={'react-select'}
            styles={styles}
        />
    )
}
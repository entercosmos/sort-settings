import React from 'react'
import {css} from 'emotion'

const Button = ({active, onClick, children}) => (
    <div
        className={css`
            border-radius: 3px;
            padding: 8px;
            flex: 1 1 auto;
            min-width: 0;
            min-height: 0;
            text-align: center;
            cursor: pointer;
            ${active ? 'color: #fff;' : ''}
            ${active ? 'background-color: #3acc85;' : ''}
       `}
        onClick={onClick}
    >
        {children}
    </div>
)

export default class SegmentedControl extends React.Component {

    render() {

        return (
            <div
                className={css`
                    padding: 4px;
                    display: flex;
                    align-items: center;
                    flex: none;
                    background-color: rgba(0,0,0,0.05);
                    border-radius: 3px;
                `}
            >
                <Button
                    active={this.props.value === this.props.trueValue}
                    onClick={() => this.props.onChange({value: this.props.trueValue})}
                >
                    {this.props.trueLabel}
                </Button>
                <Button
                    active={this.props.value === this.props.falseValue}
                    onClick={() => this.props.onChange({value: this.props.falseValue})}
                >
                    {this.props.falseLabel}
                </Button>
            </div>
        )
    }
}

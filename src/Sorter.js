import React from 'react'
import {css} from 'emotion'
import icons from './icons'
import SegmentedControl from './SegmentedControl'
import FieldSelect from './FieldSelect'

export default class Sorter extends React.Component {

    render() {

        return (
            <div
                className={css`
                    display: flex;
                    padding: 16px;
                    position: relative;
                    cursor: pointer;
                    user-select: none;
                    border-bottom: 1px solid #eee;
                    background-color: #fff;
                `}
            >
                <div
                    className={css`
                        width: 100%;
                        padding-right: 16px;
                    `}
                >
                    <div
                        className={css`
                            margin-bottom: 16px;
                            color: #888;
                        `}
                    >
                        {this.props.index === 0 ? 'Sort by' : 'then by'}
                    </div>
                    <div
                        className={css`
                            margin-bottom: 16px;
                        `}
                    >
                        <FieldSelect
                            options={this.props.fields}
                            value={this.props.fieldId}
                            onChange={({value}) => {
                                this.props.onFieldIdChange({
                                    id: this.props.id,
                                    fieldId: value
                                })
                            }}
                        />
                    </div>
                    <div
                        className={css`
                            margin-bottom: 16px;
                            color: #888;
                        `}
                    >
                        from
                    </div>
                    <div>
                        <SegmentedControl
                            value={this.props.ascending}
                            onChange={({value}) => {
                                this.props.onAscendingChange({
                                    id: this.props.id,
                                    value
                                })
                            }}
                            trueValue={true}
                            falseValue={false}
                            trueLabel={'A → Z'}
                            falseLabel={'Z → A'}
                        />
                    </div>
                </div>
                <div
                    className={css`
                        display: flex;
                        align-items: center;
                        justify-content: end;
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                    `}
                >
                    <div
                        className={css`
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            background-color: #f9f9f9;
                            &:hover {
                                background-color: #eee;
                            }
                            &:active {
                                background-color: #ccc;
                            }
                        `}
                        onClick={e => {
                            e.stopPropagation()
                            this.props.onRemove({id: this.props.id})
                        }}
                    >
                        {icons.close({width: 10})}
                    </div>
                </div>
            </div>
        )
    }
}
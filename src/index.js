import React from 'react'
import {css} from 'emotion'
import SorterContainer from './SorterContainer'
import Sorter from './Sorter'
import FloatingActionButton from './FloatingActionButton'
import icons from './icons'

export default class SortSettings extends React.Component {

    render() {
        return (
            <div
                className={css`
                    width: 100%;
                    height: 100%;
                    position: relative;
                    background-color: #fff;
                `}
            >
                <div
                    className={css`
                        width: 100%;
                        height: 100%;
                        overflow-x: hidden;
                        overflow-y: auto;
                        padding-bottom: 120px;
                    `}
                >
                    {this.props.sorters && this.props.sorters.length ? (
                        <SorterContainer
                            sorters={this.props.sorters}
                            disabled={this.props.sorters.length === 1}
                            onRender={this.renderSorter}
                            onSortEnd={this.handleSort}
                            pressDelay={200}
                            lockAxis={'y'}
                            helperClass={css`
                                z-index: 2000;
                                transform: scale(1.1);
                            `}
                        />
                    ) : (
                        <div
                            className={css`
                                    height: 100%;
                                    padding: 16px;
                                    display: flex;
                                    align-items: center;
                                    text-align: center;
                                    color: #888;
                                `}
                        >
                            No sorters applied to this view
                        </div>
                    )}
                    <FloatingActionButton
                        className={css`
                            position: absolute;
                            bottom: 30px;
                            margin-left: -30px;
                            left: 50%;
                        `}
                        onClick={this.props.onCreate}
                    >
                        {icons.plus({width: 19})}
                    </FloatingActionButton>
                </div>
            </div>
        )
    }

    handleSort = ({oldIndex, newIndex}) => {
        this.props.onSort({oldIndex, newIndex})
    }

    renderSorter = ({sorter, index}) => {

        return (
            <Sorter
                id={sorter.id}
                index={index}
                fields={this.props.fields}
                fieldId={sorter.fieldId}
                ascending={sorter.ascending}
                onFieldIdChange={this.props.onFieldIdChange}
                onAscendingChange={this.props.onAscendingChange}
                onRemove={this.props.onRemove}
            />
        )
    }
}
import React, {Component} from 'react'
import {css, injectGlobal} from 'emotion'
import {render} from 'react-dom'

import SortSettings from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const icon = (props) => (
    <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g fillRule="nonzero" fill="currentColor">
                <path
                    d="M0.0392772977,6.67714061 L6.71641791,0 L100,93.2835821 L93.3228594,99.9607227 L0.0392772977,6.67714061 Z M93.2835821,0 L99.9607227,6.67714061 L6.67714061,99.9607227 L0,93.2835821 L93.2835821,0 Z"/>
            </g>
        </g>
    </svg>
)

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}


const FIELDS = [{
    id: 'fld1',
    icon,
    name: 'Field 1'
}, {
    id: 'fld2',
    icon,
    name: 'Field 2'
}, {
    id: 'fld3',
    icon,
    name: 'Field 3'
}, {
    id: 'fld4',
    icon,
    name: 'Field 4'
}, {
    id: 'fld5',
    icon,
    name: 'Field 5'
}, {
    id: 'fld6',
    icon,
    name: 'Field 6'
}, {
    id: 'fld7',
    icon,
    name: 'Field 7'
}, {
    id: 'fld8',
    icon,
    name: 'Field 8'
}, {
    id: 'fld9',
    icon,
    name: 'Field 9'
}, {
    id: 'fld10',
    icon,
    name: 'Field 10'
}, {
    id: 'fld11',
    icon,
    name: 'Field 11'
}, {
    id: 'fld12',
    icon,
    name: 'Field 12'
}, {
    id: 'fld13',
    icon,
    name: 'Field 13'
}, {
    id: 'fld14',
    icon,
    name: 'Field 14'
}, {
    id: 'fld15',
    icon,
    name: 'Field 15'
}]

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

class Demo extends Component {
    render() {
        return <div>
            <h1>sort-settings Demo</h1>
            <h2>
                Desktop
            </h2>
            <Viewport>
                <div
                    className={css`
              width: 600px;
              height: 400px;
            `}
                >
                    <SortSettings
                        fields={FIELDS}
                        sorters={[{
                            id: 'srt1',
                            fieldId: 'fld1',
                            ascending: true
                        }, {
                            id: 'srt2',
                            fieldId: 'fld2',
                            ascending: true
                        }, {
                            id: 'srt3',
                            fieldId: 'fld3',
                            ascending: false
                        }]}
                        onCreate={log('onCreate')}
                        onRemove={log('onRemove')}
                        onSort={log('onSort')}
                        onFieldIdChange={log('onFieldIdChange')}
                        onAscendingChange={log('onAscendingChange')}
                    />
                </div>
            </Viewport>
            <h2>
                Mobile
            </h2>
            <Viewport>
                <div
                    className={css`
              width: 350px;
              height: 400px;
            `}
                >
                    <SortSettings
                        fields={FIELDS}
                        sorters={[{
                            id: 'srt1',
                            fieldId: 'fld1',
                            ascending: true
                        }, {
                            id: 'srt2',
                            fieldId: 'fld2',
                            ascending: true
                        }, {
                            id: 'srt3',
                            fieldId: 'fld3',
                            ascending: false
                        }]}
                        onCreate={log('onCreate')}
                        onRemove={log('onRemove')}
                        onSort={log('onSort')}
                        onFieldIdChange={log('onFieldIdChange')}
                        onAscendingChange={log('onAscendingChange')}
                    />
                </div>
            </Viewport>
            <h2>
                Empty list
            </h2>
            <Viewport>
                <div
                    className={css`
              width: 250px;
              height: 400px;
            `}
                >
                    <SortSettings
                        sorters={[]}
                        onCreate={log('onCreate')}
                        onRemove={log('onRemove')}
                        onSort={log('onSort')}
                        onFieldIdChange={log('onFieldIdChange')}
                        onAscendingChange={log('onAscendingChange')}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))

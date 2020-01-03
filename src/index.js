// export
// export default test
// export var a = 10

import React from 'react'
import ReactDom from 'react-dom'

// ReactDom.render(
//     // 1: what to rander
//     React.createElement(
//         'div', // aactual html element to be cerated
//         null, // id, class, properties, props
//         'This div is cerated using react.' // content actual
//     ),

//     // 2: where to render
//     document.getElementById('react')
// )

// jsx 
// const element = <h1>This is Jsx</h1>

// ReactDom.render(element, document.getElementById('jsx'))


function Button(props) {
    return <button type="submit">{props.label}</button>
}

ReactDom.render(<Button label="Save" />, document.getElementById('save'))

ReactDom.render(<Button label="Cancel" />, document.getElementById('cancel'))




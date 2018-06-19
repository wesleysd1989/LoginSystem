import React from 'react'
import If from '../../containers/If/'
export default props => (
    <If test={!props.hide}>
        <div style={{width: '75%'}}>
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
            <span className={`glyphicon glyphicon-${props.icon}
  form-control-feedback`}></span>
        </div>
    </If>
)
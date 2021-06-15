import React from 'react'


const Input = (props :any) => {
	return(
		<div>
			<label>
				{props.inputLabel}:&nbsp;
				<input
					type={props.inputType}
					name={props.inputName}
					id={props.inputName}
					placeholder={props.inputHolder}
					onChange={props.onChange}/>
			</label>
		</div>
	)
}

export default Input
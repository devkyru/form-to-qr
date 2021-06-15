import React from 'react'
import Input from './Input'
import useForm from '../hooks/useForm'
import {
	StyledQRContainer
} from './Form.style'

const Form = () => {

	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	}

	const {onChange, onSubmit, values} = useForm(
		formUserCallback,
		initialState,
	)

	function downloadQR(){
		const thisCanvas = document.getElementById("myQR") as HTMLCanvasElement;
		const pngUrl = thisCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

		let downloadLink = document.createElement("a");
		downloadLink.href = pngUrl;
		downloadLink.download = "myQR.png";

		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	}

	async function formUserCallback(){
		downloadQR();
	}

	var QRCode = require('qrcode.react');

	return (
		<div>
			<form onSubmit={onSubmit}>
				{/* First Name */}
				<Input
					inputLabel="First Name"
					inputType="text"
					inputName="firstName"
					inputHolder="First Name"
					onChange={onChange}/>
				{/* Last Name */}
				<Input
					inputLabel="Last Name"
					inputType="text"
					inputName="lastName"
					inputHolder="Last Name"
					onChange={onChange}/>
				{/* Email */}
				<Input
					inputLabel="Email"
					inputType="email"
					inputName="email"
					inputHolder="Email"
					onChange={onChange}/>
				{/* Phone Number */}
				<Input
					inputLabel="Phone Number"
					inputType="tel"
					inputName="phone"
					inputHolder="09-- --- ----"
					onChange={onChange}/>

				<input type="submit" value="Submit"/ >
			</form>
			<StyledQRContainer>
				<QRCode
					id="myQR"
					value={JSON.stringify(values)}
					size={290}
					level={"H"}
					includeMargin={true}
				/>
			</StyledQRContainer>
		</div>
	)
}

export default Form
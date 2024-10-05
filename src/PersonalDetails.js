import React, { useState } from "react";
import "./PersonalDetails.css";
function PersonalDetails() {
	const [title,setTitle] = useState("");
	const [gender,setGender] = useState("");
	const [maritalStatus,setMaritalStatus] = useState("");

	// Options for the dropdowns
	const titles = ["Mr.","Ms.","Mrs.","Dr."];
	const genders = ["Male","Female","Other"];
	const maritalStatuses = ["Single","Married","Divorced","Widowed"];

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(
			`Submitted: \nTitle: ${title} \nGender: ${gender} \nMarital Status: ${maritalStatus}`
		);
	};

	return (
		<div className="form-container">
			<h2>Personal Details Form</h2>
			<form onSubmit={handleSubmit}>
				{/* Title Dropdown */}
				<div className="form-group">
					<label htmlFor="title">Title:</label>
					<select id="title" value={title} onChange={(e) => setTitle(e.target.value)}>
						<option value="">-- Select Title --</option>
						{titles.map((t,index) => (
							<option key={index} value={t}>
								{t}
							</option>
						))}
					</select>
				</div>

				{/* Gender Dropdown */}
				<div className="form-group">
					<label htmlFor="gender">Gender:</label>
					<select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
						<option value="">-- Select Gender --</option>
						{genders.map((g,index) => (
							<option key={index} value={g}>
								{g}
							</option>
						))}
					</select>
				</div>

				{/* Marital Status Dropdown */}
				<div className="form-group">
					<label htmlFor="marital-status">Marital Status:</label>
					<select
						id="marital-status"
						value={maritalStatus}
						onChange={(e) => setMaritalStatus(e.target.value)}
					>
						<option value="">-- Select Marital Status --</option>
						{maritalStatuses.map((status,index) => (
							<option key={index} value={status}>
								{status}
							</option>
						))}
					</select>
				</div>

				{/* Submit Button */}
				<button type="submit" disabled={!title || !gender || !maritalStatus}>
					Submit
				</button>
			</form>

			{/* Display Submitted Data */}
			{title && gender && maritalStatus && (
				<p>
				</p>
			)}
		</div>
	);
}

export default PersonalDetails;

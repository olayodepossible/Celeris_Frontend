import { useState } from 'react'

import Form from '../../../shared/Forms/Form'
import { changePasswordForm, personalInfoForm } from './PersonalInfoImports'
import { CelerisBtn } from '../../../shared/Button'

type Props = {}

const PersonalInfo = (props: Props) => {
	const [profile, setProfile] = useState<{ [key: string]: string }>({});

	const handleUpdateProfile = (profile: { [key: string]: string }) => {
		setProfile(profile);
		console.log("Profile Info:", profile);
	};
	const [password, setPassword] = useState<{ [key: string]: string }>({});

	const handlePassword = (passwords: { [key: string]: string }) => {
		setPassword(passwords);
		console.log("New Password:", passwords);
	};
	return (
		<>
		 <h2 className="update-info-heading">Update Profile Information</h2>
		 <div className='update-info-form'>
			<Form inputs={personalInfoForm} onApplyFilters={handleUpdateProfile} isFilter={false} styles='row row-cols-lg-2 row-cols-1 w-100'/>
			<div className='update-profile'>
				<CelerisBtn variant='primary' onClick={() => handleUpdateProfile(profile)}>UPDATE PROFILE</CelerisBtn>
			</div>
		 </div>
		 <div className="passwords">
		 <h2 className="update-info-heading">Change Password</h2>
		 <div className='update-info-form'>
			<Form inputs={changePasswordForm} onApplyFilters={handlePassword} isFilter={false} styles='row row-cols-lg-2 row-cols-1 w-100'/>
			<div className='change-pass'>
				<CelerisBtn variant='primary'  onClick={() => handlePassword(password)}>CHANGE PASSWORD</CelerisBtn>
			</div>
		 </div>
		 </div>
		</>
	)
}

export default PersonalInfo

import React, { useState } from 'react'
import Form from '../../../shared/Forms/Form'
import { CelerisBtn } from '../../../shared/Button'
import { columns, data, organizationForm } from './OrganizationImport'
import Table from '../../../shared/Table/Table'

type Props = {}

const Organization = (props: Props) => {
  const [profile, setProfile] = useState<{ [key: string]: string }>({});

	const handleUpdateProfile = (profile: { [key: string]: string }) => {
		setProfile(profile);
		console.log("Profile Info:", profile);
	};
  return (
    <>
      <h2 className="update-info-heading">Add Team Member</h2>
		 <div className='update-info-form'>
			<Form inputs={organizationForm} onApplyFilters={handleUpdateProfile} isFilter={false} styles='row row-cols-lg-2 row-cols-1 w-100'/>
			<div className='update-profile'>
				<CelerisBtn variant='primary' onClick={() => handleUpdateProfile(profile)}>ADD MEMBER</CelerisBtn>
			</div>
		 </div> 
     <div className="user">
      <h2 className="update-info-heading">Users</h2>
      <Table
            columns={columns}
            data={data}
            variant="outlined"
            withPagination={true}
          />
     </div>
    </>
  )
}

export default Organization
import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm'

const NEXT_PUBLIC_MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL
const NEXT_PUBLIC_MAILCHIMP_U = process.env.NEXT_PUBLIC_MAILCHIMP_U
const NEXT_PUBLIC_ID = process.env.NEXT_PUBLIC_ID

const MailchimpFormContainer = () => {
  const postUrl = `${NEXT_PUBLIC_MAILCHIMP_URL}?u=${NEXT_PUBLIC_MAILCHIMP_U}&id=${NEXT_PUBLIC_ID}`

 

  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default MailchimpFormContainer

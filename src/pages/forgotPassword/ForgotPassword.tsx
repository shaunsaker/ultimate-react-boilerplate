import { useAtom } from 'jotai'
import React, { ChangeEvent, FormEvent, ReactElement, useCallback } from 'react'

import { Button } from '../../components/button/Button'
import { Form } from '../../components/form/Form'
import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Input } from '../../components/input/Input'
import { Page } from '../../components/page/Page'
import { Spacer } from '../../components/spacer/Spacer'
import { Typography } from '../../components/typography/Typography'
import { userEmailAtom } from '../../store/user'

export const ForgotPassword = (): ReactElement => {
  const [email, setEmail] = useAtom(userEmailAtom)

  const onChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    },
    [setEmail],
  )

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    // prevent page reload
    event.preventDefault()

    console.log(event)
  }, [])

  return (
    <Page>
      <HeaderBar />

      <Page.Content>
        <Typography kind="title" as="h1">
          Forgot Your Password?
        </Typography>

        <Spacer size="lg" />

        <Form onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email..."
            required
            value={email}
            onChange={onChangeEmail}
          />

          <Spacer size="lg" />

          <Button kind="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Page.Content>
    </Page>
  )
}

import { useAtom } from 'jotai'
import React, { ChangeEvent, FormEvent, useCallback } from 'react'

import { Button } from '../../components/button/Button'
import { Form } from '../../components/form/Form'
import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Input } from '../../components/input/Input'
import { LinkText } from '../../components/linkText/LinkText'
import { Page } from '../../components/page/Page'
import { PasswordInput } from '../../components/passwordInput/PasswordInput'
import { Spacer } from '../../components/spacer/Spacer'
import { Typography } from '../../components/typography/Typography'
import { Routes } from '../../Router'
import { userEmailAtom, userPasswordAtom } from '../../store/user'

export const Register = () => {
  const [email, setEmail] = useAtom(userEmailAtom)
  const [password, setPassword] = useAtom(userPasswordAtom)

  const onChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    },
    [setEmail],
  )

  const onChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    },
    [setPassword],
  )

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    // prevent page reload
    event.preventDefault()

    console.log(event)
  }, [])

  return (
    <Page>
      <HeaderBar>
        <LinkText to={Routes.login}>Login</LinkText>
      </HeaderBar>

      <Typography kind="title" role="heading">
        Register
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

        <Spacer />

        <PasswordInput
          name="password"
          label="Password"
          placeholder="Enter your password..."
          required
          // TODO: SS this is a supabase requirement, when supabase is added, use a constant instead
          minLength={6}
          value={password}
          onChange={onChangePassword}
        />

        <Spacer size="lg" />

        <Button type="submit">Register</Button>
      </Form>
    </Page>
  )
}

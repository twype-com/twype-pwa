'use client'
import { FC, useCallback, useMemo, useState } from 'react'
import cn from 'classnames'
import * as Form from '@radix-ui/react-form'
import { Button, IconButton, Switch } from '@radix-ui/themes'
// import Input from '@/components/Input/Input'
import formStyles from './style.module.scss'
import { CaretDown } from '@phosphor-icons/react/dist/ssr/CaretDown'

type SettingsFormProps = {
  className?: string
}

export const SettingsForm: FC<SettingsFormProps> = ({ className }) => {
  // const [isLoading, setIsLoading] = useState(false)
  // const [roomName, setRoomName] = useState<string>('')
  // const [roomCode, setRoomCode] = useState<string>('')
  // const [roomTimeout, setRoomTimeout] = useState<string>('')
  // const [maxParticipants, setMaxParticipants] = useState<string>('')

  // const generateRoomSlug = useCallback(() => {
  //   setIsLoading(true)
  //   const code = customAlphabet(nolookalikes.toLocaleLowerCase(), 4)
  //   setTimeout(() => {
  //     setRoomCode(code())
  //     setIsLoading(false)
  //   }, 300)
  // }, [])

  // useEffectOnce(() => {
  //   generateRoomSlug()
  // })

  // const canSubmit = useMemo(() => {
  //   return !!roomName && !!roomCode
  // }, [roomCode, roomName])

  // const handleSubmit = (event: any) => {
  //   event.preventDefault()
  //   onSubmit({
  //     name: roomName,
  //     emptyTimeout: roomTimeout ? Number(roomTimeout) : undefined,
  //     maxParticipants: maxParticipants ? Number(maxParticipants) : undefined,
  //   })
  // }

  return (
    <div className={cn(className)}>
      <Form.Root>
        <div className={formStyles.row}>
          <h2 className={formStyles.sectionName}>Manage account</h2>
          <Form.Field name="roomName" className={formStyles.field}>
            <div className={formStyles.section}>
              <div className={formStyles.side}>
                <Form.Label className={formStyles.label}>Notifications</Form.Label>
              </div>
              <div className={formStyles.info}>Delete account</div>
            </div>
            <div className={formStyles.main}>
              <Form.Control asChild className="control">
                <Button color="red" variant="outline" className={formStyles.delete}>
                  Delete
                </Button>
              </Form.Control>
            </div>
          </Form.Field>
        </div>

        <div className={formStyles.row}>
          <h2 className={formStyles.sectionName}>Privacy</h2>
          <Form.Field name="roomCode" className={formStyles.field}>
            <div className={formStyles.section}>
              <div className={formStyles.side}>
                <Form.Label className={formStyles.label}>Discoverability</Form.Label>
              </div>
              <div className={formStyles.info}>Private account</div>
            </div>
            <div className={formStyles.main}>
              <Form.Control asChild className="control">
                <Switch className="switch" />
              </Form.Control>
              <Form.Message match="valueMissing">Please enter Room code</Form.Message>
            </div>
          </Form.Field>
        </div>
        <div className={formStyles.row}>
          <Form.Field name="roomTimeout" className={formStyles.field}>
            <div className={formStyles.section}>
              <div className={formStyles.side}>
                <Form.Label className={formStyles.label}>Data</Form.Label>
              </div>
              <div className={formStyles.info}>Download your data</div>
            </div>
            <div className={formStyles.main}>
              <Form.Control asChild className="control">
                <IconButton variant="ghost" disabled>
                  {'>'}
                </IconButton>
              </Form.Control>
              <Form.Message match="valueMissing">Please enter Room code</Form.Message>
            </div>
          </Form.Field>
        </div>

        <div className={formStyles.row}>
          <h2 className={formStyles.sectionName}>Push notifications</h2>
          <Form.Field name="roomCode" className={formStyles.field}>
            <div className={formStyles.section}>
              <div className={formStyles.side}>
                <Form.Label className={formStyles.label}>Desktop notifications</Form.Label>
              </div>
              <div className={formStyles.info}>Allow in browser</div>
            </div>
            <div className={formStyles.main}>
              <Form.Control asChild className="control">
                <Switch className="switch" />
              </Form.Control>
            </div>
          </Form.Field>
        </div>
        <div className={formStyles.row}>
          <Form.Field name="roomTimeout" className={formStyles.field}>
            <div className={formStyles.section}>
              <div className={formStyles.side}>
                <Form.Label className={formStyles.label}>Your preferences</Form.Label>
              </div>
              <div className={formStyles.info}>Interactions</div>
            </div>
            <div className={formStyles.main}>
              <Form.Control asChild className="control">
                <IconButton variant="ghost" disabled>
                  <CaretDown size={16} />
                </IconButton>
              </Form.Control>
              <Form.Message match="valueMissing">Please enter Room code</Form.Message>
            </div>
          </Form.Field>
        </div>

        {/* <div className={formStyles.row}>
          <Form.Submit asChild>
            <Button size={'3'}>
              Save
            </Button>
            <Button disabled={isLoading || !canSubmit} onClick={(event) => handleSubmit(event)}>
              Save
            </Button>
          </Form.Submit>
        </div> */}
      </Form.Root>
    </div>
  )
}

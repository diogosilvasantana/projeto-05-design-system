import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@proart-ds/react'

import { UserCircle } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    teste: true,
  },
  decorators: [
    (Story, config) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {!config.args.icon && <Text size="sm">Email address</Text>}
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    icon: {
      value: UserCircle,
      size: 24,
    },
    placeholder: 'usuário'
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

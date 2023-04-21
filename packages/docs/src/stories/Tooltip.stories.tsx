import type { Meta, StoryObj } from '@storybook/react'
import { Box, TooltipProps, Button, Tooltip } from '@proart-ds/react'

export default {
  title: 'Alerts/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me!</Button>,
    content: 'This is a tooltip',
    argTypes: {
      children: {
        control: {
          type: null,
        },
      },
    },
    decorators: [
      (Story) => {
        return (
          <Box
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '$20',
              background: '$gray500',
            }}
          >
            {Story()}
          </Box>
        )
      },
    ],
  },
} as Meta

export const Primary: StoryObj<TooltipProps> = {}

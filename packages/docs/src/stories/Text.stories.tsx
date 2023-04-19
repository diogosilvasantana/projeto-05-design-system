import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@proart-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum voluptates optio magni velit ad et accusantium similique, quaerat vero voluptatibus illo? Suscipit beatae eaque recusandae nostrum quae omnis natus.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

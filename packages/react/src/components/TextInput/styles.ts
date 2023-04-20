import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',
  maxHeight: '2.938rem',

  svg: {
    margin: 0,
    padding: 0,
    color: '$gray400',
    marginRight: '0.5rem',
  },

  '&:has(input:focus)': {
    borderColor: '$proart300',

    svg: {
      color: '$proart300',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',

    svg: {
      opacity: 0.5,
    },
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$gray400',

  '&:has(input:focus)': {
    color: '$proart300',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

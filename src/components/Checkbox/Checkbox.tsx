import { UilCheck as CheckIcon } from '@iconscout/react-unicons'
import * as RxCheckbox from '@radix-ui/react-checkbox'
import { css, cva, cx } from '../../../styled-system/css'
import uniqueId from 'lodash/fp/uniqueId'
import { useState } from 'react'

import type { CheckboxProps } from './Checkbox.types'

const checkboxContainer = css({
  alignItems: 'center',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '8px',
  display: 'flex',
  gap: '16px',
  p: '8px',
  pr: '16px',
})

const checkboxRoot = cva({
  base: {
    alignItems: 'center',
    all: 'unset',
    backgroundColor: 'white',
    border: '2px solid black',
    cursor: 'pointer',
    display: 'flex',
    height: '24px',
    justifyContent: 'center',
    width: '24px',
  },

  defaultVariants: {
    variant: 'pink',
  },

  variants: {
    variant: {
      blue: {
        '&:not(:is(:checked, [data-checked], [aria-checked=true]))': {
          _groupHover: {
            backgroundColor: 'blue',
          },
        },

        _checked: {
          backgroundColor: 'blue',
        },
      },
      green: {
        '&:not(:is(:checked, [data-checked], [aria-checked=true]))': {
          _groupHover: {
            backgroundColor: 'green',
          },
        },

        _checked: {
          backgroundColor: 'green',
        },
      },
      pink: {
        '&:not(:is(:checked, [data-checked], [aria-checked=true]))': {
          _groupHover: {
            backgroundColor: 'pink',
          },
        },

        _checked: {
          backgroundColor: 'pink',
        },
      },
      purple: {
        '&:not(:is(:checked, [data-checked], [aria-checked=true]))': {
          _groupHover: {
            backgroundColor: 'purple',
          },
        },

        _checked: {
          backgroundColor: 'purple',
        },
      },
      white: {
        '&:not(:is(:checked, [data-checked], [aria-checked=true]))': {
          _groupHover: {
            backgroundColor: 'white',
          },
        },

        _checked: {
          backgroundColor: 'white',
        },
      },
      yellow: {
        '&:not(:is(:checked, [data-checked], [aria-checked=true]))': {
          _groupHover: {
            backgroundColor: 'yellow',
          },
        },

        _checked: {
          backgroundColor: 'yellow',
        },
      },
    },
  },
})

/**
 * `Checkbox` component is used to allow a user to make a binary choice.
 */
export default function Checkbox({
  id = uniqueId('fractal-checkbox-'),
  label,
  variant = 'pink',
}: CheckboxProps) {
  const [htmlId] = useState(id)

  return (
    <div className={cx('group', checkboxContainer)}>
      <RxCheckbox.Root id={htmlId} className={checkboxRoot({ variant })}>
        <RxCheckbox.Indicator>
          <CheckIcon />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>

      <label htmlFor={htmlId}>
        <p>{label}</p>
      </label>
    </div>
  )
}

import { UilCheck as CheckIcon } from '@iconscout/react-unicons'
import * as RxCheckbox from '@radix-ui/react-checkbox'
import { css, cx } from '../../../styled-system/css'
import {
  checkboxIndicator,
  checkboxLabel,
  checkboxRoot,
} from '../../../styled-system/recipes'
import uniqueId from 'lodash/fp/uniqueId'
import { useState } from 'react'

import { DEFAULT_VARIANT } from './Checkbox.constants'
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

/**
 * `Checkbox` component is used to allow a user to make a binary choice.
 */
export default function Checkbox({
  id = uniqueId('fractal-checkbox-'),
  label,
  variant = DEFAULT_VARIANT,
}: CheckboxProps) {
  const [htmlId] = useState(id)

  return (
    <div className={cx('group', checkboxContainer)}>
      <RxCheckbox.Root id={htmlId} className={checkboxRoot({ variant })}>
        <RxCheckbox.Indicator className={checkboxIndicator({ variant })}>
          <CheckIcon />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>

      <label className={checkboxLabel({ variant })} htmlFor={htmlId}>
        <p>{label}</p>
      </label>
    </div>
  )
}

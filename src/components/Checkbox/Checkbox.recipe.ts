import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '../../../styled-system/types'

import { DEFAULT_VARIANT, Variants } from './Checkbox.constants'

export const checkboxRoot: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Checkbox',
  name: 'checkboxRoot',

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
    variant: DEFAULT_VARIANT,
  },

  jsx: ['RxCheckbox.root', 'Checkbox'],

  variants: {
    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {
          '&:not(:is(:checked, [data-checked], [aria-checked=true]))': {
            _groupHover: {
              backgroundColor: variantName,
            },
          },

          _checked: {
            backgroundColor: variantName,
          },
        } as SystemStyleObject,
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})

export const checkboxIndicator: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Check mark',
  name: 'checkboxIndicator',

  base: {},

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['RxCheckbox.indicator'],

  variants: {
    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {} as SystemStyleObject,
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})

export const checkboxLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Checkbox label',
  name: 'checkboxLabel',

  base: {
    cursor: 'pointer',
    maxWidth: '100%',
    overflow: 'auto',
    overflowWrap: 'break-word',
    py: '16px',
    width: '100%',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['label'],

  variants: {
    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {
          color: variantName,
        } as SystemStyleObject,
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})

/** @jsxRuntime classic */
/** @jsx createElement */

import { createElement } from '@fluentui/react-jsx-runtime';

import { getSlotsNext } from '@fluentui/react-utilities';
import type { SwitchState, SwitchSlots } from './Switch.types';

/**
 * Render a Switch component by passing the state defined props to the appropriate slots.
 */
export const renderSwitch_unstable = (state: SwitchState) => {
  const { slots, slotProps } = getSlotsNext<SwitchSlots>(state);
  const { labelPosition } = state;

  return (
    <slots.root {...slotProps.root}>
      <slots.input {...slotProps.input} />
      {labelPosition !== 'after' && slots.label && <slots.label {...slotProps.label} />}
      <slots.indicator {...slotProps.indicator} />
      {labelPosition === 'after' && slots.label && <slots.label {...slotProps.label} />}
    </slots.root>
  );
};

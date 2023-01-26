import React, { useContext, useId, useRef } from 'react';

// packages
import { useRadioGroupState } from 'react-stately';
import { useRadio, useRadioGroup } from 'react-aria';

const RadioContext = React.createContext<RadioGroupProps | any>(null);

type RadioGroupItemProps = Parameters<typeof useRadioGroupState>[0] & {
  className?: string;
  children?: React.ReactNode;
};

type RadioProps = Parameters<typeof useRadio>[0] & {
  containerStyles?: string;
  children?: React.ReactNode;
};

type RadioGroupProps = Parameters<typeof useRadioGroup>[0];

const RadioGroup: React.FC<RadioGroupItemProps> = (props) => {
  const { children, className } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps} className={className}>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
};

const RadioItem: React.FC<RadioProps> = (props) => {
  const state = useContext<any>(RadioContext);
  const ref = useRef(null);
  const { inputProps } = useRadio(props, state, ref);
  const id = useId();

  const isChecked = state.selectedValue === props.value;

  return (
    <>
      <input
        {...inputProps}
        id={id}
        ref={ref}
        className={`peer w-0 h-0 opacity-0 absolute`}
      />
      <label
        htmlFor={id}
        className={`w-[320px] h-[120px] bg-primary-snow flex flex-row gap-4 border-2 cursor-pointer
        ${isChecked ? 'border-primary-sky' : 'border-transparent'}
        peer-focus-visible:ring-2
        ${props.containerStyles}
        `}
      >
        {props.children}
      </label>
    </>
  );
};

export { RadioGroup, RadioItem };

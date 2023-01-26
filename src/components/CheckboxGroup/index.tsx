import React, { useContext, useId, useRef } from 'react';

// packages
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroup, useCheckboxGroupItem } from '@react-aria/checkbox';

const CheckboxGroupContext = React.createContext<CheckboxGroupProps | any>(
  null
);

type CheckboxGroupItemProps = Parameters<typeof useCheckboxGroupState>[0] & {
  className?: string;
  children?: React.ReactNode;
};

type CheckboxProps = Parameters<typeof useCheckboxGroupItem>[0] & {
  children?: React.ReactNode;
  containerStyles?: string;
  label?: string;
};

type CheckboxGroupProps = Parameters<typeof useCheckboxGroup>[0];

const CheckboxGroup: React.FC<CheckboxGroupItemProps> = (props) => {
  const { children, className } = props;
  const state = useCheckboxGroupState(props);
  const { groupProps } = useCheckboxGroup(props, state);

  return (
    <div {...groupProps} className={className}>
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  );
};

const CheckboxItem: React.FC<CheckboxProps> = (props) => {
  const { children, containerStyles } = props;
  const state = useContext<any>(CheckboxGroupContext);
  const ref = useRef(null);
  const { inputProps } = useCheckboxGroupItem(props, state, ref);
  const id = useId();
  const isChecked = state.isSelected(props.value);

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
        ${containerStyles}
        `}
      >
        {children}
      </label>
    </>
  );
};

const CheckboxItemWithLabel: React.FC<CheckboxProps> = (props) => {
  const { containerStyles, label } = props;
  const state = useContext<any>(CheckboxGroupContext);
  const ref = useRef(null);
  const { inputProps } = useCheckboxGroupItem(props, state, ref);
  const id = useId();

  return (
    <span className={`flex flex-row items-baseline gap-6 ${containerStyles}`}>
      <input
        {...inputProps}
        id={id}
        ref={ref}
        className={`peer w-0 h-0 opacity-0 absolute`}
      />
      <label
        htmlFor={id}
        className={`w-4 h-4 border border-primary-shadow peer-checked:border-primary-sky peer-checked:bg-primary-sky cursor-pointer
        peer-focus-visible:ring-2
        `}
      />
      <label
        htmlFor={id}
        className='max-w-[289px] text-left roboto leading-6 text-primary-midnight'
      >
        {label}
      </label>
    </span>
  );
};

export { CheckboxGroup, CheckboxItem, CheckboxItemWithLabel };

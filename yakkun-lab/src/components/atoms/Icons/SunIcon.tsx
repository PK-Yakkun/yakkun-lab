import {
  SvgWrapper,
  SvgWrapperProps,
} from "@/components/atoms/Icons/SvgWrapper";

export const SunIcon = (props: SvgWrapperProps) => {
  return (
    <SvgWrapper {...props}>
      <path d="M13 4l-1 2.934-1-2.934c-0.188-0.553 0.106-1.152 0.659-1.341 0.552-0.188 1.153 0.107 1.341 0.659 0.078 0.23 0.072 0.469 0 0.682z" />
      <path d="M4 11l2.934 1-2.934 1c-0.553 0.188-1.152-0.106-1.341-0.659-0.188-0.552 0.107-1.153 0.659-1.341 0.23-0.078 0.469-0.072 0.682 0z" />
      <path d="M11 20l1-2.934 1 2.934c0.188 0.553-0.106 1.152-0.659 1.341-0.552 0.188-1.152-0.106-1.341-0.659-0.078-0.23-0.072-0.469 0-0.682z" />
      <path d="M20 12.998l-2.934-1 2.934-1c0.553-0.188 1.152 0.106 1.341 0.659 0.188 0.552-0.106 1.152-0.659 1.341-0.23 0.078-0.469 0.072-0.682 0z" />
      <path d="M7.050 5.636l1.367 2.781-2.781-1.367c-0.524-0.257-0.74-0.891-0.483-1.414 0.258-0.523 0.891-0.739 1.414-0.482 0.218 0.107 0.383 0.28 0.483 0.482z" />
      <path d="M5.636 16.949l2.781-1.367-1.367 2.781c-0.257 0.523-0.891 0.739-1.414 0.482s-0.739-0.891-0.482-1.414c0.107-0.218 0.28-0.382 0.482-0.482z" />
      <path d="M16.949 18.363l-1.367-2.781 2.781 1.367c0.523 0.257 0.739 0.891 0.482 1.414s-0.891 0.739-1.414 0.482c-0.218-0.107-0.382-0.28-0.482-0.482z" />
      <path d="M18.362 7.048l-2.782 1.368 1.368-2.782c0.257-0.523 0.891-0.739 1.414-0.482s0.739 0.891 0.481 1.415c-0.106 0.217-0.279 0.381-0.481 0.481z" />
      <path d="M12 16.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zM12 9.5c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z" />
    </SvgWrapper>
  );
};

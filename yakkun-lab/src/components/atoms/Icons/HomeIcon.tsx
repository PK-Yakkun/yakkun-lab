import {
  SvgWrapper,
  SvgWrapperProps,
} from "@/components/atoms/Icons/SvgWrapper";

export const HomeIcon = (props: SvgWrapperProps) => {
  return (
    <SvgWrapper {...props}>
      <path d="M12 3c0 0-6.186 5.34-9.643 8.232-0.203 0.184-0.357 0.452-0.357 0.768 0 0.553 0.447 1 1 1h2v7c0 0.553 0.447 1 1 1h3c0.553 0 1-0.448 1-1v-4h4v4c0 0.552 0.447 1 1 1h3c0.553 0 1-0.447 1-1v-7h2c0.553 0 1-0.447 1-1 0-0.316-0.154-0.584-0.383-0.768-3.433-2.892-9.617-8.232-9.617-8.232z" />
    </SvgWrapper>
  );
};

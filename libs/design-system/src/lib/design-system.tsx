import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DesignSystemProps {}

const StyledDesignSystem = styled.div`
  color: pink;
`;

export function DesignSystem(props: DesignSystemProps) {
  return (
    <StyledDesignSystem>
      <h1>Welcome to DesignSystem!</h1>
    </StyledDesignSystem>
  );
}

export default DesignSystem;

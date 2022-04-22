import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

const StyledPage = styled.div`
  .page {
  }
`;

export async function getStaticProps({ locale }) {
  const greeting =
    locale === 'en' ? 'Hello World' : locale === 'de' ? 'Hallo Welt!' : '';

  return {
    props: {
      greeting,
    },
  };
}

export function Mui(props) {
  return (
    <StyledPage>
      <Typography variant="h2" component="h2">
        homepage
      </Typography>
      {props.greeting}
    </StyledPage>
  );
}

export default Mui;

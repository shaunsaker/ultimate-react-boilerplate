import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import { Page } from "../../components/page/Page";
import { Typography } from "../../components/typography/Typography";

export const Error = () => {
  const error = useRouteError() as { statusText?: string; message: string };

  return (
    <Page>
      <StyledTitleText kind="title">Oops!</StyledTitleText>

      <StyledHeadingText kind="heading">Sorry, an unexpected error has occurred.</StyledHeadingText>

      <Typography kind="paragraph">{error.statusText || error.message}</Typography>
    </Page>
  );
};

const StyledTitleText = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const StyledHeadingText = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

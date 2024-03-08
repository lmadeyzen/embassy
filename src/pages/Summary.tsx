import { useNavigate } from "react-router-dom";
import { labels } from "../i18n/labels";
import {
  Form,
  Header,
  MainHeader,
  NavigateButton,
  NavigateButtonsWrapper,
  Wrapper,
} from "../styles/Components";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { useEndMessage } from "../hooks/useEndMessage";
import { useEffect } from "react";

const { mainHeader, summaryPage, back, finish, title3page } = labels;
const { formTitle } = summaryPage;

export const Summary = () => {
  useEffect(() => {
    window.webviewSdkInit;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.WebviewSdk.setTitle(title3page);
    }, 0);
  }, []);

  const navigate = useNavigate();

  const postMessage = useEndMessage();

  const { name, surname, age, select2 } = useAppSelector(
    (state) => state.startSlice.dataForm
  );
  const { endDate, startDate } = useAppSelector((state) => state.pickDate.date);

  const dateLabel = `${endDate} - ${startDate}`;

  const onFinish = () => {
    const text = `Dear ${name} ${surname}, your visa application for a ${select2} has been successfully received. We have recorded your intended travel date as ${dateLabel}. We will contact you shortly with further details!`;
    postMessage(text);
  };

  return (
    <Wrapper>
      <MainHeader>{mainHeader}</MainHeader>
      <Form>
        <Header>{formTitle}</Header>
        <InfoWrapper>
          <Info>{`${summaryPage.name}:`}</Info>
          <span>{name ? name : "--"}</span>
        </InfoWrapper>
        <InfoWrapper>
          <Info>{`${summaryPage.surname}:`}</Info>
          <span>{surname ? surname : "--"}</span>
        </InfoWrapper>
        <InfoWrapper>
          <Info>{`${summaryPage.age}:`}</Info>
          <span>{age ? age : "--"}</span>
        </InfoWrapper>
        <InfoWrapper>
          <Info>{`${summaryPage.visaType}:`}</Info>
          <span>{select2 ? select2 : "--"}</span>
        </InfoWrapper>
        <InfoWrapper>
          <Info>{`${summaryPage.date}:`}</Info>
          <span>{dateLabel ? dateLabel : "--"}</span>
        </InfoWrapper>
      </Form>
      <Text>{summaryPage.summaryText}</Text>
      <NavigateButtonsWrapper>
        <NavigateButton onClick={() => navigate("/date")}>
          {back}
        </NavigateButton>
        <NavigateButton onClick={onFinish}>{finish}</NavigateButton>
      </NavigateButtonsWrapper>
    </Wrapper>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Info = styled.span`
  font-weight: 600;
`;

const Text = styled.span`
  margin-top: 1.5rem;
  font-size: 0.8rem;
`;

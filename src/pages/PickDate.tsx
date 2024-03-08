import { useEffect, useState } from "react";
import { useChangeTitle } from "../hooks/useChangeTitle";
import "react-date-range/dist/styles.css"; // main style file
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/theme/default.css"; // theme css file
import { formatDate } from "../utils/formatDate";
import {
  Form,
  Header,
  MainHeader,
  NavigateButton,
  NavigateButtonsWrapper,
  Wrapper,
} from "../styles/Components";
import styled from "styled-components";
import { Colors } from "../styles/Colors";
import { useNavigate } from "react-router-dom";
import { labels } from "../i18n/labels";
import { setTravelDate } from "../redux/pickDateSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface RangesDates {
  selection: {
    startDate: Date;
    endDate: Date;
    key: "selection";
  };
}

const { mainHeader, next, back, pickDatePage, title2page } = labels;

export const PickDate = () => {
  useEffect(() => {
    window.webviewSdkInit;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.WebviewSdk.setTitle("test 2");
    }, 0);
  }, []);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { startDate, endDate } = useAppSelector((state) => state.pickDate.date);

  const [selectionRange, setSelectionRange] = useState({
    startDate: startDate ? new Date(startDate) : new Date(),
    endDate: endDate ? new Date(endDate) : new Date(),
    key: "selection",
  });

  const handleDate = (ranges: RangesDates) => {
    setSelectionRange(ranges.selection);
  };

  const onNext = () => {
    navigate("/summary");
    dispatch(
      setTravelDate({
        startDate: `${formatDate(selectionRange.startDate)}`,
        endDate: `${formatDate(selectionRange.endDate)}`,
      })
    );
  };

  return (
    <Wrapper>
      <MainHeader>{mainHeader}</MainHeader>
      <StyledFrom>
        <Header>{pickDatePage.formTitle}</Header>
        <Info>
          <span>{`${pickDatePage.startDate}: ${formatDate(
            selectionRange.startDate
          )}`}</span>
          <span>{`${pickDatePage.endDate}: ${formatDate(
            selectionRange.endDate
          )}`}</span>
        </Info>
        <DateRangePicker
          ranges={[selectionRange]}
          date={new Date()}
          //@ts-expect-error xxx
          onChange={handleDate}
          showMonthAndYearPickers={false}
          rangeColors={[Colors.red, Colors.red, Colors.red, Colors.red]}
        />
      </StyledFrom>
      <NavigateButtonsWrapper>
        <NavigateButton onClick={() => navigate("/")}>{back}</NavigateButton>
        <NavigateButton onClick={onNext}>{next}</NavigateButton>
      </NavigateButtonsWrapper>
    </Wrapper>
  );
};

const StyledFrom = styled(Form)`
  gap: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

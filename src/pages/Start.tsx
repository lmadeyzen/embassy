import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Form,
  Header,
  Input,
  MainHeader,
  NavigateButton,
  NavigateButtonsWrapper,
  Wrapper,
} from "../styles/Components";
import Select, { SingleValue, StylesConfig } from "react-select";
import { labels } from "../i18n/labels";
import { ChangeEvent, useEffect, useState } from "react";
import { setForm } from "../redux/startPageSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setQuery } from "../redux/querySlice";
import { Colors } from "../styles/Colors";

interface Option {
  value: string;
  label: string;
}

const { mainHeader, next, startPage, title1page, title3page } = labels;
const { selects, inputsPlaceholders, formTitle } = startPage;

export const Start = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [serach] = useSearchParams();
  const currentForm = useAppSelector((state) => state.startSlice.dataForm);
  const appId = serach.get("appId") || "";
  const conversationId = serach.get("conversationId") || "";

  const [formData, setFormDate] = useState({ ...currentForm });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSlect = (name: string, option: SingleValue<Option>) => {
    setFormDate((prev) => ({ ...prev, [name]: option?.label }));
  };

  const onNext = () => {
    navigate("/date");
    dispatch(setForm(formData));
  };

  useEffect(() => {
    dispatch(setQuery({ appId, conversationId }));
  }, [appId, conversationId, dispatch]);

  const customStyles: StylesConfig = {
    container: (styles) => ({ ...styles, height: "2.5rem", cursor: "pointer" }),
    control: (styles, { isFocused }) => ({
      ...styles,
      cursor: "pointer",
      borderColor: isFocused ? Colors.blue : styles.borderColor,
      boxShadow: isFocused ? `0 0 0 1px ${Colors.blue}` : styles.boxShadow,
      "&:hover": {
        borderColor: isFocused ? Colors.blue : styles.borderColor,
      },
    }),
  };

  return (
    <Wrapper>
      <MainHeader>{mainHeader}</MainHeader>
      <Form>
        <Header>{formTitle}</Header>
        <Input
          onChange={handleInput}
          name="name"
          placeholder={inputsPlaceholders.name}
          value={formData.name}
        />
        <Input
          onChange={handleInput}
          name="surname"
          placeholder={inputsPlaceholders.surname}
          value={formData.surname}
        />
        <Input
          onChange={handleInput}
          name="age"
          placeholder={inputsPlaceholders.age}
          type="number"
          value={formData.age}
        />
        <Select
          placeholder={selects.select1.placeholder}
          className="select"
          options={selects.select1.options}
          styles={customStyles}
          //@ts-expect-error xxx
          onChange={(e) => handleSlect("select1", e)}
          value={
            formData.select1
              ? { label: formData.select1, value: formData.select1 }
              : ""
          }
        />
        <Select
          placeholder={selects.select2.placeholder}
          className="react-select-container"
          options={selects.select2.options}
          styles={customStyles}
          //@ts-expect-error xxx
          onChange={(e) => handleSlect("select2", e)}
          value={
            formData.select2
              ? { label: formData.select2, value: formData.select2 }
              : ""
          }
        />
      </Form>
      <NavigateButtonsWrapper>
        <NavigateButton onClick={onNext}>{next}</NavigateButton>
      </NavigateButtonsWrapper>
    </Wrapper>
  );
};

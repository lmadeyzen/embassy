const startPage = {
  formTitle: "Enter your details", // form title
  selects: {
    select1: {
      placeholder: "Purpose of journey",
      options: [
        { value: "Business", label: "Business" },
        { value: "Tourism", label: "Tourism" },
        { value: "Education", label: "Education" },
        { value: "Work", label: "Work" },
        { value: "Family", label: "Family" },
        { value: "WWM Krakow Summit", label: "WWM Krakow Summit" },
      ],
    },
    select2: {
      placeholder: "Visa type",
      options: [
        { value: "SingleEntryVisa", label: "Single Entry Visa" },
        { value: "DoubleEntryVisa", label: "Double Entry Visa" },
        { value: "MultipleEntryVisa", label: "Multiple Entry Visa" },
        { value: "TemporaryResidentVisa", label: "Temporary Resident Visa" },
        { value: "PermanentResidentVisa", label: "Permanent Resident Visa" },
      ],
    },
  },

  inputsPlaceholders: {
    name: "Name", //input 1
    surname: "Surname", //input 2
    age: "Age", //input 3
  },
};

const pickDatePage = {
  formTitle: "Select Your Travel Date",
  startDate: "Start date",
  endDate: "End date",
};

const summaryPage = {
  formTitle: "Check details",
  name: "Name",
  surname: "Surname",
  age: "Age",
  visaType: "Visa type",
  date: "Date",
  summaryText: `Thank you for contacting the Embassy of Poland. We appreciate your interest in visiting our country and we're here to assist you throughout your visa application process`,
};

export const labels = {
  startPage: startPage,
  pickDatePage: pickDatePage,
  summaryPage: summaryPage,
  mainHeader: "Polish Embassy",
  next: "next",
  back: "back",
  finish: "finish",
  //string to change title by WebviewSdk:
  title1page: "Enter Your Details",
  title2page: "Select Date",
  title3page: "Summary",
};

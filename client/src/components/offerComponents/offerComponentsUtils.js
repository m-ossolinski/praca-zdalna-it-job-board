export const newOfferFormConfig = [
  {
    placeholder: "Nazwa stanowiska",
    name: "title",
    options: {
      required: true,
      min: 5,
    },
    errorMsg: "Nazwa stanowiska jest wymagana.",
  },
  {
    placeholder: "Nazwa firmy",
    name: "company",
    options: {
      required: true,
      min: 3,
    },
    errorMsg: "Nazwa firmy jest wymagana.",
  },
  {
    placeholder: "Adres",
    name: "jobLocalization",
    options: {
      min: 8,
    },
    errorMsg: "Lokalizacja jest wymagana.",
    type: "text",
  },
  {
    placeholder: "E-mail",
    name: "email",
    options: {
      min: 8,
    },
    errorMsg: "E-mail jest wymagany",
    type: "text",
  },
  {
    placeholder: "Telefon kontaktowy",
    name: "phone",
    options: {
      min: 8,
    },
    errorMsg: "Telefon kontaktowy jest wymagany",
    type: "number",
  },
  {
    placeholder: "Opis stanowiska",
    name: "description",
    options: {
      required: true,
      min: 8,
    },
    errorMsg: "Opis stanowiska jest wymagany.",
    type: "textarea",
  },
  {
    placeholder: "Opis firmy",
    name: "companyDescription",
    options: {
      min: 8,
    },
    errorMsg: "Opis firmy jest wymagany.",
    type: "textarea",
  },
  {
    placeholder: "Wymagania",
    name: "requirements",
    options: {
      required: true,
      min: 8,
    },
    errorMsg: "Pole jest wymagane.",
    type: "textarea",
  },
];

import cuid from 'cuid';
export const QuestionDescriptions = [
  {
    text: 'Single Line Text',
    type: 'SINGLE_LINE_TEXT',
  },
  {
    text: 'Multiple Line Text',
    type: 'MUTLI_LINE_TEXT',
  },
  {
    text: 'Multiple Choice',
    type: 'MULTI_CHOICE',
  },
  {
    text: 'Checkboxes',
    type: 'CHECKBOXES',
  },
  {
    text: 'Dropdown',
    type: 'DROPDOWN',
  },
  // {
  //   text: 'Single Choice',
  //   type: 'SINGLE_CHOICE',
  // },
];

export const QuestionTypes = {
  SINGLE_LINE_TEXT: 'SINGLE_LINE_TEXT',
  MUTLI_LINE_TEXT: 'MUTLI_LINE_TEXT',
  MULTI_CHOICE: 'MULTI_CHOICE',
  CHECKBOXES: 'CHECKBOXES',
  DROPDOWN: 'DROPDOWN',
  // SINGLE_CHOICE: 'SINGLE_CHOICE',
};

export const InitQuestions = {
  [QuestionTypes.SINGLE_CHOICE]: () => ({
    _id: cuid(),
    type: QuestionTypes.SINGLE_CHOICE,
    title: 'Select which one applies',
    options: [
      {
        _id: cuid(),
        content: 'First Choice',
      },
      {
        _id: cuid(),
        content: 'Second Choice',
      },
    ],
  }),
  [QuestionTypes.MULTI_CHOICE]: () => ({
    _id: cuid(),
    type: QuestionTypes.MULTI_CHOICE,
    title: 'Select a choice',
    options: [
      {
        _id: cuid(),
        content: 'First choice',
      },
      {
        _id: cuid(),
        content: 'Second choice',
      },
      {
        _id: cuid(),
        content: 'Third choice',
      },
    ],
  }),
  [QuestionTypes.CHECKBOXES]: () => ({
    _id: cuid(),
    type: QuestionTypes.CHECKBOXES,
    title: 'Check All That Apply',
    options: [
      {
        _id: cuid(),
        content: 'First choice',
      },
      {
        _id: cuid(),
        content: 'Second choice',
      },
      {
        _id: cuid(),
        content: 'Third choice',
      },
    ],
  }),
  [QuestionTypes.SINGLE_LINE_TEXT]: () => ({
    _id: cuid(),
    type: QuestionTypes.SINGLE_LINE_TEXT,
    title: 'Untitled',
    placeholder: '',
  }),
  [QuestionTypes.MUTLI_LINE_TEXT]: () => ({
    _id: cuid(),
    type: QuestionTypes.MUTLI_LINE_TEXT,
    title: 'Untitled',
    placeholder: '',
  }),
  [QuestionTypes.DROPDOWN]: () => ({
    _id: cuid(),
    type: QuestionTypes.DROPDOWN,
    title: 'Select a choice',
    options: [
      {
        _id: cuid(),
        content: 'First choice',
      },
      {
        _id: cuid(),
        content: 'Second choice',
      },
      {
        _id: cuid(),
        content: 'Third choice',
      },
    ],
  }),
  abc: () => ({
    _id: cuid(),
    type: 'MULTI_CHOICE',
    title: 'Evaluate the following statements',
    questions: [
      {
        _id: cuid(),
        content: 'First Question',
      },
      {
        _id: cuid(),
        content: 'Second Question',
      },
      {
        _id: cuid(),
        content: 'Third Question',
      },
    ],
    options: [
      {
        _id: cuid(),
        content: 'First choice',
      },
      {
        _id: cuid(),
        content: 'Second choice',
      },
      {
        _id: cuid(),
        content: 'Third choice',
      },
    ],
  }),
};

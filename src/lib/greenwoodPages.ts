export type Page = {
  id: String;
  route: String;
  label: String;
  title?: String;
  data?: {
    sidebar?: {
      order?: number;
    };
    author?: String;
    description?: String;
  };
};

export const sortPages = (a: Page, b: Page) => {
  if (
    a.data !== undefined &&
    a.data.sidebar !== undefined &&
    a.data.sidebar.order !== undefined
  ) {
    if (
      b.data !== undefined &&
      b.data.sidebar !== undefined &&
      b.data.sidebar.order !== undefined
    ) {
      return a.data.sidebar.order > b.data.sidebar.order ? 1 : -1;
    }
    return -1;
  }
  if (a.title !== undefined) {
    if (b.title !== undefined) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }
    return a.title.toLowerCase().localeCompare(b.label.toLowerCase());
  }
  if (b.title !== undefined) {
    return a.label.toLowerCase().localeCompare(b.title.toLowerCase());
  }
  return a.label.toLowerCase().localeCompare(b.label.toLowerCase());
};

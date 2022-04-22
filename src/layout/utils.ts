export const redirectURL = (history, routes, category: string) => {
  switch (category) {
    case "ORDER":
      history?.push(routes?.ORDER);
      break;
    case "FINANCE":
      //TODO: Handle redirect to finance
      break;
    case "SYSTEM":
      //TODO: Handle redirect to system
      break;
    default:
      break;
  }
};

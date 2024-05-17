export const insertParamsIntoTemplate = (
  template: string,
  params: Record<string, string>
): string => {
  let result = template;

  for (const key in params) {
    const regex = new RegExp(`{${key}}`, "g");
    result = result.replace(regex, params[key]);
  }

  return result.toString();
};

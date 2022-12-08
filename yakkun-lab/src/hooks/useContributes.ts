export type myContributesType = {
  values: [];
};

export const useContributions = () => {
  const getContributions = async (userName: string) => {
    const response = await fetch(`../api/contributions/${userName}`);
    const data: Promise<myContributesType> = await response.json();
    return data;
  };

  return {
    getContributions,
  };
};

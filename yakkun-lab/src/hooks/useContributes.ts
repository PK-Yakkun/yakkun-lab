import { MyContributes } from "@/pages/api/contributions/[userName]";

export const useContributions = () => {
  const getContributions = async (userName: string) => {
    const response = await fetch(`../api/contributions/${userName}`);
    const data: Promise<MyContributes> = await response.json();
    return data;
  };

  return {
    getContributions,
  };
};

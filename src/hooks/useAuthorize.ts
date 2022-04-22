import { roles } from "./../constants/routes";
import { configs } from "utils/helpers/config";
import { useAPI } from "./useAPI";

export const useAuthorize = () => {
  const {
    data: info,
    loading,
    mutate: mutateInfo,
  } = useAPI<AccountInfo>(
    "ams/account/simple-info",
    {},
    { baseURL: configs().GATE_URl }
  );
  const { data: resRole, mutate: muateRole } = useAPI<GetAccountRoleResponse>(
    "ams/account/roles?zone=UET-HACKATHON",
    {},
    { baseURL: configs().GATE_URl }
  );
  const userRoles = resRole?.items;

  const hasRoles = (accessRoles?: string[]) => {
    if (!accessRoles || !accessRoles.length) {
      return true;
    }

    if (!userRoles) {
      return false;
    }
    return userRoles
      .map((r) => r.code)
      .some((role) => accessRoles.includes(role));
  };

  const isAdmin = hasRoles([roles.ADMIN]);
  const isProvider = hasRoles([roles.PROVIDER_OWNER]);
  const isSales = hasRoles([roles.PROVIDER_OWNER]);

  const mutate = async () => {
    await mutateInfo();
    await muateRole();
  };

  return [
    { info, userRoles, isProvider, isAdmin, isSales, loading },
    { hasRoles, mutateAuth: mutate },
  ] as const;
};

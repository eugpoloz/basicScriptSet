// @flow
export type DefaultIcon = {
  icon?: string,
  [position: "after" | "before"]: string | null
} | null;

export type FastLogin = {
  after?: string,
  logins: Array<{
    login: string,
    password: string,
    id?: string,
    link: string
  }>
};

export type DisabledProfiles = {
  profiles: Array<number>,
  message?: string
};

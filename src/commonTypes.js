// @flow
export type DefaultIcon = {
  icon: string,
  after?: string | null,
  before?: string | null
};

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

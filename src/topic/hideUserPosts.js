// @flow

// todo:
// 1. functionality
// 2. ui to configure
// 3. save settings to mybb storage

type HideUserPosts = {
  profiles: Array<number>
};

export default function hideUserPosts({ profiles = [] }: HideUserPosts) {}

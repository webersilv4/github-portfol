interface IUser {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  name: string,
  company: string,
  blog: '',
  location: null,
  email: null | string,
  hireable: null | string,
  bio: null | string,
  twitter_username: null | string,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: '2020-02-29T18:27:07Z',
  updated_at: '2022-04-19T21:07:58Z'
}




interface IRepos {
  allow_forking: boolean
  archive_url: string
  archived: false
  assignees_url: string
  blobs_url: string
  branches_url: string
  clone_url: string
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  default_branch: string
  deployments_url: string
  description: null | string
  disabled: false
  downloads_url: string
  events_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: null | string
  hooks_url: string
  html_url: string
  id: number
  is_template: false
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: null
  languages_url: string
  license: null
  merges_url: string
  milestones_url: string
  mirror_url: null
  name: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  owner: {login: string, id: number, node_id: string, avatar_url: string, gravatar_id: string}
  private: boolean
  pushed_at: string
  releases_url: string
  size: number
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  svn_url: string
  tags_url: string
  teams_url: string
  topics: Array
  updated_at: string
  url: string
  watchers: number
  watchers_count: number
}
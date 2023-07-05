import { RepositoryCard } from "..";
import { render, screen, user } from "../../tests/testUtils";

const sampleRepository = {
  id: 135614069,
  node_id: "MDEwOlJlcG9zaXRvcnkxMzU2MTQwNjk=",
  name: "reactjs-interview-questions",
  full_name: "sudheerj/reactjs-interview-questions",
  private: false,
  owner: {
    login: "sudheerj",
    id: 3127317,
    node_id: "MDQ6VXNlcjMxMjczMTc=",
    avatar_url: "https://avatars.githubusercontent.com/u/3127317?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sudheerj",
    html_url: "https://github.com/sudheerj",
    followers_url: "https://api.github.com/users/sudheerj/followers",
    following_url: "https://api.github.com/users/sudheerj/following{/other_user}",
    gists_url: "https://api.github.com/users/sudheerj/gists{/gist_id}",
    starred_url: "https://api.github.com/users/sudheerj/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/sudheerj/subscriptions",
    organizations_url: "https://api.github.com/users/sudheerj/orgs",
    repos_url: "https://api.github.com/users/sudheerj/repos",
    events_url: "https://api.github.com/users/sudheerj/events{/privacy}",
    received_events_url: "https://api.github.com/users/sudheerj/received_events",
    type: "User",
    site_admin: false,
  },
  html_url: "https://github.com/sudheerj/reactjs-interview-questions",
  description:
    "List of top 500 ReactJS Interview Questions & Answers....Coding exercise questions are coming soon!!",
  fork: false,
  url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions",
  forks_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/forks",
  keys_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/teams",
  hooks_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/hooks",
  issue_events_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/issues/events{/number}",
  events_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/events",
  assignees_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/branches{/branch}",
  tags_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/tags",
  blobs_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/blobs{/sha}",
  git_tags_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/tags{/sha}",
  git_refs_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/refs{/sha}",
  trees_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/trees{/sha}",
  statuses_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/statuses/{sha}",
  languages_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/languages",
  stargazers_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/stargazers",
  contributors_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/contributors",
  subscribers_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/subscribers",
  subscription_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/subscription",
  commits_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/merges",
  archive_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/downloads",
  issues_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/issues{/number}",
  pulls_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/sudheerj/reactjs-interview-questions/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/labels{/name}",
  releases_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/releases{/id}",
  deployments_url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions/deployments",
  created_at: "2018-05-31T17:17:01Z",
  updated_at: "2023-07-05T12:36:35Z",
  pushed_at: "2023-06-24T07:33:38Z",
  git_url: "git://github.com/sudheerj/reactjs-interview-questions.git",
  ssh_url: "git@github.com:sudheerj/reactjs-interview-questions.git",
  clone_url: "https://github.com/sudheerj/reactjs-interview-questions.git",
  svn_url: "https://github.com/sudheerj/reactjs-interview-questions",
  homepage: "",
  size: 2068,
  stargazers_count: 30224,
  watchers_count: 30224,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  has_discussions: false,
  forks_count: 7450,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 14,
  license: null,
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [
    "interview-preparation",
    "interview-questions",
    "javascript",
    "javascript-applications",
    "javascript-framework",
    "javascript-interview-questions",
    "react",
    "react-interview-questions",
    "react-native",
    "react-router",
    "react16",
    "reactjs",
    "redux",
  ],
  visibility: "public",
  forks: 7450,
  open_issues: 14,
  watchers: 30224,
  default_branch: "master",
  score: 1.0,
};

const navigatorClipboardMock = {
  writeText: vi.fn(),
};

describe("RepositoryCard", () => {
  beforeEach(() => {
    vi.stubGlobal("navigator", {
      clipboard: navigatorClipboardMock,
    });
  });

  it("should render correctly", () => {
    render(<RepositoryCard repository={sampleRepository} />);
    expect(screen.getByRole("link", { name: sampleRepository.full_name })).toBeInTheDocument();
    expect(screen.getByText(sampleRepository.description)).toBeInTheDocument();
    expect(screen.getByText(sampleRepository.language)).toBeInTheDocument();
    expect(screen.getByText(sampleRepository.stargazers_count)).toBeInTheDocument();
    expect(screen.getByText(sampleRepository.forks_count)).toBeInTheDocument();
  });
});

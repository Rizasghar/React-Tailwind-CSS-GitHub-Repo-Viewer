import React, { useEffect, useState } from "react";
import { getRepos, getRepoCommits } from "./api/create-api";
import "./App.css";
import { removeShaFromUrl } from "./utils/helper";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RepCard from "./components/RepoCard/RepoCard";
import CommitsTable from "./components/CommitsTable/CommitsTable";
import LoadingSpinner from "./components/LoadingSpinner";
import RepoCommitsHeader from "./components/CommitHeader";
import { render } from '@testing-library/react';
function App() {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [screen, setScreen] = useState("repos");
  const [selectedRepo, setSelectedRepo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchRepositories = async () => {
      const repos = await getRepos();
      if (repos) {
        setRepos(repos.items);
      }
      setLoading(false);
    };

    fetchRepositories();
  }, []);

  const onScreenChange = async (data) => {
    setLoading(true);
    if (data?.screenName === "repos") {
      const repos = await getRepos();
      if (repos) {
        setRepos(repos.items);
      }
    } else {
      let commits = await getRepoCommits(
        removeShaFromUrl(data?.commitsUrl.toString())
      );
      if (commits) {
        setCommits(commits);
        setSelectedRepo(data?.repoName);
      }
    }
    setScreen(data?.screenName);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header />
          <Hero />
          <body className="antialiased bg-gray-200 font-sans">
            {screen === "repos" && (
              <div className="grid grid-cols-3 p-5 gap-5 min-h-screen">
                {repos?.length > 0
                  ? repos.map((repo, index) => (
                      <RepCard
                        repo={repo}
                        seeCommits={(data) => onScreenChange(data)}
                      />
                    ))
                  : null}
              </div>
            )}

            {screen === "commits" && (
              <>
                <RepoCommitsHeader
                  repoName={selectedRepo}
                  commits={commits}
                  onBackClick={() => setScreen("repos")}
                />
                <CommitsTable
                  repo={selectedRepo}
                  commits={commits}
                  onBackClick={() => setScreen("repos")}
                />
              </>
            )}
          </body>
        </>
      )}
    </>
  );
}

export default App;

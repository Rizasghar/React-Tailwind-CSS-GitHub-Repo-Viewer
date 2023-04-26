# React + Tailwind CSS GitHub Repo Viewer

This is a web application built with React and Tailwind CSS that allows you to view the top 100 GitHub repositories. You can view information about each repository, including its name, link, stars, watchers, and forks, and also view the commits for each repository.

## Demo
https://64497523a49cb150d2bcfc57--dulcet-mooncake-6f86d3.netlify.app/

## Installation

To run this project on your local machine, you'll need to have Node.js and npm installed. Once you have those installed, you can follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install --force` to install the project dependencies.
4. Run `npm run dev` to start the development server.

## Usage

Once you have the development server running, you can view the application by opening your web browser and navigating to `http://localhost:3000`.

### Viewing Repositories

When you first open the application, you will see a list of the top 100 GitHub repositories. You can view information about each repository by clicking on the repository card.

### Viewing Commits

When you click on a repository card, you will be taken to a page that displays information about that repository, including its name, link, stars, watchers, and forks. You can also view the commits for that repository by clicking on the "View Commits" button.

## Components

### Header

The `Header` component displays the title of the page and a link to view the top 100 GitHub repositories.

### Hero Section

The `RepoInfoHeader` component displays the name of a selected repository and allows the user to navigate back to the repository list.

### Repo Card

The `RepoCard` component displays information about a single repository, including its name, link, stars, watchers, and forks. It also includes a button to view the repository's commits.

### Commit List

The `CommitList` component displays a list of commits for a selected repository.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a new branch for your changes. Once you have made your changes, submit a pull request and we will review your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

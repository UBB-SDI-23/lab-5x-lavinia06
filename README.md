# Lab 5x assignment
# Django-React Web Application

## Overview
This project is a full-stack web application built with Django for the backend and React with TypeScript for the frontend. It offers a seamless integration of backend and frontend technologies to create a dynamic and interactive web experience.

## Features
- Django backend:
  - RESTful API endpoints for handling data requests
  - Database management with Django ORM
  - Authentication and authorization mechanisms
- React frontend:
  - Responsive user interface with React components
  - State management using hooks and context API
  - Efficient data fetching and updating with Axios
  - TypeScript for type-safe development

## Deployment
The backend is deployed on Heroku, while the frontend is deployed on Netlify. Continuous integration and deployment (CI/CD) pipelines are set up to automatically deploy changes to production environments.

### Backend Deployment (Heroku)
- Link to the deployed backend: [Heroku](insert-link)
- Environment variables are securely stored and managed in Heroku Config Vars
- Database migrations are automated with Heroku CLI

### Frontend Deployment (Netlify)
- Link to the deployed frontend: [Netlify](insert-link)
- Environment variables for the frontend are configured in Netlify Environment Variables settings
- Continuous deployment is enabled to automatically deploy changes from the Git repository

## Getting Started
To run this project locally, follow these steps:

### Prerequisites
- Install Python and Django for the backend
- Install Node.js and npm for the frontend

### Backend Setup
1. Clone this repository.
2. Navigate to the `backend` directory.
3. Install Python dependencies: `pip install -r requirements.txt`
4. Apply migrations: `python manage.py migrate`
5. Run the Django development server: `python manage.py runserver`

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install npm packages: `npm install`
3. Start the development server: `npm start`

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Thank you to the Django and React communities for providing excellent documentation and resources.
- Special thanks to Netlify for hosting the frontend and providing continuous deployment services.

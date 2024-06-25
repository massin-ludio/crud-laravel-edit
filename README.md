<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# User Management CRUD Application

This application is a simple user management system built with Laravel, Vue.js, and Inertia.js. It allows you to create, read, update, and delete user profiles.

## Features

- Display a list of user profiles.
- Create a new user profile.
- Update an existing user profile.
- Delete a user profile.
- Modal-based editing for user profiles.

## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/) (v7.4 or later)
- [Laravel](https://laravel.com/docs/8.x/installation)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
## Install PHP dependencies:

composer install
Install JavaScript dependencies:

npm install
Set up the environment file:

cp .env.example .env
Configure your .env file with your database and other credentials.

## Generate application key:

php artisan key:generate
Run migrations:

php artisan migrate
Run the development server:

php artisan serve
Build frontend assets:

For development:

npm run dev
For production:

npm run build
Usage

## Display User Profiles

Navigate to the /profiles route to see a list of user profiles.

Create a User Profile
Click the "Register" button to create a new user profile. Fill in the required fields and submit the form.

Update a User Profile
Click the "Editar" button next to a user profile to open the edit modal. Modify the fields and click "Guardar Cambios" to update the profile.

Delete a User Profile
Click the "Eliminar" button next to a user profile to delete it. Confirm the action when prompted.

## Code Structure

Backend
Routes: Defined in routes/web.php.
Controller: ProfileController handles the CRUD operations.
Models: User model represents the user data.
Frontend
Components: Vue components are stored in resources/js/Pages.
Index.vue: Main component to list, create, update, and delete profiles.
Register.vue: Component for user registration.
Forms: Managed using @inertiajs/vue3's useForm hook.
Important Methods
openEditModal: Opens the modal for editing a profile.
updateProfile: Sends a request to update the user profile.
deleteProfile: Sends a request to delete a user profile.


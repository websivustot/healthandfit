# Health & Fit 

![Be healthy and fit!](https://healthandfit.herokuapp.com/static/media/logo.cbbd1c2a.png) 

## Be healthy and fit!

### Synopsis

The main idea of application to become healthier by controlling the energy value of the food you eat.
We calculate your daily energy needs based on your personal data of your gender, weight, height and age.

> #### DailyEnergyNeeds = weight * A + height * B + age * C  + D, where
> * A = 10
> * B = 6,25
> * C = 5
> * D = -161 for woman
> * D = 5 for men

The user can save his daily list of food he eats and calculate the total number of calories he gets.

The main functionality is implemented: 
* user registration and logging
* daily calorie needs calculating and saving them
* creating of daily food list for user by general food list 
* adding foods to the general list of foods
* daily calorie counting

Can be implemented in a future:
* input food data validation 
* user dashboard for editing user parameters
* more convinient search for general food list, categories of foods
* sorting of daily list by date and time (by breakfast, lunch ... etc)
* increase the general food list to 4000 items

Can be implemented in more distant future:
* accounting of physical activity of users (calorie burning)
* creating social network elements such as messaging and creating interest groups
* geospatial services

### The technical features of implementation

This project's aim is to learn modern web-technologies such as JS, Node JS, React JS, Redux, MongoDB and related libraries. See the last version in the "**development**" branch.

Front-end is implemented on React JS with Redux pattern. Back-end is REST API which implemented on Node JS with Express middleware and MongoDB database.

The following libraries and tools were used in the project:

* Visual Studio Code IDE
* Node JS v8.11.4
* React JS v16.6.3 / Redux v4.0.1
* Fontawesome for React v1.6.1   
* Reactstrap (Bootstrap for React) v6.5.0
* Express library v4.16.4
* MongoDB driver and libraries
* Heroku cloud service
* Atlas MongoDB cloud service
* Git

... and related programs and libraries.
 
The following experimental features were used in the project:

* Fetch API (does not work on Samsung Interner Browser, see compatibility https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility)
* Window.sessionStorage - https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage#Browser_compatibility

### Try on Heroku: https://healthandfit.herokuapp.com/ (username - "test", password - "test")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

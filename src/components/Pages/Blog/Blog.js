import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>This is Question page Pages</h1>

            <div className="container mt-5">
                <div className="bg-dark mt-5 text-white rounded">
                    <h1><b>No-1: </b>How will you improve the performance of a React Application?</h1>
                    <p className="pt-2">
                        Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                        According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                        In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                        In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:

                        1. Keeping component state local where necessary
                        2. Memoizing React components to prevent unnecessary re-renders
                        3. Code-splitting in React using dynamic import()
                        4. Windowing or list virtualization in React
                        5. Lazy loading images in React
                    </p>
                </div>
                <div className="bg-primary mt-5 text-white rounded">
                    <h1><b>No-2: </b>What are the different ways to manage a state in a React application?</h1>
                    <p className="pt-2">
                        In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                        Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                        useState is the first tool you should reach for to manage state in your components.

                        It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).

                    </p>
                </div>
                <div className="bg-white mt-5 text-dark rounded">
                    <h1><b>No-3: </b>How does prototypical inheritance work?</h1>
                    <p className="pt-2">
                        Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.


                    </p>
                </div>
                <div className="bg-info mt-5 text-dark rounded">
                    <h1><b>No-4: </b>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className="pt-2">
                        If you're building a React app, you want your users to be able to search and get exact results. And if you are getting tons of items from an API, then you need to create a way for users to be able to find various items easily.
                        <p>We'll use create-react-app to set up our project because it offers a modern build setup with no configuration at all.‌‌

                            To set up React, launch your terminal (either the one provided by your operating system or you can use an editor like VS Code) and run the following commands:

                            npx create-react-app my-app
                            cd my-app
                            npm start</p>
                    </p>
                </div>
                <div className="bg-dark mt-5 text-white rounded">
                    <h1><b>No-5: </b>What is a unit test? Why should write unit tests?</h1>
                    <p className="pt-2">
                        Use an integrated toolchain for the best user and developer experience.

                        This page describes a few popular React toolchains which help with tasks like:

                        Scaling to many files and components.
                        Using third-party libraries from npm.
                        Detecting common mistakes early.
                        Live-editing CSS and JS in development.
                        Optimizing the output for production.
                        The toolchains recommended on this page don’t require configuration to get started.

                        You Might Not Need a Toolchain
                        If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet, consider adding React as a plain script tag on an HTML page, optionally with JSX.

                        This is also the easiest way to integrate React into an existing website. You can always add a larger toolchain if you find it helpful!

                        Recommended Toolchains
                        The React team primarily recommends these solutions:

                        If you’re learning React or creating a new single-page app, use Create React App.
                        If you’re building a server-rendered website with Node.js, try Next.js.
                        If you’re building a static content-oriented website, try Gatsby.
                        If you’re building a component library or integrating with an existing codebase, try More Flexible Toolchains.
                        Create React App
                        Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
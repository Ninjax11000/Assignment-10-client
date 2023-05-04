import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => (
                    <div className='text-center my-5'>
                             <button className='btn btn-primary' onClick={toPdf} >Generate pdf</button>
                    </div>
                   
                )}
            </Pdf>
            <div ref={ref}>
            <h2 className='text-center'>Questionaries</h2>
            <ol className='container'>
                <li>
                    <p><span className='fw-bold'>Tell us the differences between uncontrolled and controlled components.</span>
                        <br />
                        Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.
                    </p>
                </li>
                <li>
                    <p><span className='fw-bold'>How to validate React props using PropTypes</span>
                        <br />
                        Ans: React has an internal mechanism for props validation called PropTypes.The PropTypes utility exports a wide range of validators for configuring type definitions.</p>
                    <ul>
                        <li>PropTypes.any: The prop can be of any data type</li>
                        <li>PropTypes.bool: The prop should be a Boolean</li>
                        <li>PropTypes.number: The prop should be a number</li>
                        <li>PropTypes.string: The prop should be a string</li>
                        <li>PropTypes.func: The prop should be a function</li>
                        <li>PropTypes.array: The prop should be an array</li>
                        <li>PropTypes.object: The prop should be an object</li>
                        <li>PropTypes.symbol: The prop should be a symbol</li>
                    </ul>

                </li>
                <li>
                    <p>
                        <span className='fw-bold'>Tell us the difference between nodejs and express js.</span>
                        <br />
                        NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.
                    </p>
                </li>
                <li>
                    <p>
                        <span className='fw-bold'>What is a custom hook, and why will you create a custom hook?</span>
                        What is a custom hook?
                        Image result for What is a custom hook, and why will you create a custom hook?
                        A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic, you can put that code inside a custom hook and reuse it.
                    </p>
                </li>
            </ol>
            </div>
        </div>
    );
};

export default Blog;
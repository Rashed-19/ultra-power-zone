import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-5 ml-10 mr-10'>
            <div tabindex="0" class="collapse collapse-arrow border border-green-400 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  How reacts works
  </div>
  <div class="collapse-content"> 
    <p>React divides the UI into multiple components, which makes the code easier to debug, and each component has its own property and function. React is one-way data binding and it keeps everything modular fast. React keeps a lightweight representation of the Real DOM in the memory, and that is known as the Virtual DOM. JSX is a syntax extension to java Scripts .It is used with react to describe what the user interface should look like. By using JSX, you can write HTML structures in the same file that contains JavaScript code.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Blog;
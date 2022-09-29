import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-5 ml-10 mr-10 text-left'>
            <div tabindex="0" class="collapse collapse-arrow border-2 border-rose-500 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  How reacts works
  </div>
  <div class="collapse-content"> 
    <p>React divides the UI into multiple components, which makes the code easier to debug, and each component has its own property and function. React is one-way data binding and it keeps everything modular fast. React keeps a lightweight representation of the Real DOM in the memory, and that is known as the Virtual DOM. JSX is a syntax extension to java Scripts .It is used with react to describe what the user interface should look like. By using JSX, you can write HTML structures in the same file that contains JavaScript code.</p>
  </div>
</div>

<div tabindex="0" class="collapse collapse-arrow border-2 border-rose-500 bg-base-100 rounded-box mt-3">
  <div class="collapse-title text-xl font-medium">
  Props vs State
  </div>
  <div class="collapse-content"> 
    <p>State are mutable but props are immutable. You can define states in the component itself on the other hand you can pass properties from parent components. The state is set and update by the object (view) and props determine the view upon creation, and then they remain static. Props sends data to one component to other component. And state keep data on its own component. Props makes components suitable for reuse. But states can’t makes components suitable for reuse.</p>
  </div>
</div>
<div tabindex="0" class="collapse collapse-arrow border border-2 border-rose-500 bg-base-100 rounded-box mt-3">
  <div class="collapse-title text-xl font-medium">

  </div>
  <div class="collapse-content"> 
    <p></p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Blog;
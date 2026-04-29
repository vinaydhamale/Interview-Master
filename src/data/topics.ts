export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  category: 'Basics' | 'Intermediate' | 'Advanced' | 'Modern' | 'Hooks' | 'Performance' | 'Interview' | 'Hands On QA' | 'Notes';
  content: string;
  codeExample?: string;
  codeExplanation?: string;
  interactiveDemo?: string;
  diagram?: string;
  diagrams?: string[];
  liveExample?: {
    title: string;
    description: string;
    files: {
      name: string;
      language: string;
      content: string;
      explanation: string;
    }[];
    result: string;
  };
  quiz: QuizQuestion[];
  useCase?: string;
  keywords?: string[];
}

export const topics: Topic[] = [
  {
    id: 'intro',
    title: '1. Introduction to React',
    category: 'Basics',
    keywords: ['library', 'spa', 'meta', 'facebook', 'virtual dom', 'declarative'],
    diagram: 'RenderingDiagram',
    content: `React is a powerful, open-source JavaScript library developed by Meta (formerly Facebook) specifically for building dynamic and interactive user interfaces. It has revolutionized web development by moving away from traditional imperative DOM manipulation towards a **declarative**, **component-based** architecture.

Key features that define React include:
- **Declarative UI:** You describe *what* you want the UI to look like for a given state, and React handles *how* to update the DOM efficiently.
- **Component-Based:** Applications are built using small, independent, and reusable building blocks called components.
- **Virtual DOM:** React maintains a lightweight representation of the real DOM in memory. When state changes, it calculates the minimal set of changes (diffing) and applies them to the actual DOM in a single "commit" phase, which significantly improves performance.
- **Unidirectional Data Flow:** Data moves in one direction—from parent to child—making applications more predictable and easier to debug.`,
    useCase: 'React is ideal for building performance-critical applications with frequent UI updates, such as social media feeds (Facebook, Twitter), streaming platforms (Netflix), and complex SaaS dashboards where a smooth, non-reloading experience is paramount.',
    quiz: [
      {
        id: 'q1-1',
        question: 'Who maintains React?',
        options: ['Google', 'Meta (Facebook)', 'Microsoft', 'Amazon'],
        correctAnswer: 1,
        explanation: 'React was created and is maintained by Meta (formerly Facebook) along with a large community of developers.'
      },
      {
        id: 'q1-2',
        question: 'What is the primary architectural pattern of React?',
        options: ['MVC', 'Component-based', 'Monolithic', 'Event-driven'],
        correctAnswer: 1,
        explanation: 'React is built around reusable, self-contained components.'
      },
      {
        id: 'q1-3',
        question: 'What is the Virtual DOM?',
        options: ['A direct copy of the browser DOM', 'A lightweight representation of the real DOM', 'A database for UI elements', 'A type of browser extension'],
        correctAnswer: 1,
        explanation: 'The Virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM.'
      },
      {
        id: 'q1-4',
        question: 'Which of the following describes React\'s data flow?',
        options: ['Two-way binding', 'Unidirectional (one-way)', 'Circular', 'Random'],
        correctAnswer: 1,
        explanation: 'React uses one-way data flow, where data is passed down from parent to child components via props.'
      },
      {
        id: 'q1-5',
        question: 'What does "declarative" mean in the context of React?',
        options: ['You tell React exactly how to change the DOM', 'You describe what the UI should look like for a given state', 'You must declare all variables as constants', 'You must use a specific declaration syntax'],
        correctAnswer: 1,
        explanation: 'Declarative UI means you describe the desired state, and React handles updating the DOM to match that state.'
      },
      {
        id: 'q1-6',
        question: 'What is JSX?',
        options: ['A new programming language', 'A syntax extension for JavaScript', 'A CSS preprocessor', 'A database query language'],
        correctAnswer: 1,
        explanation: 'JSX stands for JavaScript XML. It allows you to write HTML-like code within JavaScript.'
      },
      {
        id: 'q1-7',
        question: 'Can browsers read JSX directly?',
        options: ['Yes', 'No', 'Only Chrome', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Browsers cannot read JSX. It must be transpiled into standard JavaScript (usually via Babel) before execution.'
      },
      {
        id: 'q1-8',
        question: 'What is a Single Page Application (SPA)?',
        options: ['A website with only one page of content', 'An app that loads a single HTML page and updates dynamically', 'An app that only works on one type of device', 'A website that doesn\'t use JavaScript'],
        correctAnswer: 1,
        explanation: 'SPAs load a single page and dynamically rewrite the current page rather than loading entire new pages from a server.'
      },
      {
        id: 'q1-9',
        question: 'What is the "diffing" algorithm in React?',
        options: ['A way to compare two different libraries', 'The process of comparing the Virtual DOM with the real DOM', 'A method for compressing code', 'A tool for finding bugs'],
        correctAnswer: 1,
        explanation: 'Diffing is the process React uses to identify which parts of the UI need to be updated by comparing the new Virtual DOM with the previous one.'
      },
      {
        id: 'q1-10',
        question: 'Which version introduced React Hooks?',
        options: ['15.0', '16.3', '16.8', '18.0'],
        correctAnswer: 2,
        explanation: 'React 16.8 was the first version to support Hooks, allowing state and other features in functional components.'
      }
    ]
  },
  {
    id: 'ui-components',
    title: 'Describing the UI: Components',
    category: 'Basics',
    content: `React applications are constructed from **components**, which are isolated, reusable pieces of UI. Think of them as custom HTML elements that combine structure (HTML), logic (JavaScript), and sometimes styling (CSS).

By breaking a large interface into smaller components:
- **Reusability:** You can write a component once and use it thousands of times across your app.
- **Maintainability:** Debugging becomes easier because you can isolate issues to a specific component.
- **Collaboration:** Different developers can work on separate components simultaneously without conflicts.`,
    codeExample: `function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}`,
    codeExplanation: `This example demonstrates the core concept of component composition:

1. **Defining a Component ('Profile'):** 
   - We define a JavaScript function named 'Profile'. 
   - It returns a JSX element (an \`<img>\`).
   - Note the capital letter 'P'—this is mandatory for React components.

2. **Using a Component ('Gallery'):**
   - The 'Gallery' component is our main export.
   - Inside its return statement, it uses the '<Profile />' tag three times.
   - When React renders 'Gallery', it replaces each '<Profile />' tag with the markup defined in the 'Profile' function.

3. **Nesting:**
   - This shows how components can be "nested" inside others to build a complex hierarchy. 'Gallery' acts as the parent, and 'Profile' is the child.`,
    useCase: 'Creating reusable UI elements like buttons, navigation bars, or user profile cards.',
    quiz: [
      {
        id: 'q-ui-1',
        question: 'What is a React component?',
        options: ['A CSS class', 'A JavaScript function that returns markup', 'A database table', 'A browser extension'],
        correctAnswer: 1,
        explanation: 'Components are the building blocks of React, defined as functions that return JSX.'
      },
      {
        id: 'q-ui-2',
        question: 'How must React component names start?',
        options: ['With a lowercase letter', 'With a capital letter', 'With an underscore', 'With a dollar sign'],
        correctAnswer: 1,
        explanation: 'React components must start with a capital letter (e.g., <Profile />) to be recognized as components rather than HTML tags.'
      },
      {
        id: 'q-ui-3',
        question: 'Can components be nested inside other components?',
        options: ['Yes', 'No', 'Only if they are in the same file', 'Only in React 18+'],
        correctAnswer: 0,
        explanation: 'Nesting components is the primary way to build complex UIs in React.'
      },
      {
        id: 'q-ui-4',
        question: 'What does a component return?',
        options: ['A string', 'JSX (markup)', 'A number', 'A boolean'],
        correctAnswer: 1,
        explanation: 'Components return JSX, which describes what the UI should look like.'
      },
      {
        id: 'q-ui-5',
        question: 'Where should you define a component?',
        options: ['Inside another component', 'At the top level of a file', 'Inside a loop', 'Inside an if statement'],
        correctAnswer: 1,
        explanation: 'You should define components at the top level of your file. Defining a component inside another component is slow and causes bugs.'
      },
      {
        id: 'q-ui-6',
        question: 'What is the "root" component?',
        options: ['The component that manages the database', 'The top-level component that contains all others', 'A component that renders a <div>', 'A component that handles routing'],
        correctAnswer: 1,
        explanation: 'The root component is the entry point of your React application tree.'
      },
      {
        id: 'q-ui-7',
        question: 'Can a component return multiple top-level elements?',
        options: ['Yes', 'No, it must be wrapped in a single parent or a Fragment', 'Only in production', 'Only if they are strings'],
        correctAnswer: 1,
        explanation: 'JSX requires a single root element. You can use a Fragment (<>...</>) if you don\'t want an extra <div> in the DOM.'
      },
      {
        id: 'q-ui-8',
        question: 'What is a "Pure" component in the context of rendering?',
        options: ['A component with no CSS', 'A component that always returns the same output for the same input', 'A component that only uses state', 'A component that doesn\'t use hooks'],
        correctAnswer: 1,
        explanation: 'Pure components are predictable and don\'t change external variables during rendering.'
      },
      {
        id: 'q-ui-9',
        question: 'How do you export a component to use it in another file?',
        options: ['export default ComponentName', 'module.exports = ComponentName', 'save ComponentName', 'public ComponentName'],
        correctAnswer: 0,
        explanation: 'Standard ES modules use "export default" or named exports to share code between files.'
      },
      {
        id: 'q-ui-10',
        question: 'What is the file extension typically used for React components?',
        options: ['.js', '.jsx or .tsx', '.html', '.css'],
        correctAnswer: 1,
        explanation: '.jsx (JavaScript XML) or .tsx (TypeScript XML) are the standard extensions for components containing JSX.'
      }
    ]
  },
  {
    id: 'ui-jsx',
    interactiveDemo: 'JSXDemo',
    title: 'Describing the UI: Writing Markup with JSX',
    category: 'Basics',
    content: `**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JavaScript code. While it looks like HTML, it is actually transformed into standard JavaScript function calls (\`React.createElement\`) by tools like Babel.

Key rules of JSX:
- **Return a single root element:** Every component must return one element. If you have multiple tags, they must be wrapped in a parent container like \`<div>\` or a Fragment \`<> ... </>\`.
- **Close all tags:** Unlike HTML, empty tags like \`<img>\` or \`<br>\` MUST be self-closing: \`<img />\`.
- **CamelCase most things:** JSX uses camelCase for attributes (e.g., \`strokeWidth\` instead of \`stroke-width\`) and \`className\` instead of \`class\`.
- **Interpolation:** You can embed any JavaScript expression (variables, function calls, math) inside JSX by wrapping it in curly braces \`{ }\`.`,
    codeExample: `export default function TodoList() {
  const name = "Gregorio Y. Zara";
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>{name}'s Work:</li>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}`,
    codeExplanation: `This example highlights how JSX blends markup with JavaScript logic:

1. **Variables in Markup:** We define a variable \`name\` and inject it into the first \`<li>\` using \`{name}\`. This is called "interpolation".
2. **Inline Styling:** notice \`style={{...}}\`. The outer braces "escape" to JavaScript, and the inner braces define a JavaScript object. Property names like \`backgroundColor\` use camelCase.
3. **Structure:** The entire list is wrapped in a single \`<ul>\` tag, satisfying the "single root" rule.
4. **Logic Integration:** Because JSX is just JavaScript, you could easily use loops or conditionals (covered in later sections) to generate these list items dynamically.`,
    useCase: 'Defining the structure and styling of your UI elements directly in your JavaScript code.',
    quiz: [
      {
        id: 'q-jsx-1',
        question: 'What does JSX stand for?',
        options: ['JavaScript XML', 'Java Syntax Extension', 'JSON X-platform', 'JavaScript X-ray'],
        correctAnswer: 0,
        explanation: 'JSX stands for JavaScript XML.'
      },
      {
        id: 'q-jsx-2',
        question: 'Which attribute is used instead of "class" in JSX?',
        options: ['class', 'className', 'styleClass', 'css'],
        correctAnswer: 1,
        explanation: 'Since "class" is a reserved keyword in JavaScript, React uses "className" for CSS classes.'
      },
      {
        id: 'q-jsx-3',
        question: 'How do you write a comment inside JSX?',
        options: ['// comment', '<!-- comment -->', '{/* comment */}', '/* comment */'],
        correctAnswer: 2,
        explanation: 'Comments in JSX must be wrapped in curly braces and use the block comment syntax.'
      },
      {
        id: 'q-jsx-4',
        question: 'Can you return multiple elements from a component without a wrapper?',
        options: ['Yes', 'No, you must use a Fragment or a parent element', 'Only if they are <li> tags', 'Only in React 19'],
        correctAnswer: 1,
        explanation: 'JSX requires a single root element per return statement.'
      },
      {
        id: 'q-jsx-5',
        question: 'How do you pass a JavaScript variable into a JSX attribute?',
        options: ['attr="variable"', 'attr={variable}', 'attr=(variable)', 'attr=[variable]'],
        correctAnswer: 1,
        explanation: 'Curly braces are used to "escape" back into JavaScript from JSX.'
      },
      {
        id: 'q-jsx-6',
        question: 'What is the rule for closing tags in JSX?',
        options: ['Only some tags need closing', 'All tags must be closed (e.g., <img />)', 'Closing tags are optional', 'Only <div> needs closing'],
        correctAnswer: 1,
        explanation: 'JSX is stricter than HTML; every tag must be explicitly closed.'
      },
      {
        id: 'q-jsx-7',
        question: 'How do you apply inline styles in JSX?',
        options: ['style="color: red"', 'style={{ color: "red" }}', 'style={color: "red"}', 'className="red"'],
        correctAnswer: 1,
        explanation: 'Inline styles are passed as a JavaScript object, requiring double curly braces.'
      },
      {
        id: 'q-jsx-8',
        question: 'Which naming convention does JSX use for attributes?',
        options: ['kebab-case', 'camelCase', 'snake_case', 'PascalCase'],
        correctAnswer: 1,
        explanation: 'JSX uses camelCase for most attributes (e.g., onClick, strokeWidth).'
      },
      {
        id: 'q-jsx-9',
        question: 'What happens to JSX before it reaches the browser?',
        options: ['Nothing', 'It is transpiled into React.createElement calls', 'It is converted to a string', 'It is deleted'],
        correctAnswer: 1,
        explanation: 'Tools like Babel convert JSX into standard JavaScript function calls.'
      },
      {
        id: 'q-jsx-10',
        question: 'Can you use if/else statements directly inside JSX?',
        options: ['Yes', 'No, you must use ternary operators or logical &&', 'Only in loops', 'Only for strings'],
        correctAnswer: 1,
        explanation: 'JSX is an expression, not a statement. You must use expressions like { condition ? a : b }.'
      }
    ]
  },
  {
    id: 'ui-props',
    interactiveDemo: 'ComponentDemo',
    title: 'Describing the UI: Passing Props',
    category: 'Basics',
    content: `**Props** (short for "properties") are the mechanism for passing data from a parent component to its children. They are read-only (immutable) snapshots that allow components to be configured and customized.

Think of props like arguments to a function:
1. **Passing Props:** You add them to a JSX tag just like HTML attributes.
2. **Receiving Props:** The child component receives them as a single object (often destructured for readability) in its first argument.
3. **Data Flow:** React uses "unidirectional" or "one-way" data flow, meaning data only moves from parents down to children, never the other way around (unless using specialized callbacks).`,
    codeExample: `function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={person.imageUrl}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar 
      person={{ name: 'Lin', imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg' }} 
      size={200} 
    />
  );
}`,
    codeExplanation: `This example demonstrates how to pass and receive data using props:

1. **Parent Side ('Profile'):** 
   - We pass a \`person\` prop (as an object) and a \`size\` prop (as a number) to the \`Avatar\` component.
   - Notice the curly braces around the person object: \`person={{ ... }}\`. The outer braces are for JSX interpolation, and the inner ones define the object.

2. **Child Side ('Avatar'):**
   - The function uses **destructuring** \`({ person, size = 100 })\` to extract the props directly.
   - We also set a **default value** for \`size\` (= 100), which is used if the parent doesn't provide it.
   - Inside the markup, we use these values to set the \`src\`, \`alt\`, \`width\`, and \`height\` of the image.

3. **Immutability:** \`Avatar\` cannot change the \`person\` object it receives; it can only "read" it and render based on its current values.`,
    useCase: 'Passing user data to a profile component or configuration options to a UI widget.',
    quiz: [
      {
        id: 'q-props-1',
        question: 'What are props?',
        options: ['State variables', 'Arguments passed to a component', 'CSS properties', 'HTML tags'],
        correctAnswer: 1,
        explanation: 'Props (short for properties) are the inputs to a React component.'
      },
      {
        id: 'q-props-2',
        question: 'Are props read-only (immutable)?',
        options: ['Yes', 'No', 'Only in strict mode', 'Only for strings'],
        correctAnswer: 0,
        explanation: 'A component should never modify its own props. They are owned by the parent.'
      },
      {
        id: 'q-props-3',
        question: 'How do you access props in a functional component?',
        options: ['this.props', 'As the first argument of the function', 'Using getProps()', 'They are global variables'],
        correctAnswer: 1,
        explanation: 'Functional components receive props as their first argument.'
      },
      {
        id: 'q-props-4',
        question: 'What is "prop destructuring"?',
        options: ['Deleting props', 'Extracting specific properties from the props object in the function signature', 'Passing props to a child', 'Renaming props'],
        correctAnswer: 1,
        explanation: 'Destructuring ({ name, age }) makes the code cleaner by avoiding "props.name".'
      },
      {
        id: 'q-props-5',
        question: 'Can you pass a function as a prop?',
        options: ['Yes', 'No', 'Only if it\'s an arrow function', 'Only in React 18+'],
        correctAnswer: 0,
        explanation: 'Passing functions as props is common for handling events in child components.'
      },
      {
        id: 'q-props-6',
        question: 'What is "children" prop?',
        options: ['A list of child components', 'A special prop that represents the content between the opening and closing tags', 'A prop for managing age', 'A deprecated feature'],
        correctAnswer: 1,
        explanation: 'The children prop allows you to nest content inside your custom components.'
      },
      {
        id: 'q-props-7',
        question: 'How do you set a default value for a prop?',
        options: ['Using defaultProps', 'Using ES6 default parameters in the function signature', 'Both are valid', 'It\'s not possible'],
        correctAnswer: 2,
        explanation: 'Both default parameters and the static defaultProps property can be used.'
      },
      {
        id: 'q-props-8',
        question: 'What is "prop drilling"?',
        options: ['A way to optimize props', 'Passing props through multiple levels of components that don\'t need them', 'A tool for debugging props', 'A method for validating props'],
        correctAnswer: 1,
        explanation: 'Prop drilling can make code hard to maintain; Context or state management can help avoid it.'
      },
      {
        id: 'q-props-9',
        question: 'Can props be changed by the component receiving them?',
        options: ['Yes', 'No, they should be treated as immutable snapshots', 'Only if they are objects', 'Only in async functions'],
        correctAnswer: 1,
        explanation: 'Components must be pure with respect to their props.'
      },
      {
        id: 'q-props-10',
        question: 'How do you pass all props of an object to a component at once?',
        options: ['Using the spread operator {...props}', 'Passing the whole object as one prop', 'It\'s not possible', 'Using a loop'],
        correctAnswer: 0,
        explanation: 'The spread operator is a convenient way to pass multiple props down.'
      }
    ]
  },
  {
    id: 'ui-conditional',
    interactiveDemo: 'ConditionalDemo',
    title: 'Describing the UI: Conditional Rendering',
    category: 'Basics',
    content: `In React, you often need to show different UI depending on certain conditions. Since JSX is just JavaScript, you can use standard control flow tools like \`if\` statements, ternary operators (\`? :\`), and logical AND (\`&&\`) to determine what to render.

Common patterns include:
- **Ternary Operator (\`condition ? A : B\`):** Best when you want to choose between two different elements.
- **Logical AND (\`condition && A\`):** Best when you want to either render something or render nothing at all.
- **Null return:** If a component shouldn't render anything, it can return \`null\`.
- **Variables:** You can assign JSX to variables inside \`if\` statements to keep your return statement clean.`,
    codeExample: `function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? (
        <del>
          {name + ' ✔'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}`,
    codeExplanation: `This example demonstrates how to use the ternary operator for conditional styling and content:

1. **The Item Component:** Receives a \`name\` and an \`isPacked\` boolean.
2. **Conditional Logic:** Inside the \`<li>\`, we check \`isPacked\`.
   - **If true:** It renders a \`<del>\` (strikethrough) tag containing the name and a checkmark.
   - **If false:** It simply renders the name string.
3. **Usage:** The \`PackingList\` parent passes different values for \`isPacked\`, allowing each \`Item\` to decide its own visual state independently.
4. **Declarative Style:** Notice we don't "update" the DOM when something is packed; we describe what a "packed" item looks like vs an "unpacked" one.`,
    useCase: 'Showing a loading spinner while data is fetching or displaying an error message if a form is invalid.',
    quiz: [
      {
        id: 'q-cond-1',
        question: 'Which operator is best for "if true, show this, else show nothing"?',
        options: ['?', '&&', '||', 'if'],
        correctAnswer: 1,
        explanation: 'The logical AND (&&) operator is a concise way to conditionally include an element.'
      },
      {
        id: 'q-cond-2',
        question: 'Which operator is best for "if true, show A, else show B"?',
        options: ['?', '&&', '||', 'switch'],
        correctAnswer: 0,
        explanation: 'The ternary operator (? :) is ideal for choosing between two different pieces of JSX.'
      },
      {
        id: 'q-cond-3',
        question: 'Can you use a standard "if" statement inside a JSX return?',
        options: ['Yes', 'No, you must use it outside the return or use an expression', 'Only in loops', 'Only in React 19'],
        correctAnswer: 1,
        explanation: 'JSX only accepts expressions. Statements like "if" must be used before the return statement.'
      },
      {
        id: 'q-cond-4',
        question: 'What does React render if an expression evaluates to "false", "null", or "undefined"?',
        options: ['The string "false"', 'Nothing (it skips it)', 'An error', 'A <div>'],
        correctAnswer: 1,
        explanation: 'React ignores these values when rendering, which is useful for conditional logic.'
      },
      {
        id: 'q-cond-5',
        question: 'What is a common pitfall when using "&&" with numbers?',
        options: ['It always returns true', 'If the number is 0, React will render "0" instead of nothing', 'It causes a crash', 'It\'s slower'],
        correctAnswer: 1,
        explanation: 'Since 0 is falsy but React renders it, you should use "count > 0 && ..." instead of "count && ...".'
      },
      {
        id: 'q-cond-6',
        question: 'How do you conditionally apply a CSS class?',
        options: ['className={isActive ? "active" : ""}', 'className="active if isActive"', 'class={isActive}', 'className={if(isActive) "active"}'],
        correctAnswer: 0,
        explanation: 'You use a JavaScript expression inside the className attribute.'
      },
      {
        id: 'q-cond-7',
        question: 'Can you use a switch statement for conditional rendering?',
        options: ['Yes, but usually outside the JSX return', 'No', 'Only for numbers', 'Only in production'],
        correctAnswer: 0,
        explanation: 'Switch statements are great for complex conditions, typically used to determine which component to return.'
      },
      {
        id: 'q-cond-8',
        question: 'What is a "null" return from a component?',
        options: ['An error', 'A way to tell React to render nothing for this component', 'A way to delete the component', 'A memory leak'],
        correctAnswer: 1,
        explanation: 'Returning null from a component is a valid way to hide it.'
      },
      {
        id: 'q-cond-9',
        question: 'How do you handle complex conditional logic in a component?',
        options: ['Nest many ternary operators', 'Extract the logic into a variable or a helper function before the return', 'Use a global variable', 'It\'s not possible'],
        correctAnswer: 1,
        explanation: 'Keeping the JSX clean by moving logic into variables makes the code much more readable.'
      },
      {
        id: 'q-cond-10',
        question: 'Does conditional rendering affect the component\'s state?',
        options: ['Yes, it resets it', 'No, unless the component is unmounted and remounted', 'Only for strings', 'Only in strict mode'],
        correctAnswer: 1,
        explanation: 'If a component stays in the same position in the tree, its state is preserved even if its props change.'
      }
    ]
  },
  {
    id: 'ui-lists',
    interactiveDemo: 'ListDemo',
    title: 'Describing the UI: Rendering Lists',
    category: 'Basics',
    content: `Rendering lists is a common task in React, usually performed by transforming an array of data into an array of JSX elements using the JavaScript \`map()\` function.

**The Importance of Keys:**
When rendering a list, React requires each item to have a unique \`key\` prop (usually a string or number). Keys help React identify which items have changed, been added, or been removed. This is vital for:
- **Performance:** React can reuse existing DOM elements instead of re-creating them.
- **State Preservation:** Without stable keys, React might lose track of which component instance belongs to which piece of data (e.g., losing text in an input field).`,
    codeExample: `const people = [
  { id: 0, name: 'Creola Katherine Johnson', profession: 'mathematician' },
  { id: 1, name: 'Mario José Molina-Pasquel Henríquez', profession: 'chemist' },
  { id: 2, name: 'Mohammad Abdus Salam', profession: 'physicist' }
];

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}`,
    codeExplanation: `This example shows the standard pattern for rendering dynamic data:

1. **Data Array:** We start with an array of objects (\`people\`), each having a unique \`id\`.
2. **Transformation:** We use \`people.map()\` to produce a new array (\`listItems\`) where each object is turned into a \`<li>\` tag.
3. **The Key Prop:** We assign \`person.id\` to the \`key\` attribute. This ID comes from our data and is stable.
4. **Rendering:** Finally, we drop the \`{listItems}\` array into a single \`<ul>\` tag. React is smart enough to render an array of elements sequentially.
5. **Separation of Concerns:** The data (the array) is separate from the view (the markup inside the map), making it easy to add or remove items by simply modifying the array.`,
    useCase: 'Displaying a list of users from an API or a set of navigation links.',
    quiz: [
      {
        id: 'q-list-1',
        question: 'Which JavaScript method is most commonly used to render lists in React?',
        options: ['forEach()', 'map()', 'filter()', 'reduce()'],
        correctAnswer: 1,
        explanation: 'map() returns a new array, which React can then render directly.'
      },
      {
        id: 'q-list-2',
        question: 'Why do list items need a "key" prop?',
        options: ['To style them', 'To help React identify which items changed, were added, or removed', 'To set their ID in the DOM', 'To make them clickable'],
        correctAnswer: 1,
        explanation: 'Keys provide a stable identity for elements in a list, optimizing the diffing process.'
      },
      {
        id: 'q-list-3',
        question: 'What should you use as a key?',
        options: ['The array index', 'A unique ID from your data (like a database ID)', 'A random number', 'The item\'s name'],
        correctAnswer: 1,
        explanation: 'Using a stable, unique ID from your data is the best practice. Avoid using indexes if the list can change.'
      },
      {
        id: 'q-list-4',
        question: 'What happens if you use Math.random() as a key?',
        options: ['It works perfectly', 'Components will lose their state and re-render on every update', 'It speeds up the app', 'It throws a syntax error'],
        correctAnswer: 1,
        explanation: 'Random keys change on every render, causing React to recreate the DOM nodes and lose component state.'
      },
      {
        id: 'q-list-5',
        question: 'Can you use the array index as a key?',
        options: ['Yes, but only if the list is static and never changes', 'No, never', 'Yes, always', 'Only for strings'],
        correctAnswer: 0,
        explanation: 'Index is a last resort. It can cause bugs if items are reordered, added, or deleted.'
      },
      {
        id: 'q-list-6',
        question: 'Where should the "key" prop be placed?',
        options: ['On the outermost element returned by the map() function', 'On the innermost element', 'On the parent <ul>', 'It doesn\'t matter'],
        correctAnswer: 0,
        explanation: 'The key must be on the element that is directly inside the array.'
      },
      {
        id: 'q-list-7',
        question: 'How do you filter a list before rendering it?',
        options: ['Using the filter() method before map()', 'Using an if statement inside map()', 'Using a CSS selector', 'It\'s not possible'],
        correctAnswer: 0,
        explanation: 'Chaining .filter().map() is a common pattern for conditional list rendering.'
      },
      {
        id: 'q-list-8',
        question: 'What happens if you forget to provide a key?',
        options: ['The app crashes', 'React shows a warning in the console', 'The list won\'t render', 'Nothing'],
        correctAnswer: 1,
        explanation: 'React will still render the list but will warn you about the missing keys.'
      },
      {
        id: 'q-list-9',
        question: 'Can keys be shared between different lists?',
        options: ['Yes, they only need to be unique within their own list', 'No, they must be globally unique', 'Only if the lists are in different files', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'Keys don\'t need to be globally unique; they just need to be unique among siblings.'
      },
      {
        id: 'q-list-10',
        question: 'How do you render a list of components?',
        options: ['{items.map(item => <MyComponent key={item.id} {...item} />)}', '{items.forEach(item => <MyComponent />)}', '<MyComponent list={items} />', 'Using a for loop'],
        correctAnswer: 0,
        explanation: 'Mapping data to components is the standard declarative way to render lists.'
      }
    ]
  },
  {
    id: 'basics-fragments',
    title: 'Fragments',
    category: 'Basics',
    content: `In React, a component can only return a single element. However, sometimes you want to return multiple elements without adding an extra wrapper node (like a \`<div>\`) to the DOM. **Fragments** (\`<> ... </>\` or \`<React.Fragment>\`) allow you to group multiple children without adding extra complexity or breaking CSS layouts like Flexbox or Grid.`,
    codeExample: `function Column() {
  return (
    <>
      <td>Name</td>
      <td>Age</td>
    </>
  );
}

export default function Table() {
  return (
    <table>
      <tr>
        <Column />
      </tr>
    </table>
  );
}`,
    codeExplanation: `1. **The Problem:** A \`<tr>\` tag expects \`<td>\` children directly. If \`Column\` returned a \`<div>\`, it would break the table's structure.
2. **The Solution:** By using \`<>\` (Fragments), \`Column\` returns two \`<td>\` tags directly.
3. **DOM Cleanliness:** When you inspect the page, you'll see the \`<td>\` tags directly inside the \`<tr>\`, with no trace of the Fragment wrapper.`,
    useCase: 'Returning multiple elements from a component without adding a wrapper <div> that might break CSS layouts like Flexbox or Grid.',
    quiz: []
  },
  {
    id: 'thinking-in-react',
    title: 'Thinking in React',
    category: 'Basics',
    content: `Thinking in React is a mental model for building apps. It involves five steps: 1. Break the UI into a component hierarchy. 2. Build a static version in React. 3. Find the minimal but complete representation of UI state. 4. Identify where your state should live. 5. Add inverse data flow.`,
    codeExample: `// Step 1: Component Hierarchy\n// FilterableProductTable\n//   SearchBar\n//   ProductTable\n//     ProductCategoryRow\n//     ProductRow`,
    codeExplanation: `This topic describes the process of taking a mockup and turning it into a functional React app. By breaking the UI down into small, single-responsibility components and carefully choosing where state lives, you can build complex applications that are easy to maintain.

Use this process whenever you start a new feature or application.`,
    useCase: 'Planning the architecture of a new React application from a design mockup.',
    quiz: [
      {
        id: 'q-think-1',
        question: 'What is the first step in "Thinking in React"?',
        options: ['Add state', 'Break the UI into a component hierarchy', 'Write the CSS', 'Fetch data'],
        correctAnswer: 1,
        explanation: 'Start by identifying the components in your mockup.'
      },
      {
        id: 'q-think-2',
        question: 'What is a "static version" of an app?',
        options: ['An app with no CSS', 'A version that renders the UI but has no interactivity (no state)', 'An app that only works on desktop', 'A version with a database'],
        correctAnswer: 1,
        explanation: 'Building a static version first helps you focus on the structure without the complexity of state.'
      },
      {
        id: 'q-think-3',
        question: 'How do you identify the minimal representation of state?',
        options: ['Put everything in state', 'Ask: Is it passed from a parent? Does it remain unchanged? Can you compute it from other state/props?', 'Use a global variable', 'Check the file size'],
        correctAnswer: 1,
        explanation: 'If a value can be computed or is passed down, it shouldn\'t be state.'
      },
      {
        id: 'q-think-4',
        question: 'Where should state live in the component hierarchy?',
        options: ['Always at the root', 'In the closest common ancestor of the components that need it', 'In every component', 'In the CSS'],
        correctAnswer: 1,
        explanation: 'Lifting state up to a common parent ensures data consistency.'
      },
      {
        id: 'q-think-5',
        question: 'What is "inverse data flow"?',
        options: ['Passing props up to parents', 'Passing functions down to children so they can update the parent\'s state', 'Moving data from the server to the client', 'Reversing the order of components'],
        correctAnswer: 1,
        explanation: 'Since data flows down, children need callbacks to "send" data back up.'
      },
      {
        id: 'q-think-6',
        question: 'Should you use state while building the static version?',
        options: ['Yes', 'No, use only props to pass data', 'Only for strings', 'Only in strict mode'],
        correctAnswer: 1,
        explanation: 'The static version should be pure and predictable.'
      },
      {
        id: 'q-think-7',
        question: 'What does "single responsibility principle" mean for components?',
        options: ['A component should only have one prop', 'A component should ideally do only one thing', 'A component should only be used once', 'A component should only have one line of code'],
        correctAnswer: 1,
        explanation: 'Small, focused components are easier to reuse and test.'
      },
      {
        id: 'q-think-8',
        question: 'How do you know if a component should be split into smaller ones?',
        options: ['If it has more than 10 lines', 'If it starts growing too large or doing too many things', 'If it has more than 2 props', 'If it uses state'],
        correctAnswer: 1,
        explanation: 'Follow the same criteria you use for deciding if a function should be split.'
      },
      {
        id: 'q-think-9',
        question: 'Is "Thinking in React" only for beginners?',
        options: ['Yes', 'No, it\'s a fundamental mental model for all React developers', 'Only for mobile developers', 'Only for designers'],
        correctAnswer: 1,
        explanation: 'Even experienced developers use this structured approach for complex features.'
      },
      {
        id: 'q-think-10',
        question: 'What is the benefit of building top-down or bottom-up?',
        options: ['It makes the app faster', 'Top-down is better for small projects; bottom-up is better for large ones where you can write tests as you go', 'It doesn\'t matter', 'It uses less memory'],
        correctAnswer: 1,
        explanation: 'Both approaches are valid depending on the project scale and complexity.'
      }
    ]
  },
  {
    id: 'interactivity-events',
    title: 'Adding Interactivity: Responding to Events',
    category: 'Basics',
    diagram: 'EventBubbleDiagram',
    content: `React lets you add interactive behavior to your UI by attaching **event handlers** to your JSX. These are functions that "fire" when a user clicks, hovers, types, or performs any other interaction.

Important distinctions from HTML:
- **Functions, not Strings:** You pass a JavaScript function directly, not a string (e.g., \`onClick={handleClick}\` vs \`onclick="handleClick()"\`).
- **CamelCase:** Props are named \`onClick\`, \`onMouseEnter\`, etc.
- **Pass, don't Call:** You must pass the function reference. If you pass \`onClick={handleClick()}\`, the function will run once during rendering and never again!`,
    codeExample: `function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}`,
    codeExplanation: `This example demonstrates passing event logic via props:

1. **Defining the Handler:** The \`AlertButton\` component takes a \`message\` prop.
2. **Anonymous Function:** We use an arrow function \`() => alert(message)\` in the \`onClick\`. This ensures the \`alert\` only happens when the button is clicked, and allows us to use the \`message\` variable.
3. **Composition:** The \`Toolbar\` parent reuses \`AlertButton\` twice, passing different messages and children.
4. **Prop Delegation:** The event starts at the \`AlertButton\` but can also "bubble up" to the \`Toolbar\`'s \`<div>\` if it had a handler.`,
    useCase: 'Handling button clicks, form submissions, or mouse movements.',
    quiz: [
      {
        id: 'q-event-1',
        question: 'How do you pass an event handler in React?',
        options: ['onClick="handleClick()"', 'onClick={handleClick}', 'onclick={handleClick()}', 'on-click={handleClick}'],
        correctAnswer: 1,
        explanation: 'You pass the function reference itself, not a string or a function call.'
      },
      {
        id: 'q-event-2',
        question: 'What is the naming convention for event props in React?',
        options: ['onclick', 'onClick', 'on-click', 'click'],
        correctAnswer: 1,
        explanation: 'React uses camelCase for all event names (e.g., onMouseEnter, onChange).'
      },
      {
        id: 'q-event-3',
        question: 'How do you pass arguments to an event handler?',
        options: ['onClick={handleClick(arg)}', 'onClick={() => handleClick(arg)}', 'onClick={handleClick.bind(arg)}', 'Both 1 and 2 are valid'],
        correctAnswer: 1,
        explanation: 'Wrapping the call in an anonymous function is the most common way to pass arguments.'
      },
      {
        id: 'q-event-4',
        question: 'What is "event bubbling"?',
        options: ['Events moving from child to parent', 'Events moving from parent to child', 'Events disappearing', 'Events repeating'],
        correctAnswer: 0,
        explanation: 'Events "bubble" up the component tree unless stopped.'
      },
      {
        id: 'q-event-5',
        question: 'How do you stop an event from bubbling up?',
        options: ['e.stop()', 'e.stopPropagation()', 'e.preventDefault()', 'return false'],
        correctAnswer: 1,
        explanation: 'stopPropagation() prevents the event from reaching parent event handlers.'
      },
      {
        id: 'q-event-6',
        question: 'What does e.preventDefault() do?',
        options: ['Stops the event from bubbling', 'Prevents the default browser behavior (like form submission)', 'Deletes the event', 'Crashes the app'],
        correctAnswer: 1,
        explanation: 'It\'s commonly used in form handlers to prevent the page from reloading.'
      },
      {
        id: 'q-event-7',
        question: 'Where should event handlers be defined?',
        options: ['Inside the component function', 'Outside the component', 'In a separate CSS file', 'In the index.html'],
        correctAnswer: 0,
        explanation: 'Defining them inside the component allows them to access the component\'s props and state.'
      },
      {
        id: 'q-event-8',
        question: 'Are React events the same as native browser events?',
        options: ['Yes', 'No, they are "SyntheticEvents" (wrappers for cross-browser compatibility)', 'Only in Chrome', 'Only for clicks'],
        correctAnswer: 1,
        explanation: 'React wraps native events to ensure they behave consistently across all browsers.'
      },
      {
        id: 'q-event-9',
        question: 'Can you use capture phase events in React?',
        options: ['Yes, by appending "Capture" to the event name (e.g., onClickCapture)', 'No', 'Only in class components', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'React supports the capture phase for all standard events.'
      },
      {
        id: 'q-event-10',
        question: 'What happens if you pass "handleClick()" instead of "handleClick" to onClick?',
        options: ['It works fine', 'The function runs immediately during render, not on click', 'It throws an error', 'Nothing'],
        correctAnswer: 1,
        explanation: 'Calling the function during render is a common bug. You must pass the function itself.'
      }
    ]
  },
  {
    id: 'interactivity-state-snapshot',
    title: 'Adding Interactivity: State as a Snapshot',
    category: 'Basics',
    content: `When you update state in React, it might feel like you're changing a variable, but you're actually triggering a **re-render** that happens with a new "snapshot" of state.

During a single render:
- **State is constant:** The value of a state variable is "frozen" for the duration of that render's event handlers.
- **Batched updates:** React waits until all code in an event handler has finished before processing your state updates.
- **Snapshot rendering:** If you call \`setCount(count + 1)\` multiple times in one click, React uses the *original* count value for each call because that render's snapshot hasn't changed yet.`,
    codeExample: `import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3? No, it's +1</button>
    </>
  );
}`,
    codeExplanation: `This behavior is often counter-intuitive for beginners:

1. **The Initial Render:** \`number\` is 0.
2. **The Click Handler:** 
   - First \`setNumber(number + 1)\`: React sees \`setNumber(0 + 1)\`.
   - Second \`setNumber(number + 1)\`: React still sees \`setNumber(0 + 1)\` because \`number\` is still 0 in this render.
   - Third \`setNumber(number + 1)\`: Again, \`setNumber(0 + 1)\`.
3. **The Batching:** React collects these three "set to 1" requests and performs a single re-render.
4. **The Result:** Even though you called the function three times, the final result is 1. This prevents unnecessary intermediate re-renders and ensures a consistent UI snapshot.`,
    useCase: 'Understanding why multiple state updates in a single event handler might not behave as expected.',
    quiz: [
      {
        id: 'q-snapshot-1',
        question: 'What does it mean that state is a "snapshot"?',
        options: ['It\'s a photo of the UI', 'The state value is fixed for the duration of a single render', 'State is stored in a database', 'State is temporary'],
        correctAnswer: 1,
        explanation: 'During a render, the state value does not change, even if you call the setter function.'
      },
      {
        id: 'q-snapshot-2',
        question: 'In the example above, why does the number only increase by 1?',
        options: ['React is buggy', 'Each call uses the same "0" value from the current render', 'React only allows one update per click', 'The button is broken'],
        correctAnswer: 1,
        explanation: 'All three calls are effectively setNumber(0 + 1) because the value of "number" is 0 throughout that event handler.'
      },
      {
        id: 'q-snapshot-3',
        question: 'When does the state actually change?',
        options: ['Immediately after calling the setter', 'In the next render', 'After 1 second', 'When the user clicks again'],
        correctAnswer: 1,
        explanation: 'The setter function schedules a re-render with the new value.'
      },
      {
        id: 'q-snapshot-4',
        question: 'What is "batching" in React?',
        options: ['Processing data in groups', 'React waiting until all code in an event handler has run before re-rendering', 'A way to compress state', 'A method for fetching data'],
        correctAnswer: 1,
        explanation: 'Batching improves performance by avoiding multiple re-renders for multiple state updates in one event.'
      },
      {
        id: 'q-snapshot-5',
        question: 'How can you update state multiple times in one event handler correctly?',
        options: ['Use a loop', 'Pass an updater function (e.g., n => n + 1) to the setter', 'Use a global variable', 'It\'s not possible'],
        correctAnswer: 1,
        explanation: 'Updater functions allow you to queue updates based on the *previous* state in the queue.'
      },
      {
        id: 'q-snapshot-6',
        question: 'Does state change if you modify the variable directly (e.g., count = 5)?',
        options: ['Yes', 'No, and React won\'t know to re-render', 'Only in strict mode', 'Only for strings'],
        correctAnswer: 1,
        explanation: 'You must use the setter function to trigger a re-render and update the state snapshot.'
      },
      {
        id: 'q-snapshot-7',
        question: 'What happens to local variables inside a component when it re-renders?',
        options: ['They are preserved', 'They are recreated from scratch', 'They are moved to state', 'They are deleted'],
        correctAnswer: 1,
        explanation: 'Only state (and refs) are preserved across renders. Regular variables are reset.'
      },
      {
        id: 'q-snapshot-8',
        question: 'Can you read the "new" state value immediately after calling the setter?',
        options: ['Yes', 'No, you will still see the "old" value from the current snapshot', 'Only in async functions', 'Only in React 19'],
        correctAnswer: 1,
        explanation: 'The variable itself doesn\'t change until the next render.'
      },
      {
        id: 'q-snapshot-9',
        question: 'Is batching supported in promises and timeouts?',
        options: ['Yes, in React 18+', 'No, only in native events', 'Only in production', 'Only for numbers'],
        correctAnswer: 0,
        explanation: 'React 18 introduced "Automatic Batching" for all updates, including those in promises and timeouts.'
      },
      {
        id: 'q-snapshot-10',
        question: 'Why does React use snapshots?',
        options: ['To make it harder to code', 'To ensure UI consistency and avoid bugs related to changing values mid-render', 'To save memory', 'To support old browsers'],
        correctAnswer: 1,
        explanation: 'Snapshots make the UI predictable and easier to reason about.'
      }
    ]
  },
  {
    id: 'interactivity-state-objects',
    title: 'Adding Interactivity: Updating Objects in State',
    category: 'Basics',
    content: `In React, state should be treated as **immutable**. While JavaScript allows you to mutate objects (\`obj.x = 5\`), you must never do this with objects stored in React state.

Why Immutability?
- **Change Detection:** React compares the *reference* of the old state object with the new one. If you mutate the object directly, the reference stays the same, and React might skip the re-render.
- **Predictability:** Immutable updates make it easier to implement features like "Undo/Redo" or "Time Travel Debugging".
- **The Spread Operator:** The easiest way to update an object is to create a copy using \`...\` and override the specific fields you want to change.`,
    codeExample: `import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person, // Copy all existing fields
      firstName: e.target.value // Override this one
    });
  }

  return (
    <>
      <input value={person.firstName} onChange={handleFirstNameChange} />
      <p>{person.firstName} {person.lastName} ({person.email})</p>
    </>
  );
}`,
    codeExplanation: `1. **The spread operator (\`...person\`):** This is vital. It creates a brand new object in memory and copies all properties from the current \`person\` object into it.
2. **Overriding:** By placing \`firstName: e.target.value\` after the spread, we tell JavaScript: "Copy everything, but specifically use this new value for firstName".
3. **Reference Change:** Because we used \`{ ... }\`, \`setPerson\` receives a *new object reference*. React sees this different reference and knows it MUST re-render.
4. **Nested Objects:** If your object has nested objects (e.g., \`person.address.city\`), you must spread every level to ensure deep immutability.`,
    useCase: 'Updating a single field in a multi-input form without losing the other values.',
    quiz: [
      {
        id: 'q-obj-1',
        question: 'Can you modify a state object directly (e.g., person.name = "John")?',
        options: ['Yes', 'No, you should treat state as read-only', 'Only if it\'s a shallow object', 'Only in strict mode'],
        correctAnswer: 1,
        explanation: 'Direct mutation won\'t trigger a re-render and can lead to bugs.'
      },
      {
        id: 'q-obj-2',
        question: 'What is the best way to update one property of a state object?',
        options: ['Create a new object using the spread operator {...obj, key: value}', 'Use Object.assign()', 'Use a loop', 'Delete the old object'],
        correctAnswer: 0,
        explanation: 'The spread operator is the most concise way to copy and update objects.'
      },
      {
        id: 'q-obj-3',
        question: 'How do you update a nested object (e.g., person.address.city)?',
        options: ['setPerson({ ...person, city: "NY" })', 'You must spread every level: setPerson({ ...person, address: { ...person.address, city: "NY" } })', 'person.address.city = "NY"', 'It\'s not possible'],
        correctAnswer: 1,
        explanation: 'You must create new references for every level of nesting that you want to update.'
      },
      {
        id: 'q-obj-4',
        question: 'What is "mutation"?',
        options: ['Changing the content of an object or array directly', 'Creating a new object', 'A type of React hook', 'A CSS animation'],
        correctAnswer: 0,
        explanation: 'Mutation is changing the data "in place" rather than creating a new version.'
      },
      {
        id: 'q-obj-5',
        question: 'Why does React require immutability for objects?',
        options: ['To save memory', 'To quickly detect changes by comparing object references (Object.is)', 'To support older browsers', 'To make code longer'],
        correctAnswer: 1,
        explanation: 'If the reference is the same, React assumes nothing changed and skips the re-render.'
      },
      {
        id: 'q-obj-6',
        question: 'Which library can help with complex nested state updates?',
        options: ['Immer', 'Lodash', 'jQuery', 'Moment'],
        correctAnswer: 0,
        explanation: 'Immer allows you to write "mutating" code that it then converts into immutable updates.'
      },
      {
        id: 'q-obj-7',
        question: 'What happens if you spread an object but forget to override the property?',
        options: ['It deletes the property', 'It keeps the old value', 'It throws an error', 'It sets it to null'],
        correctAnswer: 1,
        explanation: 'Spreading copies all existing properties.'
      },
      {
        id: 'q-obj-8',
        question: 'Can you use dynamic keys when updating an object?',
        options: ['Yes, using [key]: value syntax', 'No', 'Only for strings', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'Computed property names are very useful for generic form handlers.'
      },
      {
        id: 'q-obj-9',
        question: 'Is it okay to mutate an object you just created locally?',
        options: ['Yes, as long as it hasn\'t been put into state yet', 'No, never mutate anything', 'Only in async functions', 'Only for numbers'],
        correctAnswer: 0,
        explanation: 'Local mutation of a brand new object is fine before you pass it to the state setter.'
      },
      {
        id: 'q-obj-10',
        question: 'What is the "referential equality" check?',
        options: ['Checking if two objects have the same content', 'Checking if two variables point to the exact same object in memory', 'Checking if two strings are equal', 'A way to sort arrays'],
        correctAnswer: 1,
        explanation: 'React uses this (===) to decide if it needs to re-render.'
      }
    ]
  },
  {
    id: 'interactivity-state-arrays',
    title: 'Adding Interactivity: Updating Arrays in State',
    category: 'Basics',
    content: `Like objects, arrays in React state should be treated as **read-only**. You should never use methods that mutate the original array, such as \`push()\`, \`pop()\`, \`splice()\`, or \`reverse()\`.

Instead, use methods that return a **new array**:
- **Adding:** Use the spread operator: \`[...list, newItem]\`.
- **Removing:** Use \`filter()\`.
- **Transforming:** Use \`map()\`.
- **Replacing:** Use \`map()\` to find the index and return the new value for that specific item.`,
    codeExample: `import { useState } from 'react';

export default function List() {
  const [artists, setArtists] = useState([
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' }
  ]);

  function addArtist(name) {
    // Correct: Create a NEW array
    setArtists([...artists, { id: Date.now(), name }]);
  }

  function removeArtist(id) {
    // Correct: Filter returns a NEW array
    setArtists(artists.filter(a => a.id !== id));
  }

  return (
    <ul>
      {artists.map(a => <li key={a.id}>{a.name}</li>)}
    </ul>
  );
}`,
    codeExplanation: `This example shows the "React way" to handle lists:

1. **Adding Item (\`[...artists, ...]\`):** We use square brackets to create a new array. We "spread" the old artists into it and add the new object at the end. The original array remains untouched.
2. **Removing Item (\`artists.filter(...)\`):** The \`filter\` method does not change the characters array; it creates a *new* filtered array. We tell it to keep only the artists whose ID doesn't match the one we want to delete.
3. **Stable IDs:** Each artist has a unique ID. We use this ID for both the \`key\` prop and for identifying which item to remove.
4. **Referential Integrity:** By always providing a new array reference to \`setArtists\`, we ensure React correctly triggers the "diffing" process for our list.`,
    useCase: 'Managing a list of tasks, a shopping cart, or a gallery of uploaded images.',
    quiz: [
      {
        id: 'q-arr-1',
        question: 'Which array method should you avoid in React state?',
        options: ['map()', 'filter()', 'push()', 'concat()'],
        correctAnswer: 2,
        explanation: 'push() mutates the original array. You should use [...arr, newItem] instead.'
      },
      {
        id: 'q-arr-2',
        question: 'How do you add an item to the beginning of a state array?',
        options: ['setList([newItem, ...list])', 'list.unshift(newItem)', 'setList(list.push(newItem))', 'It\'s not possible'],
        correctAnswer: 0,
        explanation: 'The spread operator allows you to easily prepend items to a new array.'
      },
      {
        id: 'q-arr-3',
        question: 'Which method is best for removing an item from a state array?',
        options: ['splice()', 'filter()', 'pop()', 'shift()'],
        correctAnswer: 1,
        explanation: 'filter() creates a new array containing only the items that match a condition.'
      },
      {
        id: 'q-arr-4',
        question: 'How do you update a specific item in a state array?',
        options: ['list[index] = newValue', 'Using map() to return a new array with the updated item', 'Using splice()', 'It\'s not possible'],
        correctAnswer: 1,
        explanation: 'map() is the standard way to transform items in an array while keeping the others the same.'
      },
      {
        id: 'q-arr-5',
        question: 'How do you insert an item at a specific index?',
        options: ['Using slice() and spread: [...list.slice(0, i), newItem, ...list.slice(i)]', 'list.insert(i, newItem)', 'Using push()', 'Using map()'],
        correctAnswer: 0,
        explanation: 'Combining slice and spread allows for precise insertions into a new array.'
      },
      {
        id: 'q-arr-6',
        question: 'How do you sort a state array?',
        options: ['setList(list.sort())', 'Create a copy first: setList([...list].sort())', 'React handles it automatically', 'You can\'t sort state'],
        correctAnswer: 1,
        explanation: 'sort() mutates the array, so you must copy it first to trigger a re-render.'
      },
      {
        id: 'q-arr-7',
        question: 'What is the risk of mutating a state array directly?',
        options: ['The app crashes', 'React won\'t detect the change and the UI won\'t update', 'It uses too much memory', 'It slows down the network'],
        correctAnswer: 1,
        explanation: 'If the array reference stays the same, React assumes no change occurred.'
      },
      {
        id: 'q-arr-8',
        question: 'Can you use Immer for arrays too?',
        options: ['Yes, it works for both objects and arrays', 'No, only objects', 'Only for strings', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'Immer is excellent for complex array manipulations.'
      },
      {
        id: 'q-arr-9',
        question: 'How do you reverse a state array?',
        options: ['setList(list.reverse())', 'setList([...list].reverse())', 'Using map()', 'Using filter()'],
        correctAnswer: 1,
        explanation: 'Like sort(), reverse() is a mutating method and requires a copy.'
      },
      {
        id: 'q-arr-10',
        question: 'What is the most common way to render a state array in JSX?',
        options: ['Using a for loop', 'Using the map() method', 'Using a while loop', 'React renders arrays automatically without mapping'],
        correctAnswer: 1,
        explanation: 'map() transforms data into JSX elements.'
      }
    ]
  },
  {
    id: 'basics-strict-mode',
    title: 'Strict Mode',
    category: 'Basics',
    content: `**Strict Mode** is a development-only tool that helps you find common bugs in your components early. It doesn't render any visible UI; instead, it activates extra checks and warnings for everything inside it.

Key behaviors in Strict Mode:
- **Double Rendering:** React will render your components twice (locally in dev) to help find accidental "side effects" during the render phase. Render functions should be "pure" (given the same input, they always return the same JSX).
- **Effect Lifecycle Checks:** React will mount, unmount, and remount your component once to make sure you've implemented cleanup logic in your \`useEffect\` hooks correctly.
- **Deprecation Warnings:** It warns you about legacy APIs that will be removed in future versions of React.`,
    codeExplanation: `How to use Strict Mode:
1. **Wrap your Root:** Usually, you wrap your entire app in \`main.tsx\` or \`index.tsx\`.
2. **Identification:** It helps identify components with unsafe lifecycles or legacy string ref usage.
3. **Purity Check:** If your component's count double-increments or your log appears twice, Strict Mode is doing its job by highlighting that your rendering logic isn't pure.
4. **Context API:** It also detects legacy context API usage which is now deprecated.`,
    useCase: 'Development-only check to ensure your app follows React best practices and is ready for future versions.',
    quiz: []
  },
  {
    id: 'localhost-setup',
    title: 'Running React Locally (Localhost)',
    category: 'Basics',
    content: `To build React apps locally, you need a environment that can compile JSX and handle modern JavaScript. The most popular modern tool for this is **Vite**.

Setup requirements:
1. **Node.js:** The runtime that runs your development tools.
2. **Package Manager (npm/yarn):** Used to install libraries like React and its dependencies.
3. **Editor (VS Code):** Most developers use VS Code with the ES7+ React/Redux/React-Native snippets extension.`,
    liveExample: {
      title: 'Local Environment Setup',
      description: 'Step-by-step guide to running this project on your local machine.',
      files: [
        {
          name: 'README.md',
          language: 'markdown',
          content: `# How to Run Locally

1. **Install Node.js**: Download from nodejs.org.
2. **Clone Repository**: \`git clone <repo-url>\`
3. **Install Dependencies**:
   \`\`\`bash
   npm install
   \`\`\`
4. **Environment Variables**: Create a \`.env\` file based on \`.env.example\`.
5. **Start Dev Server**:
   \`\`\`bash
   npm run dev
   \`\`\`
6. **Access App**: Open http://localhost:3000 (or the port specified in terminal).`,
          explanation: 'Following these steps ensures your local machine is synchronized with the project requirements.'
        }
      ],
      result: 'The application runs locally, allowing for rapid development with Hot Module Replacement (HMR).'
    },
    quiz: []
  },
  {
    id: 'hooks-usestate',
    interactiveDemo: 'CounterDemo',
    title: 'Hooks: useState',
    category: 'Hooks',
    keywords: ['state', 'setter', 'async', 're-render', 'functional component'],
    content: `**useState** is the primary way to add local state to a functional component. State allows your component to "remember" information between renders and update the UI when that info changes.

Rules of Hooks:
- **Call at the Top:** Hooks must be called at the very top level of your component function.
- **No Conditionals:** Never call \`useState\` inside \`if\` statements, loops, or nested functions. This ensures React can match up the state correctly between renders.
- **Naming Convention:** Always use descriptive names like \`[value, setValue]\`.`,
    codeExample: `import { useState } from 'react';

export default function Counter() {
  // Declare a state variable named "count"
  const [count, setCount] = useState(0);

  function handleClick() {
    // Update the state
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}`,
    codeExplanation: `Let's break down this fundamental hook:

1. **Initialization:** \`useState(0)\` tells React: "I want this component to remember a value, and its starting value is 0."
2. **Destructuring:** It returns an array. We use array destructuring to name the current value (\`count\`) and the setter function (\`setCount\`).
3. **Triggering Re-render:** When \`setCount\` is called, React doesn't just change the variable; it schedules a *re-render* of the component.
4. **Persistence:** During the second render, \`useState(0)\` is called again, but React remembers that the value is now 1 (or whatever the new value is) and returns that instead of the initial 0.`,
    useCase: 'Tracking input values in a form, toggling a modal, or managing a counter.',
    quiz: [
      {
        id: 'q-usestate-1',
        question: 'What does useState return?',
        options: ['A single value', 'An object', 'An array with two elements', 'A function'],
        correctAnswer: 2,
        explanation: 'useState returns an array containing the current state and a setter function.'
      },
      {
        id: 'q-usestate-2',
        question: 'How do you initialize state with a value?',
        options: ['useState()', 'useState(initialValue)', 'state(initialValue)', 'setInitialState(value)'],
        correctAnswer: 1,
        explanation: 'The initial value is passed as the first argument to the useState hook.'
      },
      {
        id: 'q-usestate-3',
        question: 'Can you use useState inside a regular JavaScript function?',
        options: ['Yes', 'No', 'Only if it\'s an async function', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Hooks must be used inside React functional components or custom hooks.'
      },
      {
        id: 'q-usestate-4',
        question: 'What happens when you call the state updater function?',
        options: ['The page reloads', 'The component re-renders', 'The component unmounts', 'Nothing'],
        correctAnswer: 1,
        explanation: 'Calling the setter function updates the state and triggers a re-render of the component.'
      },
      {
        id: 'q-usestate-5',
        question: 'Is the state update synchronous or asynchronous?',
        options: ['Synchronous', 'Asynchronous', 'It depends', 'Neither'],
        correctAnswer: 1,
        explanation: 'State updates in React are asynchronous for performance reasons.'
      },
      {
        id: 'q-usestate-6',
        question: 'How do you update state based on the previous state value?',
        options: ['setCount(count + 1)', 'setCount(prevCount => prevCount + 1)', 'count = count + 1', 'updateCount(1)'],
        correctAnswer: 1,
        explanation: 'Passing a function to the setter ensures you have the most up-to-date state value.'
      },
      {
        id: 'q-usestate-7',
        question: 'Can a component have multiple useState hooks?',
        options: ['Yes', 'No', 'Only if they are different types', 'Only in React 18+'],
        correctAnswer: 0,
        explanation: 'You can use as many useState hooks as needed in a single component.'
      },
      {
        id: 'q-usestate-8',
        question: 'What is "lazy initialization" in useState?',
        options: ['Setting state after a delay', 'Passing a function to useState to calculate initial state once', 'Using state only when needed', 'Loading state from an API'],
        correctAnswer: 1,
        explanation: 'If the initial state is expensive to compute, you can pass a function that returns the initial value.'
      },
      {
        id: 'q-usestate-9',
        question: 'What happens if you update state with the same value it currently has?',
        options: ['It re-renders anyway', 'React bails out and does not re-render', 'It throws an error', 'It clears the state'],
        correctAnswer: 1,
        explanation: 'React uses Object.is comparison; if the value is the same, it skips the re-render.'
      },
      {
        id: 'q-usestate-10',
        question: 'Where should you declare useState in a component?',
        options: ['At the top level of the component', 'Inside a loop', 'Inside a conditional block', 'Inside a useEffect'],
        correctAnswer: 0,
        explanation: 'Hooks must be called at the top level of your React function to ensure they are called in the same order every time.'
      }
    ]
  },
  {
    id: 'interactivity-queueing',
    title: 'Adding Interactivity: Queueing a Series of State Updates',
    category: 'Basics',
    content: `React batches state updates for efficiency. This means if you update state multiple times in one event, React collects all the updates and performs a single re-render at the end.

If you need the "next" update to depend on the result of the "previous" update within the same event, you must pass an **updater function** (\`n => n + 1\`) instead of a simple value (\`n + 1\`).`,
    codeExample: `import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // Updater functions are queued
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>
        Increment by 3
      </button>
    </>
  );
}`,
    codeExplanation: `1. **The Queue:** When you pass a function like \`n => n + 1\`, React doesn't run it immediately. It puts it into a queue.
2. **Execution:** During the *next* render, React goes through the queue:
   - First function: \`0 => 0 + 1\`. Result is 1.
   - Second function: \`1 => 1 + 1\`. Result is 2.
   - Third function: \`2 => 2 + 1\`. Result is 3.
3. **The Final State:** React sets the state to 3 and updates the screen.
4. **When to use:** Use this pattern whenever your logic requires the most up-to-date state (like a shopping cart total) and multiple updates might be triggered consecutively.`,
    useCase: 'Implementing a counter that can be incremented multiple times in one action or updating a complex object based on its current values.',
    quiz: [
      {
        id: 'q-queue-1',
        question: 'What is an "updater function"?',
        options: ['A function that replaces the state', 'A function passed to the state setter that receives the previous state and returns the next state', 'A function that deletes state', 'A function that handles CSS'],
        correctAnswer: 1,
        explanation: 'Updater functions allow you to queue state updates reliably.'
      },
      {
        id: 'q-queue-2',
        question: 'Why does React batch state updates?',
        options: ['To make the code harder to read', 'To improve performance by reducing the number of re-renders', 'To save memory', 'To support old browsers'],
        correctAnswer: 1,
        explanation: 'Batching ensures that multiple state updates in one event only trigger a single re-render.'
      },
      {
        id: 'q-queue-3',
        question: 'In the example above, what would happen if you used setNumber(number + 1) three times instead?',
        options: ['It would still increment by 3', 'It would only increment by 1', 'It would throw an error', 'It would crash the app'],
        correctAnswer: 1,
        explanation: 'Each call would use the same "snapshot" value of "number" from the current render.'
      },
      {
        id: 'q-queue-4',
        question: 'When does React process the state update queue?',
        options: ['Immediately', 'During the next render', 'After 1 second', 'When the user clicks again'],
        correctAnswer: 1,
        explanation: 'React processes the queue when it prepares the next render.'
      },
      {
        id: 'q-queue-5',
        question: 'Can you mix updater functions and regular values in the same event handler?',
        options: ['Yes, React will process them in order', 'No', 'Only for strings', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'React maintains the order of calls in its internal queue.'
      },
      {
        id: 'q-queue-6',
        question: 'What is the naming convention for the argument in an updater function?',
        options: ['Always "state"', 'Usually the first letter of the state variable (e.g., "n" for "number")', 'It doesn\'t matter', 'It must be "prev"'],
        correctAnswer: 1,
        explanation: 'While it doesn\'t matter technically, using a short, descriptive name is common practice.'
      },
      {
        id: 'q-queue-7',
        question: 'Does batching work for updates inside setTimeout?',
        options: ['Yes, in React 18+', 'No', 'Only in production', 'Only for numbers'],
        correctAnswer: 0,
        explanation: 'React 18 introduced automatic batching for all environments.'
      },
      {
        id: 'q-queue-8',
        question: 'What happens if an updater function returns the same value as the current state?',
        options: ['React re-renders anyway', 'React bails out and skips the re-render', 'It throws an error', 'It clears the state'],
        correctAnswer: 1,
        explanation: 'React optimizes by skipping re-renders if the state hasn\'t actually changed.'
      },
      {
        id: 'q-queue-9',
        question: 'Is it better to use updater functions for all state updates?',
        options: ['Yes, to be safe', 'No, only when the next state depends on the previous one', 'Only for objects', 'Only for arrays'],
        correctAnswer: 1,
        explanation: 'If the update is independent of the previous state, a simple value is cleaner.'
      },
      {
        id: 'q-queue-10',
        question: 'Can you call the state setter from inside an updater function?',
        options: ['Yes', 'No, that would cause an infinite loop or an error', 'Only in async functions', 'Only in React 19'],
        correctAnswer: 1,
        explanation: 'Updater functions should be pure and only return the next state.'
      }
    ]
  },
  {
    id: 'managing-reacting-to-input',
    title: 'Managing State: Reacting to Input with State',
    category: 'Basics',
    content: `In React, you don't "change the UI" by selecting elements (like with jQuery). Instead, you **react to inputs** by updating state. The UI is a "reflection" of that state.

Think of it like a "State Machine":
1. **Identify visual states:** (e.g., Empty, Typing, Submitting, Success, Error).
2. **Determine what triggers changes:** (e.g., clicking a button, typing in an input).
3. **Represent state in React:** Use \`useState\` to hold the current "mode" or status.
4. **Connect UI to State:** Use conditional logic to show different things based on the current state.`,
    codeExample: `import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'

  if (status === 'success') {
    return <h1>Correct!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        disabled={status === 'submitting'}
      />
      <button disabled={answer.length === 0 || status === 'submitting'}>
        Submit
      </button>
      {error !== null && <p className="Error">{error.message}</p>}
    </form>
  );
}`,
    codeExplanation: `This demonstrates the **Declarative UI** philosophy:

1. **The Status Variable:** Instead of hiding/showing containers manually, we use \`status\` to track where the user is in the process.
2. **Input Sync:** The \`<textarea>\`'s value is tied to the \`answer\` state. This makes it a "Controlled Component".
3. **Logical Disabling:** We disable the button if the text is empty OR if we are currently submitting. This logic is derived directly from state.
4. **Error Handling:** If \`error\` is present, we show the error message. React handles adding/removing this element from the DOM automatically.`,
    useCase: 'Designing complex forms, loading states, or multi-step wizards.',
    quiz: [
      {
        id: 'q-react-1',
        question: 'What is "declarative" UI?',
        options: ['Manually updating the DOM for every change', 'Describing what the UI should look like for each state', 'Using a specific CSS framework', 'Writing code in a single file'],
        correctAnswer: 1,
        explanation: 'Declarative UI means you define the "what" (the state), and React handles the "how" (the DOM updates).'
      },
      {
        id: 'q-react-2',
        question: 'How does declarative UI differ from imperative UI?',
        options: ['It doesn\'t', 'Imperative UI focuses on the steps to change the UI (e.g., "show this div"); declarative focuses on the final result', 'Declarative is only for mobile', 'Imperative is faster'],
        correctAnswer: 1,
        explanation: 'Imperative programming is like giving step-by-step instructions; declarative is like describing the goal.'
      },
      {
        id: 'q-react-3',
        question: 'What is a "state machine" in the context of React?',
        options: ['A physical machine', 'A pattern where a component can only be in one of a few predefined states at a time', 'A type of database', 'A browser feature'],
        correctAnswer: 1,
        explanation: 'State machines help prevent "impossible" states (like showing a success message and a loading spinner at the same time).'
      },
      {
        id: 'q-react-4',
        question: 'How do you identify the different states of a component?',
        options: ['By looking at the CSS', 'By listing all the visual "modes" the component can be in (e.g., empty, loading, error, success)', 'By counting the number of props', 'By checking the file size'],
        correctAnswer: 1,
        explanation: 'Visualizing the different modes helps you design the state structure.'
      },
      {
        id: 'q-react-5',
        question: 'What is the benefit of the declarative approach?',
        options: ['It uses less memory', 'It makes the code more predictable and easier to debug', 'It replaces the need for JavaScript', 'It\'s faster to write'],
        correctAnswer: 1,
        explanation: 'Since the UI is a function of state, you can easily reproduce any visual state by setting the state variable.'
      },
      {
        id: 'q-react-6',
        question: 'Can you use a reducer to manage complex component states?',
        options: ['Yes, useReducer is perfect for state machines', 'No', 'Only for numbers', 'Only in production'],
        correctAnswer: 0,
        explanation: 'Reducers centralize the transitions between different states.'
      },
      {
        id: 'q-react-7',
        question: 'Should you use boolean flags for every state (e.g., isLoading, isError, isSuccess)?',
        options: ['Yes', 'No, it can lead to "impossible" states; a single "status" string is often better', 'Only for strings', 'Only in strict mode'],
        correctAnswer: 1,
        explanation: 'Using a single status variable ensures that only one state can be active at a time.'
      },
      {
        id: 'q-react-8',
        question: 'How do you trigger a state transition?',
        options: ['By calling a state setter function in response to an event', 'By modifying the DOM directly', 'By changing the URL', 'By refreshing the page'],
        correctAnswer: 0,
        explanation: 'Events (like clicks or form submissions) are the triggers for state changes.'
      },
      {
        id: 'q-react-9',
        question: 'What is "mocking" a state?',
        options: ['Making fun of the code', 'Manually setting the state to a specific value to see how the UI looks', 'Deleting the state', 'Using fake data'],
        correctAnswer: 1,
        explanation: 'Mocking different states is a great way to test and design your UI.'
      },
      {
        id: 'q-react-10',
        question: 'Does declarative UI work for animations?',
        options: ['Yes, by using state to drive animation properties', 'No', 'Only for CSS transitions', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'Libraries like Framer Motion use a declarative approach to animations.'
      }
    ]
  },
  {
    id: 'managing-state-structure',
    title: 'Managing State: Choosing the State Structure',
    category: 'Basics',
    content: `Well-structured state makes your component easier to read and harder to break. Follow these guidelines:

1. **Group Related State:** If you always update two state variables together, consider merging them into a single object.
2. **Avoid Redundant State:** If you can calculate a value from existing props or state during render, **do not** put it in its own state. 
3. **Keep it Flat:** Avoid deeply nesting objects. It makes updating state significantly more complex.
4. **Single Source of Truth:** Avoid "mirroring" props in state unless you explicitly want to ignore changes from the parent.`,
    codeExample: `import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // GOOD: Calculated during render
  const fullName = firstName + ' ' + lastName;

  return (
    <>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input value={lastName} onChange={e => setLastName(e.target.value)} />
      <p>Your full name is: <b>{fullName}</b></p>
    </>
  );
}`,
    codeExplanation: `1. **The Efficiency:** By calculating \`fullName\` during the render phase, we avoid needing an extra \`setFullName\` call and an extra re-render.
2. **Consistency:** Because \`fullName\` is derived directly from \`firstName\` and \`lastName\`, it is physically impossible for it to be "out of sync".
3. **Simplicity:** The logic is much easier to follow. If the user types in either input, React re-renders, recalculates the string, and shows the updated name.`,
    useCase: 'Designing the state for a complex form or a dashboard to ensure data consistency and minimize re-renders.',
    quiz: [
      {
        id: 'q-struct-1',
        question: 'What is "redundant state"?',
        options: ['State that is never used', 'State that can be calculated from other state or props', 'State that is shared between components', 'State that is stored in a database'],
        correctAnswer: 1,
        explanation: 'Redundant state increases complexity and the risk of bugs.'
      },
      {
        id: 'q-struct-2',
        question: 'Should you group related state into a single object?',
        options: ['Yes, if they always change together (e.g., x and y coordinates)', 'No, always keep them separate', 'Only for strings', 'Only in production'],
        correctAnswer: 0,
        explanation: 'Grouping related values makes the state logic more cohesive.'
      },
      {
        id: 'q-struct-3',
        question: 'What is a "derived" value?',
        options: ['A value fetched from an API', 'A value calculated from existing state or props during render', 'A type of React hook', 'A CSS property'],
        correctAnswer: 1,
        explanation: 'Derived values should be calculated during render, not stored in state.'
      },
      {
        id: 'q-struct-4',
        question: 'Why should you avoid deeply nested state?',
        options: ['It uses too much memory', 'It makes updating the state difficult and error-prone', 'React doesn\'t support it', 'It slows down the network'],
        correctAnswer: 1,
        explanation: 'Updating nested objects requires spreading every level, which is tedious and easy to mess up.'
      },
      {
        id: 'q-struct-5',
        question: 'What is "flat" state structure?',
        options: ['State with no objects', 'A structure where data is organized as a collection of items indexed by ID', 'State that is only one level deep', 'State that is stored in a file'],
        correctAnswer: 1,
        explanation: 'Flat structures (like a normalized database) are much easier to update.'
      },
      {
        id: 'q-struct-6',
        question: 'How do you handle state that is used by multiple components?',
        options: ['Duplicate it in each component', 'Lift it up to the closest common parent', 'Use a global variable', 'Refresh the page'],
        correctAnswer: 1,
        explanation: 'Lifting state up ensures a single source of truth.'
      },
      {
        id: 'q-struct-7',
        question: 'Should you mirror props in state (e.g., useState(props.value))?',
        options: ['Yes, always', 'No, it creates a second source of truth that can get out of sync', 'Only for numbers', 'Only in strict mode'],
        correctAnswer: 1,
        explanation: 'Use the prop directly unless you specifically want to ignore updates from the parent.'
      },
      {
        id: 'q-struct-8',
        question: 'What is the benefit of a well-structured state?',
        options: ['The app looks better', 'Fewer bugs, easier to maintain, and better performance', 'It uses less CSS', 'It replaces the need for HTML'],
        correctAnswer: 1,
        explanation: 'Good state design is the foundation of a robust React app.'
      },
      {
        id: 'q-struct-9',
        question: 'Can you use useMemo to optimize derived values?',
        options: ['Yes, if the calculation is expensive', 'No', 'Only for strings', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'useMemo is perfect for caching expensive derived data.'
      },
      {
        id: 'q-struct-10',
        question: 'What should you do if your state logic becomes too complex?',
        options: ['Delete it', 'Move it to a reducer using useReducer', 'Use more global variables', 'Split the component into smaller ones'],
        correctAnswer: 1,
        explanation: 'Reducers are designed to handle complex state transitions cleanly.'
      }
    ]
  },
  {
    id: 'managing-sharing-state',
    title: 'Managing State: Sharing State Between Components',
    category: 'Basics',
    content: `In React, data flows "downwards" from parent to child. If two or more components need to share the same piece of data and keep it in sync, you should **lift the state up** to their closest common parent.

This parent component then:
1. **Holds the state:** Using \`useState\`.
2. **Passes the data down:** As props to the children.
3. **Passes "handlers" down:** Functions that allow the children to tell the parent to update the state.

This pattern ensures a **"Single Source of Truth"**, which prevents your UI from getting into inconsistent states (like one part of the page showing an old price while another part shows a new one).`,
    codeExample: `import { useState } from 'react';

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from the Kazakh word for "apple".
      </Panel>
    </>
  );
}`,
    codeExplanation: `This example demonstrates "Lifting State Up" to create an accordion where only one panel is open at a time:

1. **State Ownership:** The \`Accordion\` (parent) owns the \`activeIndex\` state. The individual \`Panel\`s do NOT have their own \`isActive\` state.
2. **Controlled Components:** Each \`Panel\` is now "controlled" by the parent. It doesn't decide for itself if it's open; it waits for the \`isActive\` prop.
3. **Communication:** When you click the "Show" button in a \`Panel\`, it calls the \`onShow\` function. This function was passed down from the parent and updates the parent's \`activeIndex\`.
4. **Synchronization:** As soon as the parent's state updates, both \`Panel\`s receive new props. One becomes \`isActive={true}\` and the other \`isActive={false}\`. They stay perfectly in sync.`,
    useCase: 'Synchronizing a search input with a filtered list or managing the active tab in a navigation menu.',
    quiz: [
      {
        id: 'q-share-1',
        question: 'What does "lifting state up" mean?',
        options: ['Moving state to a global store', 'Moving state to the closest common parent component', 'Deleting state', 'Moving state to the server'],
        correctAnswer: 1,
        explanation: 'It\'s the standard way to share state between siblings in React.'
      },
      {
        id: 'q-share-2',
        question: 'Why should you lift state up?',
        options: ['To make the app faster', 'To keep two or more components in sync', 'To reduce the number of components', 'To avoid using props'],
        correctAnswer: 1,
        explanation: 'When components need to share the same data, that data should live in their parent.'
      },
      {
        id: 'q-share-3',
        question: 'What is a "single source of truth"?',
        options: ['A database', 'The idea that each piece of state should live in only one place', 'A global variable', 'The index.html file'],
        correctAnswer: 1,
        explanation: 'Having one source of truth prevents data inconsistency bugs.'
      },
      {
        id: 'q-share-4',
        question: 'How does a child component update state lifted to its parent?',
        options: ['By modifying its props', 'By calling a function passed down as a prop from the parent', 'By using a global variable', 'It can\'t'],
        correctAnswer: 1,
        explanation: 'The parent passes a setter or a handler function to the child.'
      },
      {
        id: 'q-share-5',
        question: 'What is a "controlled component"?',
        options: ['A component with no state', 'A component whose value is driven by props rather than its own local state', 'A component that uses Redux', 'A component that is hidden'],
        correctAnswer: 1,
        explanation: 'Controlled components are more predictable and easier to integrate with other parts of the UI.'
      },
      {
        id: 'q-share-6',
        question: 'What is an "uncontrolled component"?',
        options: ['A component that manages its own state internally', 'A broken component', 'A component with no props', 'A component that is deleted'],
        correctAnswer: 0,
        explanation: 'Uncontrolled components (like a standard <input>) keep their own state.'
      },
      {
        id: 'q-share-7',
        question: 'Can you lift state up too high?',
        options: ['No, the higher the better', 'Yes, it can lead to "prop drilling" and unnecessary re-renders of unrelated components', 'Only in production', 'Only for numbers'],
        correctAnswer: 1,
        explanation: 'You should lift state only as high as necessary to share it among the components that need it.'
      },
      {
        id: 'q-share-8',
        question: 'What happens to the child components when the parent\'s state updates?',
        options: ['They are deleted', 'They re-render with the new props', 'Nothing', 'They are moved'],
        correctAnswer: 1,
        explanation: 'React re-renders the whole subtree when a parent\'s state changes.'
      },
      {
        id: 'q-share-9',
        question: 'How do you decide which component should own the state?',
        options: ['The one that uses it most', 'The closest common ancestor of all components that need the state', 'The root component', 'The first component created'],
        correctAnswer: 1,
        explanation: 'This ensures all interested components can access the data via props.'
      },
      {
        id: 'q-share-10',
        question: 'Is lifting state up a replacement for Context?',
        options: ['Yes', 'No, Context is better for "deep" prop drilling; lifting state is better for simple sharing', 'Only for strings', 'Only in React 19'],
        correctAnswer: 1,
        explanation: 'Lifting state is the first tool you should reach for. Context is for global or very deep data.'
      }
    ]
  },
  {
    id: 'managing-preserving-state',
    title: 'Managing State: Preserving and Resetting State',
    category: 'Basics',
    content: `React preserves a component's state as long as it stays in the **same position in the UI tree**. If you move a component or render a different type of component in that spot, the state is destroyed.

Key principles of preservation:
- **Same position, same component:** State is kept. This is why toggling a CSS class doesn't reset an input field.
- **Same position, different component:** State is destroyed. If you swap a \`<Counter />\` for a \`<div>\`, the counter's state is gone.
- **Different position:** State is destroyed.
- **The "Key" Prop:** You can explicitly tell React: "this is a brand new component, even if it's in the same spot" by changing its \`key\`.`,
    codeExample: `import { useState } from 'react';

export default function Messenger() {
  const [to, setTo] = useState('Alice');
  return (
    <div>
      <select value={to} onChange={e => setTo(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
      </select>
      <hr />
      {/* 
          Using 'to' as a KEY ensures the TextArea resets 
          when you switch the recipient! 
      */}
      <Chat key={to} contact={to} />
    </div>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section>
      <textarea
        value={text}
        placeholder={'Chat with ' + contact}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button>Send to {contact}</button>
    </section>
  );
}`,
    codeExplanation: `This example shows how to use \`key\` to manage state cycles:

1. **The Requirement:** When chatting, you don't want the message you started typing for Alice to carry over when you switch to Bob.
2. **Standard Behavior:** If we didn't have the \`key={to}\` prop, switching the \`to\` state would update the \`contact\` prop, but the \`Chat\` component would stay in the same position. React would "preserve" the \`text\` state!
3. **The Reset:** By adding \`key={to}\`, we tell React that when \`to\` changes (e.g., from 'Alice' to 'Bob'), it should treat the \`Chat\` component as a **new instance**.
4. **Cleanup:** React destroys the "Alice" version of the component (and its state) and mounts the "Bob" version with a fresh empty string for \`text\`.`,
    useCase: 'Resetting a form when switching between different items or ensuring an animation restarts.',
    quiz: [
      {
        id: 'q-preserve-1',
        question: 'When does React preserve a component\'s state?',
        options: ['Always', 'As long as it is rendered in the same position in the UI tree', 'Only if it has a key', 'Only if it uses Redux'],
        correctAnswer: 1,
        explanation: 'React tracks state based on the component\'s position in the tree.'
      },
      {
        id: 'q-preserve-2',
        question: 'What happens to state if a component is removed from the tree?',
        options: ['It is saved in memory', 'It is destroyed', 'It is moved to the parent', 'It is moved to the server'],
        correctAnswer: 1,
        explanation: 'When a component unmounts, its state is gone forever.'
      },
      {
        id: 'q-preserve-3',
        question: 'How can you force React to reset a component\'s state?',
        options: ['By calling forceUpdate()', 'By giving the component a different "key"', 'By changing its props', 'By refreshing the page'],
        correctAnswer: 1,
        explanation: 'Changing the key tells React to treat it as a brand new component instance.'
      },
      {
        id: 'q-preserve-4',
        question: 'What happens if you render a different component type at the same position?',
        options: ['State is preserved', 'State is destroyed', 'React throws an error', 'The components are merged'],
        correctAnswer: 1,
        explanation: 'React only preserves state if the component type at that position remains the same.'
      },
      {
        id: 'q-preserve-5',
        question: 'Is state preserved if you move a component to a different part of the tree?',
        options: ['Yes', 'No, it will be destroyed and remounted with fresh state', 'Only if it has a key', 'Only in React 19'],
        correctAnswer: 1,
        explanation: 'Position is key. Moving a component usually means unmounting it from one place and mounting it in another.'
      },
      {
        id: 'q-preserve-6',
        question: 'What is the "UI tree" in React?',
        options: ['The DOM', 'The internal structure React uses to manage components and their state', 'A list of CSS classes', 'A database schema'],
        correctAnswer: 1,
        explanation: 'React builds a tree of components to manage rendering and state.'
      },
      {
        id: 'q-preserve-7',
        question: 'Can you use keys to preserve state when a component moves?',
        options: ['Yes, if the key remains the same', 'No', 'Only for strings', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Actually, keys are mostly for siblings in a list. Moving a component elsewhere in the tree still resets it.'
      },
      {
        id: 'q-preserve-8',
        question: 'What is a common use case for resetting state with a key?',
        options: ['A chat window that should clear when switching between different conversations', 'A counter that never resets', 'A navigation bar', 'A footer'],
        correctAnswer: 0,
        explanation: 'Using the conversation ID as a key ensures the input field and message list reset for each person.'
      },
      {
        id: 'q-preserve-9',
        question: 'Does changing a prop (other than key) reset state?',
        options: ['Yes', 'No, state is independent of props', 'Only if the prop is a number', 'Only in strict mode'],
        correctAnswer: 1,
        explanation: 'Props updates trigger re-renders, but state is kept as long as the position is the same.'
      },
      {
        id: 'q-preserve-10',
        question: 'What happens if you wrap a component in a new <div>?',
        options: ['Nothing', 'It changes its position in the tree, so its state is reset', 'It speeds up the app', 'It styles the component'],
        correctAnswer: 1,
        explanation: 'Adding or removing a wrapper changes the component\'s path in the tree.'
      }
    ]
  },
  {
    id: 'hooks-useeffect',
    interactiveDemo: 'EffectDemo',
    diagram: 'HookLifecycleDiagram',
    title: 'Hooks: useEffect',
    category: 'Hooks',
    content: `**useEffect** is a Hook that lets you "escape" from pure React logic to synchronize your component with an external system. This includes things like browser APIs, network requests, or third-party libraries that aren't controlled by React.

The three phases of an Effect:
1. **The Setup:** The code inside the function you pass to \`useEffect\`. It runs after the component is added to the screen (mount) and after every update.
2. **The Dependencies:** An optional array \`[dep1, dep2]\`. The effect only re-runs if one of these values has changed since the last render.
3. **The Cleanup:** An optional function you return from the effect. React runs this before the effect runs again and when the component is removed (unmount).`,
    codeExample: `import { useState, useEffect } from 'react';

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    // 1. Setup logic: Connect to the room
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    // 2. Cleanup logic: Disconnect
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]); // 3. Dependencies: Re-run if these change

  return <h1>Welcome to the {roomId} room!</h1>;
}`,
    codeExplanation: `This behavior is crucial for avoiding resource leaks:

1. **Mounting:** When the component first appears, it connects to \`serverUrl\` and \`roomId\`.
2. **Updating:** If the user switches rooms (changing \`roomId\`), React:
   - First runs the **Cleanup** function for the *old* room (disconnects).
   - Then runs the **Setup** logic for the *new* room (connects).
3. **Optimization:** If the user changes other state (like a theme toggle) that isn't in the dependency array, the effect is skipped entirely.
4. **Unmounting:** When the user leaves the chat page, React runs the cleanup one last time to ensure no stale connections are left hanging.`,
    useCase: 'Fetching data from an API when a component mounts or updating the document title when a state changes.',
    quiz: [
      {
        id: 'q-useeffect-1',
        question: 'What is the purpose of the return function in useEffect?',
        options: ['To return the UI', 'To perform cleanup', 'To trigger a re-render', 'To handle errors'],
        correctAnswer: 1,
        explanation: 'The return function is used for cleanup (e.g., clearing timers or unsubscribing) before the component unmounts or before the effect re-runs.'
      },
      {
        id: 'q-useeffect-2',
        question: 'When does useEffect run if the dependency array is empty ([])?',
        options: ['On every render', 'Only once, after the initial render', 'Never', 'Only when state changes'],
        correctAnswer: 1,
        explanation: 'An empty dependency array tells React to run the effect only once, after the component mounts.'
      },
      {
        id: 'q-useeffect-3',
        question: 'What happens if you omit the dependency array in useEffect?',
        options: ['It runs only once', 'It runs after every render', 'It throws an error', 'It never runs'],
        correctAnswer: 1,
        explanation: 'If you don\'t provide a dependency array, the effect runs after every single render.'
      },
      {
        id: 'q-useeffect-4',
        question: 'How do you tell useEffect to run only when a specific variable changes?',
        options: ['Pass the variable to the dependency array', 'Use an if statement inside the effect', 'Use a different hook', 'It happens automatically'],
        correctAnswer: 0,
        explanation: 'Variables included in the dependency array are monitored by React; the effect re-runs when any of them change.'
      },
      {
        id: 'q-useeffect-5',
        question: 'Is useEffect synchronous or asynchronous?',
        options: ['Synchronous', 'Asynchronous', 'It blocks the paint', 'Neither'],
        correctAnswer: 1,
        explanation: 'useEffect runs after the browser has painted, so it doesn\'t block the UI.'
      },
      {
        id: 'q-useeffect-6',
        question: 'Which of the following is a common use case for useEffect?',
        options: ['Updating state during render', 'Data fetching from an API', 'Defining a new component', 'Styling elements'],
        correctAnswer: 1,
        explanation: 'Fetching data is a side effect that should be handled inside useEffect.'
      },
      {
        id: 'q-useeffect-7',
        question: 'What is a "side effect" in React?',
        options: ['A bug in the code', 'Anything that affects something outside the scope of the function being executed', 'A secondary render', 'A CSS transition'],
        correctAnswer: 1,
        explanation: 'Side effects include API calls, subscriptions, and manual DOM updates.'
      },
      {
        id: 'q-useeffect-8',
        question: 'Can you use async/await directly inside the useEffect callback?',
        options: ['Yes', 'No, you must define an async function inside and call it', 'Only in React 19', 'Only for data fetching'],
        correctAnswer: 1,
        explanation: 'The effect callback cannot be async because it must return either nothing or a cleanup function.'
      },
      {
        id: 'q-useeffect-9',
        question: 'What happens if you include a function in the dependency array without memoizing it?',
        options: ['Nothing', 'The effect might run on every render because the function reference changes', 'It throws an error', 'It speeds up the app'],
        correctAnswer: 1,
        explanation: 'Functions defined inside a component are recreated on every render. Use useCallback to stabilize the reference.'
      },
      {
        id: 'q-useeffect-10',
        question: 'When does the cleanup function run?',
        options: ['Only when the component unmounts', 'Before the effect runs again and when the component unmounts', 'After every render', 'Never'],
        correctAnswer: 1,
        explanation: 'React performs cleanup when the component unmounts and before running the effect again due to a dependency change.'
      }
    ]
  },
  {
    id: 'hooks-useref',
    interactiveDemo: 'RefDemo',
    title: 'Hooks: useRef',
    category: 'Hooks',
    content: `**useRef** is a Hook that lets you "remember" a value that doesn't trigger a re-render when it changes. Think of it as a "secret pocket" where your component can store something for the entire duration of its life.

Main use cases:
1. **Accessing the DOM:** To focus an input, measure its size, or scroll to an element.
2. **Storing "Non-UI" values:** Mutable variables like timer IDs, socket connections, or the previous state value.
3. **Optimizing performance:** Avoid re-rendering when you only need to update a internal counter or flag.`,
    codeExample: `import { useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null); // 1. Using Ref for non-UI value

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    // 2. Accessing the ref value
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}`,
    codeExplanation: `This example demonstrates using \`useRef\` to store a Timer ID:

1. **Why not State?** If we stored the \`intervalId\` in state (\`useState\`), the component would re-render every time the interval ID was set. But the interval ID doesn't affect what's shown on the screen—it's just a "behind the scenes" value.
2. **The Result:** \`useRef\` returns an object with a \`.current\` property.
3. **Stability:** The value of \`intervalRef.current\` is persisted across renders. When \`handleStop\` is called later, it correctly finds the ID needed to clear the timer.
4. **Purity Rule:** You should only read or write \`ref.current\` inside event handlers or \`useEffect\`, never during the render itself, as it makes your component non-pure.`,
    useCase: 'Focusing an input, measuring DOM nodes, or storing a value (like a timer ID) that shouldn\'t trigger a render when it changes.',
    quiz: [
      {
        id: 'q-useref-1',
        question: 'Does changing ref.current trigger a re-render?',
        options: ['Yes', 'No', 'Only in strict mode', 'Only if it\'s a DOM element'],
        correctAnswer: 1,
        explanation: 'Changing the .current property of a ref does not cause a re-render.'
      },
      {
        id: 'q-useref-2',
        question: 'What is the primary use case for useRef?',
        options: ['To store state', 'To access DOM elements directly', 'To fetch data', 'To style components'],
        correctAnswer: 1,
        explanation: 'useRef is commonly used to get a reference to a DOM node for things like focusing or measuring.'
      },
      {
        id: 'q-useref-3',
        question: 'What is the initial value of ref.current?',
        options: ['null', 'undefined', 'The value passed as an argument to useRef()', '0'],
        correctAnswer: 2,
        explanation: 'useRef(initialValue) sets the initial value of the .current property.'
      },
      {
        id: 'q-useref-4',
        question: 'Can you use useRef to store mutable values that are NOT DOM elements?',
        options: ['Yes, it\'s great for values that shouldn\'t trigger re-renders', 'No', 'Only in class components', 'Only for strings'],
        correctAnswer: 0,
        explanation: 'useRef is a "box" that can hold any mutable value for the lifetime of the component.'
      },
      {
        id: 'q-useref-5',
        question: 'How do you attach a ref to a DOM element?',
        options: ['<div id={myRef}>', '<div ref={myRef}>', '<div use={myRef}>', 'myRef.attach(div)'],
        correctAnswer: 1,
        explanation: 'You pass the ref object to the "ref" attribute of a JSX element.'
      },
      {
        id: 'q-useref-6',
        question: 'When is the ref.current property updated for DOM elements?',
        options: ['Before the render', 'After the component has mounted and the DOM is created', 'During the render', 'Never'],
        correctAnswer: 1,
        explanation: 'React sets .current to the DOM node after the component mounts and clears it when it unmounts.'
      },
      {
        id: 'q-useref-7',
        question: 'Is useRef the same as a global variable?',
        options: ['Yes', 'No, it\'s local to the component instance and persists across renders', 'Only in production', 'Only for numbers'],
        correctAnswer: 1,
        explanation: 'Unlike a global variable, useRef is scoped to the component instance but its value is stable across re-renders.'
      },
      {
        id: 'q-useref-8',
        question: 'Can you use useRef to store a previous state value?',
        options: ['Yes, by updating it in useEffect', 'No', 'Only with useReducer', 'Only in React 18'],
        correctAnswer: 0,
        explanation: 'Since updating a ref doesn\'t trigger a render, you can use it to "remember" values from previous renders.'
      },
      {
        id: 'q-useref-9',
        question: 'What happens if you read or write ref.current during the rendering phase?',
        options: ['It\'s perfectly fine', 'It can lead to unpredictable behavior and bugs', 'It throws an error', 'It speeds up the app'],
        correctAnswer: 1,
        explanation: 'You should generally only read or write refs in event handlers or useEffect, not during the render itself.'
      },
      {
        id: 'q-useref-10',
        question: 'How do you pass a ref to a custom component?',
        options: ['Just pass it as a prop', 'Use React.forwardRef', 'It\'s not possible', 'Use useContext'],
        correctAnswer: 1,
        explanation: 'Functional components don\'t expose refs by default; you must wrap them in forwardRef to receive a ref from a parent.'
      }
    ]
  },
  {
    id: 'hooks-usecontext',
    interactiveDemo: 'ContextDemo',
    diagram: 'ContextSolutionDiagram',
    title: 'Hooks: useContext',
    category: 'Hooks',
    content: `**useContext** allows your components to receive data from a "Global Source" without having to pass props through every single intermediate level. This solves the problem of **"Prop Drilling"**—where you pass data through 10 levels of components just so the 11th one can use it.

The Context Pattern:
1. **Create Context:** \`const MyContext = createContext(defaultValue)\`.
2. **Provide Context:** Wrap your app (or a section) in \`<MyContext.Provider value={...}>\`. 
3. **Consume Context:** Use \`const value = useContext(MyContext)\` in any child component.`,
    codeExample: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

function Page() {
  return <Section />; // Page doesn't use 'theme' but passes it indirectly
}

function Section() {
  const theme = useContext(ThemeContext); // Directly consuming from the Provider
  return <div className={"panel-" + theme}>Current theme is {theme}</div>;
}`,
    codeExplanation: `1. **The Provider:** In \`App\`, we wrap the UI in \`ThemeContext.Provider\`. Any component inside this provider (even deeply nested ones) can access the \`theme\` state.
2. **The Consumer:** \`Section\` uses the \`useContext\` hook to "teleport" the theme value into itself. 
3. **Intermediate Components:** Notice that the \`Page\` component does not have to receive \`theme\` as a prop. It acts as a bridge without being cluttered by data it doesn't need.
4. **Reactivity:** When \`setTheme\` is called in \`App\`, the Provider's value changes, and React automatically re-renders every component that calls \`useContext(ThemeContext)\`.`,
    useCase: 'Managing global state like user authentication, language preferences, or UI themes.',
    quiz: [
      {
        id: 'q-usecontext-1',
        question: 'What problem does useContext primarily solve?',
        options: ['Memory leaks', 'Prop drilling', 'Slow rendering', 'Syntax errors'],
        correctAnswer: 1,
        explanation: 'useContext avoids "prop drilling" by allowing components to access global data directly.'
      },
      {
        id: 'q-usecontext-2',
        question: 'What is required to use useContext?',
        options: ['A Redux store', 'A Context object created with createContext', 'A class component', 'An API endpoint'],
        correctAnswer: 1,
        explanation: 'You must first create a Context object using React.createContext().'
      },
      {
        id: 'q-usecontext-3',
        question: 'How do you provide a value to the context?',
        options: ['Using the <Context.Provider> component', 'Passing it as a prop to every component', 'Setting it in localStorage', 'Using useState'],
        correctAnswer: 0,
        explanation: 'The Provider component accepts a "value" prop and makes it available to all descendants.'
      },
      {
        id: 'q-usecontext-4',
        question: 'What happens when the context value changes?',
        options: ['The whole app reloads', 'Only the Provider re-renders', 'All components consuming that context re-render', 'Nothing'],
        correctAnswer: 2,
        explanation: 'Any component that calls useContext(MyContext) will re-render whenever the value of MyContext changes.'
      },
      {
        id: 'q-usecontext-5',
        question: 'Can you have multiple providers for the same context?',
        options: ['Yes, and components will use the value from the nearest provider above them', 'No', 'Only in production', 'Only if they have different values'],
        correctAnswer: 0,
        explanation: 'React looks up the tree and uses the value from the closest matching Provider.'
      },
      {
        id: 'q-usecontext-6',
        question: 'Is useContext a replacement for Redux?',
        options: ['Yes, always', 'No, it\'s for dependency injection and simple state sharing', 'Only for small apps', 'Only for themes'],
        correctAnswer: 1,
        explanation: 'While it can manage state, Context lacks the powerful debugging and middleware capabilities of Redux.'
      },
      {
        id: 'q-usecontext-7',
        question: 'What is the default value of a context?',
        options: ['null', 'undefined', 'The value passed to createContext(defaultValue)', '0'],
        correctAnswer: 2,
        explanation: 'The default value is only used if a component consumes context without being wrapped in a Provider.'
      },
      {
        id: 'q-usecontext-8',
        question: 'Can you use useContext in a class component?',
        options: ['Yes', 'No, you must use Context.Consumer or static contextType', 'Only with a wrapper', 'Only in React 16.8'],
        correctAnswer: 1,
        explanation: 'Hooks like useContext are only available in functional components.'
      },
      {
        id: 'q-usecontext-9',
        question: 'Does useContext work across different browser tabs?',
        options: ['Yes', 'No, it\'s local to the React component tree', 'Only if using a service worker', 'Only on mobile'],
        correctAnswer: 1,
        explanation: 'Context is part of the React state and is confined to the current instance of the application.'
      },
      {
        id: 'q-usecontext-10',
        question: 'What is a common performance pitfall with Context?',
        options: ['It uses too much memory', 'Unnecessary re-renders of all consumers when any part of a large context object changes', 'It slows down the initial load', 'It breaks the Virtual DOM'],
        correctAnswer: 1,
        explanation: 'If you pass a large object to Context, any change to any property will trigger a re-render for all components consuming that context.'
      }
    ]
  },
  {
    id: 'hooks-usereducer',
    interactiveDemo: 'ReducerDemo',
    title: 'Hooks: useReducer',
    category: 'Hooks',
    content: `**useReducer** is a scale-up version of \`useState\`. While \`useState\` is great for simple independent values, \`useReducer\` is better for:
- **Complex State:** Objects with many sub-values.
- **Related State:** When updating one piece of state depends on the current value of another.
- **Predictable Transitions:** Logic is centralized in a "reducer" function outside the component.

How it works:
1. **The State:** The current data object.
2. **The Action:** An object describing *what happened* (e.g., \`{ type: 'delete_task', id: 5 }\`).
3. **The Reducer:** A function that takes (current state + action) and returns the *next* state.`,
    codeExample: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return { name: state.name, age: state.age + 1 };
    }
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 });

  return (
    <>
      <button onClick={() => dispatch({ type: 'incremented_age' })}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}`,
    codeExplanation: `1. **The Separation:** Notice the \`reducer\` function is defined *outside* the component. This makes your component's logic easier to test and reason about separately from the rendering.
2. **Dispatching:** Instead of telling React "set age to 43", you "dispatch" an intent: "the age was incremented". This is more declarative.
3. **Pure Logic:** Reducers must be "pure"—they don't change the input objects; they always return a brand new object representing the next state.
4. **Scalability:** As your component grows, you can add more \`case\` statements to the reducer to handle complex scenarios like deleting, adding, or clearing entire lists.`,
    useCase: 'Managing complex state objects with multiple sub-values or when the next state depends on the previous one.',
    quiz: [
      {
        id: 'q-usereducer-1',
        question: 'When is useReducer preferred over useState?',
        options: ['For simple boolean flags', 'For complex state logic with multiple sub-values', 'When you don\'t want to use hooks', 'For data fetching only'],
        correctAnswer: 1,
        explanation: 'useReducer is better for complex state transitions or when state logic is better separated from the component.'
      },
      {
        id: 'q-usereducer-2',
        question: 'What are the two arguments passed to useReducer?',
        options: ['State and dispatch', 'Reducer function and initial state', 'Action and payload', 'Effect and dependencies'],
        correctAnswer: 1,
        explanation: 'useReducer(reducer, initialState) is the standard signature.'
      },
      {
        id: 'q-usereducer-3',
        question: 'What does useReducer return?',
        options: ['The current state and a dispatch function', 'A new state object', 'A promise', 'A component'],
        correctAnswer: 0,
        explanation: 'It returns an array with the current state and a function to dispatch actions.'
      },
      {
        id: 'q-usereducer-4',
        question: 'What is a "reducer" function?',
        options: ['A function that reduces the size of the app', 'A function that takes (state, action) and returns a new state', 'A function that deletes data', 'A function that handles CSS'],
        correctAnswer: 1,
        explanation: 'A reducer determines how the state should change based on the action received.'
      },
      {
        id: 'q-usereducer-5',
        question: 'What is an "action" in useReducer?',
        options: ['A JavaScript event', 'An object describing what happened (usually with a type property)', 'A function call', 'A CSS animation'],
        correctAnswer: 1,
        explanation: 'Actions are plain objects that tell the reducer what kind of update to perform.'
      },
      {
        id: 'q-usereducer-6',
        question: 'Can you use useReducer for global state?',
        options: ['Yes, by combining it with useContext', 'No, it\'s only for local state', 'Only in Redux', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'The "Reducer + Context" pattern is a common way to manage global state without external libraries.'
      },
      {
        id: 'q-usereducer-7',
        question: 'Is useReducer faster than useState?',
        options: ['Yes', 'No, they have similar performance', 'Only for large objects', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Performance is similar; the choice is about code organization and complexity management.'
      },
      {
        id: 'q-usereducer-8',
        question: 'What is the "dispatch" function used for?',
        options: ['To send an action to the reducer', 'To clear the state', 'To fetch data', 'To navigate to a new page'],
        correctAnswer: 0,
        explanation: 'Calling dispatch(action) triggers the reducer to calculate the next state.'
      },
      {
        id: 'q-usereducer-9',
        question: 'Should reducers be pure functions?',
        options: ['Yes, they should not have side effects', 'No, they can fetch data', 'Only if using TypeScript', 'It doesn\'t matter'],
        correctAnswer: 0,
        explanation: 'Reducers must be pure: they should only calculate the next state based on arguments and not perform side effects.'
      },
      {
        id: 'q-usereducer-10',
        question: 'What is the third (optional) argument of useReducer?',
        options: ['A cleanup function', 'An init function for lazy initialization', 'A dependency array', 'A callback function'],
        correctAnswer: 1,
        explanation: 'The init function allows you to calculate the initial state lazily.'
      }
    ]
  },
  {
    id: 'hooks-useid',
    title: 'Hooks: useId',
    category: 'Hooks',
    content: `**useId** is a Hook for generating unique IDs that can be passed to accessibility attributes like \`htmlFor\` or \`aria-describedby\`.

Why not use \`Math.random()\`?
- **SSR Compatibility:** In Server-Side Rendering (SSR), IDs generated by \`Math.random()\` will mismatch between the server and the client, causing "Hydration Errors". \`useId\` ensures the same ID is generated on both.
- **Safety:** It guarantees that the ID is unique across your entire app instance.`,
    codeExample: `import { useId } from 'react';

function PasswordField() {
  const id = useId();
  return (
    <>
      <label htmlFor={id + '-password'}>Password:</label>
      <input id={id + '-password'} type="password" />
      <p id={id + '-hint'}>Must be at least 8 characters.</p>
    </>
  );
}

export default function App() {
  return (
    <>
      <h2>Sign Up Form</h2>
      <PasswordField />
      <PasswordField />
    </>
  );
}`,
    codeExplanation: `1. **Generating Stable IDs:** \`useId()\` returns a unique string during the first render and persists it.
2. **Multiple IDs:** You can use a single \`useId\` call and append suffixes (like \`-password\`, \`-hint\`) to create multiple linked IDs within one component instance.
3. **Component Reusability:** When we render \`<PasswordField />\` twice in \`App\`, React correctly generates two different base IDs, ensuring clicking the label for the first field doesn't focus the second field.
4. **Constraint:** Never use \`useId\` to generate keys in a list—keys should always come from your data itself.`,
    useCase: 'Generating unique IDs for form labels, aria-describedby, or any accessibility-related attributes.',
    quiz: [
      {
        id: 'q-useid-1',
        question: 'Should you use useId for keys in a list?',
        options: ['Yes', 'No', 'Only if the list is static', 'Only in production'],
        correctAnswer: 1,
        explanation: 'useId should not be used to generate keys in a list. Keys should be generated from your data.'
      },
      {
        id: 'q-useid-2',
        question: 'What is the primary purpose of useId?',
        options: ['To generate random numbers', 'To generate unique IDs for accessibility attributes', 'To uniquely identify components in the Virtual DOM', 'To manage state'],
        correctAnswer: 1,
        explanation: 'It\'s designed for linking HTML elements (like label and input) for accessibility.'
      },
      {
        id: 'q-useid-3',
        question: 'Why is useId better than Math.random()?',
        options: ['It\'s faster', 'It ensures IDs match between server and client in SSR', 'It generates shorter IDs', 'It\'s more random'],
        correctAnswer: 1,
        explanation: 'In Server-Side Rendering, Math.random() would produce different IDs on the server and client, causing hydration errors. useId is stable.'
      },
      {
        id: 'q-useid-4',
        question: 'Can you use useId to generate multiple IDs in one component?',
        options: ['Yes, call it multiple times', 'No, only once per component', 'Only if they are for different elements', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'You can call useId as many times as needed, or call it once and append suffixes (e.g., id + "-first").'
      },
      {
        id: 'q-useid-5',
        question: 'What does the generated ID look like?',
        options: ['A simple number', 'A string containing a colon (e.g., ":r1:")', 'A UUID', 'A random hex string'],
        correctAnswer: 1,
        explanation: 'React uses a specific internal format for these IDs, often including colons.'
      },
      {
        id: 'q-useid-6',
        question: 'Can you use useId in a class component?',
        options: ['Yes', 'No', 'Only with a wrapper', 'Only in React 16.8'],
        correctAnswer: 1,
        explanation: 'useId is a hook and is only available in functional components.'
      },
      {
        id: 'q-useid-7',
        question: 'Does useId take any arguments?',
        options: ['Yes, a prefix', 'No', 'Yes, a seed value', 'Yes, a length'],
        correctAnswer: 1,
        explanation: 'The useId hook does not take any arguments.'
      },
      {
        id: 'q-useid-8',
        question: 'Is useId useful for CSS selectors?',
        options: ['Yes, always', 'No, because the colons in the ID require escaping in CSS', 'Only for animations', 'Only for mobile'],
        correctAnswer: 1,
        explanation: 'While possible, the colons make it difficult to use in standard CSS selectors without escaping.'
      },
      {
        id: 'q-useid-9',
        question: 'What happens if you use useId inside a loop?',
        options: ['It works fine', 'It throws an error because hooks cannot be called in loops', 'It returns the same ID', 'It crashes the app'],
        correctAnswer: 1,
        explanation: 'Like all hooks, useId must be called at the top level of the component.'
      },
      {
        id: 'q-useid-10',
        question: 'When was useId introduced?',
        options: ['React 16.8', 'React 17.0', 'React 18.0', 'React 19.0'],
        correctAnswer: 2,
        explanation: 'useId was introduced in React 18 alongside other concurrent features.'
      }
    ]
  },
  {
    id: 'hooks-uselayouteffect',
    title: 'Hooks: useLayoutEffect',
    category: 'Hooks',
    content: `**useLayoutEffect** is a version of \`useEffect\` that fires **synchronously** before the browser repaints the screen. 

**Wait, why would I want to block the screen?**
Normally, \`useEffect\` is better because it doesn't slow down the visible part of your app. However, if your effect needs to:
1. **Measure a DOM node:** (e.g., how tall is this div?)
2. **Move an element:** based on that measurement.
...then using \`useEffect\` might cause a visible "flicker" where the user sees the element in its old position for one frame before it jumps to the new one. \`useLayoutEffect\` prevents this jump.`,
    codeExample: `import { useState, useRef, useLayoutEffect } from 'react';

export default function Tooltip() {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    // 1. Measure the height synchronously
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []); // 2. Dependencies

  return (
    <div ref={ref} style={{ position: 'absolute', top: -tooltipHeight }}>
      I am a tooltip positioned above!
    </div>
  );
}`,
    codeExplanation: `1. **The Problem:** If we used \`useEffect\`, the tooltip would first appear at \`top: 0\` (bottom-aligned), then React would measure it, and then it would jump to its correct position above the target.
2. **The Sync Fix:** \`useLayoutEffect\` runs *after* the DOM is updated but *before* the browser draws. React sees you updated \`tooltipHeight\`, re-renders immediately, and the browser only ever shows the "final" correctly-positioned tooltip.
3. **Performance Warning:** Because this blocks the browser from painting, avoid heavy calculations inside \`useLayoutEffect\`. Use it strictly for layout measurements.`,
    useCase: 'Measuring the size or position of a DOM element before the browser repaints to avoid visual flickering.',
    quiz: [
      {
        id: 'q-uselayouteffect-1',
        question: 'When should you prefer useEffect over useLayoutEffect?',
        options: ['Always', 'Whenever possible, to avoid blocking visual updates', 'Only for data fetching', 'Only for animations'],
        correctAnswer: 1,
        explanation: 'useEffect is preferred because it doesn\'t block the browser from painting, leading to better perceived performance.'
      },
      {
        id: 'q-uselayouteffect-2',
        question: 'What is the key difference between useEffect and useLayoutEffect?',
        options: ['One is for state, one is for effects', 'useEffect is asynchronous, useLayoutEffect is synchronous after DOM mutations', 'useLayoutEffect is only for class components', 'There is no difference'],
        correctAnswer: 1,
        explanation: 'useLayoutEffect runs synchronously before the browser paints, while useEffect runs after.'
      },
      {
        id: 'q-uselayouteffect-3',
        question: 'What is a common use case for useLayoutEffect?',
        options: ['Fetching data from an API', 'Measuring the size or position of a DOM element', 'Setting up a timer', 'Logging to the console'],
        correctAnswer: 1,
        explanation: 'It\'s used for measurements that need to happen before the user sees the updated UI to prevent flickering.'
      },
      {
        id: 'q-uselayouteffect-4',
        question: 'Does useLayoutEffect block the browser paint?',
        options: ['Yes', 'No', 'Only on mobile', 'Only in slow browsers'],
        correctAnswer: 0,
        explanation: 'Because it runs synchronously, the browser cannot paint until the hook finishes execution.'
      },
      {
        id: 'q-uselayouteffect-5',
        question: 'What happens if you update state inside useLayoutEffect?',
        options: ['It triggers an immediate re-render before the paint', 'It crashes the app', 'It waits for the next frame', 'It does nothing'],
        correctAnswer: 0,
        explanation: 'React will synchronously re-render, ensuring the user only sees the final state.'
      },
      {
        id: 'q-uselayouteffect-6',
        question: 'Can useLayoutEffect cause performance issues?',
        options: ['No', 'Yes, if it contains heavy logic, it will make the app feel laggy', 'Only if using Redux', 'Only on Safari'],
        correctAnswer: 1,
        explanation: 'Since it blocks painting, any slow code inside will delay the visual update of the page.'
      },
      {
        id: 'q-uselayouteffect-7',
        question: 'Does useLayoutEffect work on the server (SSR)?',
        options: ['Yes', 'No, it only works in the browser where the DOM is available', 'Only if using Node.js', 'Only in production'],
        correctAnswer: 1,
        explanation: 'It requires a DOM to run. React will show a warning if you use it in SSR.'
      },
      {
        id: 'q-uselayouteffect-8',
        question: 'Is the dependency array used in useLayoutEffect?',
        options: ['Yes, same as useEffect', 'No', 'Only for state variables', 'Only for refs'],
        correctAnswer: 0,
        explanation: 'It follows the same dependency rules as useEffect.'
      },
      {
        id: 'q-uselayouteffect-9',
        question: 'Which hook should you use for a tooltip that needs to be positioned relative to a button?',
        options: ['useEffect', 'useLayoutEffect', 'useMemo', 'useCallback'],
        correctAnswer: 1,
        explanation: 'useLayoutEffect ensures the tooltip is positioned correctly before it becomes visible.'
      },
      {
        id: 'q-uselayouteffect-10',
        question: 'What is the "flicker" that useLayoutEffect prevents?',
        options: ['A screen refresh', 'A brief moment where an element is in the wrong position before being moved by an effect', 'A bug in the graphics card', 'A CSS animation error'],
        correctAnswer: 1,
        explanation: 'If you use useEffect, the element might render in its initial position for one frame before the effect moves it. useLayoutEffect avoids this.'
      }
    ]
  },
  {
    id: 'hooks-useimperativehandle',
    title: 'Hooks: useImperativeHandle',
    category: 'Hooks',
    content: `**useImperativeHandle** is a Hook that lets you customize the "exposed interface" of a child component.

By default, functional components are "sealed"—a parent using a \`ref\` on a child gets nothing back. If you want the parent to be able to call a specific function inside the child (like \`myRef.current.focus()\`), you must:
1. Wrap the child in \`forwardRef\`.
2. Use \`useImperativeHandle\` to define exactly what the ref exposes.`,
    codeExample: `import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  // Expose ONLY the focus method, keep everything else private
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);

  return <input {...props} ref={inputRef} />;
});

export default function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus(); // We are calling a method defined in the child!
  }

  return (
    <>
      <MyInput ref={ref} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}`,
    codeExplanation: `1. **The Contract:** The parent doesn't get access to the actual \`<input>\` DOM node. It only gets the object returned by the child's \`useImperativeHandle\`.
2. **Encapsulation:** This is great for reusable library components. You can hide complex internal state or DOM structures and only expose a clean API (like \`.play()\`, \`.pause()\`, \`.reset()\`).
3. **ForwardRef Required:** Without \`forwardRef\`, the \`ref\` prop passed from the parent would never reach the \`useImperativeHandle\` hook.
4. **Usage Choice:** This is an "escape hatch". In most cases, you should use props and state to control children declaratively. Only use this for actions that are naturally imperative (focus, scroll, animations).`,
    useCase: 'Exposing specific methods (like focus or scroll) of a child component to its parent.',
    quiz: [
      {
        id: 'q-useimperativehandle-1',
        question: 'What is the primary purpose of useImperativeHandle?',
        options: ['To manage state', 'To customize the instance value exposed when using ref', 'To fetch data', 'To handle events'],
        correctAnswer: 1,
        explanation: 'It lets you control which properties or methods of a child component are accessible to the parent via a ref.'
      },
      {
        id: 'q-useimperativehandle-2',
        question: 'Which hook must be used alongside useImperativeHandle?',
        options: ['useState', 'forwardRef', 'useEffect', 'useMemo'],
        correctAnswer: 1,
        explanation: 'useImperativeHandle works with the ref passed via forwardRef.'
      },
      {
        id: 'q-useimperativehandle-3',
        question: 'What is the first argument of useImperativeHandle?',
        options: ['The state', 'The ref object', 'A callback function', 'A dependency array'],
        correctAnswer: 1,
        explanation: 'The first argument is the ref received from forwardRef.'
      },
      {
        id: 'q-useimperativehandle-4',
        question: 'What is the second argument of useImperativeHandle?',
        options: ['A function that returns the object to be exposed', 'A dependency array', 'The initial state', 'A cleanup function'],
        correctAnswer: 0,
        explanation: 'The second argument is a function that returns the "handle" (the object) you want to expose.'
      },
      {
        id: 'q-useimperativehandle-5',
        question: 'Is useImperativeHandle recommended for common use?',
        options: ['Yes, it\'s very powerful', 'No, it should be used sparingly as it goes against the declarative nature of React', 'Only in production', 'Only for class components'],
        correctAnswer: 1,
        explanation: 'Imperative code should be avoided in most cases. Prefer declarative props and state.'
      },
      {
        id: 'q-useimperativehandle-6',
        question: 'What is a common use case for this hook?',
        options: ['Focusing an input inside a child component', 'Updating a global store', 'Styling a component', 'Handling a form submission'],
        correctAnswer: 0,
        explanation: 'Exposing a `focus()` or `scrollIntoView()` method from a child to a parent is a classic use case.'
      },
      {
        id: 'q-useimperativehandle-7',
        question: 'Does useImperativeHandle have a dependency array?',
        options: ['Yes, as the third argument', 'No', 'Only if using TypeScript', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'Like useMemo, it takes a dependency array to determine when to re-create the exposed object.'
      },
      {
        id: 'q-useimperativehandle-8',
        question: 'What happens if you don\'t use forwardRef?',
        options: ['It still works', 'The ref will be undefined or point to the component instance (which doesn\'t exist for functional components)', 'It throws a syntax error', 'It crashes the browser'],
        correctAnswer: 1,
        explanation: 'Functional components don\'t accept a ref prop by default; forwardRef is required to pass it through.'
      },
      {
        id: 'q-useimperativehandle-9',
        question: 'Can you expose private state variables through useImperativeHandle?',
        options: ['Yes', 'No', 'Only if they are strings', 'Only in strict mode'],
        correctAnswer: 0,
        explanation: 'You can expose anything you want, including functions that modify internal state.'
      },
      {
        id: 'q-useimperativehandle-10',
        question: 'When was useImperativeHandle introduced?',
        options: ['React 16.8', 'React 17.0', 'React 18.0', 'React 19.0'],
        correctAnswer: 0,
        explanation: 'It was introduced in React 16.8 as part of the initial hooks release.'
      }
    ]
  },
  {
    id: 'api-handling',
    title: 'API Handling: Fetch vs Axios',
    category: 'Intermediate',
    content: `Handling API calls is a fundamental part of most React applications. You have two primary tools for this: the native **Fetch API** and the **Axios** library.

### The Breakdown

**Fetch API:**
- **Pros:** Built into every modern browser. No extra bundle size.
- **Cons:** Slightly clunky syntax. You have to check \`response.ok\` manually (it doesn't error on 404s). You must call \`.json()\` to get the data.

**Axios:**
- **Pros:** Automatic JSON parsing. Rejects automatically on 4xx/5xx errors. Very easy to add "Interceptors" (great for adding Auth tokens automatically to every request).
- **Cons:** Adds about 5-10kb to your app. Requires an \`npm install\`.`,
    codeExample: `// 1. Using Fetch (The Native Way)
async function getDataWithFetch() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('HTTP error'); // Manual check required!
    const data = await response.json(); // Manual parsing required!
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// 2. Using Axios (The Robust Way)
import axios from 'axios';

async function getDataWithAxios() {
  try {
    const response = await axios.get('https://api.example.com/data');
    // Axios automatically parsed JSON + threw error if status was not 200
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}`,
    codeExplanation: `1. **The JSON Conversion:** Fetch requires an extra \`await response.json()\` call. Axios does this automatically and puts the result in \`response.data\`.
2. **Error Logic:** One of the biggest pitfalls with \`fetch\` is that a 404 response is NOT considered a failure. You have to check \`response.ok\` yourself. Axios correctly treats 404s as errors and triggers the \`catch\` block.
3. **Advanced Features:** For large apps, Axios supports "Interceptors"—functions that run automatically before every request (e.g., to add a Bearer Token) or after every response (e.g., to handle global expired-token errors).
4. **Recommendation:** Start with \`fetch\` for simple learning projects. Switch to \`Axios\` for serious production apps where consistency and error handling are critical.`,
    useCase: 'Fetching user profiles, loading product lists, or submitting forms to a backend server.',
    liveExample: {
      title: 'End-to-End API Handling with Loading, Error & Cancellation',
      description: 'A robust implementation of data fetching that handles loading states, error scenarios, and request cancellation using AbortController.',
      files: [
        {
          name: 'hooks/useFetch.ts',
          language: 'typescript',
          content: `import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cancel request if component unmounts
    };
  }, [url]);

  return { data, loading, error };
}`,
          explanation: 'This hook manages the entire lifecycle of an API request. It uses AbortController to prevent "memory leaks" or state updates on unmounted components if the request is still pending.'
        },
        {
          name: 'components/UserList.tsx',
          language: 'tsx',
          content: `import React from 'react';
import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
  email: string;
}

export const UserList = () => {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  if (loading) return <div className="animate-pulse">Loading users...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <ul className="space-y-2">
      {users?.map(user => (
        <li key={user.id} className="p-3 bg-white/5 rounded-lg border border-white/10">
          <p className="font-bold">{user.name}</p>
          <p className="text-xs opacity-60">{user.email}</p>
        </li>
      ))}
    </ul>
  );
};`,
          explanation: 'The component cleanly handles all three states: Loading (skeleton/spinner), Error (alert), and Success (data list).'
        }
      ],
      result: '1. **Initial State:** User sees "Loading users..."\n2. **Success:** A list of users appears with their names and emails.\n3. **Error:** If the URL is invalid or the server is down, a red error message is displayed.\n4. **Optimization:** If the user navigates away before the data arrives, the request is cancelled, saving bandwidth and preventing errors.'
    },
    quiz: [
      {
        id: 'q-api-1',
        question: 'Which of the following is true about the native Fetch API?',
        options: ['It automatically parses JSON', 'It requires a manual check for response.ok', 'It only works in Node.js', 'It includes a built-in timeout feature'],
        correctAnswer: 1,
        explanation: 'Fetch does not automatically parse JSON and does not reject on HTTP error status codes like 404 or 500.'
      },
      {
        id: 'q-api-2',
        question: 'What is a major advantage of Axios over Fetch?',
        options: ['It is built into all browsers', 'It automatically transforms JSON data', 'It is faster than Fetch', 'It uses less memory'],
        correctAnswer: 1,
        explanation: 'Axios automatically parses JSON responses, reducing boilerplate code.'
      },
      {
        id: 'q-api-3',
        question: 'How does Axios handle HTTP errors (like 404 or 500)?',
        options: ['It ignores them', 'It automatically rejects the promise', 'You must check response.ok', 'It returns null'],
        correctAnswer: 1,
        explanation: 'Axios automatically throws an error if the status code is outside the 2xx range.'
      },
      {
        id: 'q-api-4',
        question: 'Which method is used to send a POST request in Axios?',
        options: ['axios.send()', 'axios.post()', 'axios.push()', 'axios.create()'],
        correctAnswer: 1,
        explanation: 'axios.post(url, data) is the standard method for POST requests.'
      },
      {
        id: 'q-api-5',
        question: 'What does the "interceptors" feature in Axios allow you to do?',
        options: ['Stop all network traffic', 'Run code before a request is sent or after a response is received', 'Change the browser URL', 'Debug CSS'],
        correctAnswer: 1,
        explanation: 'Interceptors are powerful for adding auth tokens to headers or logging all requests globally.'
      },
      {
        id: 'q-api-6',
        question: 'Does Fetch support request cancellation natively?',
        options: ['No', 'Yes, using AbortController', 'Yes, using fetch.cancel()', 'Only in Chrome'],
        correctAnswer: 1,
        explanation: 'Fetch uses the AbortController API to cancel ongoing requests.'
      },
      {
        id: 'q-api-7',
        question: 'In Axios, where is the response data located?',
        options: ['response.body', 'response.json', 'response.data', 'response.payload'],
        correctAnswer: 2,
        explanation: 'Axios puts the parsed response body in the .data property.'
      },
      {
        id: 'q-api-8',
        question: 'Which library is generally preferred for complex apps with many API requirements?',
        options: ['Fetch', 'Axios', 'jQuery AJAX', 'XMLHttpRequest'],
        correctAnswer: 1,
        explanation: 'Axios is often preferred for its richer feature set, including interceptors, defaults, and better error handling.'
      },
      {
        id: 'q-api-9',
        question: 'What is the default timeout in Fetch?',
        options: ['30 seconds', 'None (it can hang indefinitely)', '5 seconds', '1 minute'],
        correctAnswer: 1,
        explanation: 'Fetch does not have a default timeout; you must implement one using AbortController.'
      },
      {
        id: 'q-api-10',
        question: 'Can you use Axios in both the browser and Node.js?',
        options: ['Yes', 'No, only browser', 'No, only Node.js', 'Only with a polyfill'],
        correctAnswer: 0,
        explanation: 'Axios is isomorphic, meaning it works in both client-side and server-side environments.'
      }
    ]
  },
  {
    id: 'backend-connection',
    title: 'Connecting React to a Backend Server',
    category: 'Intermediate',
    content: `React is a "frontend-only" library. To save real data or handle complex logic (like auth), it needs to talk to a **Backend**. 

The process is like a conversation:
1. **Frontend:** "Hey Backend, give me the user list!" (HTTP GET Request)
2. **Backend:** "Here you go!" (JSON Response)
3. **Frontend:** Updates state and shows the data.

While you can fetch data directly in components, the best practice is to separate your "Data Logic" from your "UI Logic" using custom hooks.`,
    liveExample: {
      title: 'Full-Stack Communication',
      description: 'Understanding how the "gap" between React and the Server is bridged using Fetch and JSON.',
      files: [
        {
          name: 'server.js (The Backend)',
          language: 'javascript',
          content: `const express = require('express');
const cors = require('cors'); // Required so frontend can talk to backend
const app = express();

app.use(cors());
app.use(express.json());

// API Endpoint
app.get('/api/message', (req, res) => {
  res.json({ text: "Success! Data came from the server." });
});

app.listen(5000, () => console.log('Backend on port 5000'));`,
          explanation: 'The Backend acts as a "Waiter". It waits for a request on a specific URL (/api/message) and serves back a JSON "plate" of data.'
        },
        {
          name: 'DataFetcher.tsx (The Frontend)',
          language: 'tsx',
          content: `import { useEffect, useState } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Calling the backend
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(json => setData(json.text));
  }, []);

  return (
    <div className="card">
      <p>Server says: <b>{data || 'Loading...'}</b></p>
    </div>
  );
}`,
          explanation: 'The Frontend component uses "useEffect" to trigger the request as soon as it appears. It stores the result in state, which triggers a re-render to show the message.'
        }
      ],
      result: 'Initially shows "Loading...", then displays the message from the Express server once the network request completes.'
    },
    quiz: []
  },
  {
    id: 'ui-pure-components',
    title: 'Describing the UI: Keeping Components Pure',
    category: 'Basics',
    content: `In computer science, a **Pure Function** is a function that:
1. **Always returns the same output for the same input.**
2. **Has no side effects.** (It doesn't change anything outside itself).

React's entire rendering model is built on this. By treating components as pure functions, React can predict exactly what the UI should look like just by looking at the props.`,
    codeExample: `// ❌ IMPURE: Changes a variable outside itself!
let guestCount = 0;
function ImpureCup() {
  guestCount = guestCount + 1;
  return <h2>Tea cup for guest #{guestCount}</h2>;
}

// ✅ PURE: Only uses its own props
function PureCup({ guestID }) {
  return <h2>Tea cup for guest #{guestID}</h2>;
}`,
    codeExplanation: `1. **The Danger:** In the impure example, if React renders \`ImpureCup\` twice (which it often does in development to find bugs), the \`guestCount\` would double! Your UI would show "Guest #2" on the first load. 
2. **The Predictability:** The pure example is safe. No matter how many times React renders it, \`PureCup(1)\` always results in "Guest #1".
3. **State vs. Impurity:** Note that using \`useState\` is NOT impure. React handles state tracking separately. Impurity refers to modifying *external* variables or the DOM directly during the rendering phase.
4. **Consistency:** Pure components make your app easier to debug, test, and allow for features like "Concurrent Rendering" where React can pause and resume work safely.`,
    useCase: 'Ensuring your UI is predictable and avoiding hard-to-debug rendering issues.',
    quiz: [
      {
        id: 'q-pure-1',
        question: 'What is a "pure function"?',
        options: ['A function with no arguments', 'A function that always returns the same output for the same input and has no side effects', 'A function that only uses state', 'A function that is exported'],
        correctAnswer: 1,
        explanation: 'Purity is a core concept in functional programming and React.'
      },
      {
        id: 'q-pure-2',
        question: 'What is a "side effect" in a component?',
        options: ['Rendering JSX', 'Modifying a variable that existed before rendering', 'Using props', 'Returning an array'],
        correctAnswer: 1,
        explanation: 'Changing external state during rendering is a side effect and should be avoided.'
      },
      {
        id: 'q-pure-3',
        question: 'Why does React care about component purity?',
        options: ['To make the code look better', 'To enable optimizations like skipping re-renders and concurrent rendering', 'To save memory', 'To support old browsers'],
        correctAnswer: 1,
        explanation: 'React can only safely optimize components if it knows they are predictable.'
      },
      {
        id: 'q-pure-4',
        question: 'Is it okay to mutate props inside a component?',
        options: ['Yes', 'No, props should be treated as read-only', 'Only if they are objects', 'Only in strict mode'],
        correctAnswer: 1,
        explanation: 'Mutating props violates purity and can cause unpredictable UI behavior.'
      },
      {
        id: 'q-pure-5',
        question: 'Where should side effects (like API calls) happen in a component?',
        options: ['Directly in the component body', 'Inside event handlers or useEffect', 'In the return statement', 'In the CSS'],
        correctAnswer: 1,
        explanation: 'Rendering should be pure. Side effects belong in specific "escape hatches".'
      },
      {
        id: 'q-pure-6',
        question: 'What happens if a component is impure?',
        options: ['It won\'t render', 'It can cause bugs where the UI doesn\'t match the state or behaves inconsistently', 'It speeds up the app', 'It uses less CPU'],
        correctAnswer: 1,
        explanation: 'Impure components are the source of many "ghost" bugs in React apps.'
      },
      {
        id: 'q-pure-7',
        question: 'Is it okay to mutate a local variable created during render?',
        options: ['Yes, as long as it doesn\'t exist outside the component function', 'No', 'Only for strings', 'Only in production'],
        correctAnswer: 0,
        explanation: 'Local mutation within the same render is fine because it doesn\'t affect anything else.'
      },
      {
        id: 'q-pure-8',
        question: 'What is "Strict Mode" in React?',
        options: ['A way to make the app faster', 'A tool that renders components twice in development to help find impurities', 'A security feature', 'A type of CSS'],
        correctAnswer: 1,
        explanation: 'Double-rendering helps catch components that have side effects during the render phase.'
      },
      {
        id: 'q-pure-9',
        question: 'Can a component that uses state still be "pure"?',
        options: ['Yes, in the sense that for a given state and props, it always returns the same JSX', 'No', 'Only if state is a number', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'React components are "pure" with respect to their inputs (props, state, and context).'
      },
      {
        id: 'q-pure-10',
        question: 'Which of these is an example of an impurity?',
        options: ['Reading a prop', 'Changing a global variable during render', 'Calling useState', 'Returning a <div>'],
        correctAnswer: 1,
        explanation: 'Modifying global state during render is a classic impurity.'
      }
    ]
  },
  {
    id: 'state-reducer',
    interactiveDemo: 'ReducerDemo',
    title: 'Reducers',
    category: 'Advanced',
    content: `A **Reducer** is like a "Custom Menu" for your state. Instead of just changing things randomly, you define a fixed set of "Actions" that can happen.

It's a pure function that takes the **Current State** and an **Action**, and returns the **New State**.
\`(state, action) => newState\`

**Why use this instead of useState?**
1. **Complexity:** If your state has 5+ fields that depend on each other.
2. **Predictability:** You can see exactly which action triggered a change.
3. **Logic Separation:** You can test your state logic in a plain JS file without any React components.`,
    codeExample: `// The Reducer: Logic lives here
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// The Component: UI lives here
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      {state.count}
    </button>
  );
}`,
    codeExplanation: `1. **The switch statement:** This is the heart of most reducers. It looks at the \`action.type\` to decide how to calculate the next state.
2. **Immutability:** Notice we return a *new* object \`{ count: ... }\`. We never do \`state.count++\`.
3. **Dispatch:** Think of \`dispatch\` as "sending a message". You don't tell React *how* to change the state; you just say "the user clicked increment", and the reducer figures out the rest.
4. **Initial State:** The second argument to \`useReducer\` is the starting value for your data.`,
    useCase: 'Centralizing state transition logic, making state changes predictable and easy to test.',
    liveExample: {
      title: 'Step-by-Step Reducer Implementation',
      description: 'A detailed look at how a reducer manages a complex state object (a Todo list).',
      files: [
        {
          name: 'types.ts',
          language: 'typescript',
          content: `export interface Todo {\n  id: number;\n  text: string;\n  completed: boolean;\n}\n\nexport interface TodoState {\n  todos: Todo[];\n}\n\nexport type TodoAction =\n  | { type: 'ADD_TODO'; payload: string }\n  | { type: 'TOGGLE_TODO'; payload: number }\n  | { type: 'DELETE_TODO'; payload: number };`,
          explanation: 'Step 1: Define the shape of your state and the actions that can modify it. Using TypeScript ensures you don\'t dispatch invalid actions.'
        },
        {
          name: 'todoReducer.ts',
          language: 'typescript',
          content: `import { TodoState, TodoAction } from './types';\n\nexport const initialState: TodoState = { todos: [] };\n\nexport function todoReducer(state: TodoState, action: TodoAction): TodoState {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return {\n        todos: [\n          ...state.todos,\n          { id: Date.now(), text: action.payload, completed: false }\n        ]\n      };\n    case 'TOGGLE_TODO':\n      return {\n        todos: state.todos.map(todo =>\n          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo\n        )\n      };\n    case 'DELETE_TODO':\n      return {\n        todos: state.todos.filter(todo => todo.id !== action.payload)\n      };\n    default:\n      return state;\n  }\n}`,
          explanation: 'Step 2: Implement the reducer function. Notice how we use the spread operator (...) to create new arrays and objects instead of modifying the old ones.'
        },
        {
          name: 'TodoApp.tsx',
          language: 'tsx',
          content: `import React, { useReducer } from 'react';\nimport { todoReducer, initialState } from './todoReducer';\n\nexport const TodoApp = () => {\n  const [state, dispatch] = useReducer(todoReducer, initialState);\n\n  const addTodo = (text: string) => {\n    dispatch({ type: 'ADD_TODO', payload: text });\n  };\n\n  return (\n    <div>\n      {/* UI to list todos and call addTodo */}\n    </div>\n  );\n};`,
          explanation: 'Step 3: Use the reducer in a component. The `dispatch` function is the only way to trigger a state change. It sends an action to the reducer, which then calculates the new state.'
        }
      ],
      result: 'The state flows in a one-way loop: UI triggers an Action -> Reducer processes Action -> Reducer returns New State -> UI re-renders with New State.'
    },
    quiz: [
      {
        id: 'q-reducer-1',
        question: 'What is a Reducer in React/Redux?',
        options: ['A function that reduces the size of the bundle', 'A pure function that takes state and action and returns a new state', 'A component that renders less UI', 'A tool to compress images'],
        correctAnswer: 1,
        explanation: 'Reducers are the "brains" of state management, deciding how state should change.'
      },
      {
        id: 'q-reducer-2',
        question: 'Why must a reducer be a "pure function"?',
        options: ['To make it run faster', 'To ensure predictability and allow for features like time-travel debugging', 'Because React requires it for JSX', 'To prevent memory leaks'],
        correctAnswer: 1,
        explanation: 'Pure functions are predictable. If you give them the same input, you always get the same output, which is crucial for debugging state changes.'
      }
    ]
  },
  {
    id: 'managing-reducer-context',
    title: 'Managing State: Scaling Up with Reducer and Context',
    category: 'Advanced',
    content: `For large applications, managing state with just \`useState\` and \`useEffect\` becomes messy "spaghetti code".

The modern way to scale up is the **Reducer + Context** pattern:
- **useReducer:** Handles the complex *logic* of how tasks are added, deleted, or toggled.
- **useContext:** Handles the *delivery* of that data to every component in the building.

This combination gives you the power of Redux (centralized state) with the simplicity of built-in React hooks.`,
    codeExample: `// 1. Create the Contexts
const TasksContext = createContext(null);
const DispatchContext = createContext(null);

// 2. Wrap your app in a Provider
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// 3. Child components use the context
function AddTask() {
  const dispatch = useContext(DispatchContext);
  // ... dispatch({ type: 'added', text })
}`,
    codeExplanation: `1. **The Separation:** We use TWO contexts—one for the data (\`tasks\`) and one for the update function (\`dispatch\`). 
2. **Performance:** This is a key optimization. A component that only ADDS tasks (needs dispatch) shouldn't re-render when a task is TOGGLED (data changes). By splitting them, we prevent unnecessary UI updates.
3. **Single Source of Truth:** All your tasks live in one array, and all the logic for modifying them lives in one reducer function.
4. **Maintenance:** If you want to change how "deleting" works, you only update the reducer code, not 10 different components.`,
    useCase: 'Managing complex global state like a task manager, a multi-step checkout flow, or a dashboard with many interconnected parts.',
    quiz: [
      {
        id: 'q-redcon-1',
        question: 'Why use two separate contexts for state and dispatch?',
        options: ['To make the code longer', 'To prevent re-renders of components that only need to dispatch actions', 'Because React requires it', 'To save memory'],
        correctAnswer: 1,
        explanation: 'Separating them ensures that components only "listening" for dispatch don\'t re-render when the data changes.'
      },
      {
        id: 'q-redcon-2',
        question: 'What is the benefit of this pattern over just using useState and Context?',
        options: ['It\'s faster', 'It provides a more structured way to handle complex state updates', 'It replaces the need for components', 'It\'s easier for beginners'],
        correctAnswer: 1,
        explanation: 'Reducers centralize state logic, making it easier to test and maintain as the app grows.'
      },
      {
        id: 'q-redcon-3',
        question: 'Where should the Provider components be placed?',
        options: ['At the bottom of the tree', 'Wrapping the part of the component tree that needs access to the state', 'Inside every component', 'In the CSS'],
        correctAnswer: 1,
        explanation: 'Providers must be ancestors of the components that consume the context.'
      },
      {
        id: 'q-redcon-4',
        question: 'How does a component access the dispatch function in this pattern?',
        options: ['useContext(TasksDispatchContext)', 'useContext(TasksContext)', 'props.dispatch', 'global.dispatch'],
        correctAnswer: 0,
        explanation: 'You use the specific context created for the dispatch function.'
      },
      {
        id: 'q-redcon-5',
        question: 'Can you use this pattern for multiple different types of state?',
        options: ['Yes, you can create multiple Provider pairs', 'No, only one per app', 'Only in production', 'Only for strings'],
        correctAnswer: 0,
        explanation: 'You can nest multiple providers to manage different domains of state (e.g., AuthProvider, ThemeProvider).'
      },
      {
        id: 'q-redcon-6',
        question: 'What is a "custom provider" component?',
        options: ['A component that wraps the Context Providers and manages the state logic', 'A built-in React component', 'A type of hook', 'A CSS class'],
        correctAnswer: 0,
        explanation: 'Encapsulating the context logic in a custom component makes the root of your app cleaner.'
      },
      {
        id: 'q-redcon-7',
        question: 'Is this pattern as powerful as Redux?',
        options: ['Yes, for most use cases', 'No, it lacks features like middleware and advanced dev tools', 'It\'s more powerful', 'It\'s exactly the same'],
        correctAnswer: 1,
        explanation: 'While great for state management, it doesn\'t have the extensive ecosystem and tooling of Redux.'
      },
      {
        id: 'q-redcon-8',
        question: 'What happens if a component calls useContext outside of a Provider?',
        options: ['It throws an error', 'It returns the default value passed to createContext', 'It returns null', 'The app crashes'],
        correctAnswer: 1,
        explanation: 'This is why providing a sensible default value (or a clear error) is important.'
      },
      {
        id: 'q-redcon-9',
        question: 'How do you handle async actions in this pattern?',
        options: ['Inside the reducer', 'In the component, before calling dispatch', 'Reducers handle async automatically', 'Using a middleware'],
        correctAnswer: 1,
        explanation: 'Reducers must be pure and synchronous. Async logic (like API calls) should happen in the component or a custom hook.'
      },
      {
        id: 'q-redcon-10',
        question: 'Does this pattern work with TypeScript?',
        options: ['Yes, and it provides excellent type safety for actions and state', 'No', 'Only for strings', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'TypeScript is very effective at ensuring you only dispatch valid actions.'
      }
    ]
  },
  {
    id: 'state-store',
    title: 'The Store',
    category: 'Advanced',
    content: `The **Store** is the "Single Source of Truth" in a Redux application. It is an object that brings Actions and Reducers together.

### Responsibilities of the Store:
- Holds the entire application state.
- Allows access to state via \`getState()\`.
- Allows state to be updated via \`dispatch(action)\`.
- Registers listeners via \`subscribe(listener)\`.`,
    codeExample: `import { createStore } from 'redux';\nconst store = createStore(counterReducer);`,
    codeExplanation: `In traditional Redux, you create a store by passing your root reducer to 'createStore'. In modern Redux (Redux Toolkit), you use 'configureStore' which sets up the store with better defaults.`,
    useCase: 'Providing a centralized place to manage all application data, ensuring consistency across different parts of the UI.',
    quiz: [
      {
        id: 'q-store-1',
        question: 'How many stores should a Redux app typically have?',
        options: ['One per component', 'One per page', 'Exactly one for the entire application', 'As many as needed'],
        correctAnswer: 2,
        explanation: 'Redux follows the "Single Source of Truth" principle, meaning all global state lives in one store.'
      },
      {
        id: 'q-store-2',
        question: 'How do you update the state held in a Redux store?',
        options: ['By modifying store.state directly', 'By calling store.dispatch(action)', 'By using setState', 'By refreshing the page'],
        correctAnswer: 1,
        explanation: 'Dispatching an action is the only way to trigger a state update in the store.'
      }
    ]
  },
  {
    id: 'state-libraries',
    title: 'State Management (Redux & Zustand)',
    category: 'Advanced',
    content: `For simple apps, \`useState\` is fine. But as your app grows, you might need a dedicated library to keep things organized.

### The Major Players

**1. Context API (Built-in)**
- **When to use:** For static data like "Theme" (Light/Dark) or "Logged In User".
- **Downside:** Frequent updates can be slow as it causes re-renders across the whole tree.

**2. Redux Toolkit (The Standard)**
- **When to use:** Big, complex apps with lots of data moving around.
- **Strength:** Amazing debugging tools (you can literally hit "undo" on user actions in your browser).

**3. Zustand (The Modern Favorite)**
- **When to use:** When you want something simpler than Redux but faster than Context.
- **Strength:** Extremely tiny and easy to learn. It feels like "useState" but globally available.`,
    codeExample: `// ZUSTAND EXAMPLE: Short & Sweet
import { create } from 'zustand';

// 1. Create the store
const useStore = create((set) => ({
  votes: 0,
  upvote: () => set((state) => ({ votes: state.votes + 1 })),
}));

// 2. Use it in any component
function Profile() {
  const votes = useStore((state) => state.votes);
  const upvote = useStore((state) => state.upvote);
  
  return <button onClick={upvote}>Votes: {votes}</button>;
}`,
    codeExplanation: `1. **The Hook:** Notice how \`useStore\` returns a custom hook. You can call this inside *any* component without passing props through parents.
2. **Selectors:** Inside \`useStore\`, we pass a function \`(state) => state.votes\`. This tells Zustand: "Only re-render this component if the *votes* change." This makes the app very fast.
3. **Actions:** The \`upvote\` function is defined right inside the store. It's safe, centralized, and easy to find.
4. **No Providers:** Unlike Context, Zustand doesn't require you to wrap your \`<App />\` in a Provider. You just import the hook and use it.`,
    useCase: 'Managing complex application state like a shopping cart, multi-step forms, or real-time dashboards.',
    quiz: [
      {
        id: 'q-state-1',
        question: 'Which library is known for being a lightweight alternative to Redux?',
        options: ['Zustand', 'jQuery', 'Lodash', 'Moment'],
        correctAnswer: 0,
        explanation: 'Zustand is a small, fast, and scalable bearbones state-management solution.'
      },
      {
        id: 'q-state-2',
        question: 'What is the main advantage of using a state management library over Context?',
        options: ['It makes the app smaller', 'Better performance for frequent updates and better debugging tools', 'It replaces React', 'It\'s easier to learn'],
        correctAnswer: 1,
        explanation: 'Libraries like Redux and Zustand are optimized to prevent unnecessary re-renders and provide powerful dev tools.'
      },
      {
        id: 'q-state-3',
        question: 'In Zustand, how do you access the state?',
        options: ['Using a custom hook returned by create()', 'Using useContext', 'Using a global variable', 'Using props'],
        correctAnswer: 0,
        explanation: 'Zustand provides a hook that you can use anywhere in your app to select specific parts of the state.'
      },
      {
        id: 'q-state-4',
        question: 'What is "immutability" in state management?',
        options: ['Changing state directly', 'Creating a new copy of the state instead of modifying the existing one', 'Deleting the state', 'Freezing the UI'],
        correctAnswer: 1,
        explanation: 'Immutability ensures that React can easily detect changes by comparing object references.'
      },
      {
        id: 'q-state-5',
        question: 'Which of these is a popular "atomic" state management library?',
        options: ['Redux', 'Recoil/Jotai', 'Zustand', 'XState'],
        correctAnswer: 1,
        explanation: 'Recoil and Jotai use an "atomic" approach where state is split into small, independent pieces called atoms.'
      },
      {
        id: 'q-state-6',
        question: 'What is a "selector" function?',
        options: ['A CSS selector', 'A function that extracts a specific piece of state from the store', 'A function that selects a DOM element', 'A function that chooses a theme'],
        correctAnswer: 1,
        explanation: 'Selectors help components subscribe only to the data they actually need, improving performance.'
      },
      {
        id: 'q-state-7',
        question: 'Can you use Zustand without React?',
        options: ['Yes', 'No', 'Only in Node.js', 'Only with TypeScript'],
        correctAnswer: 0,
        explanation: 'Zustand is a vanilla JavaScript library that has a first-class React integration.'
      },
      {
        id: 'q-state-8',
        question: 'What is "Redux DevTools"?',
        options: ['A code editor', 'A browser extension for debugging state changes', 'A compiler', 'A testing framework'],
        correctAnswer: 1,
        explanation: 'Redux DevTools allows you to inspect every action, see state changes, and even "time travel" through updates.'
      },
      {
        id: 'q-state-9',
        question: 'What does "lifting state up" mean?',
        options: ['Moving state to a parent component so it can be shared by siblings', 'Deleting state', 'Moving state to a database', 'Using a higher-order component'],
        correctAnswer: 0,
        explanation: 'It\'s the standard React way to share state before reaching for a global library.'
      },
      {
        id: 'q-state-10',
        question: 'When should you start using a global state library?',
        options: ['On day one of every project', 'When prop drilling becomes difficult to manage or state logic is very complex', 'Only when using TypeScript', 'Never'],
        correctAnswer: 1,
        explanation: 'Start with local state and Context; only add a library when you actually feel the pain of managing state manually.'
      }
    ]
  },
  {
    id: 'redux-intro',
    title: 'Redux: Global State Management',
    category: 'Advanced',
    diagram: 'StateFlowDiagram',
    content: `**Redux** is the most famous state management library for React. It works like a **Central Bank** for your data.

Instead of components holding bits of data everywhere, everything lives in the **Store**. 

**The Redux Workflow:**
1. **Action:** "I want to buy a book" (An object describing what happened).
2. **Reducer:** The Accountant (Calculates your new bank balance based on the price).
3. **Store:** The Vault (Holds the final balance).
4. **Selector:** The ATM (Lets a component "withdraw" just the data it needs).`,
    codeExample: `// 1. Definition of what CAN happen (Action)
const action = {
  type: 'cart/itemAdded',
  payload: { name: 'React Book', price: 25 }
};

// 2. How it updates (Reducer)
function cartReducer(state, action) {
  if (action.type === 'cart/itemAdded') {
    return { ...state, items: [...state.items, action.payload] };
  }
  return state;
}

// 3. The logic center (Store) - Usually created with Redux Toolkit`,
    useCase: 'Large-scale applications where state is shared by many components, or when state logic is complex and needs to be testable and predictable.',
    quiz: [
      {
        id: 'q-redux-1',
        question: 'What is the primary purpose of Redux?',
        options: ['To replace React', 'To manage global state in a predictable way', 'To speed up API calls', 'To style components'],
        correctAnswer: 1,
        explanation: 'Redux provides a centralized, predictable container for application state.'
      },
      {
        id: 'q-redux-2',
        question: 'What is the "Store" in Redux?',
        options: ['A place to buy components', 'A single JavaScript object that holds the entire application state', 'A database on the server', 'A CSS file'],
        correctAnswer: 1,
        explanation: 'The Store is the "Single Source of Truth" for your application state.'
      },
      {
        id: 'q-redux-3',
        question: 'What is an "Action" in Redux?',
        options: ['A function that changes state', 'A plain JavaScript object with a "type" property', 'A React component', 'A browser event'],
        correctAnswer: 1,
        explanation: 'Actions describe "what happened" in the application.'
      },
      {
        id: 'q-redux-4',
        question: 'What is a "Reducer" in Redux?',
        options: ['A function that calculates the next state based on the previous state and an action', 'A tool to minify code', 'A way to delete state', 'An API handler'],
        correctAnswer: 0,
        explanation: 'Reducers specify how the state changes in response to actions.'
      },
      {
        id: 'q-redux-5',
        question: 'Which principle states that state is read-only?',
        options: ['Single source of truth', 'State is read-only', 'Changes are made with pure functions', 'Immutability'],
        correctAnswer: 1,
        explanation: 'The only way to change the state is to emit an action.'
      },
      {
        id: 'q-redux-6',
        question: 'What does it mean that reducers must be "pure functions"?',
        options: ['They must be written in TypeScript', 'They must return the same output for the same input and have no side effects', 'They must be very short', 'They must be defined in a separate file'],
        correctAnswer: 1,
        explanation: 'Pure functions ensure that state updates are predictable and testable.'
      },
      {
        id: 'q-redux-7',
        question: 'What is "One-Way Data Flow" in Redux?',
        options: ['Data only moves from parent to child', 'Data follows a strict loop: Action -> Reducer -> Store -> UI', 'Data can only be updated once', 'Data only flows to the server'],
        correctAnswer: 1,
        explanation: 'This predictable loop makes it easier to understand how data changes over time.'
      },
      {
        id: 'q-redux-8',
        question: 'Can you have multiple stores in a Redux app?',
        options: ['Yes', 'No, there should be only one single store', 'Only in production', 'Only if using multiple components'],
        correctAnswer: 1,
        explanation: 'Redux encourages a single source of truth for the entire application.'
      },
      {
        id: 'q-redux-9',
        question: 'What is "Dispatching" an action?',
        options: ['Deleting an action', 'Sending an action to the store to trigger a state update', 'Creating a new component', 'Fetching data'],
        correctAnswer: 1,
        explanation: 'store.dispatch(action) is the only way to trigger a state change.'
      },
      {
        id: 'q-redux-10',
        question: 'Is Redux only for React?',
        options: ['Yes', 'No, it can be used with any UI framework or even vanilla JS', 'Only for mobile apps', 'Only for web apps'],
        correctAnswer: 1,
        explanation: 'Redux is a standalone library that is most commonly used with React but is framework-agnostic.'
      }
    ]
  },
  {
    id: 'redux-toolkit',
    title: 'Redux Toolkit (RTK)',
    category: 'Advanced',
    content: `**Redux Toolkit (RTK)** is the modern, official way to write Redux. It was created to solve Redux's biggest problem: **Boilerplate** (too much repetitive code).

**Why developers love RTK:**
- **Slices:** You can define your state, actions, and reducers all in one little "slice" of code.
- **Immer:** You can actually write \`state.items.push(newItem)\`! RTK uses a library called "Immer" under the hood to automatically turn that into a safe, immutable update.
- **Built-in Thunk:** It handles API calls (Asynchronous actions) automatically.`,
    codeExample: `import { createSlice, configureStore } from '@reduxjs/toolkit';

// 1. Create a "Slice"
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      // It looks like we are mutating, but Immer makes it safe!
      state.value += 1;
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
    }
  }
});

// 2. Export the "Auto-Generated" Actions
export const { increment, incrementBy } = counterSlice.actions;

// 3. Create the Store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});`,
    codeExplanation: `1. **Encapsulation:** \`createSlice\` is a "one-stop-shop". It creates your reducers AND your action creators (\`increment()\`) automatically.
2. **Simplified Immutability:** In classic Redux, you had to do \`return { ...state, value: state.value + 1 }\`. In RTK, you just do \`state.value += 1\`. This makes code much easier to read and 100% safer.
3. **Payloads:** When you call \`incrementBy(5)\`, RTK automatically creates an action object like \`{ type: 'counter/incrementBy', payload: 5 }\`.
4. **DevTools:** \`configureStore\` automatically connects your app to the Redux DevTools browser extension so you can debug immediately.`,
    useCase: 'Modern Redux development. It should be used for all new Redux projects to reduce code complexity and potential bugs.',
    liveExample: {
      title: 'Redux Toolkit: Counter & User App',
      description: 'A complete implementation of Redux Toolkit with slices, store configuration, and React-Redux hooks.',
      files: [
        {
          name: 'store/counterSlice.ts',
          language: 'typescript',
          content: `import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer handles immutability automatically
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`,
          explanation: 'The slice defines the initial state, reducers, and actions in one place. RTK uses Immer internally, allowing us to write "mutating" logic that is actually safe.'
        },
        {
          name: 'store/index.ts',
          language: 'typescript',
          content: `import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`,
          explanation: 'configureStore sets up the store with sensible defaults like Redux Thunk and DevTools integration. We also export types for better TypeScript support.'
        },
        {
          name: 'components/Counter.tsx',
          language: 'tsx',
          content: `import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { increment, decrement } from '../store/counterSlice';

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
      <div className="flex gap-2">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};`,
          explanation: 'useSelector extracts data from the store, and useDispatch allows us to trigger actions. The component automatically re-renders when the selected state changes.'
        }
      ],
      result: 'A functional counter where the state is managed globally. Clicking "+" or "-" updates the store, and the UI reflects the change immediately across any component using that state.'
    },
    quiz: [
      {
        id: 'q-rtk-1',
        question: 'What library does Redux Toolkit use to allow "mutating" logic in reducers?',
        options: ['Lodash', 'Immer', 'Axios', 'Moment'],
        correctAnswer: 1,
        explanation: 'Redux Toolkit uses Immer, which allows you to write code that looks like it mutates state but actually performs safe immutable updates.'
      },
      {
        id: 'q-rtk-2',
        question: 'What is the primary goal of Redux Toolkit?',
        options: ['To make Redux faster', 'To reduce boilerplate and simplify common Redux tasks', 'To replace React', 'To handle CSS'],
        correctAnswer: 1,
        explanation: 'RTK provides a set of tools to make writing Redux logic easier and more concise.'
      },
      {
        id: 'q-rtk-3',
        question: 'What is a "Slice" in Redux Toolkit?',
        options: ['A piece of the UI', 'A collection of Redux logic for a single feature (reducer + actions)', 'A way to split files', 'A type of database'],
        correctAnswer: 1,
        explanation: 'createSlice automatically generates action creators and action types based on your reducers.'
      },
      {
        id: 'q-rtk-4',
        question: 'How does RTK handle immutable updates?',
        options: ['You must use the spread operator manually', 'It uses the Immer library internally to allow "mutating" logic that is actually immutable', 'It doesn\'t handle them', 'It uses a special compiler'],
        correctAnswer: 1,
        explanation: 'Immer lets you write code like `state.value += 1`, which it then converts into a safe immutable update.'
      },
      {
        id: 'q-rtk-5',
        question: 'What function is used to create a Redux store in RTK?',
        options: ['createStore', 'configureStore', 'setupStore', 'initStore'],
        correctAnswer: 1,
        explanation: 'configureStore automatically sets up the store with good defaults, including the Redux DevTools and thunk middleware.'
      },
      {
        id: 'q-rtk-6',
        question: 'What is "createAsyncThunk" used for?',
        options: ['To create synchronous actions', 'To handle asynchronous logic like API calls', 'To style components', 'To manage forms'],
        correctAnswer: 1,
        explanation: 'It simplifies the process of dispatching actions based on the lifecycle of a promise (pending, fulfilled, rejected).'
      },
      {
        id: 'q-rtk-7',
        question: 'Does RTK include middleware by default?',
        options: ['No', 'Yes, it includes redux-thunk and others by default', 'Only in production', 'Only if you add it manually'],
        correctAnswer: 1,
        explanation: 'configureStore comes pre-configured with the most common middleware.'
      },
      {
        id: 'q-rtk-8',
        question: 'What is the "extraReducers" field in createSlice used for?',
        options: ['To add more local reducers', 'To respond to actions defined outside of the slice (like async thunks)', 'To handle errors', 'To manage CSS'],
        correctAnswer: 1,
        explanation: 'It allows a slice to listen to actions from other slices or async thunks.'
      },
      {
        id: 'q-rtk-9',
        question: 'Is Redux Toolkit the recommended way to write Redux today?',
        options: ['Yes, it is the official standard', 'No, classic Redux is better', 'Only for small apps', 'Only for TypeScript'],
        correctAnswer: 0,
        explanation: 'The Redux team strongly recommends using RTK for all new Redux code.'
      },
      {
        id: 'q-rtk-10',
        question: 'What is "RTK Query"?',
        options: ['A way to write SQL in Redux', 'A powerful data fetching and caching tool built into RTK', 'A testing framework', 'A CSS library'],
        correctAnswer: 1,
        explanation: 'RTK Query is similar to React Query but integrated directly into the Redux ecosystem.'
      }
    ]
  },
  {
    id: 'redux-react',
    title: 'React-Redux Hooks',
    category: 'Advanced',
    content: `React-Redux provides hooks to interact with the Redux store from your components. 'useSelector' is used to read data from the store, and 'useDispatch' is used to send actions to the store.`,
    codeExample: `import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increment())}>{count}</button>;
}`,
    useCase: 'Connecting your React UI components to the centralized Redux store.',
    quiz: [
      {
        id: 'q-react-redux-1',
        question: 'Which hook is used to access data from the Redux store?',
        options: ['useDispatch', 'useSelector', 'useStore', 'useContext'],
        correctAnswer: 1,
        explanation: 'useSelector allows you to extract data from the Redux store state using a selector function.'
      },
      {
        id: 'q-react-redux-2',
        question: 'Which hook is used to send actions to the Redux store?',
        options: ['useSelector', 'useDispatch', 'useReducer', 'useEffect'],
        correctAnswer: 1,
        explanation: 'useDispatch returns a reference to the dispatch function from the Redux store.'
      },
      {
        id: 'q-react-redux-3',
        question: 'What is the purpose of the <Provider> component in React-Redux?',
        options: ['To provide CSS styles', 'To make the Redux store available to any nested components that need to access it', 'To provide API data', 'To manage forms'],
        correctAnswer: 1,
        explanation: 'The Provider wraps your app and takes the store as a prop.'
      },
      {
        id: 'q-react-redux-4',
        question: 'How does useSelector determine if a component should re-render?',
        options: ['It re-renders on every action', 'It performs a strict reference equality check (===) on the value returned by the selector', 'It checks the DOM', 'It re-renders every 100ms'],
        correctAnswer: 1,
        explanation: 'If the selector returns a new reference, the component re-renders.'
      },
      {
        id: 'q-react-redux-5',
        question: 'Can you use useDispatch to call an async function directly?',
        options: ['Yes', 'No, you must use middleware like redux-thunk (which is included in RTK)', 'Only in production', 'Only with Promises'],
        correctAnswer: 1,
        explanation: 'Dispatch only accepts plain objects by default. Middleware is needed for async actions.'
      },
      {
        id: 'q-react-redux-6',
        question: 'What happens if you return a new object from useSelector every time?',
        options: ['Nothing', 'The component will re-render on every single action dispatched to the store', 'It throws an error', 'It speeds up the app'],
        correctAnswer: 1,
        explanation: 'Since `{}` !== `{}`, returning a new object literal causes a re-render every time the store updates.'
      },
      {
        id: 'q-react-redux-7',
        question: 'Is it better to have one large useSelector or many small ones?',
        options: ['One large one', 'Many small ones (to minimize unnecessary re-renders)', 'It doesn\'t matter', 'Only one per component'],
        correctAnswer: 1,
        explanation: 'Small, specific selectors ensure the component only re-renders when the specific data it needs changes.'
      },
      {
        id: 'q-react-redux-8',
        question: 'What is the "connect" function?',
        options: ['A way to connect to a database', 'The older, HOC-based way to connect components to Redux', 'A new hook in React 19', 'A CSS property'],
        correctAnswer: 1,
        explanation: 'Before hooks, `connect` was the standard way to use Redux with React.'
      },
      {
        id: 'q-react-redux-9',
        question: 'Can you use Redux hooks outside of a component?',
        options: ['Yes', 'No, they must be used inside a functional component or another hook', 'Only in service workers', 'Only in tests'],
        correctAnswer: 1,
        explanation: 'Hooks follow the standard React rules and must be used within the component tree.'
      },
      {
        id: 'q-react-redux-10',
        question: 'What is the "useStore" hook used for?',
        options: ['To read state', 'To get a direct reference to the Redux store object (rarely needed)', 'To create a new store', 'To delete the store'],
        correctAnswer: 1,
        explanation: 'It\'s rarely used; useSelector and useDispatch are preferred for most tasks.'
      }
    ]
  },
  {
    id: 'redux-why',
    title: 'Why Use Redux?',
    category: 'Advanced',
    content: `Redux is used when: 
1. You have large amounts of application state needed in many places.
2. The state is updated frequently.
3. The logic to update that state is complex.
4. You need to see how the state changes over time (using Redux DevTools).
5. You want a clear separation between UI and state logic.`,
    useCase: 'Complex dashboards, collaborative tools, or apps with complex undo/redo functionality.',
    quiz: [
      {
        id: 'q-redux-why-1',
        question: 'Which tool allows you to inspect every state change in a Redux app?',
        options: ['Chrome Console', 'Redux DevTools', 'React Profiler', 'Network Tab'],
        correctAnswer: 1,
        explanation: 'Redux DevTools provides a powerful interface for "time-travel debugging" and inspecting every action and state change.'
      },
      {
        id: 'q-redux-why-2',
        question: 'What is "Time-Travel Debugging"?',
        options: ['Speeding up the app', 'The ability to step backward and forward through state changes to see how the UI looked at any point', 'A way to fix bugs in the past', 'A feature of the browser'],
        correctAnswer: 1,
        explanation: 'Because state is immutable and actions are logged, you can replay the application history.'
      },
      {
        id: 'q-redux-why-3',
        question: 'When is Redux most useful?',
        options: ['For small, simple apps', 'For large apps with complex state shared across many components', 'For apps with no state', 'For styling only'],
        correctAnswer: 1,
        explanation: 'Redux shines in complex scenarios where managing state with props or Context becomes difficult.'
      },
      {
        id: 'q-redux-why-4',
        question: 'What is "Prop Drilling"?',
        options: ['A way to fix a computer', 'Passing data through many layers of components that don\'t need it, just to reach a deep child', 'A CSS technique', 'A type of database query'],
        correctAnswer: 1,
        explanation: 'Redux solves prop drilling by making state accessible from a global store.'
      },
      {
        id: 'q-redux-why-5',
        question: 'How does Redux improve testability?',
        options: ['It doesn\'t', 'By using pure functions (reducers) that are easy to test with specific inputs and outputs', 'By making the code longer', 'By using TypeScript'],
        correctAnswer: 1,
        explanation: 'Since reducers are pure, you can test them without mocking the entire component tree.'
      },
      {
        id: 'q-redux-why-6',
        question: 'What is "Centralized State"?',
        options: ['State stored in the middle of a file', 'Storing all application state in a single place (the store)', 'State stored on a central server', 'State that is always the same'],
        correctAnswer: 1,
        explanation: 'Centralization makes it easier to persist state, sync it between tabs, or debug the entire app state at once.'
      },
      {
        id: 'q-redux-why-7',
        question: 'What is a "Side Effect" in the context of Redux?',
        options: ['A bug', 'Anything that happens outside of the state update (e.g., API calls, logging)', 'A secondary state change', 'A CSS animation'],
        correctAnswer: 1,
        explanation: 'Redux uses middleware like thunks or sagas to handle side effects cleanly.'
      },
      {
        id: 'q-redux-why-8',
        question: 'Does Redux help with state persistence (e.g., saving to localStorage)?',
        options: ['Yes, it\'s easy to save the entire store object at once', 'No', 'Only for strings', 'Only in production'],
        correctAnswer: 0,
        explanation: 'Because the entire state is in one object, you can easily serialize it and save it to storage.'
      },
      {
        id: 'q-redux-why-9',
        question: 'What is the main trade-off of using Redux?',
        options: ['It\'s too fast', 'It adds complexity and boilerplate code', 'It makes the app smaller', 'It replaces CSS'],
        correctAnswer: 1,
        explanation: 'You trade simplicity for predictability and better debugging tools.'
      },
      {
        id: 'q-redux-why-10',
        question: 'Can you use Redux and Context API together?',
        options: ['Yes, for different types of state (e.g., Redux for data, Context for themes)', 'No', 'Only if using TypeScript', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'Many apps use both: Redux for complex business data and Context for simple UI state like themes or language.'
      }
    ]
  },
  {
    id: 'data-fetching',
    title: 'Data Fetching (React Query)',
    category: 'Advanced',
    diagram: 'DataCycleDiagram',
    content: `TanStack Query (React Query) is the best way to manage server state in React. It handles caching, background updates, and stale data automatically, reducing the need for manual useEffect fetching.`,
    codeExample: `const { data, isLoading } = useQuery({\n  queryKey: ['todos'],\n  queryFn: fetchTodos,\n});`,
    useCase: 'Fetching, caching, and synchronizing server data in complex web applications.',
    quiz: [
      {
        id: 'q-query-1',
        question: 'What is a major benefit of React Query?',
        options: ['It replaces CSS', 'It handles caching and stale data automatically', 'It makes the app smaller', 'It replaces the Virtual DOM'],
        correctAnswer: 1,
        explanation: 'React Query simplifies data fetching by handling complex logic like caching and background synchronization.'
      },
      {
        id: 'q-query-2',
        question: 'What is "Server State"?',
        options: ['State stored in the browser', 'Data that lives on a server and is fetched into the app', 'The operating system of the server', 'A CSS variable'],
        correctAnswer: 1,
        explanation: 'Server state is data that is persisted remotely and requires asynchronous APIs to fetch or update.'
      },
      {
        id: 'q-query-3',
        question: 'What does the "queryKey" do in React Query?',
        options: ['It\'s a password for the API', 'It uniquely identifies a query for caching and refetching', 'It\'s the URL of the API', 'It\'s a CSS class'],
        correctAnswer: 1,
        explanation: 'The queryKey allows React Query to manage data globally and share it between components.'
      },
      {
        id: 'q-query-4',
        question: 'What is a "mutation" in React Query?',
        options: ['A bug in the data', 'An operation that changes data on the server (POST, PUT, DELETE)', 'A change in the component tree', 'A CSS transition'],
        correctAnswer: 1,
        explanation: 'Mutations are used for create/update/delete operations that modify server data.'
      },
      {
        id: 'q-query-5',
        question: 'What is "stale-while-revalidate"?',
        options: ['A way to delete data', 'Showing old (stale) data while fetching fresh data in the background', 'A security protocol', 'A type of error'],
        correctAnswer: 1,
        explanation: 'This strategy ensures the user sees something immediately while the app ensures the data is up to date.'
      },
      {
        id: 'q-query-6',
        question: 'How do you trigger a refetch manually in React Query?',
        options: ['Reload the page', 'Call the refetch() function returned by useQuery', 'Delete the cache', 'Wait 5 minutes'],
        correctAnswer: 1,
        explanation: 'useQuery returns a refetch function that you can call in response to user actions.'
      },
      {
        id: 'q-query-7',
        question: 'What is "Optimistic Updates"?',
        options: ['Updating the UI before the server confirms the change', 'Hoping the server is fast', 'Ignoring errors', 'Using a fast database'],
        correctAnswer: 0,
        explanation: 'Optimistic updates make the app feel faster by assuming the server request will succeed.'
      },
      {
        id: 'q-query-8',
        question: 'Does React Query replace the fetch API or Axios?',
        options: ['Yes', 'No, it uses them to perform the actual network requests', 'Only in production', 'Only for GraphQL'],
        correctAnswer: 1,
        explanation: 'React Query is a manager for the data; you still need a fetcher function (using fetch, axios, etc.).'
      },
      {
        id: 'q-query-9',
        question: 'What is the "QueryClient"?',
        options: ['A browser extension', 'The object that manages all queries and the cache', 'A type of database', 'A React component'],
        correctAnswer: 1,
        explanation: 'The QueryClient is the core of React Query, holding the cache and configuration.'
      },
      {
        id: 'q-query-10',
        question: 'Why is useEffect fetching often considered a "bad" pattern?',
        options: ['It\'s too fast', 'It leads to race conditions, bugs with caching, and complex boilerplate', 'It\'s not supported anymore', 'It only works for strings'],
        correctAnswer: 1,
        explanation: 'Manual fetching with useEffect is error-prone and lacks advanced features like automatic retries and deduplication.'
      }
    ]
  },
  {
    id: 'auth-flows',
    title: 'Authentication: Auth Code vs Client Credentials',
    category: 'Advanced',
    content: `Authentication flows are critical for securing applications. Two common flows are:
    
1. **Authorization Code (AC) Flow**: Used in web applications where a user logs in. The app redirects the user to the auth provider, gets a code, and exchanges it for a token.
2. **Client Credentials (CC) Flow**: Used for machine-to-machine (M2M) communication where no user is involved (e.g., a background service accessing an API).`,
    liveExample: {
      title: 'End-to-End Auth Implementation',
      description: 'Implementing Auth Code flow in a React application using an Auth provider.',
      files: [
        {
          name: 'AuthService.ts',
          language: 'typescript',
          content: `export const login = () => {
  const authUrl = "https://auth.example.com/authorize";
  const params = new URLSearchParams({
    client_id: "YOUR_CLIENT_ID",
    response_type: "code",
    redirect_uri: window.location.origin + "/callback",
    scope: "openid profile email"
  });
  window.location.href = \`\${authUrl}?\${params.toString()}\`;
};

export const handleCallback = async (code: string) => {
  const response = await fetch("https://auth.example.com/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      client_id: "YOUR_CLIENT_ID",
      client_secret: "YOUR_CLIENT_SECRET", // Note: Secret should usually be handled server-side for SPA
      redirect_uri: window.location.origin + "/callback"
    })
  });
  return response.json();
};`,
          explanation: 'The AC flow involves redirecting the user to an external login page and handling the returned authorization code to get an access token.'
        },
        {
          name: 'App.tsx',
          language: 'tsx',
          content: `import { login } from './AuthService';

function App() {
  return (
    <div className="p-4">
      <button onClick={login} className="px-4 py-2 bg-blue-600 text-white rounded">
        Login with AC Flow
      </button>
    </div>
  );
}`,
          explanation: 'A simple UI component that triggers the login flow.'
        }
      ],
      result: 'The user is redirected to the login provider, authenticates, and is redirected back to the app with a secure token.'
    },
    quiz: [
      {
        id: 'q-auth-1',
        question: 'Which flow is used for machine-to-machine communication?',
        options: ['Authorization Code', 'Client Credentials', 'Implicit Flow', 'Password Grant'],
        correctAnswer: 1,
        explanation: 'Client Credentials flow is specifically for services authenticating directly with each other.'
      }
    ]
  },
  {
    id: 'azure-db-connection',
    title: 'Connecting to Azure Database',
    category: 'Advanced',
    content: `Azure offers several database services like Azure SQL and Azure Cosmos DB. Connecting safely requires using environment variables for credentials and a driver like 'tedious' (for SQL) or '@azure/cosmos'.`,
    liveExample: {
      title: 'Azure SQL Database Connection',
      description: 'Step-by-step guide to connecting a Node.js backend to Azure SQL.',
      files: [
        {
          name: 'database.ts',
          language: 'typescript',
          content: `import { Connection, Request } from 'tedious';

const config = {
  server: process.env.DB_SERVER,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    }
  },
  options: {
    database: process.env.DB_NAME,
    encrypt: true
  }
};

export const connectAndQuery = () => {
  const connection = new Connection(config);
  connection.on('connect', (err) => {
    if (err) console.error(err);
    else console.log('Connected to Azure SQL');
  });
  connection.connect();
};`,
          explanation: 'Securely connect using environment variables. Azure SQL requires encryption to be enabled.'
        }
      ],
      result: 'The application establishes a secure connection to the Azure SQL instance and can execute queries.'
    },
    quiz: []
  },

  {
    id: 'escape-hatches-refs',
    title: 'Escape Hatches: Referencing Values with Refs',
    category: 'Advanced',
    content: `When you want a component to "remember" some information, but you don't want that information to trigger new renders, you can use a ref. A ref is a plain JavaScript object with a single 'current' property that you can read or set.`,
    codeExample: `const countRef = useRef(0);\n\nfunction handleClick() {\n  countRef.current = countRef.current + 1;\n  alert('You clicked ' + countRef.current + ' times!');\n}`,
    codeExplanation: `Unlike state, updating a ref does not trigger a re-render. This makes refs ideal for storing information that doesn't affect the visual output of the component, such as timeout IDs, intervals, or other mutable values.
    
Use refs for values that are needed by event handlers but don't change what's on the screen.`,
    useCase: 'Storing a timer ID to clear it later or keeping track of a value that changes frequently but shouldn\'t cause re-renders.',
    quiz: [
      {
        id: 'q-ref-val-1',
        question: 'What is the main difference between a ref and state?',
        options: ['Refs are faster', 'Updating a ref does not trigger a re-render', 'Refs can only store numbers', 'State is only for objects'],
        correctAnswer: 1,
        explanation: 'This is the key distinction. Use state for things that affect the UI, and refs for things that don\'t.'
      },
      {
        id: 'q-ref-val-2',
        question: 'How do you access the value stored in a ref?',
        options: ['ref.value', 'ref.current', 'ref.data', 'ref()'],
        correctAnswer: 1,
        explanation: 'The useRef hook returns an object with a "current" property.'
      },
      {
        id: 'q-ref-val-3',
        question: 'Can you read or write ref.current during rendering?',
        options: ['Yes', 'No, you should only read or write refs from event handlers or Effects', 'Only in strict mode', 'Only for strings'],
        correctAnswer: 1,
        explanation: 'Reading or writing refs during render makes your component unpredictable and can lead to bugs.'
      },
      {
        id: 'q-ref-val-4',
        question: 'What happens to the ref value when a component re-renders?',
        options: ['It is reset', 'It is preserved', 'It is moved to state', 'It is deleted'],
        correctAnswer: 1,
        explanation: 'React preserves the ref object across renders, so its "current" property stays the same.'
      },
      {
        id: 'q-ref-val-5',
        question: 'Is a ref a plain JavaScript object?',
        options: ['Yes', 'No, it\'s a special React type', 'Only in production', 'Only if it stores an object'],
        correctAnswer: 0,
        explanation: 'It\'s just an object like { current: ... } that React holds onto.'
      },
      {
        id: 'q-ref-val-6',
        question: 'When should you use a ref instead of a local variable?',
        options: ['Always', 'When you need the value to persist across re-renders', 'When you want to save memory', 'When you want to use CSS'],
        correctAnswer: 1,
        explanation: 'Local variables are reset on every render; refs are not.'
      },
      {
        id: 'q-ref-val-7',
        question: 'Can you use a ref to store a DOM element?',
        options: ['Yes, that is a very common use case', 'No', 'Only in class components', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'React will set the "current" property to the DOM node when you pass the ref to a "ref" attribute.'
      },
      {
        id: 'q-ref-val-8',
        question: 'Does updating a ref trigger the useEffect hook?',
        options: ['Yes', 'No, because it doesn\'t cause a re-render', 'Only if the ref is in the dependency array', 'Only for strings'],
        correctAnswer: 1,
        explanation: 'Since no re-render occurs, Effects are not re-run.'
      },
      {
        id: 'q-ref-val-9',
        question: 'Should you put a ref in a dependency array?',
        options: ['Yes', 'No, because changing it doesn\'t trigger a re-render, so the Effect wouldn\'t run anyway', 'Only if it\'s a DOM ref', 'Only in strict mode'],
        correctAnswer: 1,
        explanation: 'Refs are not reactive values and shouldn\'t be used as dependencies.'
      },
      {
        id: 'q-ref-val-10',
        question: 'What is the "initial value" passed to useRef(initialValue)?',
        options: ['The value used on every render', 'The value assigned to ref.current only on the first render', 'A default prop', 'A CSS class'],
        correctAnswer: 1,
        explanation: 'React uses the initial value once and ignores it on subsequent renders.'
      }
    ]
  },
  {
    id: 'escape-hatches-dom-refs',
    title: 'Escape Hatches: Manipulating the DOM with Refs',
    category: 'Advanced',
    content: `Sometimes you need to access the browser APIs managed by the DOM—for example, to focus a node, scroll to it, or measure its size. React has no built-in way to do these things, so you'll need a ref to the DOM node.`,
    codeExample: `const inputRef = useRef(null);\n\nfunction handleClick() {\n  inputRef.current.focus();\n}\n\nreturn <input ref={inputRef} />;`,
    codeExplanation: `By passing the 'inputRef' to the 'ref' attribute of the '<input>' tag, you tell React to put the DOM node for that input into 'inputRef.current'. You can then call native DOM methods like '.focus()' on it.
    
Use DOM refs sparingly. Most UI logic should be handled with props and state.`,
    useCase: 'Focusing a text input on mount, scrolling to a specific element in a list, or integrating with a third-party DOM library.',
    quiz: [
      {
        id: 'q-dom-ref-1',
        question: 'How do you attach a ref to a DOM element?',
        options: ['Using the id attribute', 'Using the ref attribute (e.g., <div ref={myRef} />)', 'Using a query selector', 'Using a global variable'],
        correctAnswer: 1,
        explanation: 'The "ref" attribute is the standard way to get a reference to a DOM node in React.'
      },
      {
        id: 'q-dom-ref-2',
        question: 'When does React set the ref.current value for a DOM node?',
        options: ['During the render phase', 'After the component has mounted or updated (during the commit phase)', 'Before the render phase', 'Only when you click it'],
        correctAnswer: 1,
        explanation: 'React updates refs after the DOM has been updated.'
      },
      {
        id: 'q-dom-ref-3',
        question: 'What is the initial value of a DOM ref usually set to?',
        options: ['0', 'null', 'undefined', 'document.body'],
        correctAnswer: 1,
        explanation: 'Setting it to null is a common convention for DOM refs.'
      },
      {
        id: 'q-dom-ref-4',
        question: 'Can you use refs to change the DOM manually (e.g., ref.current.innerHTML = ...)?',
        options: ['Yes, but you should avoid it as it can conflict with React\'s rendering', 'No, React will block it', 'Only in production', 'Only for strings'],
        correctAnswer: 0,
        explanation: 'While possible, manual DOM manipulation can lead to bugs if React tries to update the same node.'
      },
      {
        id: 'q-dom-ref-5',
        question: 'What is "forwardRef"?',
        options: ['A way to move a ref to the next component', 'A function that lets a component expose its DOM node to a parent component', 'A way to skip a render', 'A deprecated feature'],
        correctAnswer: 1,
        explanation: 'By default, you can\'t put a ref on your own components; you must use forwardRef to allow it.'
      },
      {
        id: 'q-dom-ref-6',
        question: 'How do you focus an input using a ref?',
        options: ['inputRef.current.focus()', 'inputRef.focus()', 'focus(inputRef)', 'inputRef.current.setActive()'],
        correctAnswer: 0,
        explanation: 'You call the native .focus() method on the current property.'
      },
      {
        id: 'q-dom-ref-7',
        question: 'What happens to the ref when a component unmounts?',
        options: ['It stays the same', 'React sets ref.current back to null', 'It is deleted', 'It throws an error'],
        correctAnswer: 1,
        explanation: 'React cleans up the ref when the associated DOM node is removed.'
      },
      {
        id: 'q-dom-ref-8',
        question: 'Can you have multiple refs in one component?',
        options: ['Yes', 'No', 'Only if they are in an array', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'You can call useRef as many times as you need.'
      },
      {
        id: 'q-dom-ref-9',
        question: 'Is it okay to use refs for styling (e.g., ref.current.style.color = "red")?',
        options: ['Yes', 'No, use state and the style prop or CSS classes instead', 'Only for animations', 'Only in strict mode'],
        correctAnswer: 1,
        explanation: 'Declarative styling is much more predictable and easier to manage.'
      },
      {
        id: 'q-dom-ref-10',
        question: 'What is useImperativeHandle?',
        options: ['A hook for handling forms', 'A hook that lets you customize the value exposed by a ref (instead of just the DOM node)', 'A way to force a render', 'A way to delete a ref'],
        correctAnswer: 1,
        explanation: 'It\'s often used with forwardRef to expose specific methods to a parent.'
      }
    ]
  },
  {
    id: 'escape-hatches-synchronization',
    title: 'Escape Hatches: Synchronizing with Effects',
    category: 'Advanced',
    content: `Effects let you run some code after rendering so that you can synchronize your component with some system outside of React—like a non-React widget, a network, or a browser API.`,
    codeExample: `useEffect(() => {\n  const connection = createConnection(roomId);\n  connection.connect();\n  return () => connection.disconnect();\n}, [roomId]);`,
    codeExplanation: `This example shows an Effect that synchronizes the component with a chat server. When 'roomId' changes, the Effect disconnects from the old room and connects to the new one. The cleanup function ensures that we don't leave multiple connections open.

Effects are an 'escape hatch' from React's pure rendering logic. Use them only when you need to step outside of React.`,
    useCase: 'Connecting to a WebSocket, controlling a non-React video player, or tracking page views with analytics.',
    quiz: [
      {
        id: 'q-sync-1',
        question: 'What is the primary purpose of an Effect?',
        options: ['To manage state', 'To synchronize your component with an external system', 'To style elements', 'To handle user clicks'],
        correctAnswer: 1,
        explanation: 'Effects are for side effects that happen outside of the React rendering cycle.'
      },
      {
        id: 'q-sync-2',
        question: 'Is an Effect the same as an event handler?',
        options: ['Yes', 'No, event handlers run in response to specific user actions; Effects run in response to rendering', 'Only for clicks', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Effects are triggered by the component being shown or updated, regardless of specific user interaction.'
      },
      {
        id: 'q-sync-3',
        question: 'What is a "reactive value"?',
        options: ['A value that is fast', 'Props, state, and variables calculated from them that can change over time', 'A global variable', 'A CSS property'],
        correctAnswer: 1,
        explanation: 'Reactive values must be included in the Effect\'s dependency array.'
      },
      {
        id: 'q-sync-4',
        question: 'What happens if you omit a reactive value from the dependency array?',
        options: ['Nothing', 'The Effect will use "stale" values from a previous render', 'It throws a syntax error', 'It speeds up the app'],
        correctAnswer: 1,
        explanation: 'This is a common source of bugs. Always include all reactive values used inside the Effect.'
      },
      {
        id: 'q-sync-5',
        question: 'When should you NOT use an Effect?',
        options: ['For data fetching', 'To transform data for rendering (use useMemo or calculate during render instead)', 'To subscribe to events', 'To connect to a server'],
        correctAnswer: 1,
        explanation: 'If you can calculate something during render, you don\'t need an Effect.'
      },
      {
        id: 'q-sync-6',
        question: 'What is the "cleanup" function in an Effect?',
        options: ['A function that deletes the component', 'A function returned by the Effect to stop or undo the side effect', 'A function that clears the console', 'A function that resets state'],
        correctAnswer: 1,
        explanation: 'Cleanup is vital for preventing memory leaks and duplicate subscriptions.'
      },
      {
        id: 'q-sync-7',
        question: 'Does every Effect need a cleanup function?',
        options: ['Yes', 'No, only if the side effect needs to be stopped (like a timer or connection)', 'Only in strict mode', 'Only for strings'],
        correctAnswer: 1,
        explanation: 'If your effect doesn\'t "start" anything that needs to be "stopped", you can omit the cleanup.'
      },
      {
        id: 'q-sync-8',
        question: 'What happens in development mode with Strict Mode enabled?',
        options: ['Effects run once', 'Effects run twice (mount -> unmount -> mount) to help find missing cleanups', 'Effects are disabled', 'The app is faster'],
        correctAnswer: 1,
        explanation: 'This helps ensure your cleanup logic is correct.'
      },
      {
        id: 'q-sync-9',
        question: 'Can you use an Effect to update state based on other state?',
        options: ['Yes, but it\'s usually better to calculate it during render or use a reducer', 'No, never', 'Only for numbers', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'Updating state in an Effect can cause unnecessary re-renders or infinite loops.'
      },
      {
        id: 'q-sync-10',
        question: 'What is a "race condition" in the context of Effects?',
        options: ['A fast animation', 'When multiple async effects finish in a different order than they were started', 'A bug in the CPU', 'A network error'],
        correctAnswer: 1,
        explanation: 'Race conditions are common in data fetching. You should use a "cleanup" variable to ignore stale responses.'
      }
    ]
  },
  {
    id: 'escape-hatches-lifecycle',
    title: 'Escape Hatches: Lifecycle of Reactive Effects',
    category: 'Advanced',
    content: `Effects have a different lifecycle than components. A component may mount, update, or unmount. An Effect can only do two things: start synchronizing something, and later stop synchronizing it. This cycle can happen multiple times if your Effect depends on props or state that change.`,
    codeExample: `useEffect(() => {\n  const connection = createConnection(serverUrl, roomId);\n  connection.connect();\n  return () => connection.disconnect();\n}, [serverUrl, roomId]);`,
    codeExplanation: `If 'roomId' changes, React will first run the cleanup function (disconnecting from the old room), and then run the Effect again with the new 'roomId' (connecting to the new room). This ensures that the component stays synchronized with the correct room at all times.
    
Think of Effects as independent synchronization processes, not as lifecycle hooks.`,
    useCase: 'Ensuring a chat connection or a subscription always matches the current props or state.',
    quiz: [
      {
        id: 'q-life-1',
        question: 'How many times can an Effect run during a component\'s life?',
        options: ['Only once', 'Twice', 'Many times, whenever its dependencies change', 'Zero times'],
        correctAnswer: 2,
        explanation: 'Effects re-run to stay synchronized with the latest reactive values.'
      },
      {
        id: 'q-life-2',
        question: 'What happens before an Effect runs for the second time?',
        options: ['The component unmounts', 'The cleanup function from the previous run is executed', 'The state is reset', 'Nothing'],
        correctAnswer: 1,
        explanation: 'React always cleans up the previous Effect before starting the next one.'
      },
      {
        id: 'q-life-3',
        question: 'What are "reactive values"?',
        options: ['Values that are fast', 'Props, state, and variables calculated from them', 'Global variables', 'CSS properties'],
        correctAnswer: 1,
        explanation: 'Reactive values can change during a re-render and must be in the dependency array.'
      },
      {
        id: 'q-life-4',
        question: 'Why must all reactive values be in the dependency array?',
        options: ['To save memory', 'To ensure the Effect stays synchronized with the latest data', 'To satisfy the linter', 'To make the code longer'],
        correctAnswer: 1,
        explanation: 'If a dependency is missing, the Effect might use "stale" data from an old render.'
      },
      {
        id: 'q-life-5',
        question: 'What does an empty dependency array [] mean?',
        options: ['The Effect runs on every render', 'The Effect only runs once (on mount) and cleans up once (on unmount)', 'The Effect never runs', 'The Effect is broken'],
        correctAnswer: 1,
        explanation: 'Empty dependencies mean the Effect doesn\'t depend on any reactive values.'
      },
      {
        id: 'q-life-6',
        question: 'What happens if you don\'t provide a dependency array at all?',
        options: ['The Effect runs on every single render', 'The Effect only runs once', 'The Effect never runs', 'It throws an error'],
        correctAnswer: 0,
        explanation: 'Without an array, React has no way to know when to skip the Effect.'
      },
      {
        id: 'q-life-7',
        question: 'Is the component lifecycle (mount/unmount) the same as the Effect lifecycle?',
        options: ['Yes', 'No, an Effect can start and stop multiple times while a component is mounted', 'Only in class components', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Effects are more granular and respond to data changes.'
      },
      {
        id: 'q-life-8',
        question: 'How do you handle an Effect that should only run when a specific button is clicked?',
        options: ['Use an Effect with a boolean state', 'Don\'t use an Effect; use an event handler instead', 'Use a ref', 'Use a global variable'],
        correctAnswer: 1,
        explanation: 'Logic triggered by a specific interaction belongs in an event handler.'
      },
      {
        id: 'q-life-9',
        question: 'What is a "stale closure"?',
        options: ['A bug in the browser', 'When a function (like an Effect) captures a variable from an old render and uses its old value', 'A type of CSS animation', 'A memory leak'],
        correctAnswer: 1,
        explanation: 'Stale closures are a common issue when dependencies are missing from hooks.'
      },
      {
        id: 'q-life-10',
        question: 'Does React check the dependency array using deep equality?',
        options: ['Yes', 'No, it uses shallow equality (Object.is)', 'Only for objects', 'Only in React 19'],
        correctAnswer: 1,
        explanation: 'React only checks if the references have changed.'
      }
    ]
  },
  {
    id: 'escape-hatches-separating',
    title: 'Escape Hatches: Separating Events from Effects',
    category: 'Advanced',
    content: `Sometimes you want to use a reactive value inside an Effect, but you don't want the Effect to "react" (re-run) when that value changes. You can use the 'useEffectEvent' hook (currently experimental) to extract non-reactive logic from your Effect.`,
    codeExample: `// Experimental: useEffectEvent\nconst onVisit = useEffectEvent(visitedUrl => {\n  logVisit(visitedUrl, theme);\n});\n\nuseEffect(() => {\n  onVisit(url);\n}, [url]); // Effect only re-runs when url changes, not theme!`,
    codeExplanation: `In this example, we want to log a visit when the 'url' changes. We also want to include the current 'theme' in the log. However, we don't want to log a new visit just because the 'theme' changed. 'useEffectEvent' allows us to read the latest 'theme' without making it a dependency of the Effect.
    
Use this pattern to separate the 'reactive' part of your Effect from the 'non-reactive' logic it uses.`,
    useCase: 'Logging analytics data that includes some UI state (like theme or language) without triggering extra logs when those UI states change.',
    quiz: [
      {
        id: 'q-sep-1',
        question: 'What is the purpose of useEffectEvent?',
        options: ['To replace useEffect', 'To extract non-reactive logic from an Effect', 'To handle form submissions', 'To style components'],
        correctAnswer: 1,
        explanation: 'It allows you to read the latest reactive values without re-triggering the Effect.'
      },
      {
        id: 'q-sep-2',
        question: 'Is useEffectEvent currently stable in React?',
        options: ['Yes', 'No, it is an experimental API', 'Only in React 18', 'Only for mobile'],
        correctAnswer: 1,
        explanation: 'As of 2024, it is still in the experimental/RFC stage.'
      },
      {
        id: 'q-sep-3',
        question: 'Why would you want to avoid re-running an Effect when a value changes?',
        options: ['To save memory', 'Because the logic should only be triggered by a different value (e.g., logging a visit only when the URL changes)', 'To speed up the network', 'To avoid using CSS'],
        correctAnswer: 1,
        explanation: 'Sometimes you need data for an action, but that data shouldn\'t be the trigger for the action.'
      },
      {
        id: 'q-sep-4',
        question: 'Can you call an Effect Event during rendering?',
        options: ['Yes', 'No, they should only be called from inside an Effect', 'Only in strict mode', 'Only for strings'],
        correctAnswer: 1,
        explanation: 'Effect Events are for side effects, not for rendering logic.'
      },
      {
        id: 'q-sep-5',
        question: 'How does useEffectEvent differ from useCallback?',
        options: ['It doesn\'t', 'Effect Events are always "fresh" and don\'t need a dependency array', 'useCallback is faster', 'Effect Events are only for numbers'],
        correctAnswer: 1,
        explanation: 'Unlike useCallback, Effect Events always see the latest props and state without needing to be recreated.'
      },
      {
        id: 'q-sep-6',
        question: 'Where should you define an Effect Event?',
        options: ['Outside the component', 'Inside the component, but outside the Effect', 'Inside the Effect', 'In a separate file'],
        correctAnswer: 1,
        explanation: 'They are defined at the top level of your component, similar to other hooks.'
      },
      {
        id: 'q-sep-7',
        question: 'What happens if you pass an Effect Event to a child component?',
        options: ['It works fine', 'You shouldn\'t; they are intended to be used only within the component that defines them', 'It throws an error', 'It deletes the child'],
        correctAnswer: 1,
        explanation: 'Effect Events are not meant to be passed around; use regular functions or useCallback for that.'
      },
      {
        id: 'q-sep-8',
        question: 'What is the "reactive" part of an Effect?',
        options: ['The code that runs', 'The values in the dependency array that trigger the Effect', 'The cleanup function', 'The return value'],
        correctAnswer: 1,
        explanation: 'The dependencies define what the Effect "reacts" to.'
      },
      {
        id: 'q-sep-9',
        question: 'Can you use useEffectEvent to handle user clicks?',
        options: ['Yes', 'No, use a regular event handler function', 'Only if the click is fast', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Event handlers already have access to the latest state; you don\'t need special hooks for them.'
      },
      {
        id: 'q-sep-10',
        question: 'Does useEffectEvent help with performance?',
        options: ['Yes, by preventing unnecessary Effect re-runs', 'No', 'Only for strings', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'Avoiding redundant side effects is a key performance optimization.'
      }
    ]
  },
  {
    id: 'escape-hatches-no-effect',
    title: 'Escape Hatches: You Might Not Need an Effect',
    category: 'Advanced',
    content: `Many developers over-use Effects. You don't need an Effect if you can calculate something during render (e.g., filtering a list) or if you are handling a user event (e.g., sending a POST request when a button is clicked).`,
    codeExample: `// Bad: Using an Effect to calculate derived state\nuseEffect(() => {\n  setFullName(firstName + ' ' + lastName);\n}, [firstName, lastName]);\n\n// Good: Calculate during render\nconst fullName = firstName + ' ' + lastName;`,
    codeExplanation: `In the "Bad" example, React has to render once with the old 'fullName', then run the Effect, then render *again* with the new 'fullName'. In the "Good" example, React calculates 'fullName' during the first render, so it's much faster and avoids unnecessary re-renders.

Use Effects only for synchronization with external systems. For everything else, use rendering logic or event handlers.`,
    useCase: 'Optimizing performance by removing unnecessary Effects and simplifying component logic.',
    quiz: [
      {
        id: 'q-noeffect-1',
        question: 'When should you NOT use an Effect?',
        options: ['To fetch data', 'To transform data for rendering', 'To subscribe to a store', 'To connect to a server'],
        correctAnswer: 1,
        explanation: 'Data transformation should happen during the render phase.'
      },
      {
        id: 'q-noeffect-2',
        question: 'What is the downside of using an Effect for derived state?',
        options: ['It uses too much memory', 'It causes an extra re-render cycle', 'It breaks the CSS', 'It disables hooks'],
        correctAnswer: 1,
        explanation: 'Effects run after render, so updating state in an Effect triggers a second render.'
      },
      {
        id: 'q-noeffect-3',
        question: 'Should you use an Effect to handle a user click?',
        options: ['Yes', 'No, use an event handler', 'Only if the click is fast', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Event handlers are the right place for logic that happens in response to specific user actions.'
      },
      {
        id: 'q-noeffect-4',
        question: 'What is "derived state"?',
        options: ['State from a parent', 'A value calculated from existing state or props', 'A type of hook', 'A global variable'],
        correctAnswer: 1,
        explanation: 'Derived state should be calculated during render, not stored in its own state variable.'
      },
      {
        id: 'q-noeffect-5',
        question: 'How do you reset state when a prop changes without an Effect?',
        options: ['You can\'t', 'By using a "key" on the component', 'By calling forceUpdate()', 'By refreshing the page'],
        correctAnswer: 1,
        explanation: 'Changing the key tells React to recreate the component with fresh state.'
      },
      {
        id: 'q-noeffect-6',
        question: 'Is it okay to use an Effect for data fetching?',
        options: ['Yes, it\'s a common and valid use case', 'No', 'Only for strings', 'Only in strict mode'],
        correctAnswer: 0,
        explanation: 'Data fetching is a side effect that synchronizes your component with the network.'
      },
      {
        id: 'q-noeffect-7',
        question: 'What should you do if you need to adjust state based on props?',
        options: ['Use an Effect', 'Calculate the change during render (if possible) or use a key to reset the component', 'Use a global variable', 'Use a ref'],
        correctAnswer: 1,
        explanation: 'Calculating during render is the most efficient way.'
      },
      {
        id: 'q-noeffect-8',
        question: 'What is a "render loop"?',
        options: ['A type of animation', 'When an Effect updates state, which triggers a render, which triggers the Effect again, infinitely', 'A CSS transition', 'A fast computer'],
        correctAnswer: 1,
        explanation: 'Render loops are a common bug when using Effects incorrectly.'
      },
      {
        id: 'q-noeffect-9',
        question: 'Does useMemo help with avoiding Effects?',
        options: ['Yes, it allows you to cache expensive calculations during render', 'No', 'Only for strings', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'useMemo is the declarative way to optimize expensive rendering logic.'
      },
      {
        id: 'q-noeffect-10',
        question: 'What is the "golden rule" for Effects?',
        options: ['Use them for everything', 'Use them only for synchronization with external systems', 'Never use them', 'Use them only in class components'],
        correctAnswer: 1,
        explanation: 'This is the core advice from the official React documentation.'
      }
    ]
  },
  {
    id: 'escape-hatches-custom-hooks',
    interactiveDemo: 'CustomHookDemo',
    title: 'Escape Hatches: Reusing Logic with Custom Hooks',
    category: 'Advanced',
    content: `Custom hooks allow you to extract component logic into reusable functions. A custom hook is a JavaScript function whose name starts with 'use' and that may call other hooks.`,
    codeExample: `function useOnlineStatus() {\n  const [isOnline, setIsOnline] = useState(true);\n  useEffect(() => {\n    // ... subscribe to browser online events\n  }, []);\n  return isOnline;\n}\n\n// Usage:\nfunction StatusBar() {\n  const isOnline = useOnlineStatus();\n  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;\n}`,
    codeExplanation: `In this example, 'useOnlineStatus' is a custom hook that manages the logic for tracking the browser's online status. Any component can now use this hook to get the 'isOnline' value without repeating the 'useState' and 'useEffect' logic.

Use custom hooks to share logic (not state itself) between components. Each component using the hook gets its own independent state.`,
    useCase: 'Sharing form validation logic, data fetching patterns, or browser API integrations across multiple components.',
    quiz: [
      {
        id: 'q-custom-1',
        question: 'What is a custom hook?',
        options: ['A built-in React hook', 'A JavaScript function that starts with "use" and can call other hooks', 'A CSS-in-JS library', 'A way to style components'],
        correctAnswer: 1,
        explanation: 'Custom hooks are a way to extract and reuse stateful logic.'
      },
      {
        id: 'q-custom-2',
        question: 'Must a custom hook name start with "use"?',
        options: ['Yes, it\'s a requirement for React\'s linting and internal logic', 'No', 'Only if it uses state', 'Only in TypeScript'],
        correctAnswer: 0,
        explanation: 'The "use" prefix allows React to verify that you are following the Rules of Hooks.'
      },
      {
        id: 'q-custom-3',
        question: 'Do components sharing a custom hook share the same state?',
        options: ['Yes', 'No, each call to a hook gets its own isolated state', 'Only if they are siblings', 'Only if they use Redux'],
        correctAnswer: 1,
        explanation: 'Custom hooks share *logic*, not *data*. Each component instance is independent.'
      },
      {
        id: 'q-custom-4',
        question: 'Can a custom hook call other hooks?',
        options: ['Yes', 'No', 'Only useState', 'Only useEffect'],
        correctAnswer: 0,
        explanation: 'That is the primary purpose of custom hooks: composing other hooks.'
      },
      {
        id: 'q-custom-5',
        question: 'What can a custom hook return?',
        options: ['Only JSX', 'Anything (values, arrays, objects, functions)', 'Only a boolean', 'Nothing'],
        correctAnswer: 1,
        explanation: 'Custom hooks can return whatever data the component needs.'
      },
      {
        id: 'q-custom-6',
        question: 'When should you create a custom hook?',
        options: ['For every component', 'When you find yourself repeating the same hook-based logic in multiple components', 'Only for API calls', 'Only for animations'],
        correctAnswer: 1,
        explanation: 'Custom hooks are for "extracting" logic to make components cleaner and more reusable.'
      },
      {
        id: 'q-custom-7',
        question: 'Are custom hooks a React feature or a pattern?',
        options: ['A core React feature', 'A pattern that naturally follows from how hooks work', 'A separate library', 'A deprecated feature'],
        correctAnswer: 1,
        explanation: 'Custom hooks are a natural consequence of the Hooks design.'
      },
      {
        id: 'q-custom-8',
        question: 'Can you use a custom hook inside a loop?',
        options: ['Yes', 'No, they follow the same rules as built-in hooks', 'Only if the loop is small', 'Only in production'],
        correctAnswer: 1,
        explanation: 'All hooks must be called at the top level of a function.'
      },
      {
        id: 'q-custom-9',
        question: 'Do custom hooks make the code faster?',
        options: ['Yes, always', 'No, they are for code organization and reusability, not necessarily performance', 'Only in Chrome', 'Only for strings'],
        correctAnswer: 1,
        explanation: 'They improve developer experience and maintainability.'
      },
      {
        id: 'q-custom-10',
        question: 'Can a custom hook be used in a class component?',
        options: ['Yes', 'No', 'Only with a wrapper component', 'Only in React 16.8'],
        correctAnswer: 1,
        explanation: 'Hooks are exclusively for functional components.'
      }
    ]
  },
  {
    id: 'advanced-error-boundaries',
    interactiveDemo: 'ErrorBoundaryDemo',
    title: 'Error Boundaries',
    category: 'Advanced',
    content: `Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.`,
    codeExample: `class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    logErrorToMyService(error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>;\n    }\n    return this.props.children;\n  }\n}`,
    codeExplanation: `Error boundaries work like a JavaScript 'catch {}' block, but for components. Only class components can be error boundaries. They catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.`,
    useCase: 'Wrapping major sections of your app (like a Sidebar or a Feed) so that a crash in one doesn\'t take down the entire application.',
    quiz: []
  },
  {
    id: 'advanced-portals',
    interactiveDemo: 'PortalDemo',
    title: 'Portals',
    category: 'Advanced',
    content: `Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.`,
    codeExample: `ReactDOM.createPortal(children, domNode)`,
    codeExplanation: `A common use case for portals is when a parent component has an 'overflow: hidden' or 'z-index' style, but you need the child to visually "break out" of its container, such as for dialogs, hovercards, and tooltips.`,
    useCase: 'Modals, tooltips, and dropdown menus that need to be rendered at the root of the document to avoid CSS clipping.',
    quiz: []
  },
  {
    id: 'advanced-security',
    title: 'XSS Security in React',
    category: 'Advanced',
    content: `By default, React escapes all values embedded in JSX before rendering them. This ensures that you can never inject anything that is not explicitly written in your application. Everything is converted to a string before being rendered.`,
    codeExplanation: `This helps prevent XSS (Cross-Site Scripting) attacks. If you need to render raw HTML, you must use the 'dangerouslySetInnerHTML' prop, which serves as a warning that this action is risky.`,
    useCase: 'Protecting your application from malicious user input that might contain script tags.',
    quiz: []
  },
  {
    id: 'system-arch-detailed',
    title: 'System Architecture & Design: The Comprehensive Guide',
    category: 'Advanced',
    content: `Designing a robust React application requires a deep understanding of architectural patterns, state management, and infrastructure. This section provides a blueprint for building enterprise-grade frontends.

### 1. The Core Architecture
Modern React applications are often structured using a **Feature-Based Architecture**. Instead of grouping by type (components, hooks, services), you group by logic domain.

**Structure Example:**
- \`src/features/auth/\` (Logic, Components, API, Hooks for Auth)
- \`src/features/dashboard/\` (Logic, Components, API, Hooks for Dashboard)
- \`src/components/ui/\` (Shared UI components)
- \`src/lib/\` (Global third-party configurations like axios or firebase)

### 2. State Management Matrix
Choosing the right state management is a design decision based on data frequency and scope.
| State Type | Scope | Recommendation |
| :--- | :--- | :--- |
| **UI State** | Component | \`useState\`, \`useReducer\` |
| **Server State** | Global | TanStack Query |
| **Global State** | Multi-page | Zustand, Redux Toolkit |
| **URL State** | Deep link | \`useSearchParams\`, \`useParams\` |

### 3. Infrastructure & Deployment
For a production React app, consider:
1. **CDN Delivery**: Serve static assets via Cloudfront or Akamai.
2. **Environment Isolation**: Use \`.env.production\`, \`.env.staging\`.
3. **Observation**: Integrate Sentry for error tracking and Google Analytics for user behavior.`,
    liveExample: {
      title: 'Architectural Blueprint',
      description: 'A mock implementation of a feature-based folder structure and service layer.',
      files: [
        {
          name: 'features/dashboard/DashboardHeader.tsx',
          language: 'tsx',
          content: `// Feature-scoped component
import { useUser } from '../auth/hooks/useUser';

export const DashboardHeader = () => {
  const { user } = useUser();
  return (
    <header className="p-4 border-b">
      <h1>Welcome back, {user.name}</h1>
    </header>
  );
};`,
          explanation: 'Components within a feature can reach across to other stable feature domains using clean interfaces.'
        },
        {
          name: 'lib/api-client.ts',
          language: 'typescript',
          content: `import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});`,
          explanation: 'A centralized API client in the lib/ folder ensures consistent headers and error handling across all features.'
        }
      ],
      result: 'The application follows a modular, scalable structure where features are isolated and infrastructure concerns are centralized.'
    },
    quiz: []
  },
  {
    id: 'react-compatibility',
    title: 'React Ecosystem & Compatibility Guide',
    category: 'Advanced',
    content: `React is highly unopinionated, meaning it can work with almost any technology stack. However, certain "golden paths" exist that provide the best developer experience, performance, and community support.

### 1. Compatibility Matrix
React's flexibility allows it to integrate with diverse technologies:

| Category | Compatible Technologies | "Best in Class" Recommendation |
| :--- | :--- | :--- |
| **Styling** | Tailwind CSS, Sass, CSS Modules, Styled Components, Emotion | **Tailwind CSS** (for speed, zero runtime CSS, and design consistency) |
| **State** | Zustand, Redux Toolkit, MobX, Valtio, Recoil | **Zustand** (for simplicity and performance) |
| **Backend** | Node.js (Express/Fastify), Python (Django/FastAPI), Go, Java (Spring) | **Node.js with Express/Fastify** (Same language, shared types via TS) |
| **Database** | PostgreSQL, MongoDB, Azure SQL, MySQL, Redis | **PostgreSQL** (with Prisma ORM) for structured data |
| **Cloud** | AWS, Azure, Google Cloud, Vercel, Netlify | **Vercel** (for frontend) or **AWS** (for full-stack infrastructure) |
| **Auth** | Firebase Auth, Clerk, Auth0, Supabase | **Clerk** (for modern DX) or **Firebase** (for integrated ecosystems) |

### 2. The "Ultimate" Modern Stack (The Golden Path)
If you are starting a new project today and want the highest compatibility and performance, the **T3-inspired stack** is the industry standard:

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (Server state) + Zustand (UI state)
- **Deployment**: Vercel (Frontend) + Render/Azure (Backend)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk or Firebase

**Why this combination?**
- **Type Safety**: TypeScript flows from the database (Prisma) to the frontend.
- **Performance**: Tailwind ensures small CSS bundles; Vite ensures fast builds.
- **Developer Experience**: These tools have the largest communities and best documentation, making troubleshooting much easier.`,
    liveExample: {
      title: 'The Integrated Ecosystem',
      description: 'How a React component interacts with a modern, compatible stack.',
      files: [
        {
          name: 'stack-config.ts',
          language: 'typescript',
          content: `// Example of a type-safe API client compatible with modern backends
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/router'; // Shared types!

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'https://api.example.com/trpc',
    }),
  ],
});`,
          explanation: 'Using tools like tRPC allows your React frontend to share types directly with your Node.js backend, eliminating API documentation sync issues.'
        }
      ],
      result: 'The application benefits from end-to-end type safety, high performance, and a streamlined development workflow.'
    },
    quiz: []
  },
  {
    id: 'performance-memoization',
    interactiveDemo: 'MemoDemo',
    title: 'Memoization (React.memo)',
    category: 'Performance',
    content: `React.memo is a higher-order component. If your component renders the same result given the same props, you can wrap it in React.memo for a performance boost by memoizing the result.`,
    codeExample: `const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});`,
    codeExplanation: `'React.memo' is a higher-order component that wraps a functional component. It performs a shallow comparison of the component's props. If the props haven't changed since the last render, React will skip the render and reuse the last rendered result.

Use this to optimize 'pure' components that render the same output for the same props and are rendered frequently with the same data.`,
    useCase: 'Optimizing pure functional components that render often with the same props.',
    liveExample: {
      title: 'Performance: Preventing Unnecessary Re-renders',
      description: 'Demonstrating how React.memo, useMemo, and useCallback work together to optimize a list of items.',
      files: [
        {
          name: 'components/ListItem.tsx',
          language: 'tsx',
          content: `import React from 'react';

interface Props {
  item: string;
  onDelete: (item: string) => void;
}

export const ListItem = React.memo(({ item, onDelete }: Props) => {
  console.log('Rendering:', item);
  return (
    <li className="flex justify-between p-2 border-b">
      <span>{item}</span>
      <button onClick={() => onDelete(item)} className="text-red-500">Delete</button>
    </li>
  );
});`,
          explanation: 'By wrapping ListItem in React.memo, it will only re-render if its `item` or `onDelete` props change.'
        },
        {
          name: 'App.tsx',
          language: 'tsx',
          content: `import React, { useState, useCallback, useMemo } from 'react';
import { ListItem } from './components/ListItem';

export const App = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [count, setCount] = useState(0);

  // Stabilize the callback to prevent ListItem re-renders
  const handleDelete = useCallback((itemToDelete: string) => {
    setItems(prev => prev.filter(item => item !== itemToDelete));
  }, []);

  return (
    <div className="p-4">
      <button onClick={() => setCount(c => c + 1)}>
        Re-render Parent (Count: {count})
      </button>
      
      <ul className="mt-4">
        {items.map(item => (
          <ListItem key={item} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};`,
          explanation: 'Without `useCallback`, the `handleDelete` function would be re-created on every render of App, causing all `ListItem` components to re-render even if they are memoized. `useCallback` ensures the function reference stays the same.'
        }
      ],
      result: '1. Click "Re-render Parent".\n2. Notice that "Count" updates, but the console DOES NOT show "Rendering: Apple", etc.\n3. This is because `React.memo` saw that the props (`item` and `handleDelete`) didn\'t change, so it skipped the render for all list items.'
    },
    quiz: [
      {
        id: 'q-memo-1',
        question: 'When should you NOT use React.memo?',
        options: ['Always use it', 'When props change frequently', 'For small components', 'For class components'],
        correctAnswer: 1,
        explanation: 'If a component re-renders with different props every time, the memoization check is just extra overhead.'
      },
      {
        id: 'q-memo-2',
        question: 'What is React.memo?',
        options: ['A hook', 'A higher-order component (HOC)', 'A CSS property', 'A database'],
        correctAnswer: 1,
        explanation: 'React.memo is an HOC that wraps a functional component to provide memoization.'
      },
      {
        id: 'q-memo-3',
        question: 'How does React.memo decide whether to re-render?',
        options: ['It checks the state', 'It performs a shallow comparison of props', 'It checks the DOM', 'It re-renders on every parent update'],
        correctAnswer: 1,
        explanation: 'By default, it only re-renders if the props have changed (shallow comparison).'
      },
      {
        id: 'q-memo-4',
        question: 'Can you customize the prop comparison logic in React.memo?',
        options: ['Yes, by passing a second argument (comparison function)', 'No', 'Only in class components', 'Only for strings'],
        correctAnswer: 0,
        explanation: 'You can provide a custom function `(prevProps, nextProps) => boolean` to control the re-render.'
      },
      {
        id: 'q-memo-5',
        question: 'What is the "shallow comparison" used by React.memo?',
        options: ['Comparing every nested property', 'Comparing only the top-level properties of the props object', 'Comparing the length of the props', 'Comparing the memory usage'],
        correctAnswer: 1,
        explanation: 'Shallow comparison checks if the references of the top-level props are the same.'
      },
      {
        id: 'q-memo-6',
        question: 'What happens if you pass a new object literal as a prop to a memoized component on every render?',
        options: ['It stays memoized', 'It re-renders every time because the object reference changes', 'It throws an error', 'It ignores the prop'],
        correctAnswer: 1,
        explanation: 'Since `{}` !== `{}`, the shallow comparison fails, and the component re-renders.'
      },
      {
        id: 'q-memo-7',
        question: 'Is React.memo a guarantee that the component won\'t re-render?',
        options: ['Yes', 'No, React might still re-render it if state or context changes', 'Only in production', 'Only if it has no props'],
        correctAnswer: 1,
        explanation: 'React.memo only prevents re-renders caused by parent updates. State or Context changes will still trigger a re-render.'
      },
      {
        id: 'q-memo-8',
        question: 'Should you wrap every single component in React.memo?',
        options: ['Yes, for performance', 'No, it can actually hurt performance if overused', 'Only for large components', 'Only for mobile apps'],
        correctAnswer: 1,
        explanation: 'The comparison check has a cost. If props change often, you\'re paying for the check AND the render.'
      },
      {
        id: 'q-memo-9',
        question: 'What is the class component equivalent of React.memo?',
        options: ['React.Component', 'React.PureComponent', 'React.StatelessComponent', 'React.Effect'],
        correctAnswer: 1,
        explanation: 'PureComponent implements a shallow prop and state comparison for class components.'
      },
      {
        id: 'q-memo-10',
        question: 'Does React.memo work with children props?',
        options: ['Yes, but children are often new references, so it might not work as expected', 'No', 'Only if children are strings', 'Only in React 19'],
        correctAnswer: 0,
        explanation: 'If you pass JSX as children, it\'s a new object on every render, which usually breaks React.memo unless the children are also memoized.'
      }
    ]
  },
  {
    id: 'hooks-usememo',
    interactiveDemo: 'MemoHookDemo',
    title: 'Hooks: useMemo',
    category: 'Hooks',
    content: `useMemo memoizes the result of a calculation. It only recomputes the value when one of its dependencies has changed. This is crucial for performance optimization.`,
    codeExample: `const expensiveValue = useMemo(() => {\n  return computeExpensiveValue(a, b);\n}, [a, b]);`,
    codeExplanation: `Here, 'useMemo' wraps a potentially slow calculation. It will only run 'computeExpensiveValue' when 'a' or 'b' changes. If the component re-renders for other reasons (like a different state change), React will skip the calculation and return the cached (memoized) value.

Use this to optimize performance when you have expensive data transformations or filtering logic that doesn't need to run on every single render.`,
    useCase: 'Filtering a large list of items or performing heavy mathematical calculations that shouldn\'t run on every render.',
    quiz: [
      {
        id: 'q-usememo-1',
        question: 'What does useMemo return?',
        options: ['A memoized function', 'A memoized value', 'A new component', 'A promise'],
        correctAnswer: 1,
        explanation: 'useMemo returns the memoized result of the function passed to it.'
      },
      {
        id: 'q-usememo-2',
        question: 'When is useMemo re-executed?',
        options: ['On every render', 'Only when its dependencies change', 'Only on the first render', 'Never'],
        correctAnswer: 1,
        explanation: 'React only recomputes the memoized value when one of the dependencies has changed.'
      },
      {
        id: 'q-usememo-3',
        question: 'What is the primary purpose of useMemo?',
        options: ['To handle events', 'To optimize performance by avoiding expensive recalculations', 'To fetch data', 'To manage state'],
        correctAnswer: 1,
        explanation: 'It\'s used to cache the result of a calculation between re-renders.'
      },
      {
        id: 'q-usememo-4',
        question: 'What happens if you provide an empty dependency array to useMemo?',
        options: ['It re-runs on every render', 'It calculates the value once and never again', 'It throws an error', 'It returns undefined'],
        correctAnswer: 1,
        explanation: 'An empty array means the value will be memoized once and remain the same for the life of the component.'
      },
      {
        id: 'q-usememo-5',
        question: 'Should you wrap every calculation in useMemo?',
        options: ['Yes, for maximum speed', 'No, only for expensive calculations', 'Only in production', 'Only for strings'],
        correctAnswer: 1,
        explanation: 'Memoization has its own cost (memory and comparison time). Use it only when the calculation is truly expensive.'
      },
      {
        id: 'q-usememo-6',
        question: 'Can useMemo be used to prevent re-renders of child components?',
        options: ['Yes, by memoizing an object or array passed as a prop', 'No', 'Only for class components', 'Only if the child is an <iframe>'],
        correctAnswer: 0,
        explanation: 'By memoizing an object prop, you ensure its reference stays the same, preventing re-renders of children wrapped in React.memo.'
      },
      {
        id: 'q-usememo-7',
        question: 'What happens if you forget the dependency array in useMemo?',
        options: ['It defaults to an empty array', 'It re-runs on every render (losing the benefit of memoization)', 'It throws a syntax error', 'It crashes the browser'],
        correctAnswer: 1,
        explanation: 'Without a dependency array, useMemo will recompute the value on every render, making it useless.'
      },
      {
        id: 'q-usememo-8',
        question: 'Is useMemo guaranteed to keep the value in memory forever?',
        options: ['Yes', 'No, React may discard the memoized value to free up memory', 'Only if you use a specific flag', 'Only on desktop'],
        correctAnswer: 1,
        explanation: 'React may choose to "forget" memoized values and recalculate them to optimize memory usage.'
      },
      {
        id: 'q-usememo-9',
        question: 'Can you perform side effects (like API calls) inside useMemo?',
        options: ['Yes', 'No, side effects belong in useEffect', 'Only if they are fast', 'Only for logging'],
        correctAnswer: 1,
        explanation: 'useMemo should be a pure function used only for calculations. Side effects should be handled in useEffect.'
      },
      {
        id: 'q-usememo-10',
        question: 'How does useMemo compare values in the dependency array?',
        options: ['Deep equality', 'Referential (shallow) equality', 'String comparison', 'It doesn\'t compare them'],
        correctAnswer: 1,
        explanation: 'React uses Object.is to check if dependencies have changed.'
      }
    ]
  },
  {
    id: 'hooks-usecallback',
    title: 'Hooks: useCallback',
    category: 'Hooks',
    content: `useCallback returns a memoized version of a callback function that only changes if one of the dependencies has changed. It's useful when passing callbacks to optimized child components.`,
    codeExample: `const handleClick = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);`,
    codeExplanation: `In this example, 'useCallback' memoizes the 'handleClick' function. It will return the exact same function instance on every render unless 'a' or 'b' changes. This is important because in JavaScript, functions are objects, and creating a new one on every render changes its reference.

Use this when passing functions to child components that are optimized with 'React.memo' to prevent them from re-rendering unnecessarily.`,
    useCase: 'Preventing unnecessary re-renders of child components that rely on reference equality for props (like those wrapped in React.memo).',
    quiz: [
      {
        id: 'q-usecallback-1',
        question: 'How is useCallback different from useMemo?',
        options: ['It isn\'t', 'useCallback memoizes a function, useMemo memoizes a value', 'useCallback is only for events', 'useMemo is faster'],
        correctAnswer: 1,
        explanation: 'useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).'
      },
      {
        id: 'q-usecallback-2',
        question: 'When should you use useCallback?',
        options: ['For every function in a component', 'When passing a function to a child component wrapped in React.memo', 'Only for API calls', 'Only for state updates'],
        correctAnswer: 1,
        explanation: 'It prevents child components from re-rendering unnecessarily by maintaining the same function reference.'
      },
      {
        id: 'q-usecallback-3',
        question: 'What does useCallback return?',
        options: ['The result of the function', 'A memoized version of the function itself', 'A boolean', 'A new component'],
        correctAnswer: 1,
        explanation: 'It returns the same function instance across renders unless dependencies change.'
      },
      {
        id: 'q-usecallback-4',
        question: 'What happens if the dependency array of useCallback is empty?',
        options: ['The function is recreated on every render', 'The same function instance is returned for the entire lifecycle', 'It throws an error', 'The function is never called'],
        correctAnswer: 1,
        explanation: 'An empty array means the function is memoized once and never changes.'
      },
      {
        id: 'q-usecallback-5',
        question: 'Why do functions need memoization in React?',
        options: ['Because they are slow to create', 'Because they are objects, and their reference changes on every render', 'To prevent memory leaks', 'To make them async'],
        correctAnswer: 1,
        explanation: 'In JavaScript, functions are objects. Creating a new function on every render changes its reference, which can trigger re-renders in optimized children.'
      },
      {
        id: 'q-usecallback-6',
        question: 'Can useCallback be used with anonymous functions?',
        options: ['Yes', 'No', 'Only if they are arrow functions', 'Only in production'],
        correctAnswer: 0,
        explanation: 'You can pass any function to useCallback, but it\'s usually used with the functions you define in your component.'
      },
      {
        id: 'q-usecallback-7',
        question: 'What is the "stale closure" problem in useCallback?',
        options: ['When the function is too old', 'When a function uses a variable from a previous render because it wasn\'t in the dependency array', 'When the browser crashes', 'When state is not updated'],
        correctAnswer: 1,
        explanation: 'If a dependency is missing, the memoized function will "remember" the value from the render when it was created.'
      },
      {
        id: 'q-usecallback-8',
        question: 'Does useCallback make the function execution faster?',
        options: ['Yes', 'No, it only makes the reference stable', 'Only for recursive functions', 'Only on mobile'],
        correctAnswer: 1,
        explanation: 'useCallback doesn\'t speed up the function itself; it optimizes the rendering of the component tree.'
      },
      {
        id: 'q-usecallback-9',
        question: 'Should you use useCallback for a simple button click handler in a small component?',
        options: ['Yes, always', 'No, the overhead of memoization might be more than the benefit', 'Only if the button is red', 'Only if using Redux'],
        correctAnswer: 1,
        explanation: 'For simple components, the cost of the hook and dependency check is often not worth it.'
      },
      {
        id: 'q-usecallback-10',
        question: 'What is the relationship between useCallback and React.memo?',
        options: ['They are the same thing', 'useCallback is often used to provide stable props to a component wrapped in React.memo', 'React.memo replaces useCallback', 'They cannot be used together'],
        correctAnswer: 1,
        explanation: 'React.memo skips re-renders if props are equal; useCallback ensures function props stay equal between renders.'
      }
    ]
  },
  {
    id: 'performance-lazy',
    title: 'Lazy Loading & Suspense',
    category: 'Performance',
    content: `Lazy loading allows you to load components only when they are needed. React.lazy and Suspense work together to split your code into smaller chunks, improving initial load time.`,
    codeExample: `const HeavyComponent = React.lazy(() => import('./HeavyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <HeavyComponent />\n    </Suspense>\n  );\n}`,
    codeExplanation: `'React.lazy' dynamically imports the 'HeavyComponent', meaning it's only downloaded when it's about to be rendered. The 'Suspense' component wraps the lazy component and provides a 'fallback' UI (like a spinner) to show while the download is in progress.

Use this to split your application into smaller chunks, significantly improving the initial load time of your app.`,
    useCase: 'Loading large charts, maps, or entire routes only when the user navigates to them.',
    liveExample: {
      title: 'Lazy Loading: Route-Based Splitting',
      description: 'Implementing code splitting with React.lazy and Suspense to optimize bundle size and initial load time.',
      files: [
        {
          name: 'App.tsx',
          language: 'tsx',
          content: `import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <Suspense fallback={<div className="spinner">Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </Router>
  );
};`,
          explanation: 'By wrapping the Routes in a single Suspense boundary, we ensure that as the user navigates, the browser only downloads the specific chunk for that page. The fallback is shown during the transition.'
        },
        {
          name: 'pages/Dashboard.tsx',
          language: 'tsx',
          content: `import React from 'react';
import { HeavyChart } from '../components/HeavyChart';

const Dashboard = () => {
  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <HeavyChart />
    </div>
  );
};

export default Dashboard;`,
          explanation: 'The Dashboard component (and its large dependencies like HeavyChart) will be bundled into a separate .js file and only loaded when the user clicks the "Dashboard" link.'
        }
      ],
      result: 'When the app first loads, only the "Home" chunk is downloaded. Clicking "Dashboard" triggers a network request for the dashboard chunk, showing the "Loading page..." spinner briefly. This prevents the initial bundle from being bloated by code the user might never see.'
    },
    quiz: [
      {
        id: 'q-lazy-1',
        question: 'What is the purpose of the Suspense component?',
        options: ['To catch errors', 'To show a fallback UI while a component is loading', 'To speed up JavaScript execution', 'To manage state'],
        correctAnswer: 1,
        explanation: 'Suspense lets you specify a loading indicator in case some components in the tree below it are not yet ready to render.'
      },
      {
        id: 'q-lazy-2',
        question: 'How do you define a lazy component in React?',
        options: ['React.lazy(() => import("./MyComponent"))', 'import { MyComponent } from "./MyComponent"', 'const MyComponent = lazy("./MyComponent")', 'React.useLazy("./MyComponent")'],
        correctAnswer: 0,
        explanation: 'React.lazy takes a function that calls a dynamic import().'
      },
      {
        id: 'q-lazy-3',
        question: 'What is "code splitting"?',
        options: ['Splitting a file into two manually', 'Breaking your app into smaller bundles that are loaded on demand', 'Writing code in multiple languages', 'A way to delete unused code'],
        correctAnswer: 1,
        explanation: 'Code splitting helps reduce the initial bundle size by only loading what\'s necessary for the current view.'
      },
      {
        id: 'q-lazy-4',
        question: 'Where should the Suspense component be placed?',
        options: ['At the very top of the app only', 'Anywhere above the lazy-loaded component in the tree', 'Inside the lazy component', 'Inside the index.html file'],
        correctAnswer: 1,
        explanation: 'Suspense can be placed anywhere as an ancestor of the lazy component.'
      },
      {
        id: 'q-lazy-5',
        question: 'What prop does Suspense require for the loading state?',
        options: ['loading', 'fallback', 'placeholder', 'spinner'],
        correctAnswer: 1,
        explanation: 'The "fallback" prop accepts any React element that should be displayed while waiting.'
      },
      {
        id: 'q-lazy-6',
        question: 'Can you use React.lazy for named exports?',
        options: ['Yes, directly', 'No, it only supports default exports', 'Only if using TypeScript', 'Only in React 19'],
        correctAnswer: 1,
        explanation: 'React.lazy currently only supports default exports. For named exports, you must re-export them as default in an intermediate file.'
      },
      {
        id: 'q-lazy-7',
        question: 'Does lazy loading work with Server-Side Rendering (SSR)?',
        options: ['Yes, perfectly', 'It requires specific libraries like Loadable Components or React 18+ features', 'No, it\'s client-only', 'Only on mobile'],
        correctAnswer: 1,
        explanation: 'Standard React.lazy/Suspense had limited SSR support initially, but React 18 improved this significantly.'
      },
      {
        id: 'q-lazy-8',
        question: 'What happens if a lazy-loaded component fails to load (e.g., network error)?',
        options: ['It shows the fallback forever', 'It crashes the app unless caught by an Error Boundary', 'It retries automatically', 'It shows a blank screen'],
        correctAnswer: 1,
        explanation: 'Lazy loading errors should be handled using Error Boundaries to prevent the whole app from crashing.'
      },
      {
        id: 'q-lazy-9',
        question: 'Is lazy loading beneficial for small components?',
        options: ['Yes, always', 'No, the overhead of an extra network request might not be worth it', 'Only if they have images', 'Only in production'],
        correctAnswer: 1,
        explanation: 'For tiny components, the extra HTTP request can actually be slower than just including it in the main bundle.'
      },
      {
        id: 'q-lazy-10',
        question: 'Can one Suspense component wrap multiple lazy components?',
        options: ['Yes', 'No', 'Only if they are in the same file', 'Only if they have the same fallback'],
        correctAnswer: 0,
        explanation: 'A single Suspense boundary can manage multiple lazy components and will wait for all of them to load.'
      }
    ]
  },
  {
    id: 'advanced-throttling',
    title: 'Throttling & Debouncing',
    category: 'Performance',
    content: `Throttling limits the number of times a function can be called over time. Debouncing ensures a function is only called after a certain period of inactivity.`,
    codeExample: `// Debounce Example\nconst handleSearch = debounce((query) => {\n  fetchResults(query);\n}, 300);`,
    codeExplanation: `This example uses a 'debounce' function (usually from a library like Lodash). It ensures that 'fetchResults' is only called after the user has stopped typing for 300 milliseconds. If the user types another character before the 300ms is up, the timer resets.

Use debouncing for search inputs or window resize events where you only care about the final state after the action has finished.`,
    useCase: 'Throttling scroll events to update UI, or debouncing search input to avoid excessive API calls while the user is typing.',
    interactiveDemo: 'DebounceDemo',
    liveExample: {
      title: 'Performance: Debounced Search Input',
      description: 'A real-world implementation of a search input that uses debouncing to minimize API calls and improve performance.',
      files: [
        {
          name: 'hooks/useDebounce.ts',
          language: 'typescript',
          content: `import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}`,
          explanation: 'This custom hook encapsulates the debouncing logic. It sets up a timer whenever the value changes and cleans it up if the value changes again before the timer expires.'
        },
        {
          name: 'components/SearchInput.tsx',
          language: 'tsx',
          content: `import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Searching for:', debouncedSearchTerm);
      // Perform API call here
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p className="mt-2 text-sm text-gray-500">
        Debounced Value: {debouncedSearchTerm}
      </p>
    </div>
  );
};`,
          explanation: 'The component tracks the raw input in `searchTerm` for immediate UI feedback (typing), but only triggers the expensive search logic when `debouncedSearchTerm` updates.'
        }
      ],
      result: 'As you type "React", the input updates instantly. However, the "Searching for..." log only appears 500ms after you stop typing. This prevents 5 separate API calls for "R", "Re", "Rea", "Reac", and "React".'
    },
    quiz: [
      {
        id: 'q-throttle-1',
        question: 'Which technique is better for a search input?',
        options: ['Throttling', 'Debouncing', 'Neither', 'Both are equal'],
        correctAnswer: 1,
        explanation: 'Debouncing is better for search inputs because you usually want to wait until the user stops typing before making an API call.'
      },
      {
        id: 'q-throttle-2',
        question: 'What is the main goal of throttling?',
        options: ['To delay a function until a user stops an action', 'To limit the execution of a function to once every X milliseconds', 'To speed up the app', 'To cache API results'],
        correctAnswer: 1,
        explanation: 'Throttling ensures a function is called at a steady rate, regardless of how many times the event triggers.'
      },
      {
        id: 'q-throttle-3',
        question: 'What is the main goal of debouncing?',
        options: ['To limit execution to once per period', 'To delay execution until a period of inactivity has passed', 'To run a function as fast as possible', 'To prevent re-renders'],
        correctAnswer: 1,
        explanation: 'Debouncing "groups" multiple rapid calls into a single call after the user finishes.'
      },
      {
        id: 'q-throttle-4',
        question: 'Which technique would you use for a window resize event to update a layout?',
        options: ['Throttling', 'Debouncing', 'Neither', 'Both'],
        correctAnswer: 0,
        explanation: 'Throttling is often better for resize events so the layout updates smoothly while the user is dragging the window.'
      },
      {
        id: 'q-throttle-5',
        question: 'Which technique is best for a "Save" button to prevent double-clicks?',
        options: ['Throttling', 'Debouncing', 'Neither', 'Both'],
        correctAnswer: 1,
        explanation: 'Debouncing (specifically "leading edge" debounce) is great for preventing multiple submissions from rapid clicks.'
      },
      {
        id: 'q-throttle-6',
        question: 'Does React have built-in throttle/debounce hooks?',
        options: ['Yes', 'No, you usually use libraries like Lodash or custom hooks', 'Only in React 19', 'Only for class components'],
        correctAnswer: 1,
        explanation: 'React doesn\'t provide these natively. You can implement them yourself or use utility libraries.'
      },
      {
        id: 'q-throttle-7',
        question: 'What happens if the delay for a debounce is 500ms and the user types every 200ms?',
        options: ['The function runs every 200ms', 'The function runs every 500ms', 'The function never runs until the user stops for 500ms', 'The function runs once at the start'],
        correctAnswer: 2,
        explanation: 'Each new call resets the timer, so the function only runs after the user pauses for at least 500ms.'
      },
      {
        id: 'q-throttle-8',
        question: 'What happens if the delay for a throttle is 500ms and the user types every 200ms?',
        options: ['The function runs every 200ms', 'The function runs approximately every 500ms', 'The function never runs', 'The function runs only once'],
        correctAnswer: 1,
        explanation: 'Throttling ensures the function executes at most once every 500ms, even with constant input.'
      },
      {
        id: 'q-throttle-9',
        question: 'Which technique is better for a scroll-to-top button visibility check?',
        options: ['Throttling', 'Debouncing', 'Neither', 'Both'],
        correctAnswer: 0,
        explanation: 'Throttling the scroll event allows you to check visibility periodically without overwhelming the main thread.'
      },
      {
        id: 'q-throttle-10',
        question: 'Why are these techniques important for performance?',
        options: ['They make the JavaScript engine faster', 'They reduce the number of expensive operations (like DOM updates or API calls)', 'They compress the code', 'They replace the Virtual DOM'],
        correctAnswer: 1,
        explanation: 'By limiting how often heavy work is done, you keep the UI responsive and reduce server load.'
      }
    ]
  },
  {
    id: 'performance-virtualization',
    title: 'Virtualization & Windowing',
    category: 'Performance',
    content: `Virtualization is a technique used to efficiently render large lists by only rendering the items currently visible in the viewport. This dramatically reduces memory usage and improves scroll performance.`,
    codeExample: `import { FixedSizeList as List } from 'react-window';\n\nconst Row = ({ index, style }) => (\n  <div style={style}>Row {index}</div>\n);\n\nconst MyList = () => (\n  <List\n    height={150}\n    itemCount={1000}\n    itemSize={35}\n    width={300}\n  >\n    {Row}\n  </List>\n);`,
    codeExplanation: `Libraries like 'react-window' or 'react-virtualized' calculate which items are visible based on the scroll position. Instead of rendering 1,000 items (which would create 1,000 DOM nodes), it might only render 10–15 items at any given time, recycling the DOM nodes as you scroll.
    
Use this whenever you need to display large datasets (e.g., thousands of rows in a table or infinite feeds).`,
    useCase: 'Rendering a list of 10,000+ logs, a complex data grid, or a social media feed with many images.',
    quiz: [
      {
        id: 'q-virt-1',
        question: 'What is the primary benefit of virtualization?',
        options: ['It makes images sharper', 'It reduces the number of DOM nodes produced for large lists', 'It automatically sorts your data', 'It replaces the need for a database'],
        correctAnswer: 1,
        explanation: 'By only rendering visible items, virtualization keeps the DOM small and the app responsive.'
      },
      {
        id: 'q-virt-2',
        question: 'Which of the following is a popular library for virtualization in React?',
        options: ['React Router', 'react-window', 'Redux', 'Axios'],
        correctAnswer: 1,
        explanation: 'react-window and react-virtualized are industry standards for list virtualization.'
      }
    ]
  },
  {
    id: 'performance-batching',
    title: 'Automatic Batching (React 18)',
    category: 'Performance',
    content: `Batching is when React groups multiple state updates into a single re-render for better performance. React 18 introduced "Automatic Batching," which works for all updates regardless of where they originate.`,
    codeExample: `// React 18: Both updates trigger ONE re-render\nsetTimeout(() => {\n  setCount(c => c + 1);\n  setFlag(f => !f);\n}, 100);`,
    codeExplanation: `In previous versions, state updates inside 'promises', 'setTimeout', or 'native event handlers' were NOT batched, leading to multiple renders. In React 18, these are automatically batched together.
    
If you absolutely need to opt out of batching, you can use 'flushSync', though it is rarely recommended.`,
    useCase: 'Improving performance in applications with many complex state updates occurring within a single functional unit or event.',
    quiz: [
      {
        id: 'q-batch-1',
        question: 'What is "Automatic Batching" in React 18?',
        options: ['Automatically running tests', 'Grouping multiple state updates into a single re-render', 'Automatically downloading updates', 'Batching API calls into one'],
        correctAnswer: 1,
        explanation: 'It reduces the number of re-renders by combining multiple state changes into one update.'
      },
      {
        id: 'q-batch-2',
        question: 'Before React 18, which of these would NOT be batched?',
        options: ['Standard event handlers', 'Updates inside a setTimeout or Promise', 'Updating state twice in a row', 'Updates inside a useEffect'],
        correctAnswer: 1,
        explanation: 'Updates in async callbacks were not batched until React 18.'
      }
    ]
  },
  {
    id: 'performance-profiler',
    title: 'Profiling with React Profiler',
    category: 'Performance',
    content: `The Profiler API and DevTools Profiler measure the performance of your React tree. They help you find "hot spots" where components are rendering too often or taking too long to render.`,
    codeExample: `<Profiler id="Navigation" onRender={onRenderCallback}>\n  <Navigation {...props} />\n</Profiler>`,
    codeExplanation: `The 'onRender' callback receives detailed information about which component rendered, why it rendered (props/state/context), and how much time it took.
    
Use the 'Profiler' component sparingly in production as it adds some overhead, but use the DevTools Profiler during development to optimize slow components.`,
    useCase: 'Scientific measurement of render performance in complex dashboards or data-heavy views.',
    quiz: [
      {
        id: 'q-profile-1',
        question: 'What is the purpose of the React Profiler?',
        options: ['To manage user profiles', 'To identify parts of an application that are slow and may benefit from optimization', 'To check for security vulnerabilities', 'To compress images'],
        correctAnswer: 1,
        explanation: 'The Profiler helps identify performance bottlenecks by measuring render times.'
      },
      {
        id: 'q-profile-2',
        question: 'Can you use the Profiler in production?',
        options: ['No', 'Yes, but it adds overhead and usually requires a special production build of React', 'Only on mobile', 'Only with Chrome'],
        correctAnswer: 1,
        explanation: 'While possible, it is typically used in development because of its performance impact on the end user.'
      }
    ]
  },
  {
    id: 'performance-context-optimization',
    title: 'Optimizing Context',
    category: 'Performance',
    content: `React Context can trigger unnecessary re-renders of all consumers when the context value changes. Efficient context usage involves splitting contexts or memoizing the value object.`,
    codeExample: `// optimization: Memoize the value object\nconst value = useMemo(() => ({ user, theme }), [user, theme]);\nreturn <UserContext.Provider value={value}>{children}</UserContext.Provider>;`,
    codeExplanation: `If you pass a new object literal directly to '<Provider value={{...}}>', every consumer will re-render on every parent update because the object reference is always new. 'useMemo' preserves the reference if the data hasn't changed.
    
Alternatively, split your context into smaller pieces (e.g., 'UserContext' and 'ThemeContext') so that components only subscribe to the data they actually need.`,
    useCase: 'Preventing "re-render storms" in large applications using a global Context for state management.',
    quiz: [
      {
        id: 'q-ctx-1',
        question: 'Why can Context be a performance bottleneck?',
        options: ['It uses too much memory', 'Every consumer re-renders whenever the context value changes', 'It replaces the Virtual DOM', 'It only works with strings'],
        correctAnswer: 1,
        explanation: 'Context by itself does not optimize; any update to the provider triggers an update in all nested consumers.'
      }
    ]
  },
  {
    id: 'performance-web-workers',
    title: 'Offloading with Web Workers',
    category: 'Performance',
    content: `Web Workers allow you to run JavaScript in a background thread, separate from the main UI thread. This is ideal for CPU-heavy tasks that would otherwise cause the UI to freeze or stutter.`,
    codeExample: `// MyWorker.js\nself.onmessage = (e) => {\n  const result = heavyCalculation(e.data);\n  self.postMessage(result);\n};\n\n// Component.tsx\nconst worker = new Worker(new URL('./MyWorker.js', import.meta.url));\nworker.postMessage(data);\nworker.onmessage = (e) => setResults(e.data);`,
    codeExplanation: `By moving expensive logic (like processing 50,000 data points or blurring an image) into a Web Worker, the main thread remains free to handle user interactions (clicks, input, animations).
    
Libraries like 'comlink' make it easier to work with Web Workers by providing an RPC-like interface.`,
    useCase: 'Processing large CSV files, running complex simulations, or performing image/video manipulations in the browser.',
    quiz: [
      {
        id: 'q-worker-1',
        question: 'What is the main advantage of using a Web Worker?',
        options: ['It makes the browser download files faster', 'It runs scripts in a background thread, preventing UI jank', 'It doubles the CPU speed', 'It replaces React state'],
        correctAnswer: 1,
        explanation: 'Web Workers keep the main thread responsive by offloading heavy work.'
      }
    ]
  },
  {
    id: 'performance-skeleton-screens',
    title: 'Perceived Performance: Skeletons',
    category: 'Performance',
    content: `Perceived performance is how fast the user *feels* the application is. Skeleton screens (gray placeholders that mimic the content layout) provide immediate feedback and reduce user's perceived wait time.`,
    codeExample: `if (isLoading) return <CardSkeleton />;\nreturn <CardContent data={data} />;`,
    codeExplanation: `Instead of showing a blank screen or a spinning icon, skeleton screens give users a clear indication of what is about to load. This reduces "layout shift" (CLS) once the content arrives and feels much more "instant."
    
You can use libraries like 'react-loading-skeleton' or simple Tailwind classes (\`animate-pulse\`) to build these.`,
    useCase: 'Modern social feeds (like LinkedIn or YouTube) that show content outlines while the actual data is being fetched.',
    quiz: [
      {
        id: 'q-skel-1',
        question: 'What is "Perceived Performance"?',
        options: ['The actual time an operation takes', 'How fast a user feels the application is', 'The speed of the network', 'The number of lines of code'],
        correctAnswer: 1,
        explanation: 'Perceived performance is about user psychology and feedback loops.'
      }
    ]
  },
  {
    id: 'advanced-reconciliation',
    title: 'Reconciliation & Diffing',
    category: 'Advanced',
    diagram: 'VirtualDOMDiagram',
    content: `Reconciliation is the algorithm React uses to diff one tree with another to determine which parts need to be changed. React uses a heuristic O(n) algorithm based on two assumptions: 1. Two elements of different types will produce different trees. 2. The developer can hint at which child elements may be stable across different renders with a 'key' prop.`,
    useCase: 'Understanding how React optimizes updates and why "keys" are essential for performance in lists.',
    quiz: []
  },
  {
    id: 'modern-compiler',
    title: 'React Compiler (React Forget)',
    category: 'Modern',
    content: `The React Compiler is a new tool that automatically memoizes your code. It eliminates the need for manual useMemo and useCallback in most cases, making React apps faster by default.`,
    useCase: 'Automatically optimizing existing React applications without manual refactoring of hooks.',
    quiz: [
      {
        id: 'q-compiler-1',
        question: 'What is the main goal of the React Compiler?',
        options: ['To replace JSX', 'To automate memoization', 'To make React work without JavaScript', 'To replace the Virtual DOM'],
        correctAnswer: 1,
        explanation: 'The compiler aims to provide "automatic memoization," so developers don\'t have to manually optimize with useMemo/useCallback.'
      },
      {
        id: 'q-compiler-2',
        question: 'How does the React Compiler improve performance?',
        options: ['By deleting code', 'By automatically memoizing values and functions during build time', 'By using a faster browser', 'By replacing the CPU'],
        correctAnswer: 1,
        explanation: 'It analyzes your code and inserts memoization logic where needed, ensuring components only re-render when necessary.'
      },
      {
        id: 'q-compiler-3',
        question: 'Does the React Compiler require you to rewrite your existing code?',
        options: ['Yes, completely', 'No, it\'s designed to work with existing idiomatic React code', 'Only if using class components', 'Only if using Redux'],
        correctAnswer: 1,
        explanation: 'The goal is to optimize standard React code without requiring manual changes to hooks.'
      },
      {
        id: 'q-compiler-4',
        question: 'What is "React Forget"?',
        options: ['A bug in React', 'The internal codename for the React Compiler project', 'A way to clear the cache', 'A new state hook'],
        correctAnswer: 1,
        explanation: 'It refers to the idea that developers can "forget" about manual memoization.'
      },
      {
        id: 'q-compiler-5',
        question: 'What happens to useMemo and useCallback when using the compiler?',
        options: ['They are deleted', 'They become mostly unnecessary as the compiler handles memoization automatically', 'They are required for the compiler to work', 'They are replaced by a new hook'],
        correctAnswer: 1,
        explanation: 'While they still work, the compiler does the same job automatically in most cases.'
      },
      {
        id: 'q-compiler-6',
        question: 'Is the React Compiler part of the React library itself?',
        options: ['Yes', 'No, it\'s a build-time tool (like a Babel or Vite plugin)', 'Only in React 19', 'Only for mobile'],
        correctAnswer: 1,
        explanation: 'It runs during the build process to transform your code before it reaches the browser.'
      },
      {
        id: 'q-compiler-7',
        question: 'What are "Rules of React" in the context of the compiler?',
        options: ['CSS rules', 'Coding patterns (like not mutating props) that the compiler relies on to safely optimize code', 'Legal terms', 'Syntax rules'],
        correctAnswer: 1,
        explanation: 'The compiler works best when code follows standard React best practices (e.g., immutability).'
      },
      {
        id: 'q-compiler-8',
        question: 'Can the compiler optimize code that mutates state directly?',
        options: ['Yes', 'No, mutation makes it difficult for the compiler to track changes safely', 'Only if using TypeScript', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Immutability is key for the compiler to understand when data has actually changed.'
      },
      {
        id: 'q-compiler-9',
        question: 'What is the benefit of automatic memoization?',
        options: ['Smaller bundle size', 'Better performance without the mental overhead of manual optimization', 'Faster initial load', 'Better SEO'],
        correctAnswer: 1,
        explanation: 'It removes the "manual optimization" tax that developers currently pay when building complex React apps.'
      },
      {
        id: 'q-compiler-10',
        question: 'When should you start using the React Compiler?',
        options: ['It\'s still in early stages/preview; follow the official React blog for stability updates', 'Immediately for all production apps', 'Never', 'Only for new projects'],
        correctAnswer: 0,
        explanation: 'As of 2024-2025, it\'s being rolled out gradually. Check the latest React documentation for production readiness.'
      }
    ]
  },
  {
    id: 'hooks-usetransition',
    title: 'Hooks: useTransition',
    category: 'Hooks',
    diagram: 'FiberPriorityDiagram',
    content: `useTransition lets you update the state without blocking the UI. It marks a state transition as "non-urgent," allowing more important updates (like typing) to happen immediately.`,
    codeExample: `const [isPending, startTransition] = useTransition();\n\nconst handleClick = () => {\n  startTransition(() => {\n    setCount(c => c + 1);\n  });\n};`,
    useCase: 'Filtering a large list or switching tabs where the content takes a while to render, keeping the UI responsive.',
    quiz: [
      {
        id: 'q-usetransition-1',
        question: 'What does isPending represent in useTransition?',
        options: ['If the component is unmounting', 'If the transition is currently running', 'If there is an error', 'If the user is idle'],
        correctAnswer: 1,
        explanation: 'isPending is a boolean that tells you if there is a transition currently in progress.'
      },
      {
        id: 'q-usetransition-2',
        question: 'What is the primary purpose of useTransition?',
        options: ['To handle API calls', 'To mark state updates as non-urgent', 'To animate components', 'To manage forms'],
        correctAnswer: 1,
        explanation: 'It allows you to keep the UI responsive by deferring heavy state updates.'
      },
      {
        id: 'q-usetransition-3',
        question: 'What is the "startTransition" function used for?',
        options: ['To start a CSS animation', 'To wrap state updates that should be non-urgent', 'To initialize the component', 'To fetch data'],
        correctAnswer: 1,
        explanation: 'Any state update inside startTransition is treated as a low-priority update.'
      },
      {
        id: 'q-usetransition-4',
        question: 'What happens if a user interacts with the UI while a transition is pending?',
        options: ['The interaction is blocked', 'React interrupts the transition to handle the urgent interaction', 'The app crashes', 'The interaction is queued'],
        correctAnswer: 1,
        explanation: 'React can interrupt a non-urgent transition to handle urgent updates like typing or clicking.'
      },
      {
        id: 'q-usetransition-5',
        question: 'Can you use useTransition for controlled inputs?',
        options: ['Yes, always', 'No, typing should always be urgent to avoid lag', 'Only if the input is large', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Typing in an input should be urgent. You can use useTransition for the *result* of the typing (like filtering a list), but not the input value itself.'
      },
      {
        id: 'q-usetransition-6',
        question: 'What is the difference between useTransition and useDeferredValue?',
        options: ['They are the same', 'useTransition gives you control over the update code; useDeferredValue works on a value', 'useTransition is faster', 'useDeferredValue is only for strings'],
        correctAnswer: 1,
        explanation: 'useTransition is for *actions* (state updates), while useDeferredValue is for *data* (values passed down).'
      },
      {
        id: 'q-usetransition-7',
        question: 'Does useTransition work with async code?',
        options: ['Yes', 'No, the state update must be synchronous inside startTransition', 'Only in React 19', 'Only with Promises'],
        correctAnswer: 1,
        explanation: 'The function passed to startTransition must be synchronous. If you have async logic, you should update state after the promise resolves.'
      },
      {
        id: 'q-usetransition-8',
        question: 'Is useTransition useful for small state updates?',
        options: ['Yes', 'No, it\'s designed for updates that take a significant amount of time to render', 'Only for booleans', 'Only for numbers'],
        correctAnswer: 1,
        explanation: 'If the update is fast, the overhead of useTransition isn\'t necessary.'
      },
      {
        id: 'q-usetransition-9',
        question: 'What happens to the UI during a transition?',
        options: ['It freezes', 'It stays interactive and can show a loading state via isPending', 'It clears all content', 'It shows a blank screen'],
        correctAnswer: 1,
        explanation: 'The UI remains responsive, and you can use isPending to show a subtle loading indicator.'
      },
      {
        id: 'q-usetransition-10',
        question: 'When was useTransition introduced?',
        options: ['React 16.8', 'React 17.0', 'React 18.0', 'React 19.0'],
        correctAnswer: 2,
        explanation: 'It was introduced in React 18 as part of the Concurrent Rendering features.'
      }
    ]
  },
  {
    id: 'hooks-usedeferredvalue',
    title: 'Hooks: useDeferredValue',
    category: 'Hooks',
    content: `useDeferredValue lets you defer updating a part of the UI. It's similar to debouncing but integrated into React's rendering cycle. It returns a "deferred" version of the value that "lags behind" the original.`,
    codeExample: `const deferredValue = useDeferredValue(value);\nreturn <SlowList text={deferredValue} />;`,
    useCase: 'Showing an old version of a list while a new version is being calculated in the background.',
    quiz: [
      {
        id: 'q-usedeferredvalue-1',
        question: 'How is useDeferredValue different from debouncing?',
        options: ['It isn\'t', 'It doesn\'t use a fixed timeout and happens as soon as React is free', 'It\'s slower', 'It\'s only for strings'],
        correctAnswer: 1,
        explanation: 'Unlike debouncing, useDeferredValue doesn\'t have a fixed delay. React will try to update the deferred value as soon as it finishes other urgent work.'
      },
      {
        id: 'q-usedeferredvalue-2',
        question: 'What does useDeferredValue return?',
        options: ['A function', 'A "deferred" version of the value that lags behind the original', 'A promise', 'A boolean'],
        correctAnswer: 1,
        explanation: 'It returns a value that will stay the same during an urgent update and catch up later.'
      },
      {
        id: 'q-usedeferredvalue-3',
        question: 'When should you use useDeferredValue?',
        options: ['To handle form input typing', 'To defer rendering a slow part of the UI that depends on a fast-changing value', 'To fetch data', 'To manage global state'],
        correctAnswer: 1,
        explanation: 'It\'s perfect for showing a "stale" version of a slow list while the user is still typing in a search box.'
      },
      {
        id: 'q-usedeferredvalue-4',
        question: 'What happens during the "deferred" render?',
        options: ['The UI freezes', 'React renders the component with the old value first, then re-renders with the new value in the background', 'The app crashes', 'The value is set to null'],
        correctAnswer: 1,
        explanation: 'React keeps the old value visible while it works on the new render at a lower priority.'
      },
      {
        id: 'q-usedeferredvalue-5',
        question: 'Can you use useDeferredValue for every variable?',
        options: ['Yes', 'No, it should only be used for values that cause expensive re-renders', 'Only for objects', 'Only in production'],
        correctAnswer: 1,
        explanation: 'Like all optimizations, it has overhead. Use it only when a part of your UI is noticeably slow.'
      },
      {
        id: 'q-usedeferredvalue-6',
        question: 'How does useDeferredValue know when to update?',
        options: ['You set a timeout', 'It integrates with React\'s concurrent rendering scheduler', 'It waits for a network idle', 'It updates every 100ms'],
        correctAnswer: 1,
        explanation: 'It\'s managed by React\'s internal scheduler to ensure the UI stays responsive.'
      },
      {
        id: 'q-usedeferredvalue-7',
        question: 'Is useDeferredValue a replacement for useMemo?',
        options: ['Yes', 'No, they solve different problems (memoization vs. scheduling)', 'Only for strings', 'Only in React 19'],
        correctAnswer: 1,
        explanation: 'useMemo avoids re-calculating a value; useDeferredValue avoids blocking the UI with a slow render.'
      },
      {
        id: 'q-usedeferredvalue-8',
        question: 'What is the benefit of useDeferredValue over a simple loading spinner?',
        options: ['It\'s faster', 'It allows the user to keep seeing the old content while new content loads', 'It uses less memory', 'It\'s easier to write'],
        correctAnswer: 1,
        explanation: 'It provides a smoother experience by avoiding "flickering" loading states for fast updates.'
      },
      {
        id: 'q-usedeferredvalue-9',
        question: 'Can you use useDeferredValue in a class component?',
        options: ['Yes', 'No', 'Only with a wrapper', 'Only in React 16.8'],
        correctAnswer: 1,
        explanation: 'It is a hook and only available in functional components.'
      },
      {
        id: 'q-usedeferredvalue-10',
        question: 'What happens if the value changes again before the deferred render finishes?',
        options: ['React finishes the first one anyway', 'React abandons the old deferred render and starts a new one with the latest value', 'The app crashes', 'It queues both'],
        correctAnswer: 1,
        explanation: 'React always prioritizes the latest value and will abandon stale background renders.'
      }
    ]
  },
  {
    id: 'modern-hydration',
    title: 'Hydration Mismatch',
    category: 'Modern',
    content: `Hydration is the process of attaching event listeners to the static HTML sent by the server. A hydration mismatch occurs when the server-rendered HTML doesn't match the initial client-side render.`,
    codeExplanation: `Common causes include: 1. Using browser-only APIs (like window.innerWidth) during the initial render. 2. Using non-deterministic values (like new Date() or Math.random()). 3. Incorrect HTML nesting (e.g., a <div> inside a <p>).`,
    useCase: 'Debugging "Hydration failed" errors in Next.js or other SSR frameworks.',
    quiz: []
  },
  {
    id: 'styling-overview',
    title: 'Styling: Tailwind, MUI, Bootstrap (Comparison)',
    category: 'Modern',
    diagram: 'StylingEfficiencyDiagram',
    content: `Choosing a styling strategy is one of the first and most important decisions in a React project. The "Big Three" options—**Tailwind CSS**, **Material UI (MUI)**, and **Bootstrap**—each represent a different philosophy of web design.

| Feature | Tailwind CSS | Material UI | Bootstrap |
|---------|-------------|-------------|-----------|
| **Runtime Performance** | ⭐⭐⭐⭐⭐ (Zero) | ⭐⭐⭐ (Varies) | ⭐⭐⭐⭐ (Good) |
| **Development Speed** | ⭐⭐⭐⭐⭐ (Fast) | ⭐⭐⭐⭐⭐ (Pre-built) | ⭐⭐⭐⭐ (Simple) |
| **Customizability** | ⭐⭐⭐⭐⭐ (Infinite) | ⭐⭐⭐ (Theming) | ⭐⭐⭐ (Overriding) |
| **UI Compatibility** | Best for unique products | Best for Dashboards/SaaS | Best for simple sites |

Choosing the right tool depends on whether you value **design freedom** (Tailwind), **component speed** (MUI), or **traditional stability** (Bootstrap).`,
    useCase: 'Evaluating which styling framework best fits your project goals (e.g., a high-performance custom landing page vs. a rapid data-heavy dashboard).',
    quiz: [
      {
        id: 'q-style-1',
        question: 'Which styling method has the best runtime performance?',
        options: ['Material UI', 'Tailwind CSS', 'Styled Components', 'Global CSS'],
        correctAnswer: 1,
        explanation: 'Tailwind CSS generates static CSS at build-time, meaning there is zero runtime processing required to apply styles.'
      },
      {
        id: 'q-style-2',
        question: 'What is a "Component Library" like MUI best used for?',
        options: ['Building a unique custom gaming UI', 'Rapidly building consistent administrative dashboards', 'Writing pure CSS', 'Decreasing bundle size'],
        correctAnswer: 1,
        explanation: 'Component libraries excel at providing a complete, consistent set of tools for enterprise and admin interfaces.'
      }
    ]
  },
  {
    id: 'styling-tailwind',
    title: 'Styling: Tailwind CSS',
    category: 'Modern',
    content: `**Tailwind CSS** is a "Utility-First" framework. Instead of writing CSS classes like \`.btn-primary\`, you apply small, single-purpose classes directly to your JSX elements (e.g., \`bg-blue-500 p-4 text-white\`).

**The Core Philosophy:**
- **No Class Name Naming:** You never have to spend 10 minutes deciding if a div should be called \`.user-container-wrapper\`.
- **Constraint-Based:** It uses a design system for spacing, colors, and shadows, ensuring your UI looks professional and consistent.
- **Micro-Optimization:** At build time, Tailwind scans your code and only includes the CSS you actually used, resulting in tiny file sizes.`,
    codeExample: `function ProfileCard() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg border-2 border-slate-100">
      <div className="flex items-center space-x-6">
        <div className="shrink-0 bg-blue-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
          JD
        </div>
        <div>
          <div className="text-xl font-bold text-slate-900 leading-tight">John Doe</div>
          <p className="text-slate-500 font-medium">Software Architect</p>
        </div>
      </div>
      <button className="mt-4 w-full py-2 px-4 bg-slate-900 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors">
        Connect
      </button>
    </div>
  );
}`,
    codeExplanation: `1. **Layout Classes:** \`max-w-sm mx-auto\` centers the card and limits its width, while \`p-6\` adds uniform padding.
2. **Visual Polishing:** \`rounded-xl shadow-lg\` adds modern rounded corners and a soft shadow without writing a single line of custom CSS.
3. **Flexbox Utilities:** \`flex items-center space-x-6\` horizontally aligns the avatar and text with a consistent gap between them.
4. **Interactive States:** \`hover:bg-slate-700\` and \`transition-colors\` provide smooth visual feedback when the user hovers over the button.`,
    useCase: 'Modern startups, custom design systems, and projects where performance and developer velocity are high priorities.',
    quiz: [
      {
        id: 'q-tw-1',
        question: 'What does "Utility-First" mean in Tailwind?',
        options: ['You write style utilities in JS', 'You style elements using many small, single-purpose classes', 'It is only for utility companies', 'It uses a special compiler'],
        correctAnswer: 1,
        explanation: 'Each class (like p-4) does exactly one thing, helping you compose complex designs from simple primitives.'
      }
    ]
  },
  {
    id: 'styling-mui',
    title: 'Styling: Material UI (MUI)',
    category: 'Modern',
    content: `**Material UI** is a comprehensive library of pre-built React components that follow Google's "Material Design" guidelines. It is perfect for building high-quality interfaces with minimal effort.

Instead of styling primitives like \`div\` or \`button\`, you use higher-level components like \`<Card />\`, \`<Slider />\`, or \`<DataGrid />\`.

**Key Features:**
- **Standardization:** Every component looks and behaves exactly like a professional app should.
- **Theming:** You can change the primary color for the *entire* app in one single theme object.
- **Accessibility:** Components are built with ARIA attributes and keyboard navigation out of the box.`,
    codeExample: `import { Card, CardHeader, CardContent, Typography, Button, Avatar, Stack } from '@mui/material';

function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
          <Stack>
            <Typography variant="h6" component="div">
              John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Software Architect
            </Typography>
          </Stack>
        </Stack>
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          Connect
        </Button>
      </CardContent>
    </Card>
  );
}`,
    codeExplanation: `1. **High-Level Components:** Using \`<Card>\`, \`<Typography>\`, and \`<Stack>\` instead of \`div\`, \`p\`, and \`flexbox\` makes the code more semantic and easier to read.
2. **Prop-Based Styling:** The \`variant="h6"\` prop automatically applies correct heading styles (font-size, weight, line-height) based on Material Design rules.
3. **The \`sx\` Prop:** This is MUI's "secret weapon." It allows you to write CSS-like styles (\`borderRadius: 3\`) that automatically hook into your global theme (e.g., 3 units = 24px).
4. **Built-in Interactions:** The \`variant="contained"\` button includes ripple effects and depth transitions without extra configuration.`,
    useCase: 'Enterprise dashboards, SaaS products, and admin internal tools where a consistent, professional look is more important than a "unique" brand identity.',
    quiz: [
      {
        id: 'q-mui-1',
        question: 'What is the "sx" prop in MUI used for?',
        options: ['To define context', 'To apply custom styles that have access to the theme', 'To handle events', 'To fetch data'],
        correctAnswer: 1,
        explanation: 'The sx prop is a shorthand for defining custom styles that can use values directly from your MUI theme.'
      }
    ]
  },
  {
    id: 'styling-bootstrap',
    title: 'Styling: Bootstrap',
    category: 'Modern',
    content: `**Bootstrap** is the web's oldest and most tested styling framework. For React, we use **React-Bootstrap**, which rebuilds all the classic components as clean React elements.

**Why use Bootstrap in 2024?**
- **Grid System:** Its 12-column flexbox grid is still one of the most intuitive ways to build responsive layouts.
- **Familiarity:** Almost every developer knows how to use \`col-md-6\` or \`navbar\`.
- **Robustness:** It is incredibly stable and works perfectly for simple, content-rich websites.`,
    codeExample: `import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

function ProfileCard() {
  return (
    <Card style={{ width: '18rem' }} className="shadow-sm">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs="auto">
            <div className="bg-primary rounded-circle text-white p-3">JD</div>
          </Col>
          <Col>
            <Card.Title className="mb-0">John Doe</Card.Title>
            <Card.Text className="text-muted small">Software Architect</Card.Text>
          </Col>
        </Row>
        <Button variant="dark" className="w-100 mt-3">
          Connect
        </Button>
      </Card.Body>
    </Card>
  );
}`,
    codeExplanation: `1. **Grid Layout:** \`<Row>\` and \`<Col>\` are used to structure the avatar and text. \`xs="auto"\` ensures the avatar column only takes exactly as much space as it needs.
2. **Classic Classes:** Bootstrap utilities like \`shadow-sm\`, \`mb-0\`, and \`text-muted\` are used via the \`className\` prop, just like standard HTML.
3. **React Components:** We use \`<Card.Title>\` which is a component provided by React-Bootstrap, ensuring perfect integration with React's lifecycle.
4. **Spacing:** Classes like \`mt-3\` (Margin Top 3) are used to handle vertical spacing quickly.`,
    useCase: 'Traditional websites, rapid prototyping, and legacy projects where Bootstrap is already the global standard.',
    quiz: []
  },
  {
    id: 'interview-qa-1',
    title: 'Interview QA: Core Architecture & Rendering',
    category: 'Interview',
    content: `This section covers high-level architectural questions for experienced developers (5+ years).

## Core Architecture & Rendering

---

### 1. How does React's Reconciliation and Diffing Algorithm work?
> **Answer:** Reconciliation is the process through which React updates the DOM. When a component's state or props change, React creates a new Virtual DOM tree and compares it with the previous one (Diffing).

**Explanation:**
To keep this O(n) instead of O(n³) for large trees, React uses two heuristics:
- **Different Types:** If two elements have different types, React will tear down the old tree and build a new one.
- **Keys:** React uses the \`key\` prop to match children in the original tree with children in the subsequent tree.

**When to use:**
Understanding this is crucial for optimizing list rendering and preventing unnecessary unmounts.

---

### 2. What is React Fiber and what problem does it solve?
> **Answer:** Fiber is the reimplementation of React's core algorithm (introduced in v16). It's a virtual stack frame.

**Explanation:**
Before Fiber, reconciliation was synchronous and "uninterruptible" (Stack Reconciler). Fiber allows React to:
- Pause work and come back to it later.
- Assign priority to different types of work (e.g., animations vs. data fetching).
- Reuse previously completed work.

**Where to use:**
It enables Concurrent features like \`useTransition\` and \`Suspense\`.

---

### 3. useTransition vs useDeferredValue: When and How?
> **Answer:** Both are used to mark updates as non-urgent, but they apply to different scenarios.

**Explanation:** 
- **useTransition:** Gives you a \`startTransition\` function to wrap state updates. Use it when you have control over the state setting logic.
- **useDeferredValue:** Used when you receive a value from a prop or another hook and want to "defer" its update to prevent UI blocking.

**Example:**
Deferring a search result list while the input field remains responsive.

---

### 4. Server Components (RSC) vs Client Components
> **Answer:** RSCs run exclusively on the server and never hydrate on the client. Client components are the "traditional" React components.

**Explanation:**
RSCs allow you to keep large dependencies on the server, reducing bundle size. They can fetch data directly from the database.

**How to use:**
Use \`'use client'\` directive at the top of files that need interactivity (state, effects, event listeners). Use Server Components for data-heavy, non-interactive parts of the UI.

---

### 5. Why does Hydration fail and how to debug it?
> **Answer:** Hydration fails when the server-rendered HTML doesn't match the initial client-side render.

**Explanation:**
Common causes include using \`window\` or \`localStorage\` during render, or using non-deterministic data (like \`new Date()\`).

**How to fix:**
Use \`useEffect\` to handle client-only logic, or \`suppressHydrationWarning\` for intentional mismatches (like timestamps).

---

### 6. Limitations of Error Boundaries
> **Answer:** Error Boundaries catch errors in rendering, lifecycle methods, and constructors of the whole tree below them.

**Explanation:**
They **do not** catch errors in:
- Event handlers (use \`try/catch\` instead).
- Asynchronous code (e.g., \`setTimeout\` or \`requestAnimationFrame\`).
- Server-side rendering.
- Errors thrown in the boundary itself (rather than its children).

---

### 7. Portals and Event Bubbling
> **Answer:** \`createPortal\` lets you render a component into a DOM node outside the parent hierarchy.

**Explanation:**
Despite being in a different DOM node, the portal still behaves like a standard React child in terms of Context and Event Bubbling. An event fired inside a portal will propagate to ancestors in the React tree, even if those ancestors are not ancestors in the DOM tree.

---

### 8. Evolution of Logic Reuse: HOC vs Render Props vs Hooks
> **Answer:** 
> - **HOCs:** Wrapped components. Suffered from "wrapper hell" and prop collisions.
> - **Render Props:** Passing a function as a child. Better but led to "callback hell".
> - **Hooks:** The modern standard. Flat structure, easy to compose, and highly readable.

**How to use:**
Always prefer Hooks for new logic. Use HOCs only when integrating with legacy libraries that require them.

---

### 9. Context API Performance Bottlenecks
> **Answer:** When a Context provider's value changes, all components consuming that context re-render.

**Explanation:**
To optimize:
1. **Split Contexts:** Don't put everything in one big object.
2. **Memoize Value:** Wrap the provider value in \`useMemo\`.
3. **Component Composition:** Pass children to the provider so they don't re-render when the provider's state changes.

---

### 10. Redux vs Context vs Zustand
> **Answer:** 
> - **Context:** Best for low-frequency updates (theme, user auth). Not a state management tool per se.
> - **Redux:** Best for complex, predictable state with middleware needs (logging, undo/redo). High boilerplate.
> - **Zustand:** A modern, lightweight alternative to Redux. No boilerplate, high performance, and uses hooks.

**When to use:**
Use Zustand for most modern apps; Redux for massive enterprise apps with complex workflows.`,
    quiz: []
  },
  {
    id: 'interview-qa-2',
    title: 'Interview QA: Events, State & Performance',
    category: 'Interview',
    content: `Continuing the interview guide for 5+ years experienced React developers.

## Events, State & Performance

---

### 11. Virtual DOM vs Shadow DOM
> **Answer:** They are completely different concepts.

**Explanation:** 
- **Virtual DOM:** A programming concept where a "virtual" representation of a UI is kept in memory and synced with the "real" DOM (Reconciliation).
- **Shadow DOM:** A browser technology designed for scoping variables and CSS in web components.

**When to use:**
React uses Virtual DOM internally. Shadow DOM is used when building web components or isolating styles in a micro-frontend.

---

### 12. Synthetic Events and Event Pooling
> **Answer:** React wraps native browser events in \`SyntheticEvent\` objects to ensure cross-browser compatibility.

**Explanation:**
In React 16 and earlier, these objects were "pooled" (reused) for performance, meaning you couldn't access them asynchronously without calling \`e.persist()\`.

**Note:**
React 17 removed event pooling, so you can now access events in async code without issues.

---

### 13. Automatic Batching in React 18
> **Answer:** Batching is when React groups multiple state updates into a single re-render for better performance.

**Explanation:**
Before React 18, only updates inside React event handlers were batched. Now, updates inside promises, setTimeout, and native event handlers are also batched automatically.

**How to opt-out:**
Use \`flushSync\` if you absolutely need the DOM to update immediately after a state change.

---

### 14. forwardRef and useImperativeHandle
> **Answer:** \`forwardRef\` lets a component expose a DOM node to its parent. \`useImperativeHandle\` lets you customize the instance value that is exposed.

**Explanation:**
Instead of exposing the entire DOM node, you can expose only specific methods (e.g., \`focus\`, \`scrollIntoView\`).

**Example:**
A custom 'VideoPlayer' component exposing only 'play()' and 'pause()' methods to the parent.

---

### 15. Identifying and Preventing Memory Leaks
> **Answer:** Memory leaks in React often occur when subscriptions or timers are not cleaned up.

**Explanation:** 
- **Identify:** Use Chrome DevTools 'Memory' tab to take heap snapshots.
- **Prevent:** Always return a cleanup function in 'useEffect'. Use 'AbortController' for fetch requests.

**Example:**
'return () => clearInterval(intervalId);'

---

### 16. Code Splitting with React.lazy and Suspense
> **Answer:** Code splitting allows you to split your bundle into smaller chunks that are loaded on demand.

**Explanation:**
'React.lazy' lets you define a component that is loaded dynamically. 'Suspense' lets you specify a loading state while the chunk is being fetched.

**Where to use:**
Route-level splitting is the most common and effective strategy.

---

### 17. SEO Strategies for React Apps
> **Answer:** Single Page Applications (SPAs) can be difficult for some crawlers to index.

**Explanation:** 
- **SSR (Server-Side Rendering):** Best for SEO. HTML is generated on the server (Next.js).
- **SSG (Static Site Generation):** Pre-renders pages at build time.
- **Dynamic Rendering:** Serving a static version to crawlers and a dynamic version to users.

**Tool:**
Use 'react-helmet-async' to manage meta tags dynamically.

---

### 18. Testing: React Testing Library (RTL) vs Enzyme
> **Answer:** RTL is the modern standard; Enzyme is largely deprecated for functional components.

**Explanation:** 
- **Enzyme:** Focused on implementation details (state, props, internal methods).
- **RTL:** Focused on user behavior (finding elements by text, role, label).

**Why RTL?**
It encourages accessible code and makes tests more resilient to refactoring.

---

### 19. Profiling React Applications
> **Answer:** Use the 'Profiler' tab in React DevTools.

**Explanation:**
It records every commit and shows which components rendered, how long they took, and *why* they rendered (e.g., "Hook 1 changed").

**How to use:**
Look for "Flamegraph" and "Ranked" charts to identify expensive renders.

---

### 20. Security: XSS Prevention in React
> **Answer:** React automatically escapes values to prevent Cross-Site Scripting (XSS).

**Explanation:**
If you need to render raw HTML, you must use 'dangerouslySetInnerHTML'.

**How to secure:**
Always sanitize HTML on the server or use a library like 'dompurify' before passing it to 'dangerouslySetInnerHTML'.`,
    quiz: []
  },
  {
    id: 'interview-qa-3',
    title: 'Interview QA: Hooks, Patterns & Ecosystem',
    category: 'Interview',
    content: `Deep dive into React hooks and design patterns for senior roles.

## Hooks, Patterns & Ecosystem

---

### 21. Custom Hooks: Rules and Best Practices
> **Answer:** Custom hooks are functions that start with 'use' and can call other hooks.

**Explanation:** 
- **Rule 1:** Only call hooks at the top level.
- **Rule 2:** Only call hooks from React functions.
- **Best Practice:** Keep them focused on a single responsibility (e.g., 'useLocalStorage', 'useWindowSize').

**Testing:**
Use '@testing-library/react-hooks' to test them in isolation.

---

### 22. Controlled vs Uncontrolled Components
> **Answer:** 
> - **Controlled:** React state is the "single source of truth" for the input value.
> - **Uncontrolled:** The DOM itself handles the input value (accessed via 'useRef').

**When to use:**
Use Controlled for most cases (validation, dynamic inputs). Use Uncontrolled for simple forms or when integrating with non-React libraries to reduce re-renders.

---

### 23. React.memo vs useMemo vs useCallback
> **Answer:** They are all optimization tools, but for different things.
> - **React.memo:** A HOC that prevents a component from re-rendering if its props haven't changed.
> - **useMemo:** Memoizes the *result* of a calculation.
> - **useCallback:** Memoizes the *function definition* itself.

**When to use:**
Use them when you have expensive computations or when passing functions/objects to memoized child components.

---

### 24. Dependency Arrays: The "Stale Closure" Problem
> **Answer:** If a variable used inside a hook is missing from the dependency array, the hook will use the value from the render when it was first created.

**Explanation:**
This is a "stale closure".

**How to fix:**
Always include all reactive values (props, state, and derived variables) in the dependency array. Use the 'eslint-plugin-react-hooks' to catch these.

---

### 25. Why does Strict Mode run Effects twice in Development?
> **Answer:** To help developers find bugs related to missing cleanup logic.

**Explanation:**
It simulates a mount -> unmount -> mount cycle. If your effect doesn't clean up properly (e.g., leaving a subscription open), you'll see the bug immediately in dev.

**Note:**
This only happens in development mode and does not affect production.

---

### 26. CSS-in-JS vs Tailwind vs CSS Modules
> **Answer:** 
> - **CSS-in-JS (Styled Components):** Great for dynamic styles based on props. Can have performance overhead in very large trees.
> - **Tailwind:** Utility-first. Zero runtime overhead, fast development, but can lead to long class strings.
> - **CSS Modules:** Scoped CSS. Standard CSS features with local scoping.

**Recommendation:**
Tailwind is currently the most popular choice for performance and developer experience.

---

### 27. React in Micro-frontend Architecture
> **Answer:** Micro-frontends involve breaking a large frontend into smaller, independently deployable pieces.

**Explanation:**
React can be used for individual micro-apps.

**Challenges:**
Shared state (use Custom Events or a shared store), version mismatches, and style isolation (use Shadow DOM or unique prefixes).

---

### 28. Offloading Heavy Computations with Web Workers
> **Answer:** React runs on the main thread. Heavy logic can block the UI.

**Explanation:**
Web Workers run in a separate thread.

**How to use:**
Move expensive data processing to a worker and communicate with the React component via 'postMessage' and 'onmessage'.

---

### 29. Progressive Web Apps (PWA) with React
> **Answer:** A PWA is a web app that feels like a native app (offline support, push notifications).

**Explanation:**
Requires a 'manifest.json' and a 'Service Worker'.

**Tool:**
Use 'workbox' to simplify service worker management in React apps.

---

### 30. Accessibility (a11y) in React
> **Answer:** Ensuring your app is usable by everyone, including those with disabilities.

**Explanation:** 
- Use semantic HTML ('<button>' instead of '<div onClick>').
- Use 'aria-*' attributes.
- Manage focus manually using refs when opening modals or changing routes.

**Tool:**
Use 'eslint-plugin-jsx-a11y' to catch common issues during development.`,
    quiz: []
  },
  {
    id: 'interview-qa-4',
    title: 'Interview QA: Advanced State & Data Flow',
    category: 'Interview',
    diagram: 'HOCPropDiagram',
    content: `Advanced state management and data flow patterns for senior engineers.

## Advanced State & Data Flow

---

### 31. State Machines in React (XState)
> **Answer:** A state machine is a mathematical model of computation that can be in exactly one of a finite number of states at any given time.

**Explanation:**
For complex UIs (like a multi-step checkout or a complex game), using simple booleans ('isLoading', 'isError') leads to "impossible states". XState allows you to define states and transitions explicitly.

**When to use:**
Use XState when your component logic becomes a "spaghetti" of 'useEffect' and multiple boolean flags.

---

### 32. Optimistic UI Updates
> **Answer:** Optimistic UI is a pattern where the UI updates immediately as if a server request succeeded, before the server actually responds.

**Explanation:**
If the request fails, the UI is rolled back to the previous state.

**How to use:**
Use 'useOptimistic' (React 19) or manually manage a "pending" state. This significantly improves perceived performance.

**Example:**
Liking a post or sending a message in a chat app.

---

### 33. Server Actions and Form Actions (React 19)
> **Answer:** Server Actions allow you to call server-side functions directly from your client-side forms or components.

**Explanation:**
They eliminate the need to manually create API endpoints for form submissions. They work seamlessly with 'useFormStatus' and 'useFormState'.

**When to use:**
Use them in Next.js or other RSC-supporting frameworks to handle data mutations with less boilerplate.

---

### 34. Deep Dive: How 'use' Hook works
> **Answer:** The 'use' hook is a new React API that lets you read the value of a resource like a Promise or Context.

**Explanation:**
Unlike other hooks, 'use' can be called inside loops and conditional statements. When used with a Promise, it integrates with 'Suspense'.

**Where to use:**
Use it to consume data fetched on the server or to read context conditionally.

---

### 35. Compound Components Pattern
> **Answer:** A pattern where a group of components work together to form a single unit, sharing implicit state.

**Explanation:**
Think of '<Select>' and '<Option>'. The parent ('Select') manages the active state, and children ('Option') communicate with it via Context.

**Why use it:**
It provides a clean, expressive API for complex UI components without "prop drilling" every single configuration.

---

### 36. Render Props vs. Composition
> **Answer:** While both solve logic sharing, composition (passing components as props) is generally preferred in modern React.

**Explanation:**
Composition is more declarative and avoids the "nesting" issues of render props.

**Example:**
'<Layout sidebar={<Sidebar />} content={<Content />} />' is often cleaner than a render prop that provides layout data.

---

### 37. Managing Global State without Redux/Zustand
> **Answer:** For many apps, a combination of 'URL state', 'Server Cache', and 'Local Component State' is enough.

**Explanation:** 
- **URL State:** Use 'useSearchParams' for filters, tabs, and pagination (enables bookmarking).
- **Server Cache:** Use 'TanStack Query' (React Query) for API data.
- **Local State:** Use 'useState'/'useReducer' for UI-only state.

**When to use:**
This approach reduces bundle size and complexity by avoiding a heavy global store.

---

### 38. The "Prop Drilling" Problem and Solutions
> **Answer:** Prop drilling is passing data through many layers of components that don't need it.

**Solutions:**
1. **Component Composition:** Pass the child component itself down.
2. **Context API:** For truly global data (auth, theme).
3. **State Management Libraries:** For complex, shared business logic.

---

### 39. Immutability in React: Why and How?
> **Answer:** React relies on reference equality checks to determine if a component should re-render.

**Explanation:**
If you mutate an object directly, the reference stays the same, and React might skip the update.

**How to use:**
Use the spread operator ('{...obj}'), 'immer' library for complex nested updates, or 'use-immer' hook.

---

### 40. Controlled vs. Uncontrolled Modals
> **Answer:** 
> - **Controlled:** Parent controls 'isOpen' state. Best for complex logic (e.g., preventing close until saved).
> - **Uncontrolled:** Modal manages its own state via a ref or internal state. Best for simple, reusable UI components.

**Recommendation:**
Always provide a controlled interface for maximum flexibility in large applications.`,
    quiz: []
  },
  {
    id: 'interview-qa-5',
    title: 'Interview QA: Architecture, Testing & Future',
    category: 'Interview',
    content: `Final set of interview questions focusing on architecture, testing, and the future of React.

## Architecture, Testing & Future

---

### 41. Atomic Design in React
> **Answer:** A methodology for creating design systems by breaking the UI into Atoms, Molecules, Organisms, Templates, and Pages.

**Explanation:** 
- **Atoms:** Basic building blocks (Button, Input).
- **Molecules:** Groups of atoms (Search bar).
- **Organisms:** Complex UI sections (Header).

**Why use it:**
It promotes extreme reusability and consistency across large teams and projects.

---

### 42. Testing Strategy for a Large React App
> **Answer:** A balanced "Testing Trophy" approach is usually best.

**Explanation:** 
- **Static:** TypeScript/ESLint to catch syntax errors.
- **Unit:** Test individual utility functions or pure components (Jest/Vitest).
- **Integration:** Test how components work together (React Testing Library). **This should be the bulk of your tests.**
- **E2E:** Test the entire user flow (Playwright/Cypress).

---

### 43. Mocking APIs in Tests: MSW vs. Manual Mocks
> **Answer:** MSW (Mock Service Worker) is the modern gold standard.

**Explanation:**
MSW intercepts requests at the network level using Service Workers.

**Why use it:**
It allows you to use the same mocks for development and testing, and it doesn't require you to mock the 'fetch' or 'axios' library itself, making tests more realistic.

---

### 44. The Future of React: React Compiler & Beyond
> **Answer:** The React Compiler (React Forget) is the next major shift.

**Explanation:**
It will automatically memoize components and values, making 'useMemo' and 'useCallback' mostly obsolete.

**Impact:**
Developers can focus on writing idiomatic JavaScript without worrying about manual performance optimizations.

---

### 45. Handling Large Lists: Virtualization
> **Answer:** Rendering thousands of DOM nodes is slow. Virtualization only renders the items currently visible in the viewport.

**Tool:**
Use 'react-window' or 'react-virtualized'.

**When to use:**
Any list or grid with more than 100-200 items that could grow indefinitely.

---

### 46. React vs. Next.js: When to choose what?
> **Answer:** 
> - **Vite + React:** Best for internal tools, dashboards, or apps where SEO is not a priority and you want full control over the client-side stack.
> - **Next.js:** Best for public-facing apps, e-commerce, and blogs where SEO, performance (SSR/SSG), and image optimization are critical.

---

### 47. Error Handling Strategy in Production
> **Answer:** Use a combination of Error Boundaries and external logging.

**Explanation:** 
- Wrap major sections in Error Boundaries to prevent the whole app from crashing.
- Use a service like Sentry or LogRocket to capture the stack trace and user actions leading to the error.
- Provide a "Fallback UI" that allows users to reset the app state or contact support.

---

### 48. Performance: Tree Shaking and Bundle Analysis
> **Answer:** Tree shaking is the process of removing unused code from your final bundle.

**How to optimize:** 
- Use ES Modules ('import/export').
- Avoid 'import * as LargeLib'.
- Use 'webpack-bundle-analyzer' or 'rollup-plugin-visualizer' to identify large dependencies.

---

### 49. Hydration Mismatch: The "Flash of Unstyled Content" (FOUC)
> **Answer:** Occurs when the CSS is loaded after the HTML, or when server/client content differs.

**How to fix:** 
- Use a CSS-in-JS library that supports SSR (like 'styled-components' with its 'ServerStyleSheet').
- Ensure that the initial render on the client matches the server exactly.

---

### 50. What makes a "Senior" React Developer?
> **Answer:** It's not just about knowing hooks; it's about architectural decisions.

**Key Traits:**
- Understanding the trade-offs between different state management solutions.
- Prioritizing maintainability and readability over "clever" code.
- Mentoring junior developers and establishing coding standards.
- Focusing on the user experience (performance, accessibility, and stability).`,
    quiz: []
  },
  {
    id: 'system-architecture',
    title: 'Interview QA: System Architecture & Design',
    category: 'Interview',
    content: `A comprehensive guide to designing scalable and maintainable React applications.

## High-Level Design (HLD)

---

### 1. Architectural Patterns
> **Answer:** Choosing between a Monolith, Micro-frontends, or a Modular Monolith.

**Explanation:**
- **Monolith:** Single codebase, easy to deploy but hard to scale teams.
- **Micro-frontends:** Independent apps (e.g., via Module Federation). Great for massive teams but adds complexity in routing and shared state.
- **Modular Monolith:** Single codebase but strictly separated by domains/features.

---

### 2. State Management Strategy
> **Answer:** Don't put everything in a global store. Use the "Right Tool for the Job" approach.

**Strategy:**
- **Server State:** Use TanStack Query (React Query) for caching and synchronization.
- **Global UI State:** Use Zustand or Redux for state shared across many disconnected components (e.g., Auth, Theme).
- **Local State:** Use \`useState\` or \`useReducer\` for component-specific logic.
- **URL State:** Use the URL (search params) for filters and pagination.

---

### 3. Data Flow & Communication
> **Answer:** React follows a unidirectional data flow.

**Patterns:**
- **Props Down, Events Up:** Standard parent-child communication.
- **Context API:** For "broadcast" data (Theme, User).
- **Pub/Sub (Custom Events):** For communication between completely disconnected micro-apps.

---

### 4. Rendering Strategies
> **Answer:** Choose based on SEO and Performance requirements.

**Options:**
- **Client-Side Rendering (CSR):** Best for dashboards/internal tools.
- **Server-Side Rendering (SSR):** Best for SEO-critical pages (Next.js).
- **Static Site Generation (SSG):** Best for blogs/documentation.
- **Incremental Static Regeneration (ISR):** Best for large e-commerce sites.

---

## Low-Level Design (LLD)

---

### 5. Component Design Patterns
> **Answer:** Use patterns that promote reusability and separation of concerns.

**Patterns:**
- **Atomic Design:** Breaking UI into Atoms, Molecules, Organisms.
- **Compound Components:** Grouping related components (e.g., Tabs, Accordion).
- **Higher-Order Components (HOC):** For cross-cutting concerns (e.g., \`withAuth\`).
- **Render Props:** For sharing logic between components.

---

### 6. Logic Extraction with Custom Hooks
> **Answer:** Move all non-UI logic into custom hooks.

**Benefits:**
- Makes components "purely presentational".
- Enables easy unit testing of business logic.
- Promotes code reuse across different components.

---

### 7. Error Handling & Resilience
> **Answer:** Design for failure at every level.

**Implementation:**
- **Error Boundaries:** Catch rendering errors and show a fallback UI.
- **Try/Catch:** In event handlers and async calls.
- **Global Error Logging:** Integrate with Sentry or LogRocket.

---

## Folder Structure

---

### 8. Feature-Based vs. Type-Based
> **Answer:** Feature-based structure is generally preferred for large applications.

**Comparison:**
- **Type-Based:** \`components/\`, \`hooks/\`, \`services/\`. Hard to find related files as the app grows.
- **Feature-Based:** \`features/auth/\`, \`features/billing/\`. Each folder contains its own components, hooks, and services.

---

### 9. Recommended "Hybrid" Structure
> **Answer:** A structure that balances global shared resources and feature-specific logic.

**Example:**
\`\`\`text
src/
  assets/          # Images, fonts, global CSS
  components/      # Shared UI components (Button, Input)
  constants/       # Global constants and enums
  features/        # Domain-specific modules
    auth/
      api/         # API calls for auth
      components/  # Auth-only components
      hooks/       # Auth-only hooks
      types/       # Auth-only types
  hooks/           # Shared utility hooks (useWindowSize)
  lib/             # Third-party configurations (axios, firebase)
  services/        # Global API services
  store/           # Global state (Zustand/Redux)
  types/           # Shared TypeScript interfaces
  utils/           # Pure helper functions
\`\`\`

---

### 10. Scalability & Maintainability
> **Answer:** Design with the "Change" in mind.

**Best Practices:**
- **Strict TypeScript:** Avoid \`any\` at all costs.
- **Barrel Files (index.ts):** Use them to export only what's necessary from a folder.
- **Dependency Inversion:** Pass dependencies (like API clients) through props or context instead of hardcoding them inside components.`,
    quiz: []
  },
  {
    id: "hands-on-1",
    title: "Hands-On: Custom Hook (useDebounce)",
    category: "Hands On QA",
    content: `**The Problem:** When you have a search bar that calls an API on every keystroke, typing "React" would trigger 5 separate API calls. This wastes server resources and can cause "race conditions" where old results overwrite new ones.

**The Solution:** Use a **Debounce** hook. It acts like a "waiting room." It only updates the value once the user has *stopped* typing for a specific amount of time (e.g., 500ms).

**Technical Strategy:**
1. **Local State:** We need a place to hold the "final" value that won't change until the timeout finishes.
2. **The Timer:** We use \`setTimeout\` inside a \`useEffect\`.
3. **The Cleanup:** This is the most important part. If the user types again before the timer finishes, we MUST cancel the previous timer.`,
    codeExample: `function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 1. Start a timer every time 'value' changes
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 2. The Cleanup Function
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run if value or delay changes

  return debouncedValue;
}`,
    codeExplanation: `1. **Initial Render:** The hook starts with the initial \`value\`.
2. **Effect Execution:** When the user types 'R', the effect runs. It starts a 500ms timer.
3. **Key Press 'e':** Before 500ms is up, the user types 'e'. The component re-renders.
4. **The Magic:** React runs the **Cleanup Function** (\`clearTimeout\`) from the first effect before starting the new one. The 'R' timer is destroyed.
5. **Finality:** Only when the user stops typing does a timer finally finish, calling \`setDebouncedValue\` and updating the UI.`,
    quiz: []
  },
  {
    id: "hands-on-2",
    title: "Hands-On: Compound Components (Accordion)",
    category: "Hands On QA",
    content: `**The Problem:** Traditional Accordion components often look like this: \`<Accordion items={data} />\`. This is hard to customize. What if you want an icon in one header but not another?

**The Solution:** The **Compound Components** pattern. It allows a parent and children to communicate implicitly, giving the developer complete control over the UI structure.

**Technical Strategy:**
1. **Shared State:** Use \`createContext\` to share the \`openId\` between the parent and all children.
2. **Namespace Pattern:** Attach sub-components to the main one (e.g., \`Accordion.Header\`) to keep the API clean.
3. **Implicit Logic:** The user doesn't have to pass \`isOpen\` to every item; the items check the context and decide for themselves.`,
    codeExample: `const AccordionContext = createContext();

const Accordion = ({ children }) => {
  const [openId, setOpenId] = useState(null);
  return (
    <AccordionContext.Provider value={{ openId, setOpenId }}>
      <div className="border rounded-lg overflow-hidden">{children}</div>
    </AccordionContext.Provider>
  );
};

// Sub-component 1: The Toggle
Accordion.Header = ({ id, children }) => {
  const { openId, setOpenId } = useContext(AccordionContext);
  const isOpen = openId === id;

  return (
    <button 
      className="w-full p-4 flex justify-between bg-white border-b"
      onClick={() => setOpenId(isOpen ? null : id)}
    >
      {children}
      <span>{isOpen ? '−' : '+'}</span>
    </button>
  );
};

// Sub-component 2: The Content
Accordion.Content = ({ id, children }) => {
  const { openId } = useContext(AccordionContext);
  if (openId !== id) return null; // Logic is hidden here!
  
  return <div className="p-4 bg-slate-50">{children}</div>;
};`,
    codeExplanation: `1. **AccordionContext:** Holds the \`openId\`. This is the "brain" that knows which section is currently active.
2. **Accordion Wrapper:** Wraps children in the Provider. It doesn't care *what* the children are, as long as they are inside.
3. **Accordion.Header:** When clicked, it tells the context to update the \`openId\`. It doesn't need to know about the Content; it just sends a signal.
4. **Accordion.Content:** This is purely reactive. It asks the context: "Is my ID the active one?" If yes, it renders; otherwise, it returns \`null\`.
5. **Flexibility:** The user can now put anything inside the Header or Content, or even reorder them!`,
    quiz: []
  },
  {
    id: "hands-on-3",
    title: "Hands-On: Infinite Scroll",
    category: "Hands On QA",
    content: `**The Problem:** Loading 1,000 items at once freezes the browser. Using pagination buttons ("Next Page") feels slow and dated for social feeds or image galleries.

**The Solution:** **Infinite Scroll** using the **Intersection Observer API**. This browser API allows you to detect exactly when an element (a "Sentinel") enters the viewport.

**Technical Strategy:**
1. **The Sentinel:** Place a hidden \`div\` at the very bottom of your list.
2. **The Observer:** Watch that \`div\`. When it becomes visible, it means the user has reached the bottom.
3. **The Data Loop:** Trigger a fetch for the next page of data, append it to the existing list, and wait for the user to reach the *new* bottom.`,
    codeExample: `const InfiniteList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    // 1. Define the Observer
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        setPage(p => p + 1); // Trigger fetch
      }
    }, { threshold: 1.0 }); // 1.0 = item is fully visible

    // 2. Start Watching
    if (sentinelRef.current) observer.observe(sentinelRef.current);

    // 3. Cleanup
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div>
      {items.map(item => <div key={item.id} className="p-10 border-b">{item.title}</div>)}
      
      {/* The Sentinel: When this is visible, we load more */}
      <div ref={sentinelRef} className="h-20 flex items-center justify-center">
        {loading && <p>Loading more content...</p>}
      </div>
    </div>
  );
};`,
    codeExplanation: `1. **sentinelRef:** A reference to a blank div at the end of the list. It's our "invisible tripwire."
2. **IntersectionObserver:** This is a high-performance browser API. Unlike a "scroll" event (which fires thousands of times), this only fires when the element actually enters the screen.
3. **Threshold:** Setting this to \`1.0\` means the callback only triggers when the entire 20px sentinel is visible.
4. **Loading Guard:** We check \`!loading\` inside the observer. This prevents triggering 10 requests at once if the user stays at the bottom while one is already pending.
5. **State Merging:** Usually, your fetch function will look like \`setItems(prev => [...prev, ...newData])\` to keep the old items visible.`,
    quiz: []
  },
  {
    id: "hands-on-4",
    title: "Hands-On: usePrevious Hook",
    category: "Hands On QA",
    content: `**The Problem:** React is designed around the "Current Render." Sometimes you need to know "What was the value of 'count' *before* this update happened?" (e.g., for logging or doing a delta calculation).

**The Solution:** A custom **usePrevious** hook that utilizes \`useRef\`.

**Technical Strategy:**
1. **Persistent Storage:** Use a \`ref\` because it survives re-renders but doesn't trigger its own re-render when changed.
2. **Effect Timing:** The key is knowing that \`useEffect\` runs *after* the UI has been painted.
3. **The Hand-off:** During the render, we return the value currently in the ref. Only *after* the render is finished do we update the ref with the "new" value for next time.`,
    codeExample: `function usePrevious(value) {
  const ref = useRef();

  // This runs AFTER the render is finished
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // This runs DURING the render
  return ref.current;
}

// Usage:
const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h1>Now: {count}</h1>
      <h2>Before: {prevCount ?? 'None'}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`,
    codeExplanation: `1. **Render 1:** \`count\` is 0. \`ref.current\` is \`undefined\`. The hook returns \`undefined\`. **THEN** the effect runs and sets \`ref.current\` to 0.
2. **Action:** Click increment.
3. **Render 2:** \`count\` is 1. We ask the hook for the value. \`ref.current\` is still 0 (from the previous render's effect). The hook returns 0.
4. **Effect 2:** After Render 2 is done, the effect runs and sets \`ref.current\` to 1.
5. **Conclusion:** Because the Hook returns *before* the Effect updates the ref, it always lags behind by exactly one render, providing the historical value.`,
    quiz: []
  },
  {
    id: "hands-on-5",
    title: "Hands-On: Search Results Cache",
    category: "Hands On QA",
    content: `**The Problem:** Your users are searching for "iPhone," followed by "iMac," then back to "iPhone." Currently, your app makes a full network request for the second "iPhone" search, even though the results haven't changed. This is slow and expensive.

**The Solution:** Implement an in-memory **Cache**. 

**Technical Strategy:**
1. **The Store:** Use a simple JavaScript object (or a Map) to store results as \`{ "query": [results] }\`.
2. **The Lookup:** Before fetching, check if the query key exists in your store.
3. **The Update:** Every time a new successful fetch happens, save those results into your store for future use.`,
    codeExample: `const SearchWithCache = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [cache, setCache] = useState({});

  useEffect(() => {
    if (!query) return;

    // 1. Check if we already have the answer
    if (cache[query]) {
      setResults(cache[query]);
      return; // Exit early! No network call needed.
    }

    // 2. If not, fetch and then save to cache
    const timer = setTimeout(async () => {
      const res = await fetch(\`/api/search?q=\${query}\`).then(r => r.json());
      setResults(res);
      setCache(prev => ({ ...prev, [query]: res }));
    }, 300);

    return () => clearTimeout(timer);
  }, [query, cache]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
};`,
    codeExplanation: `1. **The Guard Clause:** We return early if the query is empty to avoid unnecessary logic.
2. **The Cache Check:** \`if (cache[query])\` is a constant-time O(1) operation. It's incredibly fast compared to a network request which can take 500ms+.
3. **Debouncing + Caching:** Note how we combine this with a \`setTimeout\`. This prevents "cache thrashing" while the user is still actively typing.
4. **State Persistence:** By updating \`setCache\`, we ensure that if the user deletes their query and types it again, the results appear instantly.`,
    quiz: []
  },
  {
    id: "hands-on-6",
    title: "Hands-On: Global State Hub (useReducer + Context)",
    category: "Hands On QA",
    content: `**The Problem:** You have a user profile that needs to be accessed by 20 different components at different depths. Passing the user object down through 10 layers of components ("Prop Drilling") is a nightmare.

**The Solution:** Create a **State Hub** using the **Reducer + Context** pattern. It provides a centralized, predictable way to update and read state from anywhere in the component tree.

**Technical Strategy:**
1. **The Brain:** The Reducer manages HOW the state changes based on actions.
2. **The Vessel:** The Context provides the state and the dispatch function to the whole app.
3. **The Consumption:** Custom hooks make it easy for any component to "dial in" to the data.`,
    codeExample: `const StateCtx = createContext();
const DispatchCtx = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <DispatchCtx.Provider value={dispatch}>
      <StateCtx.Provider value={state}>
        {children}
      </StateCtx.Provider>
    </DispatchCtx.Provider>
  );
};

// Custom hooks for clean usage
export const useAppDispatch = () => useContext(DispatchCtx);
export const useAppState = () => useContext(StateCtx);`,
    codeExplanation: `1. **Dual-Context Pattern:** We split \`State\` and \`Dispatch\` into two separate contexts. Why? Because some components only need to trigger actions (dispatch) and don't care if the state changes. This prevents those components from re-rendering unnecessarily.
2. **appReducer:** This is a standard switch-case function that ensures state updates are pure and predictable.
3. **StoreProvider:** This usually wraps the entire \`App.jsx\`, making the store truly global.
4. **useAppState:** A component can simply call \`const { user } = useAppState()\` to grab exactly what it needs.`,
    quiz: []
  },
  {
    id: "hands-on-7",
    title: "Hands-On: Auth Guard HOC",
    category: "Hands On QA",
    content: `**The Problem:** You have "Admin Only" pages and "Logged In Only" features. Manually adding \`if (!isLoggedIn) return null\` to every single page leads to bugs and forgotten security checks.

**The Solution:** Use a **Higher-Order Component (HOC)**. It acts like a "Bouncer" at a club. It checks the user's ID before allowing them to "enter" a component.

**Technical Strategy:**
1. **The Wrapper:** A function that takes a component as input.
2. **The Logic:** Inside, it checks the current authentication status.
3. **The Redirect:** If the user doesn't belong there, it sends them to the login page or an error screen.`,
    codeExample: `const withRole = (WrappedComponent, allowedRoles) => {
  return (props) => {
    const { user, isAuthenticated } = useAuth(); // Hook into your auth context

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    
    if (!allowedRoles.includes(user.role)) {
      return <div className="p-10 text-red-500 font-bold">403: Forbidden Access</div>;
    }

    // Success! Return the original component with its props
    return <WrappedComponent {...props} />;
  };
};

// Usage: 
const SecretSettings = withRole(SettingsPage, ['ADMIN']);`,
    codeExplanation: `1. **withRole Signature:** It takes the target component and a list of authorized roles.
2. **Inner Component:** It returns a NEW functional component that performs the check during its own render cycle.
3. **Navigate:** Uses standard routing (like React Router) to handle the logic of "kicking out" non-authed users.
4. **Prop Forwarding:** \`{...props}\` is crucial. It ensures any props passed to \`SecretSettings\` actually make it to the internal \`SettingsPage\`.
5. **Declarative Security:** You can now protect entire files with a single line of code at the \`export default\` level.`,
    quiz: []
  },
  {
    id: "hands-on-8",
    title: "Hands-On: Multi-Step Wizard",
    category: "Hands On QA",
    content: `**The Problem:** A user registration form has 50 fields. Putting them all on one page is overwhelming. You need to break them into Steps (User Info -> Billing -> Review), but you must keep the data from Step 1 safe while the user is filling out Step 3.

**The Solution:** Use a **Multi-Step Wizard** pattern where the parent component acts as a "single source of truth" for the form's entire lifecycle.

**Technical Strategy:**
1. **The Index:** Track \`currentStep\` (1, 2, or 3).
2. **The Master Data:** An object that stores all fields collected so far.
3. **Sub-component props:** Pass \`onNext\`, \`onBack\`, and \`onUpdate\` functions to each step child.`,
    codeExample: `const StepWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", plan: "pro" });

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);
  const updateData = (fields) => setFormData(prev => ({ ...prev, ...fields }));

  return (
    <div className="max-w-xl mx-auto p-8 border rounded-2xl shadow">
      <Progress bar={step / 3 * 100} />
      
      {step === 1 && <ProfileStep onNext={next} update={updateData} values={formData} />}
      {step === 2 && <BillingStep onNext={next} onBack={back} update={updateData} values={formData} />}
      {step === 3 && <ReviewPage data={formData} onBack={back} />}
    </div>
  );
};`,
    codeExplanation: `1. **formData State:** This is the most important part. By keeping it in the parent, Step 1's data is still held in memory even when the component for Step 1 is unmounted.
2. **updateData function:** It uses the functional update pattern \`({ ...prev, ...fields })\` to ensure we don't accidentally wipe out data from other steps.
3. **Step Navigation:** Simply incrementing a number determines which UI is shown.
4. **Unidirectionality:** Data always flows down into the steps as \`values\`, and changes flow up through the \`update\` callback.`,
    quiz: []
  },
  {
    id: "hands-on-9",
    title: "Hands-On: Recursive Tree Explorer",
    category: "Hands On QA",
    content: `**The Problem:** You are building a File Explorer (like VS Code). You have a JSON data structure where a folder can contain files AND other folders, which can contain even more folders. You don't know the depth in advance, so a standard \`map()\` function won't work.

**The Solution:** Use **Recursion**. A Recursive Component is a component that calls itself inside its own render method.

**Technical Strategy:**
1. **The Base Case:** If a node has no children (it's a file), just render its name.
2. **The Recursive Step:** If a node HAS children (it's a folder), render its name and then call the same component again for each child.
3. **Internal State:** Each folder component needs its own \`isOpen\` state to toggle the visibility of its children.`,
    codeExample: `const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="pl-4 border-l border-white/10 ml-2">
      <div 
        className="flex items-center gap-2 cursor-pointer py-1 hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* icon toggle */}
        {hasChildren && (
          <span className="text-xs transition-transform" style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}>
            ▶
          </span>
        )}
        <span className={hasChildren ? 'font-bold' : 'text-slate-400'}>{node.name}</span>
      </div>
      
      {/* Recursion starts here */}
      {isOpen && hasChildren && (
        <div className="mt-1">
          {node.children.map(child => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};`,
    codeExplanation: `1. **Recursive Mapping:** Inside the \`isOpen && hasChildren\` block, we map over the children and render another \`<TreeNode />\`. This continues until we hit a "Leaf Node" (a file with no children).
2. **Self-Contained State:** Each instance of \`TreeNode\` has its *own* \`isOpen\` state. Clicking a folder doesn't open its sub-folders, only the immediate children.
3. **Visual Nesting:** By using \`pl-4\` (Padding Left) and \`border-l\`, we create a visual hierarchy that makes the nesting depth clear to the user.
4. **The "Base Case":** When \`hasChildren\` is false, the map never runs, stopping the recursion naturally.`,
    quiz: []
  },
  {
    id: "hands-on-10",
    title: "Hands-On: Portal-Based Modal",
    category: "Hands On QA",
    content: `**The Problem:** You want to show a Modal, but its parent container has \`overflow: hidden\` or a weird \`z-index\`. This causes the modal to be "cut off" or appear behind other elements.

**The Solution:** Use **React Portals** (\`createPortal\`). A portal allows you to render a component into a different part of the DOM (usually a div at the very bottom of the \`body\`) while still keeping it within the React "virtual" tree for events and state.

**Technical Strategy:**
1. **Target:** Create a dedicated \`div\` with \`id="portal-root"\` in your \`index.html\`.
2. **Mounting:** Use \`createPortal(content, targetElement)\`.
3. **UX Optimization:** Add a "Backdrop" that closes the modal when clicked, and prevent clicks inside the modal from closing it.`,
    codeExample: `import { createPortal } from 'react-dom';

const ModalPortal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    /* Overlay / Backdrop */
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        className="bg-slate-900 border border-white/10 p-6 rounded-2xl max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()} // DON'T close if we click the modal itself
      >
        {children}
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};`,
    codeExplanation: `1. **createPortal API:** This takes the JSX you want to render and the DOM node where you want it to live. The modal is now a direct child of \`body\`, escaping all parent CSS traps.
2. **Event Bubbling:** Even though the modal is elsewhere in the physical DOM, events (like clicks) still bubble up through the React tree to the parent that rendered the Portal.
3. **e.stopPropagation():** This is a classic pattern. It prevents the click event from reaching the Backdrop, ensuring the user can click inside the form without accidentally closing it.
4. **Visuals:** We use \`fixed inset-0\` to make the backdrop cover the entire viewport regardless of where the trigger component is located.`,
    quiz: []
  },
  {
    id: "hands-on-11",
    title: "Hands-On: Progressive Image Loading",
    category: "Hands On QA",
    content: `**The Problem:** High-resolution 4K images takes 3-5 seconds to load on slow mobile connections. During this time, the user sees a giant empty white box, which feels broken and unprofessional.

**The Solution:** **Progressive Loading** (also known as the "Blur-up" technique). You show a tiny, 10KB blurry version of the image immediately, and only swap it for the sharp version once the sharp version has fully loaded in the background.

**Technical Strategy:**
1. **Dual Sources:** You need a \`src\` (high-res) and a \`thumb\` (low-res blur).
2. **Load Tracking:** Use a boolean state \`isLoaded\` that starts as \`false\`.
3. **Event Hook:** Use the native \`onLoad\` prop of the high-res image to trigger the swap.`,
    codeExample: `const SmartImage = ({ src, thumb, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-slate-800 rounded-lg">
      {/* 1. Low-res Thumbnail (Visible first) */}
      <img 
        src={thumb} 
        alt={alt}
        className={\`w-full h-full object-cover blur-lg transition-opacity duration-500 \${isLoaded ? 'opacity-0' : 'opacity-100'}\`}
      />
      
      {/* 2. High-res Real Image (Hidden until loaded) */}
      <img 
        src={src} 
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={\`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 \${isLoaded ? 'opacity-100' : 'opacity-0'}\`}
      />
    </div>
  );
};`,
    codeExplanation: `1. **Layering:** The thumbnail is rendered first. The high-res image is placed \`absolute\`ly on top of it.
2. **The onLoad Trigger:** The browser downloads the high-res image behind the scenes. The \`onLoad\` callback fires ONLY when the bytes are fully downloaded and ready to display.
3. **Smooth Transitions:** By using \`transition-opacity\`, we avoid a jarring "pop." The blurry version slowly fades out as the sharp version fades in.
4. **UX Win:** The user sees a "hint" of what the image is immediately, which reduces perceived waiting time.`,
    quiz: []
  },
  {
    id: "hands-on-12",
    title: "Hands-On: useAsync Lifecycle Hook",
    category: "Hands On QA",
    content: `**The Problem:** Managing a single API call usually requires 3 pieces of state: \`data\`, \`loading\`, and \`error\`. If your app has 10 API calls, that's 30 separate \`useState\` calls. This leads to massive boilerplate and redundant logic.

**The Solution:** A generic **useAsync** hook. It abstracts away the lifecycle of an asynchronous action so you just provide the function, and it gives you back the status.

**Technical Strategy:**
1. **The State:** Use a single \`state\` object (or \`useReducer\`) to track status: 'idle', 'pending', 'success', or 'error'.
2. **Automatic Execution:** (Optional) The hook can run as soon as defined, or provide an \`run\` function to trigger it later.
3. **Memoization:** Use \`useCallback\` and \`useEffect\` to ensure the async function only runs when specifically requested.`,
    codeExample: `function useAsync(asyncFn, immediate = true) {
  const [state, setState] = useState({ status: 'idle', data: null, error: null });

  const run = useCallback(async () => {
    setState({ status: 'pending', data: null, error: null });
    try {
      const response = await asyncFn();
      setState({ status: 'success', data: response, error: null });
    } catch (e) {
      setState({ status: 'error', data: null, error: e });
    }
  }, [asyncFn]);

  useEffect(() => {
    if (immediate) run();
  }, [immediate, run]);

  return { ...state, run };
}`,
    codeExplanation: `1. **Status-Based Logic:** Instead of \`if (loading)\`, you can now check \`if (status === 'pending')\`, which is more descriptive and less prone to "impossible states."
2. **useCallback:** We wrap \`run\` in a callback so that it can safely be used as a dependency in the \`useEffect\` without causing infinite loops.
3. **Abstraction:** Components no longer need to know *how* to handle a promise rejection. They just read the \`error\` object provided by the hook.
4. **Re-triggering:** Because we return the \`run\` function, a "Refresh" button in your UI can simply call \`run()\` to re-run the same logic.`,
    quiz: []
  },
  {
    id: "hands-on-13",
    title: "Hands-On: Persistent Theme Swapper",
    category: "Hands On QA",
    content: `**The Problem:** Your "Dark Mode" button works great, but every time the user refreshes the page, it resets to Light mode, blinding them in the middle of the night. You need to "remember" their choice.

**The Solution:** Combine **Context** with **localStorage**.

**Technical Strategy:**
1. **Lazy Initialization:** Read from \`localStorage\` inside the \`useState\` initializer to avoid a "flash" of the wrong theme.
2. **Side Effect Sync:** Use a \`useEffect\` to update the \`classList\` on the \`html\` tag and save the new value to \`localStorage\` whenever it changes.
3. **Global Provider:** Wrap your app so any button anywhere can check or change the theme.`,
    codeExample: `const useTheme = () => {
  // Use lazy initializer to read from storage ONLY on mount
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return { theme, toggle };
};`,
    codeExplanation: `1. **Lazy Initializer:** Passing a function to \`useState\` means React only runs that logic once when the component is born. This is where we grab the user's saved preference.
2. **The "Root" Strategy:** Instead of styling every component manually, we toggle a class on the \`<html>\` element. This allows us to use CSS variables like \`--bg-color: white\` in light mode and \`--bg-color: black\` in dark mode.
3. **localStorage.setItem:** This ensures the preference persists across sessions and browser restarts.
4. **Cleanup:** Note that we remove the *other* class before adding the current one to prevent \`<html class="dark light">\` bugs.`,
    quiz: []
  },
  {
    id: "hands-on-14",
    title: "Hands-On: Dynamic Breadcrumbs",
    category: "Hands On QA",
    content: `**The Problem:** You have a deeply nested app (e.g., /dashboard/projects/web-app/settings). You want to show a "Project > Settings > Security" path at the top so users can easily navigate back. Manually defining these for 50 pages is impossible.

**The Solution:** Generate them dynamically by "parsing" the current URL.

**Technical Strategy:**
1. **The Hook:** Use \`useLocation\` from React Router to get the current URL string.
2. **The Split:** Split the URL by \`/\`.
3. **The Accumulator:** As you loop through the pieces, you need to build the URL for each link (e.g., the second link should point to /part1/part2).`,
    codeExample: `const Breadcrumbs = () => {
  const { pathname } = useLocation();
  // "/products/iphone/specs" -> ["products", "iphone", "specs"]
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500">
      <Link to="/" className="hover:text-blue-500">Home</Link>
      
      {segments.map((seg, idx) => {
        // Build the URL cumulative path
        const url = \`/\${segments.slice(0, idx + 1).join('/')}\`;
        const isLast = idx === segments.length - 1;
        
        return (
          <React.Fragment key={url}>
            <span className="opacity-30">/</span>
            {isLast ? (
              <span className="font-semibold text-slate-900 border-b-2 border-blue-500">
                {seg.charAt(0).toUpperCase() + seg.slice(1)}
              </span>
            ) : (
              <Link to={url} className="hover:text-blue-500 capitalize">
                {seg.replace(/-/g, ' ')}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};`,
    codeExplanation: `1. **pathname.split('/'):** We turn the URL string into an array of "slugs."
2. **filter(Boolean):** This removes the empty strings caused by the leading slash in \`/home/dash\`.
3. **segments.slice(0, idx + 1).join('/'):** This is calculated inside the loop. For the 3rd item, it slices indices 0, 1, and 2, then joins them to create the full path back to that level.
4. **isLast Check:** We treat the current page (the last segment) differently—usually bolded and non-clickable.
5. **Capitalization:** We convert slugs like \`user-profile\` into \`User profile\` using basic string manipulation.`,
    quiz: []
  },
  {
    id: "hands-on-15",
    title: "Hands-On: useInterval (The 'Stale Closure' Fix)",
    category: "Hands On QA",
    content: `**The Problem:** If you put \`setInterval(() => console.log(count), 1000)\` inside a \`useEffect\`, the console will show \`0, 0, 0...\` forever, even if \`count\` increases. This is because the function was "closed" over the value of count when it was 0, and it never gets the update.

**The Solution:** Dan Abramov's famous **useInterval** hook. We use a \`ref\` to store the *latest* version of your callback.

**Technical Strategy:**
1. **The Callback Ref:** Store your function in a \`useRef\`.
2. **The Sync Effect:** Every render, update that ref to the current function.
3. **The Timer Effect:** Run \`setInterval\`, but instead of calling your function directly, call the one currently stored in the ref.`,
    codeExample: `function useInterval(callback, delay) {
  const savedCallback = useRef();

  // 1. Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // 2. Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => {
        savedCallback.current(); // Call the latest version!
      }, delay);
      
      return () => clearInterval(id);
    }
  }, [delay]);
}

// Usage:
useInterval(() => setCount(count + 1), 1000);`,
    codeExplanation: `1. **savedCallback Ref:** By using a ref, we can pull in the latest component variables (\`count\`, \`state\`, etc.) without needing to restart the \`setInterval\`.
2. **Sync Effect:** This runs every time the component re-renders. It keeps \`savedCallback.current\` fresh.
3. **Timer Effect:** This runs ONLY when the \`delay\` changes. It sets up the actual timer once.
4. **The Hand-off:** Because the timer calls a function that reads from a \`ref\`, it always gets the most up-to-date logic without the "stale closure" bug.`,
    quiz: []
  },
  {
    id: "hands-on-16",
    title: "Hands-On: Simple Error Boundary",
    category: "Hands On QA",
    content: `**The Problem:** JavaScript is "unforgiving." If a single component fails during render (e.g., trying to read \`user.name\` when \`user\` is null), the *entire* React application crashes and shows a white screen.

**The Solution:** An **Error Boundary**. It acts like a "Safe Room." If a component inside the boundary crashes, the boundary catches the error and shows a "nice" fallback UI instead of crashing the whole app.

**Technical Strategy:**
1. **The Class:** You MUST use a Class component (functional components cannot be error boundaries yet).
2. **The Flag:** Use \`hasError\` state to track if a crash happened.
3. **The Hook:** Use \`getDerivedStateFromError\` to update that flag automatically.`,
    codeExample: `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    // Log to Sentry/etc.
    console.error("Boundary Caught:", err, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 bg-red-50 border border-red-200 rounded-xl text-center">
          <h2 className="text-red-800 font-bold">Something went wrong.</h2>
          <button onClick={() => window.location.reload()} className="mt-4 text-sm underline">
             Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}`,
    codeExplanation: `1. **getDerivedStateFromError:** This is a static lifecycle method. It runs during the "render phase," so it's very fast. Its only job is to return the new state object.
2. **componentDidCatch:** This runs during the "commit phase." It's the perfect place to send error logs to your server so you know your users are having trouble.
3. **this.props.children:** This is crucial. If there is no error, the boundary just "transparently" renders whatever is inside it.
4. **Scope:** Usually, you place one large boundary at the root, and smaller ones around vulnerable parts like "Widgets" or "Graphs."`,
    quiz: []
  },
  {
    id: "hands-on-17",
    title: "Hands-On: Client-Side Paginated Table",
    category: "Hands On QA",
    content: `**The Problem:** You have an array of 5,000 customers. Rendering 5,000 table rows at once will freeze the browser for 2-3 seconds and make scrolling laggy. You need a way to show only 10 rows at a time while letting the user "flip through" the pages.

**The Solution:** Use **Derived State** and the \`slice()\` method.

**Technical Strategy:**
1. **The Navigation state:** Track only the current \`page\` number in state.
2. **The Logic:** Calculate the "Window" of data to show based on that page number and a fixed \`pageSize\`.
3. **The Guard:** Disable the "Next" button if the user is on the last possible page.`,
    codeExample: `const DataTable = ({ items }) => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  
  // Calculate the "slice" of data to show
  const currentItems = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  }, [items, page]);

  const totalPages = Math.ceil(items.length / pageSize);

  return (
    <div className="space-y-4">
      <table className="w-full border-collapse">
        <tbody className="divide-y divide-white/5">
          {currentItems.map(item => (
            <tr key={item.id} className="hover:bg-white/5">
              <td className="py-2">{item.name}</td>
              <td className="py-2 text-slate-400">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <button 
          onClick={() => setPage(p => p - 1)} 
          disabled={page === 1}
          className="px-4 py-2 border rounded disabled:opacity-30"
        >
          Previous
        </button>
        <span className="text-sm">Page {page} of {totalPages}</span>
        <button 
          onClick={() => setPage(p => p + 1)} 
          disabled={page === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-30"
        >
          Next
        </button>
      </div>
    </div>
  );
};`,
    codeExplanation: `1. **useMemo for Derived Data:** We don't store \`currentItems\` in state. Why? Because it can be calculated entirely from \`items\` and \`page\`. This avoids "Syncing State" bugs.
2. **page - 1:** Since arrays are 0-indexed, but people view pages starting at 1, we subtract 1 to get the correct \`startIndex\`.
3. **items.slice(start, end):** This is a non-destructive method. It returns a new array containing the 10 items we need without touching the original massive 5,000-item array.
4. **Math.ceil:** If you have 11 items and a page size of 10, you need 2 pages. \`Math.ceil\` ensures we round up to cover all data.`,
    quiz: []
  },
  {
    id: "hands-on-18",
    title: "Hands-On: useLocalStorage Hook",
    category: "Hands On QA",
    content: `**The Problem:** You want to synchronize a piece of component state with the browser's \`localStorage\` so it survives page reloads. Writing \`getItem\` and \`setItem\` manually everywhere is tedious and error-prone.

**The Solution:** A custom **useLocalStorage** hook that acts exactly like \`useState\` but handles the storage logic behind the scenes.

**Technical Strategy:**
1. **Initial Load:** Read from \`localStorage\` when initializing state.
2. **The Setter Wrapper:** Create a function that updates both the React state AND the storage.
3. **Type Safety:** Ensure the value is stringified before storing and parsed after reading.`,
    codeExample: `function useLocalStorage(key, initialValue) {
  // 1. Get from storage or return initialValue
  // Using a function for lazy initialization
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 2. Wrap the setter
  const setValue = (value) => {
    try {
      // Allow value to be a function (same as useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`,
    codeExplanation: `1. **JSON Parsing:** \`localStorage\` only stores strings. We use \`JSON.parse\` and \`JSON.stringify\` to allow storing complex objects and arrays safely.
2. **Functional Updates:** By checking \`value instanceof Function\`, we support patterns like \`setCount(prev => prev + 1)\`, making this a perfect drop-in replacement for standard \`useState\`.
3. **Lazy Initialization:** React only executes the data-fetching function once when the component mounts, which is efficient.
4. **Error Handling:** Wrapping storage calls in \`try/catch\` is important because some browsers (especially in incognito mode) might block \`localStorage\` access.`,
    quiz: []
  },
  {
    id: "hands-on-19",
    title: "Hands-On: Toast Alert System",
    category: "Hands On QA",
    content: `**The Problem:** When a user saves a form or gets an error, you want a little notification box to pop up in the corner, stay for 3 seconds, and then vanish. Doing this manually inside every component is incredibly messy.

**The Solution:** A **Toast Context**. You place a "manager" at the top of your app that handles an array of current notifications.

**Technical Strategy:**
1. **The Array State:** Keep an array of \`{ id, message, type }\` objects.
2. **The Trigger:** Components call \`showToast("Saved!")\`.
3. **The Auto-Dismiss:** When a toast is added, trigger a \`setTimeout\` that removes that specific ID from the array after a few seconds.`,
    codeExample: `const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now(); // Unique ID for this specific toast
    const newToast = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      
      {/* Toast UI Overlay */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-[9999]">
        {toasts.map(toast => (
          <div 
            key={toast.id}
            className="p-4 bg-slate-900 border border-white/10 rounded-xl shadow-2xl animate-in slide-in-from-right duration-300"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};`,
    codeExplanation: `1. **Queue Management:** We treat \`toasts\` as a queue. Adding a new one doesn't replace the old one; they stack on top of each other.
2. **The Cleanup Trap:** We capture the \`id\` inside the \`addToast\` function scope. This ensures that when the timeout fires 3 seconds later, it removes *exactly* the toast that triggered it, even if 5 others have been added since.
3. **Context for Availability:** By providing \`addToast\` via Context, any component (no matter how deep) can trigger a notification without needing to pass props.
4. **Fixed Positioning:** We use \`fixed\` and a high \`z-index\` to ensure the notifications float above the rest of the application content.`,
    quiz: []
  },
  {
    id: "hands-on-20",
    title: "Hands-On: Simple Virtual List",
    category: "Hands On QA",
    content: `**The Problem:** Rendering a list of 10,000 items (like a social media feed) is heavy. Even if the user can only see 10 items at a time, React is still working to maintain the other 9,990 in the DOM.

**The Solution:** **Virtualization** (also called "Windowing"). You only render the 10-15 items that are currently visible on the screen plus a small "buffer." As the user scrolls, you swap the content of those 15 items.

**Technical Strategy:**
1. **Container:** A fixed-height container with \`overflow-y: scroll\`.
2. **Inner Spacer:** A giant invisible \`div\` with the height of all 10,000 items (e.g., 10,000 * 50px = 500,000px). This makes the scrollbar look real.
3. **Calculation:** Use the \`scrollTop\` position to figure out which items should be visible right now.`,
    codeExample: `const VirtualList = ({ items, itemHeight, containerHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    items.length - 1,
    Math.floor((scrollTop + containerHeight) / itemHeight)
  );

  const visibleItems = items.slice(startIndex, endIndex + 1);
  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  return (
    <div 
      className="overflow-auto border"
      style={{ height: containerHeight }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
          {visibleItems.map(item => (
            <div key={item.id} style={{ height: itemHeight }}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};`,
    codeExplanation: `1. **Scrolling calculation:** By dividing \`scrollTop\` by \`itemHeight\`, we know exactly how many items have scrolled off the top of the screen.
2. **TotalHeight Div:** This is the "Illusion." It tells the browser "this container is huge," which makes the scrolls and scrollbars function normally.
3. **OffsetY:** If we just rendered the 10 items, they would always appear at the top of the container. We use \`translateY\` to push them down to the exact spot where the user expects to see them as they scroll.
4. **Performance:** The DOM count stays constant (around 10-15 elements) regardless of whether the list has 100 or 100,000 items.`,
    quiz: []
  },
  {
    id: "hands-on-21",
    title: "Hands-On: useMediaQuery Hook",
    category: "Hands On QA",
    content: `**The Problem:** You want to show a sidebar on desktop, but a bottom-tab bar on mobile. While you can do this with CSS (\`display: none\`), sometimes you need to completely change physical components or JS logic based on screen size (e.g., changing the number of items in a carousel).

**The Solution:** A custom **useMediaQuery** hook that taps into the browser's native \`matchMedia\` API.

**Technical Strategy:**
1. **The Native API:** Use \`window.matchMedia(query)\` to check the current state.
2. **The Listener:** Use \`addEventListener('change', ...)\` so your component re-renders the moment the user resizes their browser across a breakpoint.
3. **Cleanup:** Always remove the listener to prevent memory leaks and performance degradation.`,
    codeExample: `function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    // Initial check on mount
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    
    // Modern browsers use addEventListener
    media.addEventListener('change', listener);
    
    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

// Usage:
const isMobile = useMediaQuery("(max-width: 768px)");`,
    codeExplanation: `1. **Lazy Initialization:** We run \`matchMedia(query).matches\` inside the \`useState\` initializer so the first render already knows the correct screen size.
2. **Native Performance:** \`matchMedia\` is handled by the browser engine, making it much more efficient than listening to the \`window.resize\` event manually.
3. **Reactive Re-renders:** When the browser crosses the threshold (e.g., shrinks from 769px to 768px), the listener fires, \`setMatches\` is called, and your component updates instantly.
4. **Dependency Array:** If the \`query\` string itself changes, the \`useEffect\` will tear down the old listener and set up a new one for the new breakpoint.`,
    quiz: []
  },
  {
    id: "hands-on-22",
    title: "Hands-On: useIdle (Activity Detect)",
    category: "Hands On QA",
    content: `**The Problem:** You want to automatically log out a user or dim the screen if they haven't moved their mouse or typed anything for 5 minutes.

**The Solution:** The **useIdle** hook. It listens for common user actions and "kicks the can down the road" by resetting a timer.

**Technical Strategy:**
1. **Activity Events:** Listen for \`mousemove\`, \`keydown\`, \`mousedown\`, and \`touchstart\`.
2. **The Timer:** Use \`setTimeout\`. Every time an event fires, kill the old timer and start a fresh one.
3. **Throttle:** (Optional) Since mouse movement fires 100s of times a second, you should only respond to it occasionally to save CPU.`,
    codeExample: `function useIdle(timeout = 60000) { // Default 1 minute
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timerId;

    const handleActivity = () => {
      setIsIdle(false);
      clearTimeout(timerId); // Reset the clock
      timerId = setTimeout(() => setIsIdle(true), timeout);
    };

    // List of events that prove the user is "active"
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart'];
    
    events.forEach(e => window.addEventListener(e, handleActivity));
    
    // Initial start
    handleActivity();

    return () => {
      events.forEach(e => window.removeEventListener(e, handleActivity));
      clearTimeout(timerId);
    };
  }, [timeout]);

  return isIdle;
}`,
    codeExplanation: `1. **Universal Listeners:** We listen to mouse, keyboard, and touch events to ensure we support both desktop and mobile users.
2. **clearTimeout:** This is the core logic. Every time the user moves a pixel, we cancel the "Inactivity" timer and schedule a new one for 1 minute in the future.
3. **Cleanup:** Removing listeners and clearing the timeout on unmount is vital, otherwise, the timer might fire even after the component is gone.
4. **State Transition:** \`setIsIdle(false)\` happens on every move, and \`setIsIdle(true)\` happens only after 60 seconds of complete silence.`,
    quiz: []
  },
  {
    id: "hands-on-23",
    title: "Hands-On: Modern Copy-to-Clipboard",
    category: "Hands On QA",
    content: `**The Problem:** You want to provide a "Copy Link" button. Older methods involved creating invisible text areas and selecting them, which is hacky and breaks accessibility.

**The Solution:** The **Navigator Clipboard API**. It is asynchronous, secure, and built directly into modern browsers.

**Technical Strategy:**
1. **Async Logic:** \`writeText()\` returns a Promise.
2. **Feedback Loop:** The most important part of "Copy" features is the "Copied!" checkmark that appears for 2 seconds to confirm the action to the user.`,
    codeExample: `const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Reset feedback after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button 
      onClick={onCopy}
      className={\`flex items-center gap-2 px-3 py-1 rounded-md transition-all \${
        copied ? 'bg-green-500/20 text-green-500' : 'bg-white/5 hover:bg-white/10'
      }\`}
    >
      {copied ? (
        <><Check size={14} /> <span>Copied!</span></>
      ) : (
        <><Copy size={14} /> <span>Copy</span></>
      )}
    </button>
  );
};`,
    codeExplanation: `1. **navigator.clipboard:** This is the modern replacement for \`document.execCommand('copy')\`. It's cleaner and works in the background thread.
2. **Transient State:** The \`copied\` variable only lives for 2 seconds. This "Micro-Interaction" is essential for good UX.
3. **Error Handling:** Some browsers (specifically those not on HTTPS) might block the clipboard API. We use \`try/catch\` to handle those cases gracefully.
4. **Visual Cues:** We change the color, icon, and text when copied to provide multiple types of confirmation to the user.`,
    quiz: []
  },
  {
    id: "hands-on-24",
    title: "Hands-On: Intelligent Multi-Select Toggle",
    category: "Hands On QA",
    content: `**The Problem:** You have a list of categories (e.g., "React", "Vue", "Next.js"). The user needs to select multiple categories. You need a way to "Add if not there, Remove if already there" using a single function.

**The Solution:** Use the **Functional Update** pattern with \`includes()\` and \`filter()\`.

**Technical Strategy:**
1. **The State:** An array of IDs: \`["cat1", "cat3"]\`.
2. **The Logic:** If the ID exists in the array, remove it. If it doesn't exist, append it.`,
    codeExample: `const MultiSelect = ({ options }) => {
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected(prev => {
      // Is it already selected?
      if (prev.includes(id)) {
        // YES -> Remove it
        return prev.filter(item => item !== id);
      } else {
        // NO -> Add it
        return [...prev, id];
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt.id}
          onClick={() => toggle(opt.id)}
          className={\`px-4 py-2 rounded-full border transition-all \${
            selected.includes(opt.id) 
              ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
              : 'border-white/10 hover:border-white/30 text-slate-400'
          }\`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};`,
    codeExplanation: `1. **Array Spreading:** We never use \`push()\`. We use \`[...prev, id]\` to create a fresh array reference, which React needs to detect the change.
2. **The Filter method:** This is the most efficient way to remove a specific item from an array while maintaining immutability.
3. **Functional Update:** We pass a function to \`setSelected\`. This ensures that if the user clicks 5 categories very fast, we don't drop any of the updates.
4. **Visual feedback:** We use \`selected.includes(opt.id)\` to dynamically swap CSS classes, highlighting the user's active choices.`,
    quiz: []
  },
  {
    id: "hands-on-25",
    title: "Hands-On: Uncontrolled Form Pattern",
    category: "Hands On QA",
    content: `**The Problem:** In a massive form with 50 inputs, using "Controlled Components" (state for every keystroke) can cause performance lag because the entire form re-renders on every single letter typed.

**The Solution:** Use **Uncontrolled Components** with \`useRef\`. You let the DOM handle the typing, and you only "pull" the data when the user clicks Submit.

**Technical Strategy:**
1. **Ref Assignment:** Attach a \`useRef\` to each input.
2. **Submit Handling:** Access values directly via \`ref.current.value\`.
3. **Reset:** Use \`e.target.reset()\` to clear the form efficiently.`,
    codeExample: `const FastForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value
    };
    console.log("Submitting without a single state re-render:", data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input ref={nameRef} placeholder="Name" className="w-full bg-white/5 p-2 rounded" />
      <input ref={emailRef} placeholder="Email" className="w-full bg-white/5 p-2 rounded" />
      <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};`,
    codeExplanation: `1. **Zero Re-renders:** Notice there is no \`useState\` here. You can type 1,000 words into these fields and the \`FastForm\` component will render exactly ONCE.
2. **ref.current.value:** This reaches directly into the browser's native DOM element to retrieve whatever is currently typed.
3. **e.preventDefault():** Standard practice to prevent the browser from reloading the page on form submission.
4. **When to use:** Choose this for simple "Data Entry" forms. Use Controlled Components (state) only when you need instant validation (e.g., showing an error message *while* they type).`,
    quiz: []
  },
  {
    id: "hands-on-26",
    title: "Hands-On: useKeyPress (Global Shortcuts)",
    category: "Hands On QA",
    content: `**The Problem:** You want to add keyboard shortcuts to your app (e.g., hitting "K" to open search, or "Escape" to close a modal).

**The Solution:** A custom **useKeyPress** hook that attaches listeners to the global \`window\` object.

**Technical Strategy:**
1. **Events:** Listen for \`keydown\` and \`keyup\`.
2. **Key Checking:** Compare \`event.key\` against your target key.
3. **Immutability:** Use hooks to encapsulate the logic so you don't pollute your UI code with \`addEventListener\`.`,
    codeExample: `function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === targetKey) setKeyPressed(true);
    };

    const upHandler = ({ key }) => {
      if (key === targetKey) setKeyPressed(false);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return keyPressed;
}

// Usage:
// const isEnterPressed = useKeyPress("Enter");`,
    codeExplanation: `1. **Stateful Keys:** By returning a boolean, you can use this in your UI like this: \`{isPressed && <div className="highlight" />}\`.
2. **Global Scope:** Because we attach to \`window\`, these shortcuts work even if the user isn't clicking on a specific input field.
3. **Cleanup:** Removing the listeners is critical. If you don't, and the user navigates through 10 pages, you'll have 20 dead listeners slowing down the browser.
4. **Case Sensitivity:** Remember that \`event.key\` is case-sensitive (e.g., "Enter" vs "enter").`,
    quiz: []
  },
  {
    id: "hands-on-27",
    title: "Hands-On: Ref-Based Response Cache",
    category: "Hands On QA",
    content: `**The Problem:** You have a search input. When a user types "Apple", you fetch results. If they delete a letter and then type "Apple" again 2 seconds later, it's wasteful to fetch the same data again.

**The Solution:** An **In-Memory Cache** stored inside a \`useRef\`.

**Technical Strategy:**
1. **The Store:** Use \`useRef({})\` to store an object where keys are search terms and values are results.
2. **The Logic:** Check the cache BEFORE calling \`fetch\`.
3. **No Re-renders:** Updating a ref doesn't trigger a re-render, making it perfect for silent background caching.`,
    codeExample: `const SearchComponent = () => {
  const cache = useRef({}); // { "apple": [...results], "banana": [...] }
  const [results, setResults] = useState([]);

  const search = async (term) => {
    if (!term) return;

    // 1. Check Cache
    if (cache.current[term]) {
      console.log("Serving from cache:", term);
      setResults(cache.current[term]);
      return;
    }

    // 2. Fetch if not in cache
    const data = await fetchResults(term);
    
    // 3. Store in cache for next time
    cache.current[term] = data;
    setResults(data);
  };

  return (/* JSX here */);
};`,
    codeExplanation: `1. **Ref for Persistance:** Unlike a regular variable, a \`useRef\` persists for the entire life of the component. Unlike \`useState\`, updating it is "silent" and fast.
2. **Efficiency:** This pattern can reduce your API costs and server load by 30-50% for search-heavy applications.
3. **Instant UI:** Since the data is already in memory, cached results appear 0ms after the user types, making the app feel incredibly fast.
4. **Scope:** Note that this cache is local to this component. If the component unmounts, the cache is cleared. Use a Global Store or \`localStorage\` if you need long-term caching.`,
    quiz: []
  },
  {
    id: "hands-on-28",
    title: "Hands-On: Dynamic Schema Form",
    category: "Hands On QA",
    content: `**The Problem:** Your company has 100 different forms. Writing 100 unique \`.tsx\` files is a maintenance nightmare. If you need to change the styling of all inputs, you'd have to edit 100 files.

**The Solution:** The **Schema-Driven UI**. You define your form as a JSON object, and a single "Engine" component renders the UI based on that data.

**Technical Strategy:**
1. **The Schema:** An array of objects: \`{ type: "text", name: "username", label: "User Name" }\`.
2. **The Registry:** An object mapping types to components: \`{ text: TextInput, select: Dropdown }\`.
3. **The Loop:** Use \`.map()\` to iterate through the schema and pick the correct component from the registry.`,
    codeExample: `const FieldRegistry = {
  text: (props) => <input type="text" {...props} className="border p-2" />,
  email: (props) => <input type="email" {...props} className="border p-2" />,
  select: ({ options, ...props }) => (
    <select {...props} className="border p-2">
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  )
};

const DynamicForm = ({ schema }) => {
  return (
    <form className="flex flex-col gap-4">
      {schema.map(field => {
        const Component = FieldRegistry[field.type];
        return (
          <div key={field.name} className="flex flex-col">
            <label className="text-sm font-bold">{field.label}</label>
            <Component {...field.props} name={field.name} />
          </div>
        );
      })}
    </form>
  );
};`,
    codeExplanation: `1. **Single Point of Truth:** If you want to change how "text" inputs look across your entire company, you only edit one line in the \`FieldRegistry\`.
2. **Data-Driven:** You can literally fetch the \`schema\` from an API. This allows you to add new form fields to your app without ever deploying new code.
3. **Standardization:** It forces all forms to use the same validated components, ensuring a consistent design system.
4. **registry[type]:** This JavaScript pattern (Dynamic Property Access) is the "magic" that keeps the code clean and avoids long \`if/else\` or \`switch\` statements.`,
    quiz: []
  },
  {
    id: "hands-on-29",
    title: "Hands-On: CSS-Based Scroll Progress",
    category: "Hands On QA",
    content: `**The Problem:** Users reading long articles often lose track of how far they are from the bottom. A progress bar at the top provides great visual feedback.

**The Solution:** Calculate the scroll percentage in JavaScript and apply it to a fixed bar.

**Technical Strategy:**
1. **Scroll Listener:** Attach to the window.
2. **The Math:** \`Percentage = CurrentScroll / TotalScrollableHeight * 100\`.
3. **The Render:** Update a \`width\` style on a fixed \`div\`.`,
    codeExample: `const ReadingProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollPos / totalHeight) * 100;
      
      setWidth(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-[999]">
      <div 
        className="h-full bg-blue-500 transition-all duration-100 linear"
        style={{ width: \`\${width}%\` }}
      />
    </div>
  );
};`,
    codeExplanation: `1. **The Denominator:** We subtract \`window.innerHeight\` from \`scrollHeight\` because the bar should reach 100% when the *bottom* of the screen hits the end of the content, not when the top does.
2. **Fixed Positioning:** Use \`fixed top-0\` to ensure the bar stays glued to the top of the viewport even as the user scrolls.
3. **Transition Animation:** Adding \`transition-all duration-100\` makes the progress bar grow smoothly rather than jumping pixel-by-pixel.
4. **Performance Consideration:** For very complex sites, you might want to "Throttle" the scroll listener so it only runs every 10-20ms instead of on every single scroll tick.`,
    quiz: []
  },
  {
    id: "hands-on-30",
    title: "Hands-On: Fetch AbortController",
    category: "Hands On QA",
    content: `**The Problem:** A user is on a slow connection. They click "Profile", it starts loading. They get bored and click "Settings" 1 second later. The "Profile" fetch is still running in the background. When it finally finishes, it might try to update the state of a component that has already been destroyed (unmounted), causing memory leaks and errors.

**The Solution:** The **AbortController**. It allows you to "cancel" a web request that is already in progress.

**Technical Strategy:**
1. **The Instance:** Create \`new AbortController()\` inside \`useEffect\`.
2. **The Signal:** Pass \`controller.signal\` into the \`fetch\` call.
3. **The Abort:** Call \`controller.abort()\` in the effect's cleanup function.`,
    codeExample: `useEffect(() => {
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data", { 
        signal: controller.signal 
      });
      const data = await response.json();
      setData(data);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log("Fetch was cancelled safely");
      } else {
        setError(err);
      }
    }
  };

  fetchData();

  // Cleanup runs when component unmounts
  return () => controller.abort();
}, [url]);`,
    codeExplanation: `1. **Lifecycle Sync:** By calling \`.abort()\` in the return function, we guarantee that if a user leaves the page, the network request is killed immediately.
2. **AbortError:** When you cancel a fetch, the promise actually rejects. We check \`err.name === 'AbortError'\` to distinguish between a "User Cancelled" event and a "Server Failed" event.
3. **Parallel Loading:** If the \`url\` changes fast, this pattern ensures only the *latest* request actually updates the UI.
4. **Network Efficiency:** This stops the browser from wasting bandwidth on data the user will never see.`,
    quiz: []
  },
  {
    id: 'qa-optimistic-ui',
    title: 'Optimistic UI',
    category: 'Hands On QA',
    diagram: 'OptimisticUIDiagram',
    content: `**The Concept:** Optimistic UI is the art of "lying" to the user for the sake of speed. Instead of showing a spinner for 2 seconds while a "Like" goes to the server, you immediately turn the heart red and increment the count on the screen.

**Why it matters:** It makes your app feel like it has 0ms latency. The user feels in control and the app feels "snappy."

**Risk Management:** If the server actually fails (e.g. the user went offline), you must have a "Rollback" mechanism that reverts the heart to gray and shows a small error message.`,
    codeExample: `const [likes, setLikes] = useState(10);

const handleLike = async () => {
  // 1. Optimistic Update (Immediate)
  const previousLikes = likes;
  setLikes(prev => prev + 1);

  try {
    await api.post("/like");
    // Success: Do nothing, UI is already correct
  } catch (err) {
    // 2. Rollback (On Failure)
    setLikes(previousLikes);
    showToast("Failed to save like. Please try again.");
  }
};`,
    codeExplanation: `1. **Snapshotting:** We save \`previousLikes\` BEFORE we change anything. This is our "Safety Net."
2. **Immediate Feedback:** We call \`setLikes\` before the \`await api.post\` call. This is why the UI reacts instantly.
3. **Catch Block:** This is where the magic happens. By reverting the state to \`previousLikes\`, we "undo" the lie and tell the user the truth.
4. **Use Cases:** Best for non-critical, high-frequency actions like Likes, Favorites, or Moving items between folders.`,
    useCase: 'Creating lag-free experiences for likes, comments, or shopping cart updates.',
    quiz: []
  },
  {
    id: 'performance-prefetching',
    title: 'Pre-fetching & Data Prefetch',
    category: 'Performance',
    content: `**The Concept:** Pre-fetching is the process of loading data before the user even clicks the button. If you are 90% sure a user is going to click "View Details," why not start fetching that data while they are still just hovering over the row?

**The Solution:** Use **TanStack Query** (React Query) or a simple \`useEffect\` on hover.

**Benefits:**
1. Zero-delay transitions.
2. Background synchronization.
3. Improved perceived performance.`,
    codeExample: `const queryClient = useQueryClient();

const onMouseEnter = () => {
  // Prefetch the details for product 123
  queryClient.prefetchQuery({
    queryKey: ['product', 123],
    queryFn: () => getProduct(123),
  });
};

return (
  <button onMouseEnter={onMouseEnter}>
    View Product
  </button>
);`,
    codeExplanation: `1. **onMouseEnter:** This is our trigger. We start the work the moment the user's mouse touches the button.
2. **prefetchQuery:** This doesn't change the UI. It just fills the "Cache" in the background.
3. **Cache Hit:** When the user actually clicks 200ms later, the component calls \`useQuery\`. React Query sees the data is already in the cache and returns it instantly.
4. **When to use:** Use this for lists (prefetching details), multi-step forms, or frequently visited dashboard tabs.`,
    useCase: 'Preloading route-based chunks or API data for the next step in a sequence.',
    quiz: []
  },
  {
    id: 'performance-bundle-audit',
    title: 'Tree Shaking & Bundle Analysis',
    category: 'Performance',
    diagram: 'BundleAuditDiagram',
    content: `**The Problem:** Modern apps import dozens of libraries. If you import the entire \`lodash\` library just to use one function, you are forcing the user to download 100kb of code they don't need.

**The Solution:** **Tree Shaking**. It is a build-step process that "shakes" the dependency tree and removes any code that isn't actually being used.

**Verification:** Use a "Bundle Visualizer" to see exactly which files are making your app heavy.`,
    codeExample: `// ❌ WORSE: The whole library might be included
import _ from 'lodash';
const result = _.cloneDeep(obj);

// ✅ BETTER: Only the specific code is included
import { cloneDeep } from 'lodash-es';
const result = cloneDeep(obj);

// ✅ BEST: Use native JS where possible
const result = structuredClone(obj);`,
    codeExplanation: `1. **Named Imports:** By using \`{ cloneDeep }\`, you allow the bundler (Vite/Webpack) to see that you only need that specific piece of the library.
2. **lodash-es:** The "es" stands for ES Modules. Standard lodash uses CommonJS, which is much harder for tools to tree-shake effectively.
3. **Native APIs:** Modern browsers now support things like \`structuredClone\` or \`fetch\`, making large libraries like \`lodash\` or \`axios\` less necessary than they used to be.
4. **Bundle Analysis:** Tools like \`rollup-plugin-visualizer\` generate a "treemap" showing exactly which libraries are the "fat" in your application.`,
    useCase: 'Reducing the JS payload for users on slow mobile connections by eliminating unused legacy code or large dependencies.',
    quiz: []
  },
  {
    id: 'enterprise-server-db',
    title: 'Enterprise: Connecting to Servers & DBs',
    category: 'Advanced',
    content: `**The Architecture:** In modern React apps, you almost never connect directly to a database (like PostgreSQL or MongoDB) from the frontend for security reasons. Instead, you use a **Backend API Layer** (Node.js, Python, Go) or a **Serverless Function** as a bridge.

**Key Approaches:**
1. **REST APIs:** The gold standard. Using \`fetch\` or \`Axios\` to hit endpoints.
2. **GraphQL:** A single endpoint where the client asks for exactly the data it needs.
3. **WebSockets:** For real-time updates (like stock prices or chat).
4. **ORM/Query Builders:** On the server side (Prisma, Drizzle) to talk to the DB.

**The Workflow:**
React (Client) ↔ HTTP/JSON ↔ API Server ↔ SQL/NoSQL Database.`,
    codeExample: `// React Frontend (Fetching data)
const fetchData = async () => {
  const response = await fetch('https://api.myapp.com/v1/users');
  const data = await response.json();
  return data;
};

// Node.js Backend (Express + Prisma)
app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});`,
    codeExplanation: `1. **Security:** Secrets like your database password never leave the server.
2. **Standardization:** The API acts as a "Contract" between frontend and backend.
3. **Caching:** You can cache API responses at the server level (Redis) to speed up the UI.`,
    useCase: 'Building data-heavy applications that require persistent storage and secure data fetching.',
    quiz: []
  },
  {
    id: 'cloud-aws-azure',
    title: 'Cloud Integration: AWS & Azure',
    category: 'Advanced',
    content: `**The Concept:** Integrating directly with Cloud Service Providers allows your React app to leverage massive computing power, storage, and specialized services.

**AWS (Amazon Web Services):**
- **S3:** Hosting static assets or user-uploaded files.
- **DynamoDB:** A fast NoSQL database often used with AWS Lambda.
- **Cognito:** Managed user identity and authentication.
- **SDK:** Use \`@aws-sdk/client-s3\` specifically to minimize bundle size.

**Azure (Microsoft):**
- **Blob Storage:** Similar to S3, used for unstructured data.
- **CosmosDB:** A globally distributed database service.
- **Azure Functions:** Serverless compute triggered by HTTP requests.`,
    codeExample: `// AWS S3 Upload Example
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const uploadFile = async (file) => {
  const s3Client = new S3Client({ region: "us-east-1" });
  const command = new PutObjectCommand({
    Bucket: "my-app-uploads",
    Key: file.name,
    Body: file,
  });
  
  await s3Client.send(command);
};`,
    codeExplanation: `1. **Client-side SDKs:** Cloud providers offer JS SDKs that can run in the browser (if configured with safe permissions/signed URLs).
2. **Signed URLs:** For security, generate a "temporary" link on the backend and give it to React to perform the actual upload.
3. **Managed Services:** You don't have to manage servers; you just consume the service.`,
    useCase: 'Scalable file storage, enterprise-grade identity management, and serverless background tasks.',
    quiz: []
  },
  {
    id: 'enterprise-snowflake',
    title: 'Enterprise: Snowflake Data Connectivity',
    category: 'Advanced',
    content: `**The Challenge:** Snowflake is a Data Warehouse, typically containing millions of rows. It is high-latency for transactional tasks but immensely powerful for analytics.

**The Strategy:**
Never query Snowflake directly from React. Use a **Node.js Proxy** with a caching layer (like Redis).
1. React requests an Analytics report.
2. Node.js backend receives the request, checks the cache.
3. If cache-miss, Node.js uses \`snowflake-sdk\` to query the warehouse.
4. Data is transformed and returned to React in a UI-friendly format.`,
    codeExample: `// Node.js Backend Query
const snowflake = require('snowflake-sdk');
const connection = snowflake.createConnection({ ...config });

connection.execute({
  sqlText: 'SELECT * FROM SALES_DATA WHERE REGION = ?',
  binds: ['North America'],
  complete: (err, stmt, rows) => {
     res.json(rows);
  }
});`,
    codeExplanation: `1. **Compute Costs:** Every query cost money. Caching is essential to keep Snowflake bills low.
2. **Async Polling:** Large queries might take 30+ seconds. Use a "Job ID" system where React polls for the result.
3. **Data Transformation:** Snowflake returns raw rows; the backend should format them for Recharts or D3 before sending to the client.`,
    useCase: 'Building Enterprise dashboards that show complex financial models or massive historical data.',
    quiz: []
  },
  {
    id: 'auth-manual-jwt',
    title: 'Authentication: Manual JWT & Tokens',
    category: 'Advanced',
    content: `**How it Works:** 
1. **Login:** User sends email/password to the server.
2. **Verification:** Server checks the DB. If correct, it generates a **JWT (JSON Web Token)**.
3. **Storage:** The server sends the JWT back. React stores it in **Secure HttpOnly Cookies** (recommended) or **LocalStorage** (less secure).
4. **Requests:** For every future API call, React sends the token in the \`Authorization\` header.

**Why JWT?** It is "Stateless." The server doesn't need to look up a session in the DB for every request; it just verifies the signature on the token.`,
    codeExample: `// Attaching Token to Header
const fetchWithAuth = async (url) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Content-Type': 'application/json'
    }
  });
};`,
    codeExplanation: `1. **Statelessness:** Great for horizontal scaling (server A can verify a token created by server B).
2. **Expiration:** Tokens usually expire quickly (e.g., 15 mins).
3. **Refresh Tokens:** Use a separate "Refresh Token" to get a new access token without making the user log in again.`,
    useCase: 'Standard authentication for custom applications without expensive third-party providers.',
    quiz: []
  },
  {
    id: 'auth-sso-microsoft',
    title: 'Authentication: SSO with Microsoft (MSAL)',
    category: 'Advanced',
    content: `**The Protocol:** Uses **OpenID Connect (OIDC)** and **OAuth 2.0**.
**The Tool:** **Microsoft Authentication Library (MSAL.js)**.

**Implementation Steps:**
1. **Registration:** Create an app in the Azure Portal (Entra ID). Get a \`client_id\` and \`tenant_id\`.
2. **Configuration:** Initialize MSAL with these IDs in your React code.
3. **Login Call:** Call \`loginPopup()\` or \`loginRedirect()\`.
4. **Token Handling:** Microsoft returns an \`idToken\` and an \`accessToken\`.`,
    codeExample: `// Microsoft MSAL Setup
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "your-id-here",
        authority: "https://login.microsoftonline.com/common"
    }
};

const msalInstance = new PublicClientApplication(msalConfig);

const handleLogin = async () => {
    try {
        const response = await msalInstance.loginPopup({
            scopes: ["User.Read"]
        });
        console.log("Logged in:", response.account);
    } catch (e) {
        console.error(e);
    }
};`,
    codeExplanation: `1. **Scopes:** You ask for specific permissions (e.g., "Calendar.Read", "User.Read").
2. **Internal Users:** Allows employees to log in using their work email without creating a new password.
3. **Single Sign-On:** If they are already logged into Outlook/Office, they won't even see the login box.`,
    useCase: 'Corporate applications where employees must use their official corporate credentials.',
    quiz: []
  },
  {
    id: 'auth-mfa-security',
    title: 'Authentication: 2FA & Multi-Factor',
    category: 'Advanced',
    content: `**The "Something You Know" + "Something You Have" Rule.**
Multi-Factor Authentication (MFA) adds a critical layer of defense. Even if a password is stolen, the attacker can't get in without the second factor.

**Common Types:**
1. **MFA with Emails/SMS:** Server sends a 6-digit code. User enters it.
2. **TOTP (Authenticator Apps):** Google Authenticator or Authy. A code that changes every 30 seconds. Uses a shared secret key.
3. **WebAuthn (Biometrics):** Fingerprint or FaceID via the browser's \`credentials\` API.

**Implementation Logic:**
Password Success ↔ Request MFA ↔ Verify MFA Token ↔ Final Session Token.`,
    codeExample: `// Verifying a TOTP Code (Node.js example)
import { speakEasy } from 'speakeasy';

const verifyMfa = (userSecret, userCode) => {
  const verified = speakEasy.totp.verify({
    secret: userSecret,
    encoding: 'base32',
    token: userCode
  });
  
  if (verified) {
    return generateFinalToken();
  }
};`,
    codeExplanation: `1. **Step-up Auth:** You can trigger MFA only for sensitive actions (like changing a bank account) rather than on every login.
2. **Recovery Codes:** Always provide users with 5-10 "Recovery Codes" if they lose their phone.
3. **Time Sync:** TOTP relies on the server and phone having the same time. Accuracy is critical.`,
    useCase: 'Financial apps, admin dashboards, and any system handling sensitive personal data.',
    quiz: []
  },
  {
    id: 'notes-quick-revision',
    title: 'Notes: Quick Revision Guide',
    category: 'Notes',
    diagrams: [
      'RenderingDiagram',
      'HookLifecycleDiagram',
      'StateFlowDiagram',
      'VirtualDOMDiagram'
    ],
    content: `# Quick Revision Guide (Interview Prep)
This section provides a high-level summary of every major topic, concept, and hook. Use it for a 10-minute refresher before a technical interview.

## 🟢 1. Core Principles
- **JSX:** XML-like syntax for JS. It’s "syntactic sugar" for \`React.createElement\`.
- **VDOM:** A lightweight replica of the real DOM. React updates the VDOM first, diffs it, and only "patches" the real DOM where needed (Reconciliation).
- **One-Way Data Flow:** Data always travels from Parent -> Child via props.
- **Keys:** A unique string given to list items so React can track which specific element was added/removed/moved.

## 🔵 2. Hooks Recap
- **useState:** The primary tool for local reactivity.
- **useEffect:** The "Swiss Army Knife" for side effects (APIs, Subscriptions). Always cleanup your listeners in the return function!
- **useRef:** Accesses DOM nodes safely. Also used to store values that *don't* need to trigger re-renders.
- **useMemo:** Memoizes a *value* (result of a calculation).
- **useCallback:** Memoizes a *function* reference (crucial for passing to \`React.memo\` children).
- **useContext:** Solves "Prop Drilling" by sharing data globally across a component tree.

## 🟡 3. Performance Optimization
- **React.memo:** Prevents a component from re-rendering if its props are identical.
- **Code Splitting:** Using \`React.lazy()\` and \`Suspense\` to load only the code needed for the current screen.
- **Transition API:** (\`useTransition\`) Allows you to mark updates as "non-urgent" so the UI stays responsive during heavy renders.
- **Virtualization:** Rendering only the 10 items visible on screen instead of 10,000.

## 🟠 4. State Management Patterns
- **Lifting State Up:** Moving state to the nearest common parent.
- **Compound Components:** Parent/Child collaboration (e.g., \`<Tabs>\` and \`<Tab />\`).
- **Context API:** Built-in solution for low-frequency updates (Themes, Auth).
- **Zustand / Redux:** External libraries for high-frequency or extremely complex global state.

## 🟣 5. Testing & Security
- **Unit Testing:** Focus on component logic using Vitest/Jest and React Testing Library.
- **XSS Protection:** React automatically escapes all strings displayed in the UI to prevent injection attacks.
- **Accessibility (a11y):** Always use semantic HTML (\`<button>\` not \`<div>\`) and \`aria-\` labels.`,
    useCase: 'Quickly reviewing everything from basics to advanced architecture before a major technical event.',
    quiz: []
  },
];

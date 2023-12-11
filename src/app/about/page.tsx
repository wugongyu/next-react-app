const About: React.FC<{}> = () => {
return (
  <section>
    <h2>Layout Example (About)</h2>
    <p>
      If you only have one layout for your entire application,
      you can set the layout by the root layout.tsx file in app folder.
      If you need multiple layouts, you can set the layout by each layout.tsx file in nested page folder.
    </p>
    <p>
      When navigating between pages, we want to persist page state (input
      values, scroll position, etc.) for a Single-Page Application (SPA)
      experience.
    </p>
    <p>
      This layout pattern will allow for state persistence because the React
      component tree is persisted between page transitions. To preserve state,
      we need to prevent the React component tree from being discarded between
      page transitions.
    </p>
    <h3>Try It Out</h3>
    <p>
      To visualize this, try tying in the search input in the{' '}
      <code>Sidebar</code> and then changing routes. You&apos;ll notice the
      input state is persisted.
    </p>
  </section>
);
};

export default About;

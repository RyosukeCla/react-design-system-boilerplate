import type { FunctionalComponent } from 'preact';

type AppProps = {
  Component: FunctionalComponent;
};

function App({ Component }: AppProps) {
  return <Component />;
}

App.displayName = 'VitebookApp';

export default App;

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';

import { useState } from 'react';

function App() {
  const [selectdTopic, setSelectedTopic] = useState(false);

  function handleSelect(selectdButton) {
    // selectedButton => 'components', 'JSX', 'Props', 'State'
    setSelectedTopic(selectdButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectdTopic === 'components'} onSelect={() => handleSelect('components')}>
              Component
            </TabButton>
            <TabButton isSelected={selectdTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectdTopic === 'props'} onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectdTopic === 'state'} onSelect={() => handleSelect('state')}>
              State
            </TabButton>
          </menu>
          {!selectdTopic ? <p>Please, select any topic</p> : null}
          {selectdTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectdTopic].title}</h3>
              <p>{EXAMPLES[selectdTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectdTopic].code}</code>
              </pre>{' '}
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;

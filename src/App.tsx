import './App.css';

function App() {
  const progressbar = document.querySelector('.progressbar');

  function enableProgressbar() {
    progressbar?.setAttribute('role', 'progressbar');
    progressbar?.setAttribute('aria-valuenow', 0);
    progressbar?.setAttribute('aria-live', 'polite');
  }

  enableProgressbar();

  return (
    <>
      <h1>Front-End challenge: Progress Indicator</h1>
      <p>
        My solution to the{' '}
        <a href='https://piccalil.li/blog/challenge-009-progress-indicator/'>
          progress indicator challenge
        </a>
        , as part of the{' '}
        <a href='https://piccalil.li/category/front-end-challenges-club/'>
          Front-End Challenges Club on Piccalilli
        </a>
        .
      </p>

      <div className='progressbar'>
        <span>
          This <em>really awesome feature</em> requires JS 😢
        </span>
      </div>

      <div className='testing-ground'>
        <h2>Testing ground</h2>
        <button data-progress='0'>0%</button>
        <button data-progress='25'>25%</button>
        <button data-progress='57'>57%</button>
        <button data-progress='82'>82%</button>
        <button data-progress='100'>100%</button>
        <button data-progress='fake-upload'>
          Simulate a thing that takes a long time to do
        </button>
      </div>
    </>
  );
}

export default App;

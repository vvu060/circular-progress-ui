import './App.css';

function App() {
  const progressbar: HTMLDivElement | null =
    document.querySelector('.progressbar');
  let progress = 0;
  const interval = 0;

  function enableProgressbar() {
    progressbar?.setAttribute('role', 'progressbar');
    progressbar?.setAttribute('aria-valuenow', progress);
    progressbar?.setAttribute('aria-live', 'polite');
  }

  enableProgressbar();

  //for simulation
  const testingGround = document.querySelector('.testing-ground');

  testingGround?.addEventListener('click', (e) => {
    if (!e.target?.closest('button')) return;

    progress = e.target.dataset.progress;
    simulateProgress(progress);
  });

  function simulateProgress(newProgressValue: string | number) {
    clearInterval(interval);
    if (newProgressValue === 'fake-upload') {
      simulateUpload();
    } else {
      updateProgress(newProgressValue);
    }
  }

  function updateProgress(progress: number | string) {
    progressbar?.setAttribute('aria-valuenow', progress);
    progressbar?.style.setProperty('--progress', progress + '%');
  }

  function simulateUpload() {
    // aria-busy prevents it from announcing every change as it keeps updating the progress
    // make sure to set it false once the progress is finished
    progressbar?.setAttribute('aria-busy', 'true');
    let progress = 0;
    updateProgress(progress);

    const intervalTimer = setInterval(() => {
      progress += 5;
      updateProgress(progress);
      if (progress === 100) {
        // probably want something to catch errros and also have this set to false then too
        progressbar?.setAttribute('aria-busy', 'false');
        clearInterval(intervalTimer);
      }
    }, 500);
  }

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

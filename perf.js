const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});

obs.observe({ entryTypes: ['measure'] });

performance.mark('A');
setImmediate(async () => {
  await sleep(1000);
  performance.mark('B');
  performance.measure('A to B', 'A', 'B');
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

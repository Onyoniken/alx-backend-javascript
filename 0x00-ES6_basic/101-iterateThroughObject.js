export default function iterateThroughObject(reportWithIterator) {
  let output = '';
  const entries = Object.entries(reportWithIterator);
  const length = entries.length;

  for (const [index, [key, item]] of entries.entries()) {
    output += `${item}`;

    if (parseInt(index) !== length - 1) {
      output += ' | ';
    }
  }

  return output;
}

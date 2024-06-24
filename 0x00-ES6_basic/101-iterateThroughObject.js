export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  for (const [index, item] of reportWithIterator.entries()) {
      output += `${item}`;

      if (parseInt(index) !== reportWithIterator.length - 1) {
            output += ' | ';
          }
    }

  return output;
}

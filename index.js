var currTicket = 0;

const takeANumber = currLine => {
  currLine.push(currTicket + 1);
  return `Welcome, You are number ${currTicket} in line.`;
};

const nowServing = currLine => {
  if (currLine.length) {
    const firstCust = currLine.shift();
    return `Currently serving ${firstCust}.`;
  } else {
  return "There is nobody waiting to be served!";
  }
};

const currentLine = currLine => {
  if (!currLine.length) return "The line is currently empty.";
  let line = 'The line is currently: ';
  for (let i = 0; i < currLine.length -1; ++i) {
    line += `${i + 1}. ${currLine[i]}, `;
  }
  line += `${currLine.length}. ${currLine[currLine.length - 1]}`;
  
  return line;
};
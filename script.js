const output = document.getElementById('output');

// Simulated typing text targeting a fictional institutional website
const commands = [
  "Initializing targeted attack on: www.government-portal.org...",
  "Running reconnaissance on www.government-portal.org...",
  "Discovered potential vulnerabilities:",
  "  - Outdated SSL Certificate (expires in 2 days)",
  "  - Open ports: 22, 80, 443",
  "Establishing connection to government database...",
  "Attempting SQL injection on endpoint /api/v1/citizen-records...",
  "Injection successful! Accessing citizen database...",
  "Extracting sensitive data: [Names, Social Security Numbers, Addresses]...",
  "Scanning internal network for additional entry points...",
  "Breaching secure server at 192.168.1.254...",
  "Downloading classified documents from /secure/internal/docs...",
  "Detected counter-intrusion measures! Deploying anti-trace protocols...",
  "Wiping all logs from www.government-portal.org...",
  "Exfiltration complete. Data saved to local server.",
  "Operation successful. Disconnecting from target."
];

// Typewriter effect
let i = 0;
let charIndex = 0;

function typeCommand() {
  if (i < commands.length) {
    if (charIndex < commands[i].length) {
      output.innerHTML += commands[i][charIndex];
      charIndex++;
      setTimeout(typeCommand, Math.random() * 100 + 50); // Random typing speed
    } else {
      output.innerHTML += "\n";
      charIndex = 0;
      i++;
      setTimeout(typeCommand, 800); // Pause between commands
    }
  } else {
    simulateGlitch();
  }
}

// Glitch effect after typing
function simulateGlitch() {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * output.innerHTML.length);
    const textArray = output.innerHTML.split('');
    textArray[randomIndex] = Math.random() > 0.5 ? '#' : '*';
    output.innerHTML = textArray.join('');
  }, 100);
}

// Start typing
typeCommand();

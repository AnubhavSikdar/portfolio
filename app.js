document.addEventListener("DOMContentLoaded", () => {
    // 1. Production High Precision ISO Timestamp Stream Engine (IST Native)
    const updateClock = () => {
        const now = new Date();

        // Use native locale string to enforce Asia/Kolkata timezone and clean up layout
        const formatter = new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        });

        const formattedParts = formatter.format(now).replace(', ', ' ');
        document.getElementById("sys-clock").innerText = `SYS_TIME: [${formattedParts}] // METRICS_OK`;
    };
    setInterval(updateClock, 1000);
    updateClock();
});

// 2. High Density Anchor Jumper Matrix Tracking
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => {
            l.classList.remove("bg-black", "text-white");
            l.classList.add("bg-white", "text-black");
        });
        link.classList.remove("bg-white", "text-black");
        link.classList.add("bg-black", "text-white");

        const targetSection = link.getAttribute("data-target");
        const element = document.getElementById(`section-${targetSection}`);
        if (element) {
            element.scrollIntoView({ behavior: "auto", block: "start" });
        }
    });
});

// 3. Modal Node Control Toggle Logic
const modalTerminal = document.getElementById("modal-terminal");
const modalArch = document.getElementById("modal-arch");
const terminalLog = document.getElementById("terminal-log");
const terminalInput = document.getElementById("terminal-input");

document.getElementById("btn-engage").addEventListener("click", () => modalTerminal.classList.remove("hidden"));
document.getElementById("close-terminal").addEventListener("click", () => modalTerminal.classList.add("hidden"));

document.getElementById("btn-arch").addEventListener("click", () => modalArch.classList.remove("hidden"));
document.getElementById("close-arch").addEventListener("click", () => modalArch.classList.add("hidden"));

// 4. Client Terminal Action Control Pipeline
terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && terminalInput.value.trim() !== "") {
        const cmd = terminalInput.value.trim();
        const responseRow = document.createElement("div");
        responseRow.className = "text-yellow-300 font-bold";

        if (cmd.toLowerCase() === "help") {
            responseRow.innerText = ">> System Sockets: 'status', 'clear', or type an unchecked message string to queue core notifications.";
        } else if (cmd.toLowerCase() === "status") {
            responseRow.innerText = ">> TELEMETRY LAYER: 99.9966% WORKFLOW MATCH SYSTEM ACTIVE. LOCAL MODELS INGESTION OPEN.";
        } else if (cmd.toLowerCase() === "clear") {
            terminalLog.innerHTML = "<div>[SYS] Environment metrics clear. Awaiting pipeline socket signals.</div>";
            terminalInput.value = "";
            return;
        } else {
            responseRow.innerText = `>> DATA INGESTION PIPELINE MATCHED: "${cmd}". Serialized record out-queued directly to anubhavsikdar.ai@gmail.com tracking queue.`;
        }

        const echoRow = document.createElement("div");
        echoRow.innerText = `operator@sikdar_tower:~# ${cmd}`;

        terminalLog.appendChild(echoRow);
        terminalLog.appendChild(responseRow);
        terminalInput.value = "";
        terminalLog.scrollTop = terminalLog.scrollHeight;
    }
});

// 5. DATA LOG CONSOLE STREAM ENGINE (Simulates actual background automation processes)
const logConsole = document.getElementById("live-router-stream");
const sampleLogs = [
    "INBOUND_SIGNAL :: Routing warehouse inventory delta matrices to local database arrays...",
    "OLLAMA_CORE :: Executing localized raw text classification metrics parsing routine...",
    "OPENROUTER_API :: Auditing transaction records integrity boundaries // Status: Secure...",
    "CLOUDFLARE_TUNNEL :: Multiplexed endpoint traffic routing verified safely // Port 6767 checked...",
    "N8N_WORKFLOW :: Automated processing sequence triggered for ~25 Crore AUM non-performing asset matrices...",
    "SYS_MONITOR :: Lean Six Sigma optimization delta running error calculations... [Defects: 0]",
    "LIVEKIT_AGENT :: Active real-time audio pipeline synchronization parameters configured...",
    "DOCKER_COMPOSE :: Cluster containers balance allocation verified healthy across local Ubuntu environment..."
];

const generateLiveLogs = () => {
    if (!logConsole) return;
    const timestamp = new Date().toISOString().substring(11, 19);
    const randomLog = sampleLogs[Math.floor(Math.random() * sampleLogs.length)];
    const logRow = document.createElement("div");

    if (randomLog.includes("Secure") || randomLog.includes("verified")) {
        logRow.className = "text-yellow-300 font-bold";
    } else if (randomLog.includes("Delta") || randomLog.includes("Executing")) {
        logRow.className = "text-white/60";
    }

    logRow.innerText = `[${timestamp}] ${randomLog}`;
    logConsole.appendChild(logRow);

    if (logConsole.children.length > 20) {
        logConsole.removeChild(logConsole.firstChild);
    }
    logConsole.scrollTop = logConsole.scrollHeight;
};

// Initialize immediate logs stack on payload arrival
for (let i = 0; i < 5; i++) { generateLiveLogs(); }
setInterval(generateLiveLogs, 2800);
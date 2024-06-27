const header = document.querySelector('h1')
const app = document.getElementById('app')
const ddMenu = document.querySelector('#ddMenu')
const sandwitch = document.querySelectorAll('svg')
const html = document.documentElement

const toggleTheme = () => {
    const isDarkMode = html.classList.contains('dark');
    html.classList.toggle('dark');
};
const setView = (v) => {
    header.innerText = v
    toggleMenu(true)

    if (v === 'Calculator') {
        renderCalculator()
    } else if (v === 'About') {
        renderAbout()
    } else if (v === 'Contact') {
        renderContact()
    }
}

const toggleMenu = (hide) => {
    if (!hide) {
        ddMenu.classList.toggle('hidden')
        document.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden')
        })
    } else {
        ddMenu.classList.add('hidden')
        document.querySelectorAll('svg')[0].classList.remove('hidden')
        document.querySelectorAll('svg')[1].classList.add('hidden')
    }
}

const addRow = (container, content) => {
    const row = `<div class='grid grid-cols-5 gap-2'>${content}</div>`
    container.insertAdjacentHTML('beforeend', row)
}

const addMonitor = (container, text) => {
    const t = text ?? ''
    const monitor = `
    <div id='monitor' class="bg-white dark:bg-gray-800 border-4 border-blue-400 dark:border-[#051227] h-20 flex items-center col-span-5 text-blue-800 dark:text-white p-2 rounded-lg mb-2 font-bold text-4xl">
        ${t}
    </div>`;
    container.insertAdjacentHTML('beforeend', monitor)
}

const button = (text) => {
    const c = text === 'calculate' ? 'col-span-4' : ''
    return `<div class='bg-blue-400 dark:bg-[#051227] hover:bg-blue-600 dark:hover:bg-[#091f3a] text-white ${c} py-1 rounded-md text-center text-lg font-bold cursor-pointer d-btn'>${text}</div>`
}

const addButtons = (container, nums) => {
    const btnHTML = nums.map((n) => button(n)).join('')
    addRow(container, btnHTML)
}

const click = (event) => {
    const monitor = document.getElementById('monitor')
    const bac = monitor.innerText.trim()
    const a = event.target.innerText
    console.log(a)
    if (a === 'clear') {
        monitor.innerText = ''
    } else if (a === 'calculate') {
        monitor.innerText = bac + '=' + eval(bac)
    } else {
        monitor.innerText += a
    }
}

const renderCalculator = () => {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '**', 'calculate', 'clear']
    app.innerHTML = ''
    addMonitor(app)
    addButtons(app, labels)
    const buttons = document.querySelectorAll('.d-btn')
    buttons.forEach((el) => el.addEventListener('click', click))
}

const renderAbout = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for About</div>'
}

const renderContact = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Contact</div>'
}

const renderMenu = () => {
    // Initialize the menu state
    const menuItems = [
        { name: 'Calculator', action: () => setView('Calculator') },
        { name: 'About', action: () => setView('About') },
        { name: 'Contact', action: () => setView('Contact') }
    ];

    const ddMenu = document.querySelector('#ddMenu');
    ddMenu.innerHTML = '';

    // Populate the dropdown menu for mobile
    menuItems.forEach(item => {
        const button = document.createElement('button');
        button.className = 'block py-1 px-2';
        button.innerText = item.name;
        button.onclick = item.action;
        ddMenu.appendChild(button);
    });

    // Populate the navigation bar for larger screens
    const navBar = document.querySelector('.sm\\:flex');
    navBar.innerHTML = '';

    menuItems.forEach(item => {
        const button = document.createElement('button');
        button.innerText = item.name;
        button.onclick = item.action;
        navBar.appendChild(button);
    });

    // Add event listeners to the toggle buttons
    document.querySelectorAll('.block.sm\\:hidden').forEach(button => {
        button.addEventListener('click', () => toggleMenu());
    });
};

const renderThemeToggle = () => {
    const toggleButtons = [
        { className: 'dark:hidden block', text: 'Dark', action: toggle },
        { className: 'hidden dark:block', text: 'Light', action: toggle }
    ];

    const container = document.getElementById('themeToggleContainer');
    container.innerHTML = '';

    toggleButtons.forEach(buttonInfo => {
        const button = document.createElement('button');
        button.className = buttonInfo.className;
        button.innerText = buttonInfo.text;
        button.onclick = buttonInfo.action;
        container.appendChild(button);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    setView('Calculator'); // Set the default view to Calculator
    renderMenu();
    renderThemeToggle();
});

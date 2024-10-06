const fundTableBody = document.getElementById('fundTableBody');

let fundBalance = 0;

const data = [
    { date: `2021-12-31`, time: "16:30", projectName: 'As Much Money as there was in 2021', cost: +1000 },
    { date: `2022-01-04`, time: "13:15", projectName: 'Rebuild room', cost: -200 },
    { date: `2022-01-18`, time: "18:00", projectName: 'Wall Setup', cost: -500 },
    { date: `2022-01-23`, time: "10:30", projectName: 'Return Of Rebuild Room Project 2022-01-04', cost: +50 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return Of Wall Setup Project 2022-01-18', cost: +100 },
];

data.forEach(item => {
    const row = document.createElement('tr');
    fundBalance += item.cost;
    row.innerHTML = `
        <td>${item.date}<br>${item.time}</td>
        <td><a href="${item.projectName}">${item.projectName}</a></td>
        <td>${item.cost}</td>
        <td>${fundBalance}</td>
    `;
    fundTableBody.prepend(row);
});
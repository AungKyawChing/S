const fundTableBody = document.getElementById('fundTableBody');

let fundBalance = 0;

const data = [
    { date: `2022-01-18`, time: "16:30", projectName: 'Total Budget', cost: +500 },
    { date: `2022-01-20`, time: "13:15", projectName: 'XYZ', cost: -250 },
    { date: `2022-01-22`, time: "18:00", projectName: 'XYZ', cost: +50 },
    { date: `2022-01-28`, time: "18:30", projectName: 'XYZ', cost: -200 },
    { date: `2022-01-29`, time: "09:30", projectName: 'Return To Fund', cost: -100 },
];

data.forEach(item => {
    const row = document.createElement('tr');
    fundBalance += item.cost;
    row.innerHTML = `
        <td>${item.date}<br>${item.time}</td>
        <td>${item.projectName}</td>
        <td>${item.cost}</td>
        <td>${fundBalance}</td>
    `;
    fundTableBody.prepend(row);
});

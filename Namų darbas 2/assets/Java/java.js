let lampCounter = 0;
let totalPowerConsumption = 0;

function changeBackground(button) {
    const imageUrls = [
        'assets/Photo/Lempa1.png',
        'assets/Photo/Lempa2.png',
    ];

    let currentIndex = parseInt(button.getAttribute('data-index')) || 0;
    const nextIndex = (currentIndex + 1) % imageUrls.length;

    button.style.backgroundImage = `url('${imageUrls[nextIndex]}')`;
    button.setAttribute('data-index', nextIndex);

    // Update power consumption based on the lamp state
    if (nextIndex === 1) {
        lampCounter++;
        totalPowerConsumption += 200; // Assuming each lamp consumes 200W
    } else {
        lampCounter--;
        totalPowerConsumption -= 200;
    }

    // Update the lamp counter and power consumption display
    document.getElementById('lamp-counter').textContent = `Įjungtos lempos: ${lampCounter} naudojami ${totalPowerConsumption}W`;

   // Calculate and display the cost
   const costPerHour = 0.22; // Change this to your electricity cost per kWh
   const totalCostPerSecond = (totalPowerConsumption / 1000) * costPerHour; // Convert W to kW

   // Display the cost in the 'cost-counter' element
   document.getElementById('cost-counter').textContent = `Kaina: ${totalCostPerSecond.toFixed(4)} € per valandą`;
}

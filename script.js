document.addEventListener("DOMContentLoaded", function() {
   
    function fetchData() {
       
        const mockData = {
            temperature: 34.70,
            humidity: 68.0
        };  
        document.getElementById("temperature").textContent = mockData.temperature.toFixed(1);
        document.getElementById("humidity").textContent = mockData.humidity.toFixed(1);
    }
    fetchData(); 
    setInterval(fetchData, 5000);
});
